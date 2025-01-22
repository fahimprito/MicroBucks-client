import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAuthUser = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: userData, isPending: authLoading, refetch } = useQuery({
        queryKey: ["userData", user?.email],
        queryFn: async () => {
            if (!user?.email) return null; // no user, return null
            const res = await axiosSecure.get(`/users/${user.email}`);
            return res.data;
        },
        enabled: !!user?.email && !loading, // only fetch if the user is logged in
    });

    return { userData, authLoading, refetch };
};

export default useAuthUser;