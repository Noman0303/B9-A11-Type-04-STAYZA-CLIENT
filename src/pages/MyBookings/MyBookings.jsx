import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { AuthContext } from '../provider/AuthProvider';
import MyBookingRow from './MyBookingRow';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReviewModal from './ReviewModal';

Modal.setAppElement('#root'); // Ensures proper accessibility

const MyBookings = () => {

  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const userName = user?.displayName;
  const userEmail = user?.email;

  // Fetch booked rooms for the logged-in user
  useEffect(() => {
    if (!userEmail) {
      navigate('/login', { state: { from: window.location.pathname } });
      return;
    }
    setLoading(true);
    fetch(`http://localhost:5000/bookedRoomsbyEmail/${userEmail}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch bookings');
        }
        return res.json()
      })
      .then(data => {
        setMyBookings(data);
        setLoading(false);
      })

      .catch(error => {
        toast.error('Error fetching Rooms!');
        console.error('Error fetching rooms:', error);
        setLoading(false);
      })

  }, [userEmail]);


  // Handle Review Submission

  const handleReview = async (e) => {
    e.preventDefault();

    // Ensure a booking is selected
    if (!selectedBooking) {
      toast.error("Please select a booking to review.");
      return;
    }

    const form = e.target;
    const rating = form.rating.value;
    const comment = form.comment.value;
    const bookingId = selectedBooking._id; // Booking ID from the selected booking
    const roomName = selectedBooking.roomName;// Get roomId from selectedBooking

    const reviewData = {
      userName,
      rating,
      comment,
    }

    try {
      // Update reviewdata in bookedRooms db
        const bookingResponse = await fetch(`http://localhost:5000/bookedRooms/${bookingId}`, {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(reviewData),
        })

        if (!bookingResponse.ok) {
          throw new Error('Error updating the booking.');
        }

        const roomResponse = await fetch(`http://localhost:5000/rooms/${roomName}`, {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(reviewData),
        })

        if (!roomResponse.ok) {
          throw new Error('Error updating the room review.');
        }
        const bookingData = await bookingResponse.json();
        const roomData = await roomResponse.json();

      if (bookingData.modifiedCount > 0 || roomData.modifiedCount > 0) {
        setMyBookings(myBookings.map(booking =>
          booking._id === bookingId ? { ...booking, rating, comment } : booking
        ));
        toast.success("Review Submitted Successfully!");
        setIsModalOpen(false);
      }

    } catch (error) {
      toast.error(`Review submission failed: ${error.message}`);
      console.error('Error submitting review:', error);
    }
    // Update review in rooms d
  }

  return (
    <div>
      <div className='bg-[#009688]'>
        <Navbar></Navbar>
      </div>
      <h2 className='text-center text-4xl my-6'>My Booked Rooms : {myBookings.length}</h2>

      {/* Table of Booking */}
      <table className="min-w-full bg-white border border-gray-300 my-6 ">
        <thead>
          <tr className='bg-gray-200 text-base font-semibold  '>
            <th className="py-3 px-4 border">Image</th>
            <th className="py-3 px-4 border">Rooms Name </th>
            <th className="py-3 px-4 border">Price/Night</th>
            <th className="py-3 px-4 border">Review</th>
            <th className="py-3 px-4 border">Update Booking Date</th>
            <th className="py-3 px-4 border">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {
            myBookings.map(booking =>
              <MyBookingRow
                key={booking._id}
                booking={booking}
                setIsModalOpen={setIsModalOpen}
                setSelectedBooking={setSelectedBooking}
              >
              </MyBookingRow>
            )
          }
        </tbody>
      </table>
      <ReviewModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      selectedBooking={selectedBooking} // Pass selectedBooking to the modal
      handleReview={handleReview}
      userName = {userName}
      >
      </ReviewModal>
    </div>

  )

}

export default MyBookings;