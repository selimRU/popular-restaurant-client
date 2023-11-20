import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',

});

const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(function (config) {
    console.log('token', localStorage.getItem('token'));
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    },
        async (error) => {
            const status = error.response.status
            if (status === 401 || status === 403) {
                await logOut()
                navigate('/logIn')
                // useEffect(() => {
                //     const handleLogoutAndNavigate = async () => {
                //         await logOut();
                //         navigate('/logIn');
                //     };

                //     handleLogoutAndNavigate();
                // }, []);
            }
            return Promise.reject(error);
        });
    return axiosSecure
};

export default useAxiosSecure;