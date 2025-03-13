import React, { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import Modal from 'react-modal';
Modal.setAppElement('#root'); // Ensures proper accessibility

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { toast } from 'react-toastify';


const MyBookingRow = ({ booking, setIsModalOpen, setSelectedBooking }) => {
    const { image, roomName, price, _id, bookingDate } = booking;
    const { user } = useContext(AuthContext);

    // Convert MongoDB booking date to JavaScript Date object
    const [selectedDate, setSelectedDate] = useState(bookingDate ? new Date(bookingDate) : null);
    const [dateError, setDateError] = useState(false);

    const handleDateUpdate = () => {
        if (!selectedDate) {
            setDateError(true);
            return;
        }
        // Convert to ISO format
        const updateBooking = { bookingDate: selectedDate.toISOString() };

        // Send the updated booking data back to the server
        axios.patch(`http://localhost:5000/bookedRooms/${_id}`, updateBooking)
            .then(updateResponse => {
                if (updateResponse.data.modifiedCount > 0) {
                    toast.success('Booking date updated successfully!');
                    fetchBookings(); // Refresh bookings list
                } else {
                    toast.error('No changes detected.');
                }
            })
    }



    return (
        <tr >
            <td className=' p-2 flex justify-center' >
                <img src={image} alt="" className='h-36 w-64 rounded-xl ' />
            </td>
            <td className='font-semibold text-center'>{roomName}</td>
            <td className='font-semibold text-center'>$ {price}</td>
            <td className='font-semibold text-center'>

                <button
                    className='btn btn-primary'
                    onClick={() => {
                        setIsModalOpen(true)
                        setSelectedBooking(booking); // Set the selected booking
                    } 
                    }>Add Review</button>
            </td>

            <td className='font-semibold text-center'>
                <div >
                    <DatePicker
                        className="border mr-2 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        selected={selectedDate}
                        onChange={(date) => {
                            setSelectedDate(date);
                            setDateError(false);
                        }}
                        dateFormat="yyyy/MM/dd"
                        minDate={new Date()} // Prevent selecting past dates
                        placeholderText="Select a date"
                    ></DatePicker>
                    {
                        dateError && (
                            <p className="text-red-500 text-sm mt-1">Please Select a Date</p>
                        )

                    }
                    <button
                        className="btn "
                        onClick={handleDateUpdate}
                    >
                        Update Date
                    </button>
                </div>
            </td>
            <td className='font-medium text-center' ><button className='btn'>Delete</button></td>
        </tr>

    )
}
export default MyBookingRow;