import { FloatButton } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Footer from './../components/Footer';
import Navbar from './../components/Navbar';

const Root = () => {

const {loading} = useAuth();

  return (
    <>
    {
          loading ? <div className="w-full min-h-screen bg-transparent flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin  border-primary dark:border-primary bg-transparent"></div>
          </div>
          :
          <div>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
        }
        <FloatButton.BackTop />
        </>
  )
}

export default Root