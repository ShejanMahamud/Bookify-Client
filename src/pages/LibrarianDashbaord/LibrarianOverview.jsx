import React from 'react';
import { IoBookOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useStats from '../../hooks/useStats';


const LibrarianOverview = () => {

const {data:stats,isPending} = useStats()


  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  if(isPending){
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
          data={data}
          margin={{
            top: 100,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>

        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 100,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>

        </div>
    </div>
  )
}

export default LibrarianOverview