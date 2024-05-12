import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Categories = () => {
const navigate = useNavigate();

  return (
    <div className='font-inter w-full my-28'>

      <div className="flex flex-col items-center justify-center gap-2 w-[90%] mx-auto mb-16">
        <h1 className="text-primary font-medium">Books Category</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          Browse Books Category
        </span>
        <p className="text-[#737D8C] text-sm">

         Explore books and find your best friends
        </p>
      </div>
        {/* <div className='w-[90%] mx-auto grid grid-cols-3 row-auto items-center gap-10 py-5 '>
        <div className={`w-full bg-banner-4 bg-no-repeat bg-cover bg-center h-[200px] rounded-lg flex flex-col items-center justify-center gap-1`}>
            <h1 className='text-2xl text-white font-medium'>Islamic Books</h1>
            <p className='text-white text-sm'>4 Books</p>
        </div>
        <div className={`w-full bg-banner-5 bg-no-repeat bg-cover bg-center h-[200px] rounded-lg flex flex-col items-center justify-center gap-1`}>
            <h1 className='text-2xl text-white font-medium'>Careers Books</h1>
            <p className='text-white text-sm'>4 Books</p>
        </div>
    </div> */}
    <Swiper 
    className='w-[90%] mx-auto'
  modules={[Navigation]}
 spaceBetween={50}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      > 
      <div className='w-[90%] mx-auto grid grid-cols-3 row-auto items-center gap-10 py-5 '>
      <SwiperSlide>
      <div className={`w-full bg-banner-4 bg-no-repeat bg-cover bg-center h-[200px] rounded-lg flex flex-col items-center justify-center gap-3`}>
            <h1 className='text-2xl text-white font-medium'>Islamic Books</h1>
            <button onClick={()=>navigate(`/books_category/Islamic`)} className='text-xs px-2 py-2 rounded-md bg-primary text-white'>Explore Islamic</button>
        </div>
      </SwiperSlide>
      <SwiperSlide >
      <div className={`w-full bg-banner-5 bg-no-repeat bg-cover bg-center h-[200px] rounded-lg flex flex-col items-center justify-center gap-3 cursor-pointer`}>
            <h1 className='text-2xl text-white font-medium'>Careers Books</h1>
            <button onClick={()=>navigate(`/books_category/Careers`)} className='text-xs px-2 py-2 rounded-md bg-primary text-white'>Explore Careers</button>
        </div>
      </SwiperSlide>
      <SwiperSlide >
      <div className={`w-full bg-banner-6 bg-no-repeat bg-cover bg-center h-[200px] rounded-lg flex flex-col items-center justify-center gap-3 cursor-pointer`}>
            <h1 className='text-2xl text-white font-medium'>Thriller Books</h1>
            <button onClick={()=>navigate(`/books_category/Thriller`)} className='text-xs px-2 py-2 rounded-md bg-primary text-white'>Explore Thriller</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`w-full bg-banner-7 bg-no-repeat bg-cover bg-center h-[200px] rounded-lg flex flex-col items-center justify-center gap-3`}>
            <h1 className='text-2xl text-white font-medium'>Drama Books</h1>
            <button onClick={()=>navigate(`/books_category/Drama`)} className='text-xs px-2 py-2 rounded-md bg-primary text-white'>Explore Drama</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`w-full bg-banner-8 bg-no-repeat bg-cover bg-center h-[200px] rounded-lg flex flex-col items-center justify-center gap-3`}>
            <h1 className='text-2xl text-white font-medium'>History Books</h1>
            <button onClick={()=>navigate(`/books_category/History`)} className='text-xs px-2 py-2 rounded-md bg-primary text-white'>Explore History</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`w-full bg-banner-9 bg-no-repeat bg-cover bg-center h-[200px] rounded-lg flex flex-col items-center justify-center gap-3`}>
            <h1 className='text-2xl text-white font-medium'>Novel Books</h1>
            <button onClick={()=>navigate(`/books_category/Novel`)} className='text-xs px-2 py-2 rounded-md bg-primary text-white'>Explore Novel</button>
        </div>
      </SwiperSlide>
      </div>
      </Swiper>
    </div>
  )
}

export default Categories