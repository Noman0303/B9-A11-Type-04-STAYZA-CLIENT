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
import FeaturedRoom from '../pages/Home/FeaturedRoom';
import Login from '../pages/login/Login';
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:() =>fetch('http://localhost:5000/rooms')
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
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
  ]);

export default router;