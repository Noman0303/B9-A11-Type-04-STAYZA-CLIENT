import React from 'react'
import { Link } from 'react-router-dom'

const MyBookingRow = ({ myBookings }) => {
    const { main_image, room_name, price, _id,
        availability,view, category} = myBookings;

    return (
        <tr >
            <td className=' p-2 flex justify-start' >
                <Link to={`/roomDetails/${_id}`}>
                        <div >
                            <img src={main_image} alt="" className='h-36 w-64  rounded-xl' />
                        </div>
                </Link>
            </td>
            <td>
                <div className="flex font-bold items-center ">
                    <p> {room_name}</p>
                </div>
            </td>
            <td className='font-semibold'>{category}</td>
            <td className='font-semibold'>{view}</td>
            <td className='font-semibold'>$ {price}</td>
            <td className='font-medium' >{availability}</td>

        </tr>

    )
}

export default MyBookingRow;