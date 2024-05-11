import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const BookListCard = ({book}) => {

 const navigate = useNavigate();
 
 const {book_name,book_photo,book_author,book_rating,book_description,_id} = book

  return (
    <div className='w-full px-3 py-3 rounded-lg border border-gray-500 border-opacity-20 flex items-center justify-between'>
    <div className='flex items-center gap-3'>
    <img src={book_photo} alt="book.png" className='w-16 object-cover rounded-md'/>
    <div className='flex flex-col items-start gap-2'>
    <h1 className='text-xl font-medium'>{book_name}</h1>
      {/* <p className='text-sm font-mukti w-[60%]'>{book_description}</p> */}
      <p className='font-medium text-primary text-sm'>{book_author}</p>
      <Rating
style={{ maxWidth: 100 }}
value={book_rating}
readOnly
/>
    </div>
    
    </div>
    <button onClick={()=>navigate(`/update_book/${_id}`)}
  className="uppercase bg-primary text-white font-bold px-4 py-2 rounded-md flex items-center gap-3 justify-center text-sm"
>
  <span>Update</span>
  <GoArrowRight className="text-2xl" />
</button>
  </div>
  )
}

export default BookListCard