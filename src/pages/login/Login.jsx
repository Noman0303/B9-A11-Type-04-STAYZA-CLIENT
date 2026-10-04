import React, { useContext, useState } from 'react'
import Navbar from '../shared/Navbar'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { signInUser, signInGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        setIsLoading(true);
        // Login user in Firebase
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login successful! Welcome!', { autoClose: 3000 });
                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                toast.error('Login not successful. Please try again!', { autoClose: 3000 });
            })
            .finally(() => setIsLoading(false));
    };


    const handleGoogleLogin = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);
                toast.success('Google Login successful! Welcome!', { autoClose: 3000 });
                // navigate after login 
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error('Google Login not successful. Please try again!', { autoClose: 3000 });
            })
    }

    return (
        <div  >
            <div style={{ backgroundImage: "url('/images/Login/Login.webp')" }}
                className="flex flex-col min-h-screen bg-cover bg-center relative rounded-t-xl">

                {/* Navbar wrapper */}
                <div className=" w-full z-10 ">
                    <Navbar></Navbar>
                </div>

                {/* Main content wrapper to align form cleanly without overlap */}

                <div className=" flex-1 flex flex-col justify-center items-center p-4 top-12 lg:top-10 ">

                    <div className='bg-[rgba(0,0,0,0.2)] hover:shadow-amber-400 hover:shadow-2xl hover:backdrop-blur-xs w-full max-w-sm rounded-xl mx-2'>
                        <form className="p-6  " onSubmit={handleLogin}>
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
                                <span className='absolute bottom-4 right-3 ' onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </span>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn bg-[#009688] font-semibold text-lg w-full hover:shadow-amber-300 hover:shadow-lg text-white cursor-pointer">Login</button>
                            </div>
                            <p className='text-center font-semibold text-lg text-white mt-2'>New Here! Please
                                <Link className='text-amber-300 '
                                    to="/signUp">  Sign Up</Link> </p>
                        </form>
                    </div>




                    <div className='text-center p-8'>
                        <p className='text-lg font-semibold text-[#054637] '>Or Login with</p>
                        <button className='btn mt-2 bg-white hover:shadow-amber-300 hover:shadow-lg cursor-pointer w-full'
                            onClick={handleGoogleLogin}
                        ><FcGoogle className=' w-7 h-7' /></button>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Login