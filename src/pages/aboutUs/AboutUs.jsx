import React from 'react'
import Navbar from '../shared/Navbar'

const AboutUs = () => {
  return (
    <div className='bg-[#009688]'>
      <Navbar></Navbar>

      <div className='text-center'>
        <h2 className='text-4xl font-dancing-script font-semibold py-6 text-white '>About Us</h2>
      </div>

      <section className='flex flex-col-reverse md:flex-row  gap-2 lg:gap-6 bg-amber-50 p-4'>
        <div className='lg:text-center'>
          <h2 className='text-xl font-semibold'>Your trusted partner in finding and booking the best hotels for your next stay.</h2>
          <p className='mt-4'>At Stayza, we are dedicated to making your travel experience seamless by offering a wide range of hotel options that fit your needs. Whether you're traveling for business or leisure, Stayza ensures that you find the perfect place to stay with ease.</p>
        </div>
        <div >
          <img src="https://i.ibb.co.com/9H9FtQ1R/About-us.jpg" alt="" border className='rounded-xl' />
        </div>
      </section>

      <section>
        <div 
        style={{ backgroundImage: "url('https://i.ibb.co.com/mC0y221d/About-us-Our-Story-2.jpg')" }}
        className='flex flex-col justify-center items-center min-h-screen bg-cover bg-center  text-white'
        >
           <h2 className='text-3xl font-semibold mx-4'>Our Mission – Simplifying Your Stay.</h2>
           <p className='mt-4 mx-4'>We aim to make hotel booking smooth, secure, and hassle-free by offering real-time availability, best price deals, and easy reservations.</p>
        </div>
       

      </section>

      <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-6 bg-amber-50 text-[#202020] p-4 items-center '>
        <div >
          <h2 className='text-xl font-semibold'>How Stayza Was Born.</h2>
          <p className='mt-4'> "Our journey started with a love for travel and a desire to simplify hotel bookings. Frustrated by complicated processes, we built Stayza to be intuitive, secure, and customer-focused."</p>
        </div>
        <div >
          <img src="https://i.ibb.co.com/Zp5577LN/About-us-Team.jpg" alt="" border className='rounded-xl shadow-2xl' />
        </div>
        <div className='lg:text-center grid md:col-span-2 lg:col-span-1 md:text-center'>
          <h2 className='text-xl font-semibold '>Our Core Values</h2>
          <p className='mt-4'> "At Stayza, we prioritize transparency, trust, and customer satisfaction. Every booking you make is backed by our commitment to excellence."</p>
        </div>

      </section>


    </div>
  )
}

export default AboutUs