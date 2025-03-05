import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import Modal from 'react-modal';
Modal.setAppElement('#root'); // Ensures proper accessibility


const MyBookingRow = ({ booking,  setIsModalOpen, }) => {
    const { image, roomName, price, _id,
    } = booking;


    const { user } = useContext(AuthContext);





    return (
        <tr >
            <td className=' p-2 flex justify-center' >
                <img src={image} alt="" className='h-36 w-64 rounded-xl ' />
            </td>
            <td className='font-semibold text-center'>{roomName}</td>
            <td className='font-semibold text-center'>$ {price}</td>
            <td className='font-semibold text-center'>

              <button 
              className='btn'
              onClick={()=>setIsModalOpen(true)}>Add Review</button>
            </td>

            <td className='font-semibold text-center'><button className='btn' >Update</button></td>
            <td className='font-medium text-center' ><button className='btn'>Delete</button></td>
        </tr>




    )
}

export default MyBookingRow;