
interface Purchase {
  id: string;
  name: string;
  lastPurchased: string;
  image: string;
}

interface RecentPurchasesProps {
  purchases: Purchase[];
}

const RecentPurchases = ({ purchases }: RecentPurchasesProps) => {
  return (
    <div className="card-base p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-lg text-smartgray-800">Recently Purchased Products</h3>
        <button className="text-sm text-smartblue-600 hover:text-smartblue-700 font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {purchases.map((product) => (
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
  );
};

export default RecentPurchases;
