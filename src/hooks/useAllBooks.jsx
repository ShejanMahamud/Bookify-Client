import { useQuery } from '@tanstack/react-query'
import useAxiosCommon from './useAxiosCommon'

const useAllBooks = () => {
const axiosCommon = useAxiosCommon()

const {data:books,isPending} = useQuery({
    queryKey: ['all_books'],
    queryFn: async () => {
        const {data} = await axiosCommon.get(`/books`)
        return data.books
    }
})
return {books,isPending}
}

export default useAllBooks