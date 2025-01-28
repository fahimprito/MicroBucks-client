import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import BestWorkers from "./BestWorkers";
import TestimonialSection from "./TestimonialSection";
import ParallaxSection from "./ParallaxSection";
import OurFeatures from "./OurFeatures";


const Home = () => {
    return (
        <div className="bg-gray-100">
            <Helmet>
                <title>MicroBucks | Home</title>
            </Helmet>
            <HeroSection></HeroSection>
            <OurFeatures></OurFeatures>
            <ParallaxSection></ParallaxSection>
            <BestWorkers></BestWorkers>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;