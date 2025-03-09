
import { motion } from 'framer-motion';
import ProfileCard from '../components/profile/ProfileCard';
import ClimateProfile from '../components/profile/ClimateProfile';
import HairSkinProfile from '../components/profile/HairSkinProfile';
import RecentPurchases from '../components/profile/RecentPurchases';

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
  };
  
  const profileData = {
    purchases: [
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
          <ProfileCard user={user} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2"
        >
          <ClimateProfile climate={user.climate} />
          <HairSkinProfile skinType={user.skinType} hairType={user.hairType} concerns={user.concerns} />
          <RecentPurchases purchases={profileData.purchases} />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
