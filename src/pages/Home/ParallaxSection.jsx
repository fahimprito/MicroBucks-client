import { Parallax } from "react-parallax";

const ParallaxSection = () => {
    return (
        <Parallax
            bgImage="https://i.ibb.co.com/P1FdVgQ/2149314078.jpg"
            bgImageAlt="Work Culture"
            strength={300}
            blur={2}
            className="my-16"
        >
            <div className="h-[500px] flex items-center justify-center text-center bg-black/40 px-4 text-white">
                <div className="p-8 rounded-lg bg-black/50">
                    <h2 className="text-4xl font-bold mb-4">Inspiring Work Culture</h2>
                    <p className="text-lg">
                        Join a community that values creativity, collaboration, and innovation. 
                        Be part of a mission to make every small task impactful.
                    </p>
                </div>
            </div>
        </Parallax>
    );
};

export default ParallaxSection;