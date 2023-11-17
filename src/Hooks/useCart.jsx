import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";


const useCart = () => {
    const { user } = useAuth()
    const { data: carts = [], refetch } = useQuery({
        queryKey: ['carts', user],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/v1/getCarts?email=${user?.email}`)
            console.log(res.data);
            return res.data
        },
    })
    return [carts, refetch]
};

export default useCart;