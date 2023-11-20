import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";


const useAdmin = () => {
    const { user, loading } = useAuth()
    console.log(user);
    const axiosSecure = useAxiosSecure()
    const { data: isAdmin, isLoading: isAdminPending } = useQuery({
        queryKey: ['admin', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/getUsers/admin/${user?.email}`)
            console.log(res.data?.admin);
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminPending]
};

export default useAdmin;