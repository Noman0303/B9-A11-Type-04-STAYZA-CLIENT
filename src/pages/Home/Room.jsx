import React from 'react'
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
  const { room_name, main_image, description, _id } = room
  return (
    <div >
      <div className=" rounded-xl overflow-hidden shadow-lg relative "
       data-aos="zoom-in-up"
       data-aos-duration="2000">
        
        <img src={main_image} alt="" className='w-full h-56 object-cover' />
        
        <div className='absolute inset-0 text-white text-center'>
          <h2 className='text-3xl font-dancing-script'>{room_name}</h2>
          <Link to={`/roomDetails/${_id}`}>
          <button className='btn mt-10 hover:bg-amber-200  hover:shadow-amber-200 hover:shadow-lg transition-shadow duration-300 '>Book Now</button>
          </Link>
          {/* <p className='text-left'>{description}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Room;