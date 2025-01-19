import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottie/loginLottie.json"
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../contexts/AuthContext";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password });

        loginUser(email, password)
            .then(() => {
                e.target.reset();
                navigate(location.state ? location.state : '/');
            })
            .catch(err => {
                setError(err.message);
            })

    }

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: "worker",
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate(location.state ? location.state : '/');
                    })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 mt-20 sm:mt-[88px]">

            <div className="max-md:hidden">
                <div className="mx-auto w-10/12">
                    <Lottie animationData={loginAnimation} loop={true} />
                </div>
            </div>

            <div className="max-md:px-4">
                <div className="md:w-2/3 md:mx-auto px-6 border rounded-xl py-8 bg-base-200">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
                    <div className="divider"></div>

                    <form onSubmit={handleLogin}>
                        <div className="form-control mt-4">
                            <input
                                type="email" name="email" placeholder="Enter your email"
                                className="input input-bordered rounded-md bg-base-100"
                                required />
                        </div>
                        <div className="form-control mt-4 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password" placeholder="Enter your password"
                                className="input input-bordered rounded-md bg-base-100"
                                required />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                type="button"
                                className="btn btn-xs bg-transparent border-none hover:bg-transparent text-base absolute right-2 top-3 ">
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>

                        <label
                            className="label mt-1">
                            <Link
                                // to={"/resetpassword"}
                                className="text-gray-600 text-sm font-medium link-hover">
                                Forgot password?</Link>
                        </label>

                        {error && (
                            <label className="label text-sm text-red-600">
                                {error}
                            </label>
                        )}

                        <div className="form-control mt-4">
                            <button className="btn bg-primary hover:bg-[#0d775dd7] text-white text-lg rounded-md">
                                Login
                            </button>
                        </div>

                    </form>

                    <p className="text-center mt-4">Do not have an account? <Link
                        className="text-primary font-semibold link-hover" to="/register">
                        Create an account
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

        </div>
    );
};

export default Login;