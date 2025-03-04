
import { motion } from 'framer-motion';
import { User, MapPin, Sun, Droplets, Wind, Settings, LogOut, ArrowRight, Edit } from 'lucide-react';

const Profile = () => {
  // Mock user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    location: 'Lima, Peru',
    climate: {
      temperature: 'Warm',
      humidity: 'High',
      pollution: 'Moderate',
      uv: 'High'
    },
    skinType: 'Combination',
    hairType: 'Straight, Medium Thickness',
    concerns: ['Dryness', 'Early signs of thinning', 'UV damage'],
    recentProducts: [
      {
        id: '1',
        name: 'L\'Oréal Men Expert Hydra Energetic',
        lastPurchased: '2 weeks ago',
        image: 'https://m.media-amazon.com/images/I/71HarYVShjL._SL1500_.jpg'
      },
      {
        id: '2',
        name: 'L\'Oréal Men Expert Barber Club Beard Oil',
        lastPurchased: '1 month ago',
        image: 'https://static.chemistwarehouse.com.au/ams/media/pi/85842/ADD6_800.jpg'
      }
    ]
  };

  return (
    <div className="pt-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold mb-2 text-smartgray-800">Your Profile</h1>
        <p className="text-smartgray-500">
          Manage your personal information and preferences
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1"
        >
          <div className="card-base p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-24 h-24 bg-smartblue-100 rounded-full flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-smartblue-600" />
                </div>
                <button className="absolute bottom-3 right-0 bg-white p-1.5 rounded-full border border-smartgray-200 shadow-sm">
                  <Edit className="w-4 h-4 text-smartgray-600" />
                </button>
              </div>
              
              <h2 className="text-xl font-bold text-smartgray-800">{user.name}</h2>
              <p className="text-smartgray-500 text-sm mb-2">{user.email}</p>
              
              <div className="flex items-center text-sm text-smartgray-600 mb-6">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{user.location}</span>
              </div>
              
              <button className="btn-primary w-full">
                Edit Profile
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-smartgray-200">
              <h3 className="font-medium text-smartgray-800 mb-4">Account Settings</h3>
              
              <div className="space-y-3">
                {[
                  { name: 'Personal Information', icon: User },
                  { name: 'Preferences', icon: Settings },
                  { name: 'Sign Out', icon: LogOut }
                ].map((item) => (
                  <button
                    key={item.name}
                    className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-smartgray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <item.icon className="w-5 h-5 text-smartgray-500 mr-3" />
                      <span className="text-smartgray-800">{item.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-smartgray-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2"
        >
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
                <p className="font-semibold text-smartgray-800">{user.climate.temperature}</p>
              </div>
              
              <div className="bg-smartgray-50 rounded-xl p-4 text-center">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Droplets className="w-5 h-5 text-blue-500" />
                </div>
                <h4 className="text-xs font-medium text-smartgray-500 mb-1">Humidity</h4>
                <p className="font-semibold text-smartgray-800">{user.climate.humidity}</p>
              </div>
              
              <div className="bg-smartgray-50 rounded-xl p-4 text-center">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Wind className="w-5 h-5 text-gray-500" />
                </div>
                <h4 className="text-xs font-medium text-smartgray-500 mb-1">Pollution</h4>
                <p className="font-semibold text-smartgray-800">{user.climate.pollution}</p>
              </div>
              
              <div className="bg-smartgray-50 rounded-xl p-4 text-center">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Sun className="w-5 h-5 text-red-500" />
                </div>
                <h4 className="text-xs font-medium text-smartgray-500 mb-1">UV Index</h4>
                <p className="font-semibold text-smartgray-800">{user.climate.uv}</p>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-smartgray-200">
              <p className="text-sm text-smartgray-500">
                Based on your location and climate data, we'll customize your product recommendations for optimal results.
              </p>
            </div>
          </div>
          
          <div className="card-base p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-lg text-smartgray-800">Your Hair & Skin Profile</h3>
              <button className="text-sm text-smartblue-600 hover:text-smartblue-700 font-medium">
                Update
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-smartgray-50 rounded-xl p-4">
                <h4 className="text-sm font-medium text-smartgray-500 mb-1">Skin Type</h4>
                <p className="font-semibold text-smartgray-800">{user.skinType}</p>
              </div>
              
              <div className="bg-smartgray-50 rounded-xl p-4">
                <h4 className="text-sm font-medium text-smartgray-500 mb-1">Hair Type</h4>
                <p className="font-semibold text-smartgray-800">{user.hairType}</p>
              </div>
            </div>
            
            <h4 className="text-sm font-medium text-smartgray-800 mb-2">Concerns</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {user.concerns.map((concern, index) => (
                <span 
                  key={index}
                  className="bg-smartblue-50 text-smartblue-700 px-3 py-1 rounded-full text-sm"
                >
                  {concern}
                </span>
              ))}
            </div>
            
            <button className="text-sm text-smartblue-600 hover:text-smartblue-700 font-medium">
              Take skin & hair analysis test
            </button>
          </div>
          
          <div className="card-base p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-lg text-smartgray-800">Recently Purchased Products</h3>
              <button className="text-sm text-smartblue-600 hover:text-smartblue-700 font-medium">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {user.recentProducts.map((product) => (
                <div 
                  key={product.id}
                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-smartgray-50 transition-colors"
                >
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-smartgray-800">{product.name}</h4>
                    <p className="text-sm text-smartgray-500">
                      Purchased: {product.lastPurchased}
                    </p>
                  </div>
                  <button className="text-smartblue-600 font-medium text-sm">
                    Buy Again
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
