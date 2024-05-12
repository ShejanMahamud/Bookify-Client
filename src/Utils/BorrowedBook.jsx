import { Rating } from '@smastrom/react-rating';
import React from 'react';
import toast from 'react-hot-toast';
import { GoArrowRight } from 'react-icons/go';
import { LuTag } from 'react-icons/lu';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useBorrowedBooks from '../hooks/useBorrowedBooks';

const BorrowedBook = ({book}) => {
const axiosSecure = useAxiosSecure();
const {book_name,book_photo,book_author,book_rating,_id,book_category,borrowed_date,return_date} = book;
const {refetch} = useBorrowedBooks();

const handleReturnBook = async (id) => {
  try{
    const {data} = await axiosSecure.delete(`/borrowed_book/${id}/${book_name}`);
    if(data.deletedCount > 0){
      toast.success('Deleted Successfully!');
      refetch();
    }
  }
  catch(error){
    toast.error('Something Went Wrong!')
  }
}

  return (
    <div className='flex items-end gap-8 w-full rounded-md px-5 py-5'>
    <img src={book_photo} alt="book.png" className='h-[280px] w-[200px] object-cover rounded-md'/>
    <div className='flex flex-col items-start gap-4 justify-between'>
      <h1 className='text-xl font-medium'>{book_name}</h1>
      <p className='font-medium text-primary'>{book_author}</p>

      <div className='flex items-center gap-1'>
      <LuTag className='text-lg'/> 
      <span className='text-base font-medium'>{book_category}</span>
      </div>
      <Rating
style={{ maxWidth: 100 }}
value={book_rating}
readOnly
/>
<p className='text-sm font-medium'>Borrowed: <span className='text-primary'>{borrowed_date}</span></p>
      <p className='text-sm font-medium'>Return: <span className='text-primary'>{return_date}</span></p>
      <button onClick={()=>handleReturnBook(_id)}
  className="uppercase bg-primary text-white font-bold px-4 py-2 rounded-md flex items-center gap-3 justify-center text-sm"
>
  <span>Return</span>
  <GoArrowRight className="text-2xl" />
</button>
    </div>
  </div>
  )
}

export default BorrowedBook