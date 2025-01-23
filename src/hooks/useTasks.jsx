import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTasks = (email) => {
    const axiosPublic = useAxiosPublic();

    const { data: tasks = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['tasks', email], // Unique query key based on email
        queryFn: async () => {
            const endpoint = email ? `/tasks?email=${email}` : '/tasks';
            const res = await axiosPublic.get(endpoint);
            return res.data;
        },
        
    });

    return [tasks, loading, refetch];
};

export default useTasks;