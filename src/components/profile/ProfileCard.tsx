
import { User, MapPin, Settings, LogOut, ArrowRight, Edit } from 'lucide-react';

interface ProfileCardProps {
  user: {
    name: string;
    email: string;
    location: string;
  };
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
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
  );
};

export default ProfileCard;
