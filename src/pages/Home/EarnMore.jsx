import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const EarnMore = () => {
    const user = useAuth();

    return (
        <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
            {/* Left Side - Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:w-1/2 text-center md:text-left"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Earn More with MicroBucks
                </h2>
                <p className="mt-4 text-gray-600">
                    Complete small tasks and get rewarded instantly. Join thousands of users earning extra income effortlessly.
                </p>
                <Link to={user ? "/dashboard" : "/login"}>
                    <button className="mt-6 bg-primary hover:bg-opacity-80 text-white py-3 px-6 rounded-lg text-lg font-medium">
                        Get Started
                    </button>
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:w-1/2"
            >
                <img
                    src="https://i.ibb.co.com/6Xk4DtG/team1.jpg"
                    alt="MicroBucks Banner"
                    className="w-full rounded-lg shadow-lg"
                />
            </motion.div>
        </section>
    );
};

export default EarnMore;