import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import News from './../Utils/News';

const NewsSection = () => {
    const axiosSecure = useAxiosSecure()
  const [news, setNews] = useState([]);

  useEffect(()=>{
    const getNews = async () => {
      const {data} = await axiosSecure.get('/news')
      setNews(data);
    }
    getNews()
  },[]) 


  return (
    <div className='w-[90%] mx-auto my-28 font-inter'>
            <div className="flex flex-col items-center justify-center gap-2 w-[90%] mx-auto mb-16">
        <h1 className="text-primary font-medium">Top News</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          Explore Some Articles
        </span>
        <p className="text-[#737D8C] text-sm">

         Explore news and articles about book
        </p>
      </div>
      <div>
      <Swiper 
  modules={[Navigation]}
 spaceBetween={30}
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
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      > 
      {
          news.map((news,index)=> (<SwiperSlide key={index}><News key={index} news={news}></News></SwiperSlide>))
      }</Swiper>
      </div>
    </div>
  )
}

export default NewsSection