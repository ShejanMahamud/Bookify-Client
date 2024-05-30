import axios from 'axios';
import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import LibrarianDashbaord from '../layout/LibrarianDashbaord';
import Root from '../layout/Root';
import AllBooks from '../pages/AllBooks';
import BookDetails from '../pages/BookDetails';
import BooksByCategory from '../pages/BooksByCategory';
import BooksByWriter from '../pages/BooksByWriter';
import BorrowedBooks from '../pages/BorrowedBooks';
import Error from '../pages/Error';
import LibrarianAddBook from '../pages/LibrarianDashbaord/LibrarianAddBook';
import LibrarianAllBooks from '../pages/LibrarianDashbaord/LibrarianAllBooks';
import LibrarianOverview from '../pages/LibrarianDashbaord/LibrarianOverview';
import LibrarianUpdateBook from '../pages/LibrarianDashbaord/LibrarianUpdateBook';
import LibrarianUsers from '../pages/LibrarianDashbaord/LibrarianUsers';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from './../pages/Home';
import AdminRoute from './AdminRoute';
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
          path: '/all_books',
          element: <AllBooks/>
        },
        {
          path: '/borrowed_books',
          element: <PrivateRoute><BorrowedBooks/></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/books_category/:category',
          loader: ({params})=> axios.get(`${import.meta.env.VITE_SERVER_API}/books?category=${params.category}`,{withCredentials:true}),
          element: <BooksByCategory/>
        },
        {
          path: '/writer_books/:writer',
          loader: ({params})=> axios.get(`${import.meta.env.VITE_SERVER_API}/books?writer=${params.writer}`,{withCredentials:true}),
          element: <BooksByWriter/> 
        },
        {
          path: '/book/:id',
          element: <PrivateRoute><BookDetails/></PrivateRoute>
        },
        {
          path: '/register',
          element: <Register/>
        },
      ],
      errorElement: <Error/>
    },
    {
      path: 'librarian/dashboard',
      element: <AdminRoute><LibrarianDashbaord/></AdminRoute>,
      children: [
        {
          path: '',
          element:<AdminRoute><LibrarianOverview/></AdminRoute> 
        },
        {
          path: 'users',
          element: <AdminRoute><LibrarianUsers/></AdminRoute> 
        },
        {
          path: 'all_books',
          element: <AdminRoute><LibrarianAllBooks/></AdminRoute> 
        },
        {
          path: 'update_book/:id',
          element: <AdminRoute><LibrarianUpdateBook/></AdminRoute>
        },
        {
          path : 'add_book',
          element: <AdminRoute><LibrarianAddBook/></AdminRoute>
        }
      ]
    },
    
  ]);

export default Route