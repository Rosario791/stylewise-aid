
import { useState, useRef } from 'react';
import { Upload, Camera, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
}

export const ImageUpload = ({ onImageSelect }: ImageUploadProps) => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const processFile = (file: File) => {
    onImageSelect(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      
      {!image ? (
        <div
          onClick={handleButtonClick}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-2xl p-8 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer ${
            dragActive 
              ? 'border-smartblue-500 bg-smartblue-50'
              : 'border-smartgray-300 hover:border-smartblue-300 hover:bg-smartgray-50'
          }`}
        >
          <div className="bg-smartblue-100 p-4 rounded-full mb-4">
            <Upload className="w-6 h-6 text-smartblue-600" />
          </div>
          <h3 className="font-medium text-lg mb-2 text-center">Upload your photo</h3>
          <p className="text-smartgray-500 text-sm text-center mb-6">
            Drag and drop or click to upload
          </p>
          
          <div className="flex gap-3 w-full justify-center">
            <button className="btn-primary flex items-center">
              <Upload className="w-4 h-4 mr-2" />
              <span>Upload</span>
            </button>
            <button className="btn-secondary flex items-center">
              <Camera className="w-4 h-4 mr-2" />
              <span>Camera</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src={image} 
            alt="Preview" 
            className="w-full h-72 object-cover"
          />
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-3 right-3 bg-white bg-opacity-80 p-2 rounded-full shadow-md"
            onClick={removeImage}
          >
            <X className="w-5 h-5 text-smartgray-800" />
          </motion.button>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4"
          >
            <h4 className="text-white font-medium">Image uploaded successfully</h4>
            <p className="text-white/80 text-sm">Processing your image...</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
