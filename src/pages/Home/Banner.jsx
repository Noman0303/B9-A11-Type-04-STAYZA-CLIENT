
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Navbar from '../shared/Navbar'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {

  const [startSwiper, setStartSwiper] = useState(false);

  // setting timer on Swiper start time
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartSwiper(true);
    }, 2500);

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className='relative w-full h-screen flex items-center justify-center overflow-hidden'>

      {/* Navbar animation */}
      <motion.div
        className='absolute top-5 md:top-7 lg:top-14 md:left-7 lg:left-25 right-4 md:right-11 lg:right-25 z-15'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.2 }}>
        <Navbar></Navbar>
      </motion.div>


     

        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="absolute inset-0  w-full h-auto object-cover "
          >
            <SwiperSlide><img src='https://i.ibb.co.com/KkJD5mQ/banner-1.jpg' alt="banner-1" /></SwiperSlide>
            <SwiperSlide><img src='https://i.ibb.co.com/N60FtYwd/banner-2.jpg' alt="banner-2" /></SwiperSlide>
            <SwiperSlide><img src='https://i.ibb.co.com/XZ5yF14c/banner-3.jpg' alt="banner-3" /></SwiperSlide>
            <SwiperSlide><img src='https://i.ibb.co.com/vxsDb7Qf/banner-4.jpg' alt="banner-4" /></SwiperSlide>
            <SwiperSlide><img src='https://i.ibb.co.com/LzFNh7Qs/banner-5.jpg' alt="banner-5" /></SwiperSlide>
            <SwiperSlide><img src='https://i.ibb.co.com/NgsmW70L/banner-6.jpg' alt="banner-6" /></SwiperSlide>
            <SwiperSlide><img src='https://i.ibb.co.com/5XwPCnHf/banner-7.jpg' alt="banner-7" /></SwiperSlide>
            <SwiperSlide><img src='https://i.ibb.co.com/35Sqst1v/banner-8.jpg' alt="banner-8" /></SwiperSlide>
          </Swiper>
        </>



        {/* Green Frame Layer */}
        <div
          className='absolute inset-0 bg-[#054637] flex items-center justify-center z-10 '
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 95%, 95% 95%, 95% 5%, 5% 5%, 5% 95%, 0% 100%)" }}
        >
        </div>
        <div className='absolute inset-0 z-5 bg-gradient-to-r from-[#054637] via-[#B9A58D]  to-[#D4AF37] opacity-30'></div>

        {/* Brand Name */}
        <motion.h1
          className='text-5xl md:text-7xl lg:text-9xl font-bold z-10 absolute  text-[#D4AF37] font-dancing-script drop-shadow-lg'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          Stayza..
        </motion.h1>
      </div>
    
  )
}

export default Banner;