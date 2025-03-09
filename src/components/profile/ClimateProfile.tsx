
import { Sun, Droplets, Wind } from 'lucide-react';

interface ClimateProfileProps {
  climate: {
    temperature: string;
    humidity: string;
    pollution: string;
    uv: string;
  };
}

const ClimateProfile = ({ climate }: ClimateProfileProps) => {
  return (
    <div className="card-base p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-lg text-smartgray-800">Your Climate Profile</h3>
        <button className="text-sm text-smartblue-600 hover:text-smartblue-700 font-medium">
          Update
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-smartgray-50 rounded-xl p-4 text-center">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
            <Sun className="w-5 h-5 text-orange-500" />
          </div>
          <h4 className="text-xs font-medium text-smartgray-500 mb-1">Temperature</h4>
          <p className="font-semibold text-smartgray-800">{climate.temperature}</p>
        </div>
        
        <div className="bg-smartgray-50 rounded-xl p-4 text-center">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
            <Droplets className="w-5 h-5 text-blue-500" />
          </div>
          <h4 className="text-xs font-medium text-smartgray-500 mb-1">Humidity</h4>
          <p className="font-semibold text-smartgray-800">{climate.humidity}</p>
        </div>
        
        <div className="bg-smartgray-50 rounded-xl p-4 text-center">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
            <Wind className="w-5 h-5 text-gray-500" />
          </div>
          <h4 className="text-xs font-medium text-smartgray-500 mb-1">Pollution</h4>
          <p className="font-semibold text-smartgray-800">{climate.pollution}</p>
        </div>
        
        <div className="bg-smartgray-50 rounded-xl p-4 text-center">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
            <Sun className="w-5 h-5 text-red-500" />
          </div>
          <h4 className="text-xs font-medium text-smartgray-500 mb-1">UV Index</h4>
          <p className="font-semibold text-smartgray-800">{climate.uv}</p>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-smartgray-200">
        <p className="text-sm text-smartgray-500">
          Based on your location and climate data, we'll customize your product recommendations for optimal results.
        </p>
      </div>
    </div>
  );
};

export default ClimateProfile;
