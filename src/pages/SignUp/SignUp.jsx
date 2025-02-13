import React, { useContext, useState } from 'react'

import { AuthContext } from '../provider/AuthProvider'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../shared/Navbar';
import { Link } from 'react-router-dom';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {

    const { createUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        console.log(email, password, photoURL, name)

        // Create user in Firebase
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Registration successful! Welcome!', { autoClose: 3000 });
            })
            .catch(() => {
                console.error(error.message);
                toast.error('Registration not successful. Please try again!', { autoClose: 3000 });
            })
    }
    const handleGoogleLogin = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(() => {
                toast.success('Google Login successful! Welcome!', { autoClose: 3000 });
            })
            .catch(() => {
                console.error(error);
                toast.error('Googke Login not successful. Please try again!', { autoClose: 3000 });
            })
    }

    return (
        <div >
            <div style={{ backgroundImage: "url('https://i.ibb.co.com/mrq37JBT/SignUp.jpg')" }}
                className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center relative rounded-t-xl">
                <div className=" absolute inset-0 md:right-4 md:left-4 ">
                    <Navbar></Navbar>
                </div>
                <div className=" absolute p-4 top-14 md:top-18 lg:top-34 bg-[rgba(0,0,0,0.2)] hover:shadow-2xl  hover:shadow-pink-400 hover:backdrop-blur-xs w-full max-w-sm rounded-xl mx-2">

                    <form className=" p-6 m-2" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label mb-2">
                                <span className="label-text text-white font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-border bg-[rgba(0,0,0,0.1)] text-white font-semibold" required />
                        </div>
                        
                        <div className="form-control">
                            <label className="label mb-2">
                                <span className="label-text text-white font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered bg-[rgba(0,0,0,0.1)] text-white font-semibold" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label mb-2">
                                <span className="label-text text-white font-semibold">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"}
                                name='password'
                                placeholder="password"
                                className="input input-bordered bg-[rgba(0,0,0,0.1)] text-white font-semibold"
                                required />
                            <span className='absolute bottom-4 right-3 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#009688] font-semibold text-lg w-full hover:shadow-pink-400 hover:shadow-lg text-white">Register</button>
                        </div>
                        <p className='text-center font-semibold text-lg text-white mt-2'>Already Have an Account! Please
                            <Link className='text-pink-400 font-semibold'
                                to="/login"> Login</Link> </p>
                    </form>
                    
                </div>
            </div>
        </div >
    )
}

export default SignUp