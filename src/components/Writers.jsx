import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const Writers = () => {

const navigate = useNavigate();
const axiosSecure = useAxiosSecure();
const {data} = useQuery({
    queryKey: ['writers'],
    queryFn: async () => {
        const {data} = await axiosSecure.get('/writers')
        return data;
    }
})

// if (isPending) {
//   return (
//     <div className="flex items-center justify-center space-x-2 min-h-screen w-full">
//       <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
//       <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
//       <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
//     </div>
//   );
// }

  return (
    <div className="flex flex-col items-center my-28 font-poppins">
        <div className="flex flex-col items-center gap-2 mb-20 w-[90%] mx-auto">
        <h1 className="text-primary font-medium">Our Writers</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          Choose Your Favorite One
        </span>
        <p className="text-[#737D8C] text-sm">
          Writers are the key of good books
        </p>
      </div>

      <Swiper 
    className='w-[90%] mx-auto'
  modules={[Navigation]}
 spaceBetween={50}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
      > 

      {
          data && data.map(writer => (
                <SwiperSlide>
                    <div key={writer._id} onClick={()=>navigate(`/writer_books/${writer?.writer_name}`)} className='flex flex-col items-center gap-2'>
            <div className='h-40 w-40 cursor-pointer overflow-hidden rounded-full border-2 border-primary'>
            <img src={writer?.writer_photo} alt="categories.jpg" className='w-full h-full object-cover  hover:scale-110 duration-500 hover:grayscale'/>
            </div>
            <h1 className='font-medium text-base text-center'>{writer?.writer_name}</h1>
            <p className='text-primary text-sm font-medium'>{writer?.writer_book_count} Books</p>
        </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}

export default Writers