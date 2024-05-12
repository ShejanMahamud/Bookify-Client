import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useBorrowedBooks = () => {
const {user} = useAuth();
const axiosSecure = useAxiosSecure();

const {data,isPending,refetch} = useQuery({
    queryKey: ['borrowed_books'],
    queryFn: async () => {
      const {data} = await axiosSecure.get(`/borrowed_books/${user?.email}`)
      return data;
    }
  })
return {data,isPending,refetch}
}

export default useBorrowedBooks