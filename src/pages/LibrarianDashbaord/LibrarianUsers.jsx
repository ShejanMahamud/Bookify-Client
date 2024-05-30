import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosCommon from '../../hooks/useAxiosCommon'

const LibrarianUsers = () => {

const axiosCommon = useAxiosCommon()
const {data:users,isPending} = useQuery({
    queryKey: ['users_dash'],
    queryFn: async () => {
        const {data} = await axiosCommon.get('/users?email=dev.shejanmahamud@gmail.com')
        return data
    }
})

if(isPending){
    return <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  </div>
  }

  return (
    <div className='w-full min-h-screen border-l border-[#E4E5E8] p-10'>
        <h1 className='text-xl font-medium mb-10'>Total Users ({users.length})</h1>
        <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Borrowed Books</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user => (
            <tr key={user?._id}>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user?.name} </div>
              
            </div>
          </div>
        </td>
        <td>
          {
            user?.bookNames.length > 0 ?  user?.bookNames.map(bookName => (
                <span className='text-sm'>{bookName}</span>
            ))
            : 
            <span className='text-sm'>No Borrowed Books</span>
          }
        </td>

        <td>
        <div className="text-sm opacity-50 uppercase">{user?.role}</div>
        </td>
        
        <th>
          <button className="bg-primary text-white px-2 py-1 text-xs rounded-md">Delete</button>
        </th>
      </tr>
        ))
      }
    </tbody>
    
  </table>
</div>
    </div>
  )
}

export default LibrarianUsers