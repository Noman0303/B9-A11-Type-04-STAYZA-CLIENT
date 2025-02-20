import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { useLoaderData } from 'react-router-dom'
import RoomsRow from './RoomsRow';
import axios from 'axios';

const Rooms = () => {

  const [rooms, setRooms] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  // "asc" or "desc"

  // Fetch rooms whenever filter or sort changes
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/rooms", {
          params: {
            minPrice,
            maxPrice,
            sort: sortOrder,
          },
        });
        setRooms(response.data);
      }
      catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, [minPrice, maxPrice, sortOrder]);


  return (
    <div>
      <div className='bg-[#009688]'>
        <Navbar></Navbar>
      </div>
      <h2 className='text-center text-4xl my-5'>Available Rooms : {rooms.length}</h2>

      {/* Filter & Sort control */}
      <div className="my-4 flex justify-center gap-6">
        <div>
          <label className="mr-2">Min Price:</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            placeholder="Min Price"
          />
        </div>
        <div>
          <label className="mr-2">Max Price:</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            placeholder="Max Price"
          />
        </div>
        <div>
          <label className="mr-2">Sort by Price:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='bg-gray-200 text-base font-semibold '>
              <th>Image</th>
              <th>Rooms Name </th>
              <th>Category</th>
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