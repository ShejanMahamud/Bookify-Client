import React, { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import Book from '../Utils/Book';
import useAxiosSecure from '../hooks/useAxiosSecure';

const Books = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure()
    const [books, setBooks] = useState([]);
  
    useEffect(()=>{
      const getBooks = async () => {
        const {data} = await axiosSecure.get('/books')
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

    <div className='w-full px-20 py-10 grid grid-cols-2 items-stretch row-auto gap-10'>
    {
        books.slice(10,16).map(book => <Book key={book._id} book={book}/>)
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