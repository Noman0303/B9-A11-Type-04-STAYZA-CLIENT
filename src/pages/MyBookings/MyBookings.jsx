import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { AuthContext } from '../provider/AuthProvider';
import MyBookingRow from './MyBookingRow';
import Modal from 'react-modal';
Modal.setAppElement('#root'); // Ensures proper accessibility


const MyBookings = () => {

  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);


  // Fetch booked rooms for the logged-in user
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/bookedRooms/${user.email}`)
        .then(res => res.json())
        .then(data => { setMyBookings(data) })
        .catch(error => console.error('Error fetching rooms:', error))
    }
  }, [user]);


  const handleReview = (e,bookingId) => {
    e.preventDefault();

    // Ensure a booking is selected
    if (!selectedBooking) {
      return
    }

    const form = e.target;
    const userName = form.userName.value;
    const rating = form.rating.value;
    const comment = form.comment.value;

    if (!user?.email) {
      return navigate('/login', { state: { from: window.location.pathname } });
    }

    // Update review in rooms db
    fetch(`http://localhost:5000/rooms/${bookingId}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        userName,
        rating,
        comment,
      })
    })
      .then(res => res.json())
      .then(updatedRoom => {
        console.log('Review Added:', updatedRoom);
        setIsModalOpen(false);
      })
      .catch(error => {
        console.error('Error updating room review:', error);
        toast.error("Error updating room review.");
      });
  }


  return (
    <div>
      <div className='bg-[#009688]'>
        <Navbar></Navbar>
      </div>
      <h2 className='text-center text-4xl my-6'>My Booked Rooms : {myBookings.length}</h2>

      {/* head */}
      <table className="min-w-full bg-white border border-gray-300 my-6 ">
        <thead>
          <tr className='bg-gray-200 text-base font-semibold '>
            <th>Image</th>
            <th>Rooms Name </th>
            <th>Price/Night</th>
            <th>Review</th>
            <th>Update Booking Date</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {
            myBookings.map(booking =>
              <MyBookingRow
                key={booking._id}
                booking={booking}
                setIsModalOpen={setIsModalOpen}>
              </MyBookingRow>
            )
          }
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Room Review"
        className=" flex justify-center items-center p-4">

        <div className="bg-[#F9F6EE] p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">Thanks For Your Valueble Review!</h2>

          <form onSubmit={handleReview} >

            <div className="form-control grid grid-cols-3 my-2">
              <label className="label mb-2 col-span-1">
                <span className="label-text font-semibold">User Name</span>
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={user?.displayName}
                className="input input-bordered  bg-gray-200 text-black font-semibold col-span-2" />
            </div>

            <div className="form-control grid grid-cols-3 my-2">
              <label className="label mb-2 col-span-1">
                <span className="label-text font-semibold">Give a Rating (1-5)</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Enter rating (1-5)"
                min="1"
                max="5"
                required
                className="input input-bordered bg-gray-200 text-black font-semibold col-span-2" />
            </div>

            <div className="form-control my-2 grid grid-cols-3">
              <label className="label mb-2 col-span-1">
                <span className="label-text font-semibold">Add your comment</span>
              </label>
              <textarea
                className="textarea bg-gray-200 text-black font-semibold h-30 col-span-2"
                placeholder="Comment"
                name="comment"></textarea>
            </div>

            <div className="mt-4 flex gap-4 justify-between">
              <button
                type='button'
                className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-400 cursor-pointer"
                onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>

              <button
                type='submit'
                className="bg-[#009688] text-white px-6 py-2 rounded-md cursor-pointer  hover:bg-[#054637]"
                onClick={handleReview}>
                Confirm
              </button>
            </div>

          </form>
        </div>
      </Modal>
    </div>

  )

}

export default MyBookings;