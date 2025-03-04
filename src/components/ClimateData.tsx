
import { motion } from 'framer-motion';
import { Droplets, Sun, Wind, ThermometerSun } from 'lucide-react';

interface ClimateDataProps {
  visible: boolean;
}

const ClimateData = ({ visible }: ClimateDataProps) => {
  // Mock climate data based on Lima, Peru
  const climateData = {
    temperature: 22, // degrees Celsius
    humidity: 78, // percentage
    uvIndex: 8, // 0-11 scale
    windSpeed: 12, // km/h
    airQuality: 'Moderate', // Good, Moderate, Poor
    location: 'Lima, Peru'
  };

  const getUVDescription = (index: number) => {
    if (index <= 2) return 'Low';
    if (index <= 5) return 'Moderate';
    if (index <= 7) return 'High';
    if (index <= 10) return 'Very High';
    return 'Extreme';
  };

  const getHumidityAdvice = (humidity: number) => {
    if (humidity < 30) return 'Very dry conditions can cause skin dryness. Use extra moisturizer.';
    if (humidity < 50) return 'Slightly dry conditions. Keep skin hydrated.';
    if (humidity < 70) return 'Comfortable humidity levels for skin.';
    return 'High humidity may cause increased oil production and frizzy hair. Use oil control products.';
  };

  const getUVAdvice = (index: number) => {
    if (index <= 2) return 'Low protection needed for short exposure.';
    if (index <= 5) return 'Wear sunscreen and limit midday sun exposure.';
    if (index <= 7) return 'Apply SPF 30+ sunscreen, wear protective clothing.';
    if (index <= 10) return 'Apply SPF 50+ sunscreen frequently, avoid midday sun.';
    return 'Take all precautions, stay indoors during midday hours.';
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white rounded-xl border border-smartgray-200 p-6 mb-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-smartgray-800">Local Climate Conditions</h3>
        <span className="text-sm text-smartgray-500">{climateData.location}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-smartgray-50 rounded-xl p-3 flex flex-col items-center">
          <ThermometerSun className="w-6 h-6 text-amber-500 mb-2" />
          <span className="text-xl font-bold">{climateData.temperature}°C</span>
          <span className="text-xs text-smartgray-500">Temperature</span>
        </div>

        <div className="bg-smartgray-50 rounded-xl p-3 flex flex-col items-center">
          <Droplets className="w-6 h-6 text-blue-500 mb-2" />
          <span className="text-xl font-bold">{climateData.humidity}%</span>
          <span className="text-xs text-smartgray-500">Humidity</span>
        </div>

        <div className="bg-smartgray-50 rounded-xl p-3 flex flex-col items-center">
          <Sun className="w-6 h-6 text-amber-600 mb-2" />
          <span className="text-xl font-bold">{climateData.uvIndex}</span>
          <span className="text-xs text-smartgray-500">UV Index ({getUVDescription(climateData.uvIndex)})</span>
        </div>

        <div className="bg-smartgray-50 rounded-xl p-3 flex flex-col items-center">
          <Wind className="w-6 h-6 text-blue-400 mb-2" />
          <span className="text-xl font-bold">{climateData.windSpeed} km/h</span>
          <span className="text-xs text-smartgray-500">Wind Speed</span>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="font-medium text-blue-800 mb-1">Humidity Impact</h4>
          <p className="text-sm text-blue-700">{getHumidityAdvice(climateData.humidity)}</p>
        </div>
        
        <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
          <h4 className="font-medium text-amber-800 mb-1">UV Protection Advice</h4>
          <p className="text-sm text-amber-700">{getUVAdvice(climateData.uvIndex)}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ClimateData;
