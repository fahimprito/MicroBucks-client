import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSection = () => {
    const testimonials = [
        {
            name: "John Doe",
            photo: "https://randomuser.me/api/portraits/men/32.jpg",
            feedback: "This platform has changed my life! Highly recommended to everyone."
        },
        {
            name: "Jane Smith",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
            feedback: "The best experience I've ever had. The support team is amazing."
        },
        {
            name: "Michael Brown",
            photo: "https://randomuser.me/api/portraits/men/55.jpg",
            feedback: "I love how simple and intuitive the platform is. Keep it up!"
        },
        {
            name: "Emily Davis",
            photo: "https://randomuser.me/api/portraits/women/60.jpg",
            feedback: "Great opportunities for everyone. This platform is a game-changer."
        },
    ];

    return (
        <section className="py-12 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    loop
                    className="pb-10"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="p-10">
                            <div className="bg-[#71c1ae17] shadow-md rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition">
                                <img
                                    src={testimonial.photo}
                                    alt={testimonial.name}
                                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                                />
                                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialSection;