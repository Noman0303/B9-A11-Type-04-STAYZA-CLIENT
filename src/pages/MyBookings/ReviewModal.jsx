import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');


const ReviewModal = ({ isModalOpen, setIsModalOpen, handleReview, userName }) => {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Room Review"
            className=" flex justify-center items-center p-4">

            <div className="bg-[#F9F6EE] p-6 rounded-xl shadow-lg max-w-lg w-full transition-all animate-[fadeIn_1.5s_ease-out_forwards]">
                <h2 className="text-2xl font-semibold mb-6 text-center">Thanks For Your Valueble Review!</h2>

                <form onSubmit={handleReview} >

                    {/* User Name */}
                    <div className="form-control grid grid-cols-3 my-2">
                        <label className=" font-semibold col-span-1">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            defaultValue={userName}
                            className="input input-bordered  bg-gray-200 text-black font-semibold col-span-2"
                            readOnly />
                    </div>

                    {/* Star Rating */}
                    <div className="form-control grid grid-cols-3 my-2">
                        <label className="label mb-2 font-semibold col-span-1">Give a Rating (1-5)</label>
                        <select
                            name="rating"
                            required
                            className="input bg-gray-200 text-black font-semibold col-span-2"
                        >
                            <option value="">Select Rating</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>

                    </div>

                    {/* comment */}
                    <div className="form-control my-2 grid grid-cols-3">
                        <label className="label mb-2 font-semibold col-span-1">Add your comment</label>
                        <textarea
                            className="textarea bg-gray-200 text-black font-semibold h-20 col-span-2 "
                            placeholder="Write your feedback"
                            name="comment"
                            required></textarea>
                    </div>

                    {/* Buttons */}
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
                        >
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default ReviewModal