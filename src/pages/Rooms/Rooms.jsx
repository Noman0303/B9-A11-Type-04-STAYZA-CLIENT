import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { useLoaderData } from 'react-router-dom'
import RoomsRow from './RoomsRow';

const Rooms = () => {

  const rooms = useLoaderData();
  console.log(rooms)




  return (
    <div>
      <Navbar></Navbar>
      <div className='mt-5 mb-32'>

      </div>
      <h2 className='text-center text-4xl my-5'>Available Rooms : {rooms.length}</h2>
      <div className="overflow-x-auto my-32">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='bg-gray-200 text-base font-semibold '>
              <th>Image</th>
              <th>Rooms Name </th>
              <th>Category</th>
              <th>Availability</th>
              <th>View</th>
              <th>Price</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {
              rooms.map(roomsRow =>
                <RoomsRow
                  key={roomsRow._id}
                  rooms={rooms}
                  roomsRow={roomsRow}
                ></RoomsRow>
              )
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Rooms