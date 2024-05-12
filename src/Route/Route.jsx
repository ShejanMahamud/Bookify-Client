import axios from 'axios';
import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import Root from '../layout/Root';
import AddBooks from '../pages/AddBooks';
import BookDetails from '../pages/BookDetails';
import BooksByCategory from '../pages/BooksByCategory';
import BorrowedBooks from '../pages/BorrowedBooks';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UpdateBooks from '../pages/UpdateBook';
import AllBooks from './../pages/AllBooks';
import Home from './../pages/Home';
import PrivateRoute from './PrivateRoute';
  
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
          path: '/add_books',
          element: <PrivateRoute><AddBooks/></PrivateRoute>
        },
        {
          path: '/all_books',
          element: <AllBooks/>
        },
        {
          path: '/borrowed_books',
          element: <BorrowedBooks/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/update_book/:id',
          loader: ({params})=> axios.get(`${import.meta.env.VITE_SERVER_API}/book/${params.id}`),
          element: <PrivateRoute><UpdateBooks/></PrivateRoute>
        },
        {
          path: '/books_category/:category',
          loader: ({params})=> axios.get(`${import.meta.env.VITE_SERVER_API}/books_category/${params.category}`),
          element: <BooksByCategory/>
        },
        {
          path: '/book/:id',
          element: <BookDetails/>
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