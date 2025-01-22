import Lottie from "lottie-react";
import registerAnimation from "../../assets/lottie/register.json"
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AuthContext from "../../contexts/AuthContext";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        // console.log(data);
        const { name, email, photoURL, password } = data;

        // create user
        createUser(email, password)
            .then(() => {
                // reset();
                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photoURL: photoURL,
                            role: data.role,
                            coins: data.role === "worker" ? 10 : 50,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Registered successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/dashboard');
                                }
                            })
                    })
                    .catch((err) => {
                        setError(err.message);
                    });
            })
            .catch(err => {
                setError(err.message);
            })

    }

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(result => {
                // console.log(result.user);
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photoURL: result.user?.photoURL,
                    role: "worker",
                    coins: 10,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/dashboard');
                    })
            })
            .catch(error => {
                setError(error.message)
            })

    }

    return (
        <div className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 mt-20 sm:mt-[88px]">
            <Helmet>
                <title>MicroBucks | Register</title>
            </Helmet>

            <div className="max-md:px-4">
                <div className="md:w-5/6 md:mx-auto px-6 border rounded-xl py-8 bg-base-200">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Register</h2>
                    <div className="divider"></div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control mt-4">
                            <select
                                defaultValue=""
                                {...register("role", { required: true })}
                                className="select select-bordered w-full text-base"
                            >
                                <option value="" disabled>Select User Role</option>
                                <option value="worker">Worker</option>
                                <option value="buyer">Buyer</option>
                            </select>
                            {errors.role && <span className="text-red-600 ml-2">Please select a role</span>}
                        </div>


                        <div className="form-control mt-4">
                            <input type="text" name="name" placeholder="Enter your name"
                                {...register("name", { required: true })}
                                className="input input-bordered rounded-md bg-base-100" />
                            {errors.name && <span className="text-red-600 ml-2">Name is required</span>}
                        </div>
                        <div className="form-control mt-4">
                            <input type="text" name="photoURL" placeholder="Photo URL"
                                {...register("photoURL", { required: true })}
                                className="input input-bordered rounded-md bg-base-100" />
                            {errors.photoURL && <span className="text-red-600 ml-2">Photo URL is required</span>}
                        </div>
                        <div className="form-control mt-4">
                            <input type="email" name="email" placeholder="Enter your email address"
                                {...register("email", { required: true })}
                                className="input input-bordered rounded-md bg-base-100" />
                            {errors.email && <span className="text-red-600 ml-2">Email is required</span>}
                        </div>
                        {/* Password */}
                        <div className="form-control mt-4 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Password must be less than 20 characters",
                                    },
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                                        message: "Password must include uppercase, lowercase, and a number",
                                    },
                                })}
                                placeholder="Enter your password"
                                className="input input-bordered rounded-md bg-base-100"
                            />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                type="button"
                                className="btn btn-xs bg-transparent border-none hover:bg-transparent text-base absolute right-2 top-3 "
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                            {errors.password && <span className="text-red-600 ml-2">{errors.password.message}</span>}
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