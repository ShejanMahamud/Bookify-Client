import React from 'react';
import { IoBookOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useAllBooks from '../../hooks/useAllBooks';
import useStats from '../../hooks/useStats';


const LibrarianOverview = () => {

const {data:stats,isPending} = useStats()


const {books,isPending:pending} = useAllBooks()

  if(isPending || pending){
    return <div className="w-full min-h-screen flex items-center justify-center space-x-2">
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  </div>
  }

  return (
    <div className='w-full min-h-screen py-10 px-10 border-l border-[#E4E5E8]'
    >
        <div className='w-full grid grid-cols-3 row-auto items-center gap-10'>
            <div className='w-full bg-white shadow-md rounded-md px-5 py-5 flex items-center gap-10 border-[#E4E5E8] border'>
              <div className='bg-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl '>
                <IoBookOutline/>
              </div>
              <div className='flex flex-col items-start gap-1'>
                <h1 className='font-formal text-sm'>Total Books</h1>
                <span className='text-3xl font-bold'>{stats?.bookCount}+</span>
              </div>
            </div>
            <div className='w-full bg-white shadow-md rounded-md px-5 py-5 flex items-center gap-10 border-[#E4E5E8] border'>
              <div className='bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl '>
                <LuUser2/>
              </div>
              <div className='flex flex-col items-start gap-1'>
                <h1 className='font-formal text-sm'>Total User</h1>
                <span className='text-3xl font-bold'>{stats?.user}+</span>
              </div>
            </div>
            <div className='w-full bg-white shadow-md rounded-md px-5 py-5 flex items-center gap-10 border-[#E4E5E8] border'>
              <div className='bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl '>
                <IoShieldCheckmarkOutline/>
              </div>
              <div className='flex flex-col items-start gap-1'>
                <h1 className='font-formal text-sm'>Borrowed Books</h1>
                <span className='text-3xl font-bold'>{stats.borrowedBooksCount}+</span>
              </div>
            </div>
        </div>

        <div className='w-full grid grid-cols-2 row-auto items-center gap-10'>

        <AreaChart
          width={500}
          height={400}
          data={books}
          margin={{
            top: 100,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="book_name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="book_quantity" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>

        <LineChart
          width={500}
          height={400}
          data={books}
          margin={{
            top: 100,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="book_rating" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="book_rating" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="book_author" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>

        </div>
    </div>
  )
}

export default LibrarianOverview