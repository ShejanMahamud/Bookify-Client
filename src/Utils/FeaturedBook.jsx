import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { LuTag } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const FeaturedBook = ({book}) => {

const navigate = useNavigate();
const {book_name,book_photo,book_author,book_rating,book_description,id,book_category} = book

  return (
    <div className='flex lg:flex-row flex-col lg:items-end items-start gap-8 w-full rounded-md px-5 py-5'>
    <img src={book_photo} alt="book.png" className='h-[280px] w-[200px] object-cover rounded-md'/>
    <div className='flex flex-col items-start gap-4 justify-between'>
      <h1 className='text-xl font-medium'>{book_name}</h1>
      <p className='text-sm font-mukti'>{book_description}</p>
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

      <button onClick={()=>navigate(`/book/${id}`)}
  className="uppercase bg-primary text-white font-bold px-4 py-2 rounded-md flex items-center gap-3 justify-center text-sm"
>
  <span>Details</span>
  <GoArrowRight className="text-2xl" />
</button>
    </div>
  </div>
  )
}

export default FeaturedBook