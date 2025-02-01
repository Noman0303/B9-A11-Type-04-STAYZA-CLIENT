
import React from 'react'
import { motion } from "framer-motion"

import banner01 from '../../images/banner/banner-1.jpg'
import banner02 from '../../images/banner/banner-2.jpg'
import banner03 from '../../images/banner/banner-3.jpg'
import banner04 from '../../images/banner/banner-4.jpg'
import banner05 from '../../images/banner/banner-5.jpg'
import banner06 from '../../images/banner/banner-6.jpg'

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
  return (
    <div className='relative'>

      <motion.div
        className='inset-0 z-15 absolute top-7 md:left-6 lg:left-16 right-4 md:right-9 lg:right-18  '
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}>
        <Navbar></Navbar>
      </motion.div>


      <div className='w-full h-screen flex items-center justify-center  overflow-hidden inset-0'>

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
            className="mySwiper inset-0  w-full h-full object-cover absolute"
          >
            <SwiperSlide><img src={banner01} alt="banner-1" /></SwiperSlide>
            <SwiperSlide><img src={banner02} alt="banner-2" /></SwiperSlide>
            <SwiperSlide><img src={banner03} alt="banner-3" /></SwiperSlide>
            <SwiperSlide><img src={banner04} alt="banner-4" /></SwiperSlide>
            <SwiperSlide><img src={banner05} alt="banner-5" /></SwiperSlide>
            <SwiperSlide><img src={banner06} alt="banner-6" /></SwiperSlide>
          </Swiper>
        </>


        {/* Green Frame Layer */}
        <motion.div
          className='absolute inset-0 bg-[#054637] flex items-center justify-center z-5'
          initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }} // Start fully covering the background
          animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 95%, 95% 95%, 95% 5%, 5% 5%, 5% 95%, 0% 100%)' }} // Reveal a rectangle gap in the center
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className='text-7xl font-bold z-10 absolute text-[#FAF9F6]'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          Stayza
        </motion.h1>
      </div>
    </div>
  )
}

export default Banner;