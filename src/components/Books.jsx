import React, { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import FeaturedBook from '../Utils/FeaturedBook';
import useAxiosSecure from '../hooks/useAxiosSecure';

const Books = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure()
    const [books, setBooks] = useState([]);
  
    useEffect(()=>{
      const getBooks = async () => {
        const {data} = await axiosSecure.get('/featured_books')
        setBooks(data);
      }
      getBooks()
    },[])    

  return (
    <div className='w-full my-28 font-inter flex flex-col items-center'>
              <div className="flex flex-col items-center justify-center gap-2 w-[90%] mx-auto mb-16">
        <h1 className="text-primary font-medium">Featured Books</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          Featured Books This Week
        </span>
        <p className="text-[#737D8C] text-sm">

         Explore books and find your best friends
        </p>
      </div>

    <div className='w-full lg:px-20 px-5 py-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-stretch row-auto gap-10'>
    {
       books && books.map(book => <FeaturedBook key={book._id} book={book}/>)
    }
    </div>
    <button onClick={()=>navigate('/all_books')} className=" uppercase bg-primary text-white text-sm px-4 py-2 rounded-md flex items-center gap-3 justify-center my-10">
        <span>More Books</span>
        <GoArrowRight className="text-2xl" />
      </button>

    </div>
  )
}

export default Books