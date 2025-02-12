import React from 'react'
import NewsletterAnimation from '../../animation/NewsletterAnimation'
import NewsLetterBackgroundImage from '../../images/newsletter/newsletter-background.jpg'
import { Link } from 'react-router-dom'

const NewsLetter = () => {
  return (
    <div className='flex flex-col md:flex-row w-full my-4 bg-cover bg-center relative '
      style={{
        backgroundImage: `url(${NewsLetterBackgroundImage})`,
      }}>

      <div className="absolute inset-0 bg-black opacity-40"></div>


      <div className='md:w-1/3 flex justify-center relative z-10 py-6'>
        <NewsletterAnimation></NewsletterAnimation>
      </div>

      <div className='md:w-2/3 relative z-10 px-6 md:px-10 py-6'>
        <h2 className='text-3xl font-semibold text-amber-200 font-'> Stay in the Know with Stayza!</h2>
        <p className='font-semibold text-yellow-50'>Be the first to hear about our exclusive deals, new offers, and the latest updates straight to your inbox!</p>
        <br />
        <p className='font-semibold text-white text-xl'> <a href="" className='text-amber-200 '>Subscribe</a> to our newsletter and enjoy:</p>
        <ul className='space-y-2 mt-2 list-disc'>
          <li className='text-white'><span className='font-semibold '>Special Discounts</span> for your next stay </li>
          <li className='text-white'><span className='font-semibold '>Early Access</span> to new room features and services.</li>
          <li className='text-white'><span className='font-semibold'>Personalized Offers</span> tailored just for you.</li>
        </ul>
        <br />

        <p className='font-semibold text-white text-xl'>Don’t miss out on the best travel deals— <span className='text-2xl font-semibold text-amber-200'><Link to='/signUp'>sign up </Link> </span>  now and start your journey with Stayza! </p>
      </div>
    </div>
  )
}

export default NewsLetter