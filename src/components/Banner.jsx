import React from 'react';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

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
        <div className="bg-banner-1 bg-cover bg-no-repeat bg-right w-full lg:h-[600px]  md:h-[600px] h-[700px] flex  flex-col justify-center lg:px-20 px-10 pt-10 items-start">
          <h1 className="lg:text-6xl md:text-4xl text-4xl font-bold text-white lg:w-[60%] md:w-[60%] w-[90%] my-5 font-clickerScript">
            Find Your Best Friend
          </h1>
          <p className="text-white opacity-80 lg:w-[40%] md:w-[40%] w-[90%] mb-10 lg:text-base md:text-base font-poppins text-sm">
          "We offer the most comprehensive collection of books from various genres, ranging from fiction to non-fiction, to cater to the reading preferences of all ages"
          </p>
          <div className='flex items-center gap-5 bg-white rounded-lg px-2 py-2'>
          <input type="text" className='bg-transparent focus:outline-none w-full py-2 px-5' placeholder='Write Book Name'/>
          <button className='bg-primary text-white text-lg font-medium px-4 py-2 rounded-lg'>Search</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-banner-2 bg-cover bg-no-repeat bg-center w-full lg:h-[600px]  md:h-[600px] h-[700px] flex  flex-col justify-center lg:px-20 px-10 pt-10 items-start">
          <h1 className="lg:text-6xl md:text-4xl text-4xl font-bold lg:w-[40%] md:w-[60%] w-[90%] my-5 font-clickerScript text-white">
            Oil Painting Art Collections
          </h1>
          <p className=" opacity-80 lg:w-[40%] md:w-[40%] w-[90%] mb-10 text-white lg:text-base md:text-base font-poppins text-sm">
          Immerse yourself in the rich textures and vibrant hues of our oil painting collection. Each piece is a masterpiece of artistic expression, capturing the essence of life and emotion on canvas.
          </p>
          <button className="bg-primary px-4 py-3 text-base font-poppins text-white font-medium uppercase rounded">
            <Link to={'/category/Oil%20Painting'}>Explore Arts</Link>
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-banner-3 bg-cover bg-no-repeat bg-center w-full lg:h-[600px]  md:h-[600px] h-[700px] flex flex-col justify-center lg:px-20 px-10 pt-10 items-start">
          <h1 className="lg:text-6xl md:text-4xl text-4xl font-bold text-white lg:w-[40%] md:w-[60%] w-[90%] my-5 font-clickerScript">
            Charcoal Sketching Collections
          </h1>
          <p className="text-white opacity-80 lg:w-[40%] md:w-[40%] w-[90%] mb-10 lg:text-base md:text-base font-poppins text-sm">
          Discover the artistry of charcoal sketching in our exclusive collection. Each piece captures the raw emotion and depth of the human experience, inviting viewers to contemplate the essence of existence.
          </p>
          <button className="bg-primary px-4 py-3 text-base font-poppins text-white font-medium uppercase rounded">
            <Link to={'/category/Charcoal%20Sketching'}>Explore Arts</Link>
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Banner