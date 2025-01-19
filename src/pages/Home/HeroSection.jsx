import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import img1 from "../../assets/banner/slide4.jpg";
import img2 from "../../assets/banner/slide2.jpg";
import img3 from "../../assets/banner/slide3.jpg";

const HeroSection = () => {
    const slides = [
        {
            id: 1,
            title: "Welcome to MicroBucks",
            description: "Complete micro tasks and earn bucks easily.",
            bgImage: img1,
        },
        {
            id: 2,
            title: "Turn Time into Earnings",
            description: "Earn money by completing small tasks every day.",
            bgImage: img2,
        },
        {
            id: 3,
            title: "Join Thousands of Earners",
            description: "Your gateway to financial freedom starts here.",
            bgImage: img3,
        },
    ];

    return (
        <section className="w-full h-[600px] sm:h-[750px]">
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.bgImage})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">{slide.title}</h1>
                                <p className="text-lg text-gray-300">{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSection;
