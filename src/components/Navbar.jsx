import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosMenu } from "react-icons/io";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
const Navbar = () => {
  const {user,logOut} = useAuth();
  const axiosSecure = useAxiosSecure()
  const {isAdmin} = useAdmin()
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false) 
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)
  const [admin,setAdmin] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])

  const handleLogout = async () => {
    try{
      await logOut()
      toast.success('Logout Successfully!')
    }
    catch{
      toast.error('Something Went Wrong!')
    }
  }

  return (
    <>
    <nav className='w-full flex items-center justify-between lg:px-10 px-5 py-3 font-inter shadow-md relative'>
    <div onClick={()=>navigate('/')} className='flex items-center lg:gap-3 md:gap-3 gap-2 cursor-pointer'>
      <img src="https://gist.githubusercontent.com/ShejanMahamud/55027157d9ed288e0c490b8f59878179/raw/b6f06773886c4314ccd39286a026afc0549f431e/bookify.svg" alt="logo.svg" className='
      lg:w-10 md:w-10 w-8'/>
      <span className='lg:text-2xl md:text-2xl text-xl font-medium font-briem-hand'>Bookify</span>
    </div>
    <ul className={`items-center gap-10 bg-white px-10 py-5 rounded-lg z-50 ${openMenu ? 'flex flex-col absolute right-10 top-16' : 'hidden'}`}>
    <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/"}
          >
            <li className=" font-medium text-sm cursor-pointer">
              Home
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/all_books"}
          >
            <li className=" font-medium text-sm cursor-pointer">
             All Books
            </li>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/borrowed_books"}
          >
            <li className=" font-medium text-sm cursor-pointer">
            Borrowed Books
            </li>
          </NavLink>
          {
          isAdmin && <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/librarian/dashboard"}
          >
            <li className=" font-medium text-sm cursor-pointer">
            Dashboard
            </li>
          </NavLink>
          }
    </ul>

    <ul className={`items-center lg:gap-10 md:gap-5 lg:flex md:flex  hidden`}>
    <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/"}
          >
            <li className=" font-medium text-sm cursor-pointer">
              Home
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/all_books"}
          >
            <li className=" font-medium text-sm cursor-pointer">
             All Books
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/borrowed_books"}
          >
            <li className=" font-medium text-sm cursor-pointer">
            Borrowed Books
            </li>
          </NavLink>
          {
            isAdmin && <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/librarian/dashboard"}
          >
            <li className=" font-medium text-sm cursor-pointer">
            Dashboard
            </li>
          </NavLink>
          }
    </ul>

  <div className='flex items-center gap-1 md:gap-5 lg:gap-5'>
  {user ? (
          <div className="relative flex items-center gap-2 lg:gap-5">
            <img data-tooltip-id="name" data-tooltip-content={user?.displayName} onClick={()=>setIsOpen(!isOpen)} referrerPolicy="no-referrer" src={user?.photoURL} alt="avatar.png" className="lg:w-10 md:w-10 w-8 border-2 border-primary rounded-full duration-700"/>
            {
              isOpen && <div className="lg:flex flex-col gap-3 absolute top-10 right-0 bg-white px-2 py-2 rounded-lg w-80 z-50 hidden">
                <div className="flex items-center gap-3">
                <img referrerPolicy="no-referrer" src={user?.photoURL || "https://i.ibb.co/Lxvz266/user-1.png"} alt="avatar.png" className="w-10 rounded-full"/>
                <div className="flex flex-col">
                  <h1 className="text-sm font-semibold text-gray-700">{user?.displayName}</h1>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
                </div>
                <hr class="border-gray-200 border w-full"/>
                <Link to="/" class="flex items-center py-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 ">
            <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="currentColor"></path>
                <path d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z" fill="currentColor"></path>
            </svg>

            <span class="mx-1">
                view profile
            </span>
        </Link>
        <Link to="/" class="flex items-center py-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100">
            <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8199 22H10.1799C9.71003 22 9.30347 21.673 9.20292 21.214L8.79592 19.33C8.25297 19.0921 7.73814 18.7946 7.26092 18.443L5.42392 19.028C4.97592 19.1709 4.48891 18.9823 4.25392 18.575L2.42992 15.424C2.19751 15.0165 2.27758 14.5025 2.62292 14.185L4.04792 12.885C3.98312 12.2961 3.98312 11.7019 4.04792 11.113L2.62292 9.816C2.27707 9.49837 2.19697 8.98372 2.42992 8.576L4.24992 5.423C4.48491 5.0157 4.97192 4.82714 5.41992 4.97L7.25692 5.555C7.50098 5.37416 7.75505 5.20722 8.01792 5.055C8.27026 4.91269 8.52995 4.78385 8.79592 4.669L9.20392 2.787C9.30399 2.32797 9.71011 2.00049 10.1799 2H13.8199C14.2897 2.00049 14.6958 2.32797 14.7959 2.787L15.2079 4.67C15.4887 4.79352 15.7622 4.93308 16.0269 5.088C16.2739 5.23081 16.5126 5.38739 16.7419 5.557L18.5799 4.972C19.0276 4.82967 19.514 5.01816 19.7489 5.425L21.5689 8.578C21.8013 8.98548 21.7213 9.49951 21.3759 9.817L19.9509 11.117C20.0157 11.7059 20.0157 12.3001 19.9509 12.889L21.3759 14.189C21.7213 14.5065 21.8013 15.0205 21.5689 15.428L19.7489 18.581C19.514 18.9878 19.0276 19.1763 18.5799 19.034L16.7419 18.449C16.5093 18.6203 16.2677 18.7789 16.0179 18.924C15.7557 19.0759 15.4853 19.2131 15.2079 19.335L14.7959 21.214C14.6954 21.6726 14.2894 21.9996 13.8199 22ZM7.61992 16.229L8.43992 16.829C8.62477 16.9652 8.81743 17.0904 9.01692 17.204C9.20462 17.3127 9.39788 17.4115 9.59592 17.5L10.5289 17.909L10.9859 20H13.0159L13.4729 17.908L14.4059 17.499C14.8132 17.3194 15.1998 17.0961 15.5589 16.833L16.3799 16.233L18.4209 16.883L19.4359 15.125L17.8529 13.682L17.9649 12.67C18.0141 12.2274 18.0141 11.7806 17.9649 11.338L17.8529 10.326L19.4369 8.88L18.4209 7.121L16.3799 7.771L15.5589 7.171C15.1997 6.90671 14.8132 6.68175 14.4059 6.5L13.4729 6.091L13.0159 4H10.9859L10.5269 6.092L9.59592 6.5C9.39772 6.58704 9.20444 6.68486 9.01692 6.793C8.81866 6.90633 8.62701 7.03086 8.44292 7.166L7.62192 7.766L5.58192 7.116L4.56492 8.88L6.14792 10.321L6.03592 11.334C5.98672 11.7766 5.98672 12.2234 6.03592 12.666L6.14792 13.678L4.56492 15.121L5.57992 16.879L7.61992 16.229ZM11.9959 16C9.78678 16 7.99592 14.2091 7.99592 12C7.99592 9.79086 9.78678 8 11.9959 8C14.2051 8 15.9959 9.79086 15.9959 12C15.9932 14.208 14.2039 15.9972 11.9959 16ZM11.9959 10C10.9033 10.0011 10.0138 10.8788 9.99815 11.9713C9.98249 13.0638 10.8465 13.9667 11.9386 13.9991C13.0307 14.0315 13.9468 13.1815 13.9959 12.09V12.49V12C13.9959 10.8954 13.1005 10 11.9959 10Z" fill="currentColor"></path>
            </svg>

            <span class="mx-1">
                Settings
            </span>
        </Link>
        <button onClick={handleLogout} class="flex items-center py-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100">
            <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
            </svg>

            <span class="mx-1">
                Log Out
            </span>
        </button>

            </div>
            }
           <button
              onClick={handleLogout}
              className="lg:text-base md:text-base text-xs px-4 py-2 font-medium rounded-md text-white bg-primary"
            >
              Log Out
            </button>
          </div>
          
        ) : (
          <div className="flex items-center gap-5">
            <button
              onClick={() => navigate("/login")}
              className=" px-4 py-2 font-medium rounded-md text-white bg-primary lg:text-base md:text-base text-xs"
            >
              Log In
            </button>
            
          </div>
        )}
    <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" onChange={handleToggle} />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
<IoIosMenu onClick={()=>setOpenMenu(!openMenu)} className='text-3xl lg:hidden md:hidden inline-block'/>
  </div>

</nav>
<Tooltip id='name'/>
    </>
  )
}

export default Navbar