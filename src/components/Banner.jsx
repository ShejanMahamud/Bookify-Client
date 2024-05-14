import React, { useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import useAxiosSecure from '../hooks/useAxiosSecure';

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [books,setBooks] = useState([])
  const [loading,setLoading] = useState(false)
const axiosSecure = useAxiosSecure();
const navigate = useNavigate();

const handleSearch = async (e) => {
  setIsOpen(true)
  setLoading(true)
  const {data} = await axiosSecure.get(`/books?search=${e.target.value}`)
  setBooks(data)
  setLoading(false)
}


  return (
    <div className="w-full font-inter relative z-10">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      <SwiperSlide>
        <div className=" w-full lg:h-[600px]  md:h-[600px] h-[700px] grid lg:grid-cols-2 grid-cols-1 row-auto items-center justify-items-end lg:px-20 px-10 pt-10 lg:gap-20 md:gap-20 gap-5">
<div>
<h1 className="lg:text-5xl md:text-4xl text-4xl font-bold my-5">
            Find Your Best Friend
          </h1>
          <p className=" opacity-80  mb-10 lg:text-base md:text-base font-poppins text-sm">
          "We offer the most comprehensive collection of books from various genres, ranging from fiction to non-fiction, to cater to the reading preferences of all ages"
          </p>
          <form onChange={handleSearch} className='flex items-center gap-5 rounded-lg px-2 py-2 border border-gray-500 border-opacity-30 w-[90%] relative'>
          <input name='search' type="text" className='bg-transparent focus:outline-none w-full py-2 px-5' placeholder='Write Book Name'/>
          <IoSearch className='text-primary text-3xl'/>
          {
          isOpen && <div>
            <button
                  onClick={() => setIsOpen(false)}
                  className="text-red-500 absolute -right-2 text-3xl -bottom-8 z-50"
                >
                  <IoIosCloseCircle />
                </button>
         <div className='dark:bg-gray-100 bg-white px-5 py-5 rounded-md flex flex-col items-center gap-3 h-[200px] overflow-y-scroll absolute w-full -bottom-52 left-0'>
          {
            loading ? <div className="w-full min-h-screen bg-transparent flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin  border-primary dark:border-primary bg-transparent"></div>
          </div>
          : 
         books && books.map(book => (
          <div onClick={()=>navigate(`/book/${book?._id}`)} className='w-full flex items-center justify-between cursor-pointer'>
              <img src={book?.book_photo} alt="book" className='w-16 h-16 object-cover rounded-md'/>
              <h1 className='text-base font-medium'>{book?.book_name}</h1>
          </div>
         ))
          }
        </div>
          </div>
        }
          </form>
</div>
<div className='w-full'>
  
  <img src="https://i.ibb.co/9yR84Pd/Animation.png" alt="" className='lg:w-full md:w-full'/>
</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-full lg:h-[600px]  md:h-[600px] h-[700px] grid lg:grid-cols-2 grid-cols-1 row-auto items-center justify-items-end lg:px-20 px-10 pt-10 lg:gap-20 md:gap-20 gap-5">
<div>
<h1 className="lg:text-5xl md:text-4xl text-4xl font-bold my-5">
New Releases This Week
          </h1>
          <p className=" opacity-80  mb-10 lg:text-base md:text-base font-poppins text-sm">
          "It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone"
          </p>
          <button onClick={()=>navigate('/books_category/Islamic')} className='bg-primary text-white text-sm px-4 py-3 rounded-md font-medium'>
    Explore New Release
  </button>
</div>
<div className='w-full flex items-center  lg:justify-center md:justify-center justify-start'>
  <img src="https://blog-cdn.reedsy.com/directories/gallery/174/large_1c4ae67e28c39263ee50465cbf71c67a.jpg" alt="" className='lg:w-80 md:w-72 w-52 rounded-lg'/>
  
</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-full lg:h-[600px]  md:h-[600px] h-[700px] grid lg:grid-cols-2 grid-cols-1 row-auto items-center justify-items-end lg:px-20 px-10 pt-10 lg:gap-20 md:gap-20 gap-5">
<div>
<h1 className="lg:text-5xl md:text-4xl text-4xl font-bold my-5">
Featured Book This Week
          </h1>
          <p className=" opacity-80  mb-10 lg:text-base md:text-base font-poppins text-sm">
          "Explore the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new arrivals offer something for every reader."
          </p>
  <button className='bg-primary text-white text-sm px-4 py-3 rounded-md font-medium'>
    <a href="#featured">Explore Featured</a>
  </button>
</div>
<div className='w-full flex items-center  lg:justify-center md:justify-center justify-start'>
  <img src="https://i.ibb.co/4ZfVBcJ/large-b2503e20731c213e4378b46676598f7d.jpg" alt="" className='lg:w-80 md:w-72 w-52 rounded-lg'/>
</div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Banner