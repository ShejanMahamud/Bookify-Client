import React from 'react'

const Stats = () => {
  return (
    <div className='w-full my-10 font-inter'>
        <div className='bg-banner-10 px-20 w-full py-16 bg-no-repeat bg-cover bg-center flex items-center justify-around'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-white font-extrabold text-5xl'>250+</h1>
                <p className='text-white text-sm'>Active Students</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-white font-extrabold text-5xl'>1550+</h1>
                <p className='text-white text-sm'>Books</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-white font-extrabold text-5xl'>550+</h1>
                <p className='text-white text-sm'>Daily Readers</p>
            </div>
        </div>
    </div>
  )
}

export default Stats