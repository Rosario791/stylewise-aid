
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  onClick?: () => void;
  delay?: number;
}

export const ProductCard = ({
  name,
  description,
  price,
  image,
  category,
  rating,
  onClick,
  delay = 0
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      onClick={onClick}
      className="card-base overflow-hidden group"
    >
      <div className="relative">
        <div className="overflow-hidden h-48">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute top-3 left-3 glass-effect px-3 py-1 rounded-full text-xs font-medium text-smartblue-700">
          {category}
        </div>
        <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-medium flex items-center shadow-sm">
          <span className="mr-1">★</span>
          {rating.toFixed(1)}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-smartgray-800">{name}</h3>
        <p className="text-smartgray-500 text-sm mt-1 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="font-semibold text-lg">${price.toFixed(2)}</div>
          <button className="btn-primary py-2 px-3 rounded-lg flex items-center">
            <ShoppingBag className="w-4 h-4 mr-1" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
