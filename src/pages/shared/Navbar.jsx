import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '/logo.png'
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('User logged Out successfully');
                toast.success('User Log Out successful', { autoClose: 3000 })
            })
            .catch(error =>{
                console.error(error);
            });
    };

    const navLinks =
        <>
            <li className='hover:bg-[#054637] hover:text-white rounded-lg'> <NavLink to='/'>Home</NavLink></li>
            <li className='hover:bg-[#054637] hover:text-white rounded-lg'> <NavLink to='/rooms'>Rooms</NavLink></li>
            <li className='hover:bg-[#054637] hover:text-white rounded-lg'> <NavLink to='/myBookings'>My Bookings</NavLink></li>
            <li className='hover:bg-[#054637] hover:text-white rounded-lg'> <NavLink to='/aboutUs'>About us</NavLink></li>
            <li className='hover:bg-[#054637] hover:text-white rounded-lg'> <NavLink to='/contactUs'>Contact Us</NavLink></li>
        </>


    return (
        <div className='font-semibold'>


            <div className="navbar text-2xl  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[base-100] rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='w-9 hidden lg:block' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg text-[#FFFFFF]">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button className='btn bg-[#054637] text-white rounded-lg ' onClick={handleLogOut}>Sign OUt</button> :
                            <Link to='/signUp'>
                                <button className='btn bg-[#054637] text-white rounded-lg '>Sign Up</button>
                            </Link>
                    }


                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Navbar