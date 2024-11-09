import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import GadetsCard from './Components/GadetsCard/GadetsCard';
import CardDetails from './Components/CardDetails/CardDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import Statistics from './Components/Statistics/Statistics';
import ContactUs from './Components/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/categories.json'),
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <GadetsCard />,
            loader: () => fetch('/alldata.json'),
          },
          {
            path: '/category/:category',
            element: <GadetsCard />,
            loader: () => fetch('/alldata.json'),
          }
        ]
      },
      {
        path: '/product/:product_id',
        element: <CardDetails />,
        loader: () => fetch('/alldata.json'),
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/alldata.json'),
      },
      {
        path: '/statistics',
        element:<Statistics></Statistics>,
       
      },
      {
        path: '/contactus',
        element:<ContactUs></ContactUs>,
       
      },
    
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
