
import { motion } from 'framer-motion';
import { Camera, Activity, Scissors, ShoppingBag, Calendar, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';

const Index = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Camera,
      title: 'AI Skin & Hair Diagnosis',
      description: 'Upload a photo or use your camera for instant analysis',
      path: '/analysis',
      delay: 1
    },
    {
      icon: Activity,
      title: 'Smart AI Grooming Assistant',
      description: 'Get personalized care routines based on your needs',
      path: '/assistant',
      delay: 2
    },
    {
      icon: Scissors,
      title: 'AR Haircut Try-On',
      description: 'Preview different hairstyles with augmented reality',
      path: '/haircut',
      delay: 3
    },
    {
      icon: ShoppingBag,
      title: 'Shop L\'Oréal Products',
      description: 'Browse and purchase recommended grooming products',
      path: '/products',
      delay: 4
    },
    {
      icon: Calendar,
      title: 'Book Barbershop Appointment',
      description: 'Schedule appointments with L\'Oréal-affiliated barbershops',
      path: '/appointments',
      delay: 5
    }
  ];

  return (
    <div className="pt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl overflow-hidden mb-8 relative h-72 md:h-96"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-smartblue-700/90 to-smartblue-500/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Men's grooming" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 p-6 md:p-10 flex flex-col h-full justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
              Smarter Grooming<br />for Modern Men
            </h1>
            <p className="text-white/80 md:text-lg mb-4 max-w-lg">
              AI-powered skin & hair analysis with personalized L'Oréal product recommendations
            </p>
            <button 
              onClick={() => navigate('/analysis')}
              className="bg-white text-smartblue-700 px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-smartgray-100 transition-colors duration-300 flex items-center"
            >
              Get Started
              <ChevronRight className="ml-1 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      <div className="mb-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold mb-6 text-smartgray-800"
        >
          Your Personal Care Assistant
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              onClick={() => navigate(feature.path)}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-2xl p-6 border border-smartgray-200"
      >
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-smartgray-800">
              Weather-Adaptive Grooming Tips
            </h3>
            <p className="text-smartgray-500 mb-4">
              Get personalized grooming recommendations based on local weather conditions and your unique needs.
            </p>
            <div className="bg-smartblue-50 p-4 rounded-xl border border-smartblue-100">
              <p className="text-smartblue-700 font-medium">
                Today's Tip: Protect your skin from UV rays with our L'Oréal Men Expert Hydra Energetic SPF moisturizer.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Grooming tips"
              className="w-40 h-40 object-cover rounded-2xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
