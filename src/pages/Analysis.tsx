
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Upload, ChevronRight, Info, RefreshCw } from 'lucide-react';
import ImageUpload from '../components/ImageUpload';
import ClimateData from '../components/ClimateData';

const Analysis = () => {
  const [analysisState, setAnalysisState] = useState<'initial' | 'uploading' | 'analyzing' | 'complete'>('initial');
  const [showClimateData, setShowClimateData] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<null | {
    skinType: string;
    hairType: string;
    concerns: string[];
    recommendations: {
      id: string;
      name: string;
      type: string;
      description: string;
    }[];
  }>(null);

  const handleImageSelect = (file: File) => {
    // In a real app, you would upload this file to your backend
    setAnalysisState('uploading');
    
    // Simulate API call
    setTimeout(() => {
      setAnalysisState('analyzing');
      
      // Simulate analysis time
      setTimeout(() => {
        // Show climate data after analysis is complete
        setShowClimateData(true);
        
        // Mock analysis results
        setAnalysisResults({
          skinType: 'Combination',
          hairType: 'Straight, Medium Thickness',
          concerns: ['Dryness around T-zone', 'Early signs of thinning', 'UV damage'],
          recommendations: [
            {
              id: '1',
              name: 'L\'Oréal Men Expert Hydra Energetic',
              type: 'Moisturizer',
              description: 'Daily moisturizer with vitamin C to hydrate and energize skin.'
            },
            {
              id: '2',
              name: 'L\'Oréal Men Expert Thickening Shampoo',
              type: 'Shampoo',
              description: 'Formulated to make hair look thicker and fuller.'
            },
            {
              id: '3',
              name: 'L\'Oréal UV Defender',
              type: 'Sunscreen',
              description: 'Lightweight SPF 50 protection against UV damage.'
            }
          ]
        });
        setAnalysisState('complete');
      }, 3000);
    }, 1500);
  };

  const resetAnalysis = () => {
    setAnalysisState('initial');
    setAnalysisResults(null);
    setShowClimateData(false);
  };

  return (
    <div className="pt-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold mb-2 text-smartgray-800">AI Skin & Hair Analysis</h1>
        <p className="text-smartgray-500">
          Upload a clear photo of your face and hair to get personalized product recommendations
        </p>
      </motion.div>

      {/* Climate Data - will be shown after analysis */}
      <ClimateData visible={showClimateData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-base p-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-smartgray-800">
            Upload Your Photo
          </h2>
          
          <div className="mb-4">
            <ImageUpload onImageSelect={handleImageSelect} />
          </div>
          
          <div className="bg-smartgray-50 rounded-xl p-4 border border-smartgray-200">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-smartgray-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-smartgray-800 mb-1">For best results:</h3>
                <ul className="text-sm text-smartgray-600 space-y-1">
                  <li>• Use natural lighting</li>
                  <li>• Remove glasses or hats</li>
                  <li>• Look directly at the camera</li>
                  <li>• Ensure your face and hair are visible</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card-base p-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-smartgray-800">
            Analysis Results
          </h2>
          
          {analysisState === 'initial' && (
            <div className="flex flex-col items-center justify-center h-80 text-center">
              <div className="bg-smartgray-100 p-5 rounded-full mb-4">
                <Upload className="w-8 h-8 text-smartgray-500" />
              </div>
              <h3 className="font-medium text-lg mb-2 text-smartgray-700">
                No Image Uploaded
              </h3>
              <p className="text-smartgray-500 max-w-xs">
                Upload a photo using the panel on the left to get your personalized analysis
              </p>
            </div>
          )}
          
          {analysisState === 'uploading' && (
            <div className="flex flex-col items-center justify-center h-80 text-center">
              <div className="bg-smartblue-100 p-5 rounded-full mb-4">
                <Upload className="w-8 h-8 text-smartblue-600 animate-pulse" />
              </div>
              <h3 className="font-medium text-lg mb-2 text-smartgray-700">
                Uploading Your Image
              </h3>
              <p className="text-smartgray-500 max-w-xs">
                Please wait while we upload your photo...
              </p>
              
              <div className="w-full max-w-xs mt-4 bg-smartgray-200 rounded-full h-2.5">
                <div className="bg-smartblue-500 h-2.5 rounded-full w-2/5 animate-pulse"></div>
              </div>
            </div>
          )}
          
          {analysisState === 'analyzing' && (
            <div className="flex flex-col items-center justify-center h-80 text-center">
              <div className="bg-smartblue-100 p-5 rounded-full mb-4">
                <RefreshCw className="w-8 h-8 text-smartblue-600 animate-spin" />
              </div>
              <h3 className="font-medium text-lg mb-2 text-smartgray-700">
                Analyzing Your Photo
              </h3>
              <p className="text-smartgray-500 max-w-xs">
                Our AI is analyzing your skin and hair type. This will just take a moment...
              </p>
              
              <div className="w-full max-w-xs mt-4 bg-smartgray-200 rounded-full h-2.5">
                <div className="bg-smartblue-500 h-2.5 rounded-full w-4/5 animate-pulse"></div>
              </div>
            </div>
          )}
          
          {analysisState === 'complete' && analysisResults && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-80 overflow-y-auto pr-2"
            >
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-smartgray-50 rounded-xl p-4 border border-smartgray-200">
                  <h3 className="font-medium text-sm text-smartgray-500 mb-1">Skin Type</h3>
                  <p className="font-semibold text-smartgray-800">{analysisResults.skinType}</p>
                </div>
                <div className="bg-smartgray-50 rounded-xl p-4 border border-smartgray-200">
                  <h3 className="font-medium text-sm text-smartgray-500 mb-1">Hair Type</h3>
                  <p className="font-semibold text-smartgray-800">{analysisResults.hairType}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-smartgray-800 mb-2">Concerns Identified</h3>
                <div className="flex flex-wrap gap-2">
                  {analysisResults.concerns.map((concern, index) => (
                    <span 
                      key={index}
                      className="bg-smartblue-50 text-smartblue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {concern}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-smartgray-800 mb-3">Recommended Products</h3>
                <div className="space-y-3">
                  {analysisResults.recommendations.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * parseInt(product.id) }}
                      className="bg-white rounded-xl p-4 border border-smartgray-200 hover:border-smartblue-200 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-xs font-medium text-smartblue-600 bg-smartblue-50 px-2 py-0.5 rounded-full mb-1 inline-block">
                            {product.type}
                          </span>
                          <h4 className="font-medium text-smartgray-800">{product.name}</h4>
                          <p className="text-sm text-smartgray-500 mt-1">{product.description}</p>
                        </div>
                        <button className="text-smartblue-600 hover:text-smartblue-700">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button 
                  onClick={resetAnalysis}
                  className="text-smartblue-600 hover:text-smartblue-700 text-sm font-medium"
                >
                  Try with a different photo
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="card-base p-6 mt-8"
      >
        <h2 className="text-xl font-semibold mb-4 text-smartgray-800">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-smartblue-50 w-12 h-12 rounded-full flex items-center justify-center mb-3">
              <span className="text-lg font-bold text-smartblue-600">1</span>
            </div>
            <h3 className="font-medium text-smartgray-800 mb-1">Upload Photo</h3>
            <p className="text-sm text-smartgray-500">
              Take a clear photo or upload an existing one
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-smartblue-50 w-12 h-12 rounded-full flex items-center justify-center mb-3">
              <span className="text-lg font-bold text-smartblue-600">2</span>
            </div>
            <h3 className="font-medium text-smartgray-800 mb-1">AI Analysis</h3>
            <p className="text-sm text-smartgray-500">
              Our AI analyzes your skin and hair characteristics
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-smartblue-50 w-12 h-12 rounded-full flex items-center justify-center mb-3">
              <span className="text-lg font-bold text-smartblue-600">3</span>
            </div>
            <h3 className="font-medium text-smartgray-800 mb-1">Get Recommendations</h3>
            <p className="text-sm text-smartgray-500">
              Receive personalized product suggestions
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analysis;
