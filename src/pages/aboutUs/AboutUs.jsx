import React from 'react'
import Navbar from '../shared/Navbar'

const AboutUs = () => {
  return (
    <div >
      <div className='bg-amber-300  text-center'>
        <Navbar></Navbar>
        <h2 className='text-4xl font-dancing-script font-semibold py-6 text-white '>About Us</h2>
      </div>

      <section className='flex flex-col-reverse md:flex-row  gap-2 lg:gap-6 bg-amber-50 p-4'>
        <div className='lg:text-center animate__animated animate__fadeInLeft'>
          <h2 className='text-xl font-semibold'>Your trusted partner in finding and booking the best hotels for your next stay.</h2>
          <p className='mt-4'>
            At Stayza, we believe that booking the perfect hotel should be as easy and enjoyable as your stay itself. Whether you're traveling for business, leisure, or a special occasion, we are committed to providing you with a seamless and stress-free experience. Our platform offers a diverse range of handpicked hotels, each designed to cater to your unique preferences and needs.
          </p>
          <br />
          <p>
            We understand that finding the right place to stay can be overwhelming, which is why we prioritize simplicity and transparency in everything we do. Stayza allows you to explore real-time availability, exclusive deals, and secure reservations—all in just a few clicks. From luxurious hotels to cozy retreats, we have something for everyone, ensuring that you always find the perfect fit.
          </p>
          <br />
          <p>
            Our mission is simple: to make your travel experience as smooth and hassle-free as possible. With Stayza, you don’t have to worry about hidden fees or complicated processes. Instead, you can focus on what matters most—enjoying your stay.
          </p>
          <br />
          <p>
            Whether you're booking a quick getaway or a long-term stay, Stayza is your trusted partner in travel. Experience the difference with Stayza, where your comfort is our priority.
          </p>
        </div>
        <div className='animate__animated animate__fadeInRight'>
          <img src="https://i.ibb.co.com/9H9FtQ1R/About-us.jpg" alt="" className='rounded-xl ' />
        </div>
      </section>

      <div >
        <div
          style={{ backgroundImage: "url('https://i.ibb.co.com/mC0y221d/About-us-Our-Story-2.jpg')" }}
          className='flex flex-col justify-center items-center min-h-screen bg-cover bg-center  text-white'
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h2 className='text-3xl font-semibold mx-4'>Our Mission – Simplifying Your Stay.</h2>
          <p className='mt-4 mx-4'>We aim to make hotel booking smooth, secure, and hassle-free by offering real-time availability, best price deals, and easy reservations.</p>
        </div>
      </div>


      <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-6 bg-amber-50 text-[#202020] p-4 items-center '

      >
        <div
          data-aos="fade-left"
          data-aos-duration="2500" >
          <h2 className='text-xl font-semibold'>How Stayza Was Born.</h2>
          <p className='mt-4'> "Our journey started with a love for travel and a desire to simplify hotel bookings. Frustrated by complicated processes, we built Stayza to be intuitive, secure, and customer-focused."</p>
        </div>
        <div data-aos="flip-left"
          data-aos-duration="2000">
          <img src="https://i.ibb.co.com/Zp5577LN/About-us-Team.jpg" alt="" border className='rounded-xl shadow-2xl' />
        </div>
        <div className='lg:text-center grid md:col-span-2 lg:col-span-1 md:text-center'
          data-aos="fade-right"
          data-aos-duration="2500">
          <h2 className='text-xl font-semibold '>Our Core Values</h2>
          <p className='mt-4'> "At Stayza, we prioritize transparency, trust, and customer satisfaction. Every booking you make is backed by our commitment to excellence."</p>
        </div>

      </section>


    </div>
  )
}

export default AboutUs