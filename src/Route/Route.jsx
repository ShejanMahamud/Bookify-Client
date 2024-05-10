import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import Root from '../layout/Root';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from './../pages/Home';
  
const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        }
      ],
      errorElement: <Error/>
    },
  ]);

export default Route