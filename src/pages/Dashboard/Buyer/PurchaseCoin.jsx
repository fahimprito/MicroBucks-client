import { useNavigate } from "react-router-dom";

const PurchaseCoin = () => {
    const navigate = useNavigate();

    const coinPackages = [
        { coins: 10, price: 1 },
        { coins: 150, price: 10 },
        { coins: 500, price: 20 },
        { coins: 1000, price: 35 },
    ];

    const handlePurchase = (price, coins) => {
        navigate(`/dashboard/purchase/${price}/${coins}`);
        
    };

    return (
        <div className="min-h-[50vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                {coinPackages.map((pkg) => (
                    <div key={pkg.coins} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-3xl font-bold">{pkg.coins} Coins</h2>
                            <p className="text-xl text-green-900 font-semibold">= ${pkg.price}</p>
                            <button
                                className="btn bg-primary text-white hover:bg-[#0d775dd7] sm:text-lg w-full mt-4"
                                onClick={() => handlePurchase(pkg.price, pkg.coins)}
                            >
                                Purchase Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PurchaseCoin;