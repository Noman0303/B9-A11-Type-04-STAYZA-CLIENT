import React from 'react'
import Navbar from '../shared/Navbar'

const Login = () => {
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
                    return updateProfile(result.user, {
                        displayName: name,
                        photoURL: photoURL,
                    })
                })
                .then(() => {
                    toast.success('Registration successful! Welcome!', { autoClose: 3000 });
                })
                .catch(() => {
                    console.error(error);
                    toast.error('Registration not successful. Please try again!', { autoClose: 3000 });
                })
        }
        
    return (
        <div>
            <div style={{ backgroundImage: "url('https://i.ibb.co.com/mrq37JBT/SignUp.jpg')" }}
                className="flex flex-col justify-center items-center h-screen bg-cover bg-center relative rounded-t-xl">
                <div className=" absolute top-0 right-0 md:right-4 left-0 md:left-4 ">
                    <Navbar></Navbar>
                </div>

                <div className=" absolute bg-[rgba(0,0,0,0.2)] hover:backdrop-blur-xs w-full max-w-sm rounded-2xl] rounded-xl">

                    <form className="card-body hover:shadow-amber-400 hover:shadow-2xl  " onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label mb-2">
                                <span className="label-text text-white font-semibold ">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-border bg-[rgba(0,0,0,0.1)] text-white font-semibold" required />
                        </div>
                        <div className="form-control">
                            <label className="label mb-2">
                                <span className="label-text text-white font-semibold">Photo URL</span>
                            </label>
                            <input type="url" name="photoURL" placeholder="Photo URL" className="input input-bordered bg-[rgba(0,0,0,0.1)] text-white font-semibold" required />
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
                            <span className='absolute bottom-4 right-3' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#009688] font-semibold text-lg w-full   hover:shadow-amber-300 hover:shadow-lg text-white">Register</button>
                        </div>
                        <p className='text-center font-semibold mb-4 text-lg text-white mt-4'>Already Have an Account! Please
                            <Link className='text-amber-300 ' 
                            to="/login"> Login</Link> </p>
                    </form>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div >
    )
}

export default Login