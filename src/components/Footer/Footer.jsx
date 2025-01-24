import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/microbucks_logo.png"

const Footer = () => {
    return (
        <div className="border-t">
            <footer className="pt-12 pb-9 px-10">
                <div className="container mx-auto footer lg:grid-cols-3 text-lg">
                    <nav className="w-full">
                        {/* Logo */}
                        <Link className="flex items-center gap-1 mb-2">
                            <img className="w-10 sm:w-16" src={logo} alt="MicroBucks Logo" />
                            <p className="text-2xl sm:text-3xl font-bold text-primary font-orbitron">
                                Micro<span className="font-medium ">Bucks</span>
                            </p>
                        </Link>
                        <div>
                            <p className="mb-3">Empowering you to earn more by doing less. Complete tasks, gain rewards, and make every moment count!</p>
                        </div>
                        <div className="flex justify-center space-x-4 mb-3">
                            <a
                                href="https://www.instagram.com/fahimprito/"
                                className="flex items-center justify-center w-10 h-10 rounded bg-gray-800 text-white hover:bg-pink-500 transition-colors text-xl"
                                aria-label="Instagram"
                                target="_blank"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.facebook.com/fahimprito"
                                className="flex items-center justify-center w-10 h-10 rounded bg-gray-800 text-white hover:bg-blue-600 transition-colors text-xl"
                                aria-label="Facebook"
                                target="_blank"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://github.com/fahimprito"
                                className="flex items-center justify-center w-10 h-10 rounded bg-gray-800 text-white hover:bg-gray-700 transition-colors text-xl"
                                aria-label="Twitter"
                                target="_blank"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/fahimprito/"
                                className="flex items-center justify-center w-10 h-10 rounded bg-gray-800 text-white hover:bg-[#0a66c2] transition-colors text-xl"
                                aria-label="Pinterest"
                                target="_blank"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </nav>
                    <nav className="md:mx-auto mt-5">
                        <h6 className="footer-title text-lg text-black font-bold mb-3">Support</h6>
                        <a className="link link-hover hover:text-primary">Blog</a>
                        <Link to={'/about'} onClick={() => window.scrollTo(0, 0)} className="link link-hover hover:text-primary">About us</Link>
                        <a className="link link-hover hover:text-primary">Terms & Condition</a>
                        <a className="link link-hover hover:text-primary">Privacy Policy</a>
                    </nav>
                    <nav className="w-full mt-5">
                        <h6 className="footer-title text-lg">Subscribe</h6>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Subscribe for the latest updates.</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item text-black w-full" />
                                <button
                                    className="btn bg-primary hover:bg-[#0d775dd7] text-white border-none join-item">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </nav>

                </div>
                <div className="divider"></div>
                <p className="text-center">© 2024 MicroBucks by Fahim · All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Footer;