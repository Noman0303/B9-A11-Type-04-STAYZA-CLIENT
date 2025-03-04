import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { AuthContext } from '../provider/AuthProvider';

const MyBookings = () => {

  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);

  // Fetch rooms whenever filter or sort changes
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/roomsbyEmail/${user.email}`)
        .then(res => res.json())
        .then(data => { setMyBookings(data) })
        .catch(error => console.error('Error fetching rooms:', error))
    }
  }, [user]);

  console.log(myBookings)

  return (
    <div>
      <div className='bg-[#009688]'>
        <Navbar></Navbar>
      </div>
      <h2 className='text-center text-4xl my-5'>Total My Rooms : {myBookings.length}</h2>


      {/* head */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className='bg-gray-200 text-base font-semibold '>
            <th>Image</th>
            <th>Rooms Name </th>
            <th>Category</th>
            <th>View</th>
            <th>Price/Night</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {
            myBookings.map(booking =>
              <MyBookings
                key={booking._id}
                booking={booking}>
              </MyBookings>
            )
          }
        </tbody>
      </table>
    </div>

  )

}

export default MyBookings