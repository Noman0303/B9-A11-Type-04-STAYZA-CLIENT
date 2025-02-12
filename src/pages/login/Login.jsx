import React, { useContext, useState } from 'react'
import Navbar from '../shared/Navbar'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { signInUser, signInGoogle } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        // Login user in Firebase
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(() => {
                toast.success('Login successful! Welcome!', { autoClose: 3000 });
            })
            .catch(() => {
                console.error(error);
                toast.error('Login not successful. Please try again!', { autoClose: 3000 });
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
        <div  >
            <div style={{ backgroundImage: "url('https://i.ibb.co.com/vx36hsfK/Login.jpg')" }}
                className="flex flex-col justify-center items-center h-screen bg-cover bg-center relative rounded-t-xl">
                <div className=" absolute top-0 right-0 md:right-4 left-0 md:left-4 ">
                    <Navbar></Navbar>
                </div>

                <div className=" relative top-4 lg:top-24 bg-[rgba(0,0,0,0.2)] hover:backdrop-blur-xs w-full max-w-sm rounded-xl mx-2">

                    <form className="card-body hover:shadow-amber-400 hover:shadow-2xl  " onSubmit={handleLogin}>
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
                    <div className='text-center p-8'>
                        <p className='text-lg font-semibold text-white '>Or Login with</p>
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