import aboutBg from "../../assets/banner/slide5.jpg";

const About = () => {
    return (
        <div className="mt-20 sm:mt-[88px] min-h-screen">
            
            <div
                className="bg-cover bg-center h-[300px] lg:h-[400px] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${aboutBg})`,
                }}
            >
                <div className="bg-black bg-opacity-50 p-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white">
                        About MicroBucks
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-300 mt-2">
                        Empowering individuals with opportunities to earn more, one task at a time.
                    </p>
                </div>
            </div>

            <div className="bg-gray-50 py-10 lg:py-16 px-6 lg:px-16">
                <div className="max-w-4xl mx-auto space-y-8">
                    
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 leading-7">
                            At <span className="font-semibold">MicroBucks</span>, our mission is to provide individuals with flexible earning opportunities through simple and accessible tasks. We believe everyone deserves a chance to earn and grow, no matter where they are.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Our Vision
                        </h2>
                        <p className="text-gray-600 leading-7">
                            Our vision is a world where micro-tasking bridges gaps in income, fosters productivity, and creates a global community of empowered individuals. Through innovation and simplicity, we aim to redefine how people work and earn in the digital age.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Why Choose MicroBucks?
                        </h2>
                        <p className="text-gray-600 leading-7">
                            <span className="font-semibold">MicroBucks</span> is built for you. Whether you’re a tasker looking to earn or a buyer seeking quick and quality services, we’ve got you covered. Our platform ensures secure payments, diverse opportunities, and a user-friendly experience tailored to your needs.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default About;