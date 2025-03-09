
interface HairSkinProfileProps {
  skinType: string;
  hairType: string;
  concerns: string[];
}

const HairSkinProfile = ({ skinType, hairType, concerns }: HairSkinProfileProps) => {
  return (
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
          <p className="font-semibold text-smartgray-800">{skinType}</p>
        </div>
        
        <div className="bg-smartgray-50 rounded-xl p-4">
          <h4 className="text-sm font-medium text-smartgray-500 mb-1">Hair Type</h4>
          <p className="font-semibold text-smartgray-800">{hairType}</p>
        </div>
      </div>
      
      <h4 className="text-sm font-medium text-smartgray-800 mb-2">Concerns</h4>
      <div className="flex flex-wrap gap-2 mb-4">
        {concerns.map((concern, index) => (
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
  );
};

export default HairSkinProfile;
