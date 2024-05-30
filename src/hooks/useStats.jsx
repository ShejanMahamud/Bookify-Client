import { useQuery } from '@tanstack/react-query'
import useAxiosCommon from './useAxiosCommon'

const useStats = () => {
    const axiosCommon = useAxiosCommon()
    const {data:stats,isPending} = useQuery({
      queryKey: ['stats'],
      queryFn: async () => {
        const {data} = await axiosCommon.get('/stats')
        return data
      }
    })
    return {data:stats,isPending}
}

export default useStats