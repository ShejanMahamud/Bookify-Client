import { useQuery } from '@tanstack/react-query'
import useAxiosCommon from './useAxiosCommon'

const useAllBooks = (currentPage,itemsPerPage) => {
const axiosCommon = useAxiosCommon()

const {data:books,isPending} = useQuery({
    queryKey: ['all_books',currentPage,itemsPerPage],
    queryFn: async () => {
        const {data} = await axiosCommon.get(`/books?page=${currentPage}&size=${itemsPerPage}`)
        return data
    }
})
return {books,isPending}
}

export default useAllBooks