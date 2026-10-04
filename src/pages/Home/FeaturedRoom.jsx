import React, { useCallback, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Room from './Room';

const FeaturedRoom = () => {
    const loadedRooms = useLoaderData();

    // Safely extract the array whether loadedRooms is directly an array or nested in an object. as data is loaded from backend. 

    const roomArray = Array.isArray(loadedRooms) 
    ? loadedRooms 
    : (loadedRooms?.rooms || loadedRooms?.data || []); 
  
    // const [rooms, setRooms] = useState(loadedRooms || []);
    const [visibleCount, setVisibileCount] = useState(6);

    // handle view more button
    const handleViewMore = useCallback(() => {
        setVisibileCount(prevCount => prevCount + 3)
    },[])


    return (
        <div className='my-8'>
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-5xl font-bold text-[#054637] font-pacifico">Featured Rooms</h2>
                <p className="text-lg text-[#202020] font-bold  mt-3">
                    Discover luxury, comfort, and breathtaking views in every room.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 " 
               >
                    {
                        roomArray.slice(0,visibleCount).map(room =>
                            <Room
                                key={room._id}
                                room={room}
                            ></Room>)
                    }

                </div>
                
                {
                    visibleCount < roomArray.length && (
                        <div className='text-right'>
                            <button className='bg-[#D4AF37] hover:bg-[#B9A58D] text-white rounded-lg px-4 py-2 transition-all cursor-pointer'
                                onClick={handleViewMore} >
                                View More...
                            </button>
                        </div>
                    )
                }
            </div>

        </div>
    )
    
}


export default FeaturedRoom