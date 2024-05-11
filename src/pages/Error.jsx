import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

const navigate = useNavigate()

  return (
    <div className='w-full flex items-center justify-center flex-col font-inter'>
      <img src="https://i.ibb.co/F5ykHHT/Books.png" alt="book.png" />
      <h1 className='text-[180px] text-primary font-medium leading-[130px] mb-10'>404</h1>
      <p className='text-2xl'>Looks like you’ve got lost...</p>
      <p className='text-gray-400 my-3'>The page you’re looking for doesn’t exist or has been moved.</p>
      <button onClick={()=>navigate('/')} className='bg-primary text-white text-lg px-4 py-2 rounded-md'>Go Home</button>
    </div>
  )
}

export default Error