import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../pages/shared/Footer'
import 'animate.css';


const Root = () => {
  return (
    <div className='lg:m-8 md:m-2'>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root