import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import TiltCard from './../Utils/TiltCard';

const Banner = () => {
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
        <div className=" w-full lg:h-[600px]  md:h-[600px] h-[700px] grid grid-cols-2 row-auto items-center justify-items-end lg:px-20 px-10 pt-10 gap-20">
<div>
<h1 className="lg:text-5xl md:text-4xl text-4xl font-bold my-5">
            Find Your Best Friend
          </h1>
          <p className=" opacity-80  mb-10 lg:text-base md:text-base font-poppins text-sm">
          "We offer the most comprehensive collection of books from various genres, ranging from fiction to non-fiction, to cater to the reading preferences of all ages"
          </p>
          <div className='flex items-center gap-5 rounded-lg px-2 py-2 border border-gray-500 border-opacity-30 w-[90%]'>
          <input type="text" className='bg-transparent focus:outline-none w-full py-2 px-5' placeholder='Write Book Name'/>
          <button className='bg-primary  text-lg font-medium px-4 py-2 rounded-lg text-white'>Search</button>
          </div>
</div>
<div className='w-full'>
  {/* <img src="https://i.ibb.co/9yR84Pd/Animation.png" alt="" className='w-[500px]'/> */}
  <TiltCard image={'https://i.ibb.co/9yR84Pd/Animation.png'} height={'450px'} width={'500px'}/>
</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-full lg:h-[600px]  md:h-[600px] h-[700px] grid grid-cols-2 row-auto items-center justify-items-end lg:px-20 px-10 pt-10 gap-20">
<div>
<h1 className="lg:text-5xl md:text-4xl text-4xl font-bold my-5">
New Releases This Week
          </h1>
          <p className=" opacity-80  mb-10 lg:text-base md:text-base font-poppins text-sm">
          "It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone"
          </p>
          <div className='flex items-center gap-5 rounded-lg px-2 py-2 border border-gray-500 border-opacity-30 w-[90%]'>
          <input type="text" className='bg-transparent focus:outline-none w-full py-2 px-5' placeholder='Write Book Name'/>
          <button className='bg-primary  text-lg font-medium px-4 py-2 rounded-lg text-white'>Search</button>
          </div>
</div>
<div className='w-full'>
  {/* <img src="https://i.ibb.co/9yR84Pd/Animation.png" alt="" className='w-[500px]'/> */}
  <TiltCard image={'https://blog-cdn.reedsy.com/directories/gallery/174/large_1c4ae67e28c39263ee50465cbf71c67a.jpg'} height={'450px'} width={'300px'}/>
  
</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-full lg:h-[600px]  md:h-[600px] h-[700px] grid grid-cols-2 row-auto items-center justify-items-end lg:px-20 px-10 pt-10 gap-20">
<div>
<h1 className="lg:text-5xl md:text-4xl text-4xl font-bold my-5">
Featured Book This Week
          </h1>
          <p className=" opacity-80  mb-10 lg:text-base md:text-base font-poppins text-sm">
          "It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone"
          </p>
          <div className='flex items-center gap-5 rounded-lg px-2 py-2 border border-gray-500 border-opacity-30 w-[90%]'>
          <input type="text" className='bg-transparent focus:outline-none w-full py-2 px-5' placeholder='Write Book Name'/>
          <button className='bg-primary  text-lg font-medium px-4 py-2 rounded-lg text-white'>Search</button>
          </div>
</div>
<div className='w-full'>
  {/* <img src="https://i.ibb.co/9yR84Pd/Animation.png" alt="" className='w-[500px]'/> */}
  <TiltCard image={'https://i.ibb.co/4ZfVBcJ/large-b2503e20731c213e4378b46676598f7d.jpg'} height={'450px'} width={'300px'}/>
  
</div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Banner