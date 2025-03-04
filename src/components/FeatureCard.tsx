
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  delay?: number;
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  onClick,
  delay = 0
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      onClick={onClick}
      className="card-base p-5 hover:shadow-md transition-all duration-300 active:scale-[0.98]"
    >
      <div className="flex items-start space-x-4">
        <div className="bg-smartblue-50 p-3 rounded-xl">
          <Icon className="w-6 h-6 text-smartblue-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-smartgray-800 mb-1">{title}</h3>
          <p className="text-smartgray-500 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
