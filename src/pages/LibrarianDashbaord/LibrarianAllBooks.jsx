import { Rating } from '@smastrom/react-rating';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import useAxiosCommon from '../../hooks/useAxiosCommon';
const LibrarianAllBooks = () => {
    const navigate= useNavigate()
    // const {books,isPending} = useAllBooks()
    const axiosCommon = useAxiosCommon()
    const [itemsPerPage,setItemsPerPage] = useState(5);
    const [count,setCount] = useState(0)
    const numberOfPages = Math.ceil(count / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(1)

    const pages = [...Array(numberOfPages).keys()].map(num => num  + 1)

    const {data:books,isPending} = useQuery({
        queryKey: ['all_books',currentPage,itemsPerPage],
        queryFn: async () => {
            const {data} = await axiosCommon.get(`/books?page=${currentPage}&size=${itemsPerPage}`)
            setCount(data.count)
            return data.books
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
        <h1 className='text-xl font-medium mb-10'>Total Books ({count})</h1>
        <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Book Details</th>
        <th>Book About</th>
        <th>Rating</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
          {
          books && books.map(book=> (
              <tr key={book._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img src={book?.book_photo} alt="book" />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="font-bold w-full">{book?.book_name}</div>
                    <div className="text-sm opacity-50">{book?.book_author}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-2">
                <p className="text-ellipsis overflow-hidden ...">{book?.book_description}</p>
                <span className="badge badge-ghost badge-md">{book?.book_category}</span>
                </div>
              </td>
              <td>
              <Rating
style={{ maxWidth: 100 }}
value={book?.book_rating}
readOnly
/>
              </td>
              <th>
                <button 
                onClick={()=>navigate(`/librarian/dashboard/update_book/${book?._id}`)}
                 className="uppercase text-xs text-white px-4 py-2 rounded-md bg-primary">Update</button>
              </th>
            </tr>
            ))
          }
    </tbody>
    
  </table>
</div>
<div className="flex items-center gap-5 py-10 px-20 w-full justify-center">
      <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage === 1} className={` flex items-center justify-center h-10 w-10 rounded-full text-2xl ${currentPage === 1 ? 'text-[#99C2FF] bg-[#E7F0FA]' : 'bg-[#E7F0FA] text-primary'}`}>
      <IoIosArrowBack />
            </button>
         {
          pages.map(page => (
            <button key={page} onClick={()=>setCurrentPage(page)} className={`flex items-center justify-center h-10 w-10 rounded-full text-lg font-medium ${currentPage === page ? 'bg-primary text-white ': 'bg-[#F1F2F4] text-[#5E6670]'}`}>
            {page}
            </button>
          ))
         }
               <button disabled={currentPage === numberOfPages} onClick={()=>setCurrentPage(currentPage + 1)} className={`bg-[#E7F0FA] flex items-center justify-center h-10 w-10 rounded-full text-2xl text-primary} ${currentPage === numberOfPages ? 'text-[#99C2FF] bg-[#E7F0FA]' : 'bg-[#E7F0FA] text-primary'}`}>
      <IoIosArrowForward/>
            </button>
      </div>
    </div>
  )
}

export default LibrarianAllBooks