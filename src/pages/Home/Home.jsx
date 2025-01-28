import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import BestWorkers from "./BestWorkers";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MicroBucks | Home</title>
            </Helmet>
            <HeroSection></HeroSection>
            <BestWorkers></BestWorkers>
            Home
        </div>
    );
};

export default Home;