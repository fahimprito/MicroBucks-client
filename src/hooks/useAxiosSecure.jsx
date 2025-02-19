import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://micro-bucks-server.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOutUser } = useAuth();


    // request interceptor to add authorization header
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        if (token) {
            // console.log('token', token)
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;

        // for 401 or 403 logout the user
        if (status === 401 || status === 403) {
            await logOutUser();
            navigate('/login');
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;