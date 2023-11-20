import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
// import useAxiosSecure from "./useAxiosSecure";



const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { user,loading } = useAuth()
    const { data: carts = [], refetch } = useQuery({
        queryKey: ['carts', user],
        enabled: !loading && !!user?.email && !!localStorage.getItem('token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/getCarts?email=${user?.email}`)
            // console.log(res.data);
            return res.data
        },
    })
    return [carts, refetch]
};

export default useCart;