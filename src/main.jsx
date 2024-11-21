import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ErrorPage from './pages/404';
import ProductsPage from './pages/products';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage />,
    errorElement:<ErrorPage />,
  },
  {
    path:"/home",
    element:<HomePage />,
  },
  {
    path:"/login",
    element:<LoginPage />,
  },
  {
    path:"/register",
    element:<RegisterPage />,
  },
  {
    path:"/products",
    element:<ProductsPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
