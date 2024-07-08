import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './MainLayout/Home/Home';
import Main from './MainLayout/Main/Main';
import ProjectDetails from './Sheared/ProjectDetails/ProjectDetails';
import Blog from './Sheared/Blog/Blog';
import BlogDetails from './Sheared/Blog/BlogDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/project-details',
        element:<ProjectDetails></ProjectDetails>
      },
      {
        path:'/Blogs',
        element:<Blog></Blog>
      },
      {
        path:'/Blogs/detail/:id',
        element:<BlogDetails></BlogDetails>
      }
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
