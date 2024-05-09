import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";
import Root from '../layout/Root';
import Error from '../pages/Error';
import Home from './../pages/Home';
  
const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>
        }
      ],
      errorElement: <Error/>
    },
  ]);

export default Route