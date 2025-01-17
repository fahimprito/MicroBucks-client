import Lottie from "lottie-react";
import registerAnimation from "../../assets/lottie/register.json"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = e => {
        e.preventDefault();

    }

    const handleGoogleSignIn = () => {

    }

    return (
        <div className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 border-2 mt-20 sm:mt-24">

            <div className="max-md:px-4">
                <div className="md:w-5/6 md:mx-auto px-6 border rounded-xl py-8 bg-base-200">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Sign up</h2>
                    <div className="divider"></div>

                    <form onSubmit={handleRegister}>
                    <div className="form-control mt-4">
                            <select
                                defaultValue="role"
                                className="select select-bordered w-full text-base">
                                <option value={'role'} disabled>Select User role</option>
                                <option value={'worker'}>Worker</option>
                                <option value={'buyer'}>Buyer</option>
                            </select>
                        </div>
                        <div className="form-control mt-4">
                            <input type="text" name="name" placeholder="Enter your name"
                                className="input input-bordered rounded-md bg-base-100"
                                required />
                        </div>
                        <div className="form-control mt-4">
                            <input type="text" name="photo" placeholder="Photo URL"
                                className="input input-bordered rounded-md bg-base-100" required />
                        </div>
                        <div className="form-control mt-4">
                            <input type="email" name="email" placeholder="Enter your email address"
                                className="input input-bordered rounded-md bg-base-100" required />
                        </div>
                        <div className="form-control mt-4 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered rounded-md bg-base-100"
                                required />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                type="button"
                                className="btn btn-xs bg-transparent border-none hover:bg-transparent text-base absolute right-2 top-3 ">
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>

                        {error && (
                            <label className="label text-sm text-red-600">
                                {error}
                            </label>
                        )}

                        <div className="form-control mt-8">
                            <button className="btn bg-primary hover:bg-[#0d775dd7] text-white text-lg rounded-md">
                                Register
                            </button>
                        </div>

                    </form>

                    <p className="text-center mt-4">Already have an account? <Link
                        className="text-primary font-semibold link-hover" to="/login">
                        Login
                    </Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline w-full text-blue-500 hover:bg-sky-900 font-semibold text-lg rounded-full">
                        <span className="text-2xl">
                            <FcGoogle></FcGoogle>
                        </span>
                        Continue with Google
                    </button>

                </div>
            </div>
            <div className="max-md:hidden mt-10">
                <div className="">
                    <Lottie animationData={registerAnimation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Register;