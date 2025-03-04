
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Activity, ShoppingBag, User, Menu } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Analysis', path: '/analysis', icon: Activity },
    { name: 'Products', path: '/products', icon: ShoppingBag },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass-effect border-b border-smartgray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="font-bold text-xl text-gradient">SMARTHAIR</h1>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden p-2 rounded-full hover:bg-smartgray-100 transition-colors"
          >
            <Menu className="w-6 h-6 text-smartgray-800" />
          </button>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center px-4 py-2 rounded-xl transition-colors ${
                  isActive(item.path) 
                    ? 'text-smartblue-600 bg-smartblue-50'
                    : 'text-smartgray-500 hover:bg-smartgray-100'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive(item.path) ? 'text-smartblue-500' : 'text-smartgray-500'}`} />
                <span className="text-xs mt-1 font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="block md:hidden absolute top-full left-0 right-0 glass-effect border-b border-smartgray-200 shadow-lg animate-slide-up">
          <nav className="flex flex-col p-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-colors ${
                  isActive(item.path) 
                    ? 'text-smartblue-600 bg-smartblue-50'
                    : 'text-smartgray-500 hover:bg-smartgray-100'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive(item.path) ? 'text-smartblue-500' : 'text-smartgray-500'}`} />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
