import React from 'react'

const Stats = () => {
  return (
    <div className='w-full my-10 font-inter'>
        <div className='bg-banner-10 px-20 w-full lg:py-16 md:py-16 py-10 bg-no-repeat bg-cover bg-center flex lg:flex-row md:flex-row flex-col items-center justify-around gap-10 lg:gap-0'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-white font-extrabold lg:text-5xl md:text-5xl text-4xl'>250+</h1>
                <p className='text-white text-sm'>Active Students</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-white font-extrabold lg:text-5xl md:text-5xl text-4xl'>1550+</h1>
                <p className='text-white text-sm'>Books</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-white font-extrabold lg:text-5xl md:text-5xl text-4xl'>550+</h1>
                <p className='text-white text-sm'>Daily Readers</p>
            </div>
        </div>
    </div>
  )
}

export default Stats