
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useLoaderData } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Navbar from '../shared/Navbar';


import { BiSolidArea } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { IoLogoNoSmoking } from "react-icons/io";
import { BiAccessibility } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

const RoomDetails = () => {
    const roomDetails = useLoaderData();
    const { room_name, price, description, main_image, sub_images, review, room_size, availability, amenities, view, bed_type, cancellation_policy, floor_level, category, smoking_policy, features, special_offer, accessibility, } = roomDetails;

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <div>
            <div className='bg-[#009688] rounded-lg'>
                <Navbar></Navbar>
            </div>

            {/* Header */}

            <motion.h1
                className=' text-3xl font-bold font-playfair mt-4 text-center '
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.5 }}>
                {room_name}
            </motion.h1>

            <div className="bg-yellow-300 text-black px-1 py-2 my-2 rounded-md w-max text-sm mb-4 ">
                Special Offer : {special_offer}
            </div>

            <div>
                { /* Image Slide*/}
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="rounded-lg shadow-lg"
                >

                    {/* Main Image */}
                    <SwiperSlide>
                        <img src={main_image} alt="Room Main" className="w-full h-[500px] object-cover rounded-lg" />
                    </SwiperSlide>

                    {/* Sub Images in Main Slider */}
                    {sub_images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt={`Sub ${index}`} className="w-full h-[500px] object-cover rounded-lg" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Thumbnail Navigation */}

                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={sub_images.length < 4 ? sub_images.length : 4}
                    // Dynamic slidesPerView
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mt-4"
                >
                    {[main_image, ...sub_images].map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`Thumbnail ${index}`}
                                className="w-full h-24 md:h-40  object-cover rounded-md cursor-pointer hover:opacity-80"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='flex justify-between mt-4'>
                <p className="text-xl font-semibold text-green-600">${price}/night</p>
                <p className="text-gray-600 mb-4">⭐ {review} | {view}</p>
            </div>

            {/* Room Details */}
            < div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 rounded-lg p-2 shadow-xs hover:shadow-xl" data-aos="zoom-in" data-aos-duration="2000">
                <div>
                    <h2 className="text-2xl font-semibold ">Room Description</h2>
                    <p className="text-gray-600 mt-2">{description}</p>
                </div>
                <div className='text-right lg:mr-6'>
                    <h2 className="text-xl font-semibold ">Room Features</h2>
                    <ul className="mt-2 text-gray-600 space-y-1">
                        <li className=' flex justify-end gap-1 item-center '><BiSolidArea className=' m-1 border' /> Size: {room_size} sq. ft.</li>
                        <li className=' flex justify-end gap-1 item-center '><IoBedOutline className='m-1' /> Bed: {bed_type}</li>
                        <li className=' flex justify-end gap-1 item-center '><FaBuilding className='m-1' /> Floor: {floor_level}</li>
                        <li className=' flex justify-end gap-1 item-center '><IoLogoNoSmoking className='m-1' /> {smoking_policy}</li>
                        <li className=' flex justify-end gap-1 item-center '><BiAccessibility className='m-1' /> {accessibility.join(", ")}</li>
                    </ul>
                </div>
            </div>

            {/* Amenities */}
            <div className="mt-6 hover:shadow-lg p-2 rounded-lg">
                <h2 className="text-2xl font-semibold">Amenities</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                    {amenities.map((item, index) => (
                        <span key={index} className="bg-amber-100 px-3 py-1 rounded-md text-sm hover:bg-amber-200 hover:shadow-lg ">
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Special Features */}
            {
                features.length > 0 && (
                    <div className="mt-6 hover:shadow-lg p-2 rounded-lg">
                        <h2 className="text-xl font-semibold">Special Features</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {features.map((feature, index) => (
                                <span key={index} className="bg-blue-200 hover:bg-blue-400 hover:shadow-lg px-3 py-1 rounded-md text-sm">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                )
            }

            {/* Booking Section */}
            <div className="mt-6 p-4 my-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold py-2">
                    {availability === "available" ? (
                        <span className="text-[#009688] flex gap-2 item-center"><FaCircle className='text-green-400 mt-1' /> Available</span>
                    ) : (
                        <span className="text-red-600 flex gap-2 item-center"><FaCircle className='text-red-400 mt-1' /> Not Available</span>
                    )}
                </p>
                <p className="text-gray-600">📜 {cancellation_policy}</p>
                {availability === "available" ? (
                    <button className="mt-4 bg-[#009688] text-white px-6 py-2 rounded-lg hover:bg-[#054637] hover:shadow-lg cursor-pointer">
                        Book Now
                    </button>
                ) :
                    <></>}

            </div>


        </div >
    )
}

export default RoomDetails