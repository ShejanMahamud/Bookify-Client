import React from 'react';
import { IoAddCircleOutline, IoBookOutline, IoChevronBack, IoLogOutOutline } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { RiStackFill } from "react-icons/ri";
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const LibrarianDashbaord = () => {
  const {user} = useAuth()
    const {loading} = useAuth()
    const currentYear = new Date().getFullYear();

    if(loading){
        return <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      </div>
      }

  return (
    <>
    <div className='w-full  px-10 border-r border-[#E4E5E8] grid grid-cols-[20%_80%] row-auto items-start'>
    <div className='w-full h-full py-10 flex flex-col items-start justify-between'>
      <div>
      <h1 className='font-medium text-[#9199A3] text-sm uppercase mb-5'>Librarian Dashboard</h1>
      <div className='w-full flex flex-col items-start'>

        <NavLink
        end
            className={({ isActive }) =>
              isActive
                ? "bg-[#E7F0FA] text-primary w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/librarian/dashboard"}
          >
            <RiStackFill className='text-xl'/>
          <span className='text-base'>Overview</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#E7F0FA] text-primary w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/librarian/dashboard/users"}
          >
            <LuUserCircle2 className='text-xl'/>
          <span className='text-base'>Users</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#E7F0FA] text-primary w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/librarian/dashboard/all_books"}
          >
            <IoBookOutline  className='text-xl'/>
          <span className='text-base'>All Books</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#E7F0FA] text-primary w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/librarian/dashboard/add_book"}
          >
            <IoAddCircleOutline className='text-xl'/>
          <span className='text-base'>Add Books</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#E7F0FA] text-primary w-full flex items-center gap-3 py-3 px-3"
                : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
            }
            to={"/"}
          >
            <IoChevronBack className='text-xl'/>
          <span className='text-base'>Back To Home</span>
          </NavLink>
      </div>
      </div>
      <div className='w-full flex items-center gap-3'>
            <img src={user?.photoURL} alt="" className='w-12 h-12 rounded-full object-cover'/>
            <div className='flex flex-col items-start gap-1'>
              <h1 className='font-medium'>{user?.displayName}</h1>
              <div className='flex items-center gap-2'>
              <IoLogOutOutline className='text-xl'/>
              <span className='text-sm'>LogOut</span>
              </div>
            </div>
      </div>
    </div>
    <Outlet/>
    </div>
    <div className='w-full border-t border-[#E4E5E8] flex items-center justify-center py-5'>
            <p className='text-[#767F8C] text-sm'>@ {currentYear} Jobify - Job Portal. All rights Reserved</p>
    </div>
    </>
  )
}

export default LibrarianDashbaord