
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [category, setCategory] = useState<string>('all');
  
  // Productos con imágenes actualizadas
  const products = [
    {
      id: '1',
      name: 'L\'Oréal Men Expert Hydra Energetic',
      description: 'Anti-fatigue moisturizer with vitamin C that hydrates skin for 24 hours',
      price: 12.99,
      image: '/lovable-uploads/bc523a02-e8eb-4eea-98cc-ac065ed511ac.png',
      category: 'Face',
      rating: 4.7
    },
    {
      id: '2',
      name: 'L\'Oréal Men Expert Barber Club Beard Oil',
      description: 'Nourishing oil that softens beard hair and soothes the skin underneath',
      price: 10.99,
      image: 'https://www.watsons.sa/cdn/shop/files/ASW200004761_103.jpg?v=1711444115&width=1445',
      category: 'Beard',
      rating: 4.5
    },
    {
      id: '3',
      name: 'L\'Oréal Men Expert Carbon Protect Deodorant',
      description: '48-hour protection against odor and white marks with activated charcoal',
      price: 6.99,
      image: 'https://lyko.com/globalassets/product-images/loreal-paris-men-expert-carbon-protect-5in1-roll-on-1184-301-0050_1.jpg?ref=424CF44F08&w=1200&h=1200&quality=75',
      category: 'Body',
      rating: 4.3
    },
    {
      id: '4',
      name: 'L\'Oréal Men Expert Pure Charcoal Face Wash',
      description: 'Purifying face wash with charcoal that deeply cleanses and reduces excess oil',
      price: 8.99,
      image: 'https://static.chemistwarehouse.com.au/ams/media/pi/92122/ADD8_800.jpg',
      category: 'Face',
      rating: 4.6
    },
    {
      id: '5',
      name: 'L\'Oréal Serie Expert Density Advanced Shampoo',
      description: 'Thickening shampoo that makes hair look fuller and denser',
      price: 15.99,
      image: 'https://m.media-amazon.com/images/I/61R5-h6iV4L.jpg',
      category: 'Hair',
      rating: 4.8
    },
    {
      id: '6',
      name: 'L\'Oréal Men Expert Hydra Sensitive Moisturizer',
      description: 'Soothing, fragrance-free moisturizer for sensitive skin that calms irritation',
      price: 11.99,
      image: 'https://i5.walmartimages.com/seo/L-Oreal-Men-Expert-Hydra-Sensitive-Fortifying-Moisturizer-for-Dry-Sensitive-Skin-50-ml-1-7-oz_aa4db5a6-6934-4762-a39a-efa019f0d47d.d07d669e759417f7982e43f55d42af40.jpeg',
      category: 'Face',
      rating: 4.4
    }
  ];
  
  const categories = ['all', 'Face', 'Hair', 'Beard', 'Body'];
  
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <div className="pt-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold mb-2 text-smartgray-800">Shop L'Oréal Products</h1>
        <p className="text-smartgray-500">
          Browse our selection of premium grooming products
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-smartgray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-3 w-full border border-smartgray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-smartblue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="flex items-center space-x-2 bg-white border border-smartgray-200 rounded-xl px-4 py-2.5">
              <Filter className="w-4 h-4 text-smartgray-500" />
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-transparent focus:outline-none text-smartgray-800 pr-8 appearance-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-smartgray-500 absolute right-4" />
            </div>
          </div>
          
          <div className="relative">
            <div className="flex items-center space-x-2 bg-white border border-smartgray-200 rounded-xl px-4 py-2.5">
              <select 
                className="bg-transparent focus:outline-none text-smartgray-800 pr-8 appearance-none"
                defaultValue="recommended"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 text-smartgray-500 absolute right-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            {...product}
            delay={index}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center"
      >
        <button className="btn-secondary">
          Load More Products
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 bg-gradient-to-r from-smartblue-600 to-smartblue-500 text-white rounded-2xl p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-6 md:space-y-0">
          <div className="md:max-w-md">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Climate-Adaptive Product Bundles
            </h2>
            <p className="text-white/80 mb-4">
              Discover our curated product sets designed for your specific climate needs and grooming goals.
            </p>
            <button className="bg-white text-smartblue-700 px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-smartgray-100 transition-colors duration-300">
              Explore Bundles
            </button>
          </div>
          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
            <img 
              src="https://images.unsplash.com/photo-1581349484263-41f3130cc105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Product Bundle"
              className="w-40 h-40 object-cover rounded-xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Products;
