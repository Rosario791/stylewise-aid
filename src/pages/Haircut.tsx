
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import * as faceapi from '@vladmandic/face-api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import HairModel from '../components/HairModel';
import HaircutCard from '../components/HaircutCard';

const hairStyles = [
  { id: 1, name: 'Classic Fade', model: 'fade', description: 'Clean and professional' },
  { id: 2, name: 'Textured Crop', model: 'crop', description: 'Modern and stylish' },
  { id: 3, name: 'Slick Back', model: 'slick', description: 'Sophisticated look' },
];

export default function Haircut() {
  const [faceDetected, setFaceDetected] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(hairStyles[0]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
      try {
        await faceapi.loadTinyFaceDetectorModel('/models');
        await faceapi.loadFaceLandmarkModel('/models');
        toast.success('Face detection models loaded');
      } catch (error) {
        toast.error('Error loading face detection models');
      }
    };
    loadModels();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
        detectFace();
      }
    } catch (error) {
      toast.error('Unable to access camera');
    }
  };

  const detectFace = async () => {
    if (!videoRef.current) return;

    const detectFaceInterval = setInterval(async () => {
      if (videoRef.current) {
        const detections = await faceapi
          .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks();

        setFaceDetected(detections.length > 0);
      }
    }, 100);

    return () => clearInterval(detectFaceInterval);
  };

  return (
    <div className="min-h-screen pt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h1 className="text-3xl font-bold mb-6 text-smartgray-800">
          AR Haircut Try-On
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] bg-black rounded-2xl overflow-hidden">
            {!cameraActive ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button onClick={startCamera} className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Start Camera
                </Button>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                />
                {faceDetected && (
                  <div className="absolute inset-0">
                    <Canvas>
                      <OrbitControls enableZoom={false} />
                      <Environment preset="city" />
                      <HairModel style={selectedStyle.model} />
                    </Canvas>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-smartgray-800">
              Select Your Style
            </h2>
            <div className="grid gap-4">
              {hairStyles.map((style) => (
                <HaircutCard
                  key={style.id}
                  style={style}
                  isSelected={selectedStyle.id === style.id}
                  onClick={() => setSelectedStyle(style)}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
