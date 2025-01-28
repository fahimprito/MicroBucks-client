import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurFeatures = () => {
    const features = [
        {
            icon: "💼",
            title: "Micro Tasking",
            description: "Complete small tasks and earn coins effortlessly."
        },
        {
            icon: "⚡",
            title: "Fast Payouts",
            description: "Quick and secure payments for all your completed tasks."
        },
        {
            icon: "📈",
            title: "Track Performance",
            description: "Monitor your progress and achievements in real-time."
        },
        {
            icon: "🤝",
            title: "Community Support",
            description: "Get help and connect with others in our friendly community."
        },
        {
            icon: "🔒",
            title: "Secure Platform",
            description: "Your data and payments are protected with top-notch security."
        },
        {
            icon: "🌍",
            title: "Global Reach",
            description: "Join a worldwide platform for diverse opportunities."
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,   
        });
    }, []);

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2
                    data-aos="fade-down"
                    className="text-4xl font-bold text-gray-800 mb-6"
                >
                    Our Features
                </h2>
                <p
                    data-aos="fade-down"
                    data-aos-delay="200"
                    className="text-lg text-gray-600 mb-12"
                >
                    Discover what makes our platform unique and user-friendly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100} 
                            className="bg-[#71c1ae17] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="text-5xl mb-4 text-primary">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurFeatures;