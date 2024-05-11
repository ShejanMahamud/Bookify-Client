import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Utils/Book';

const BooksByCategory = () => {

const {data} = useLoaderData();

  return (
    <div className='w-full font-inter my-28'>
              <div className="flex flex-col items-center justify-center gap-2 w-[90%] mx-auto mb-16">
        <h1 className="text-primary font-medium">Books Category</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          Browse Books By Category
        </span>
        <p className="text-[#737D8C] text-sm">

         Explore books and find your best friends
        </p>
      </div>
        <div className='w-[90%] mx-auto grid grid-cols-2 row-auto items-stretch gap-x-10 gap-y-5'>
        {
            data.map(book => <Book key={book._id} book={book}/>)
        }
        </div>
    </div>
  )
}

export default BooksByCategory