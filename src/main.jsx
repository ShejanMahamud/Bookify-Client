import '@smastrom/react-rating/style.css';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import Route from './Route/Route.jsx';
import './index.css';
import AuthProvider from './providers/AuthProvider.jsx';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
      <AuthProvider>
    <RouterProvider router={Route} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
