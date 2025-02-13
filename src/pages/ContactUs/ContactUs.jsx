import React from 'react'
import Navbar from '../shared/Navbar'

const ContactUs = () => {
  return (
    <div>
      <div className='bg-[#009688]'>
        <Navbar></Navbar>
      </div>

      <div className='bg-lime-100 p-6 mt-4 rounded-xl animate__animated animate__fadeInRight'
      >
        <h2 className='text-center text-3xl'>Contact Us</h2>
        <p>
          We’d love to hear from you! Whether you have a question, feedback, or need assistance, our team at Stayza is here to help. We strive to provide the best service possible and ensure that your experience is seamless every step of the way.
        </p>
        <br />
        <p>
          If you have any inquiries about booking a hotel, need help with an existing reservation, or want to share your thoughts with us, feel free to reach out through any of the following methods:
        </p>
      </div>
      <div className='bg-emerald-200 p-6 rounded-xl  animate__animated animate__fadeInLeft'
      >
        <h2 className='text-center text-3xl'>Get in Touch</h2>
        <h2 className='font-semibold text-xl'>Email Us:</h2>
        <p>
          For any general inquiries or support requests, you can reach us at: <br />
          support@stayza.com
        </p>
        <h2 className='font-bold text-xl'>Email Us:</h2>
        <p>
          For any general inquiries or support requests, you can reach us at: <br />
          <span className='font-semibold'>support@stayza.com</span>
        </p>
        <h2 className='font-bold text-xl'>Email Us:</h2>
        <p>
          For any general inquiries or support requests, you can reach us at: <br />
          <span className='font-semibold'>Phone:</span>  +1 (123) 456-7890
        </p>
      </div>
      <div className='bg-lime-100 p-6 rounded-xl animate__animated animate__fadeInRight'
      >
        <h2 className='text-center text-3xl'>Follow Us</h2>
        <p>
          Stay connected with Stayza through our social media platforms for the latest updates, offers, and travel inspiration:
        </p>
        <ul className='font-semibold text-lg list-disc list-inside'>
          <li><a href="">Instagram</a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">Twitter</a></li>
          <li><a href="">LinkedIn</a></li>
        </ul>
        <p>
          We value your feedback and look forward to assisting you. Thank you for choosing Stayza as your travel partner!
        </p>
      </div>

    </div>
  )
}

export default ContactUs