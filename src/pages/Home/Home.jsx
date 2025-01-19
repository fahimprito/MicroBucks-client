import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MicroBucks | Home</title>
            </Helmet>
            <HeroSection></HeroSection>
            Home
        </div>
    );
};

export default Home;