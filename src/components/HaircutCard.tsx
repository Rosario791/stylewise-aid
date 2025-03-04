
import { motion } from 'framer-motion';

interface HaircutStyle {
  id: number;
  name: string;
  model: string;
  description: string;
}

interface HaircutCardProps {
  style: HaircutStyle;
  isSelected: boolean;
  onClick: () => void;
}

const HaircutCard = ({ style, isSelected, onClick }: HaircutCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`p-4 rounded-xl cursor-pointer transition-colors duration-200 ${
        isSelected
          ? 'bg-smartblue-50 border-2 border-smartblue-500'
          : 'bg-white border-2 border-smartgray-100 hover:border-smartblue-200'
      }`}
    >
      <h3 className="font-semibold text-lg text-smartgray-800">{style.name}</h3>
      <p className="text-smartgray-500 text-sm">{style.description}</p>
    </motion.div>
  );
};

export default HaircutCard;
