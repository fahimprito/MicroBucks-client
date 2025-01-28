import { useState, useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BestWorkers = () => {
    const [topWorkers, setTopWorkers] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchTopWorkers = async () => {
            try {
                const { data } = await axiosSecure.get("/top-workers");
                setTopWorkers(data);
            } catch (error) {
                console.error("Error fetching top workers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTopWorkers();
    }, [axiosSecure]);

    if (loading) {
        return <div className='flex justify-center min-h-[50vh]'><span className="loading loading-ring loading-lg"></span></div>;
    }

    if (topWorkers.length === 0) {
        return <div className="text-center py-10">No workers found.</div>;
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Best Workers</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {topWorkers.map((worker, index) => (
                        <div
                            key={index}
                            className="bg-[#71c1ae31] shadow-lg rounded-lg overflow-hidden p-4 border border-gray-200 hover:shadow-xl transition"
                        >
                            <img
                                src={worker.photoURL}
                                alt={worker.name}
                                className="w-24 h-24 mx-auto rounded-full object-cover"
                            />
                            <div className="text-center mt-4">
                                <h3 className="sm:text-xl font-semibold capitalize">{worker.name}</h3>
                                <p className="text-gray-500">Coins: {worker.coins}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestWorkers;