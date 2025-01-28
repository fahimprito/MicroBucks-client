import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import BestWorkers from "./BestWorkers";
import TestimonialSection from "./TestimonialSection";
import ParallaxSection from "./ParallaxSection";
import OurFeatures from "./OurFeatures";
import EarnMore from "./EarnMore";


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
            <EarnMore></EarnMore>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;