import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import BestWorkers from "./BestWorkers";
import TestimonialSection from "./TestimonialSection";
import ParallaxSection from "./ParallaxSection";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MicroBucks | Home</title>
            </Helmet>
            <HeroSection></HeroSection>
            <BestWorkers></BestWorkers>
            <ParallaxSection></ParallaxSection>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;