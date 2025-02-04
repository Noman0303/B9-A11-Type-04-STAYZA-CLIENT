import React from 'react'

import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../layout/Root/Root';
import Home from '../pages/Home/Home';
import Rooms from '../pages/Rooms/Rooms';
import MyBookings from '../pages/MyBookings/MyBookings';
import AboutUs from '../pages/aboutUs/AboutUs';
import ContactUs from '../pages/ContactUs/ContactUs';
import SignUp from '../pages/SignUp/SignUp';
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/rooms",
          element:<Rooms></Rooms>
        },
        {
          path:"/myBookings",
          element:<MyBookings></MyBookings>
        },
        {
          path:"/aboutUs",
          element:<AboutUs></AboutUs>
        },
        {
          path:"/contactUs",
          element:<ContactUs></ContactUs>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

export default router;