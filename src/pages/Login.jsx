import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import AuthContext from '../context/AuthContext/AuthContext';
import { notifyError, notifySuccess } from '../utilities/notify';



const Login = () => {

    const { logIn, googleLogIn } = use(AuthContext)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [isPassVisible, setIsPassVisible] = useState(false)
    const [isLogINBtnLoading, setIsLogInBtnLoading] = useState(false)
    const [isGoogleBtnLoading, setIsGoogleBtnLoading] = useState(false)

    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        setSuccess('')
        setError('')
        setIsLogInBtnLoading(true)

        logIn(email, password)
            .then(result => {
                console.log(result)
                setSuccess('Login Successful')
                notifySuccess('Login Successful')
                navigate('/')
            })
            .catch(error => {
                setError(error.code)
                notifyError('Login Failed')
            })
            .finally(() => {
                setIsLogInBtnLoading(false)
            })
    }

    const handleGoogleLogIn = () => {
        setSuccess('')
        setError('')
        setIsGoogleBtnLoading(true)

        googleLogIn()
            .then(result => {
                console.log(result)
                setSuccess('Login Successful')
                notifySuccess('Login Successful')
                navigate(location.state || '/')
            })
            .catch(error => {
                setError(error.code)
                notifyError("Login failed!")
            })
            .finally(() => {
                setIsGoogleBtnLoading(false)
            })
    }


    return (
        <div className='flex py-10'>
            <div className="flex flex-1 items-center justify-around ">
                <div>
                    <h1 className='text-6xl font-bold mb-3' >BillEZ</h1>
                    <h2 className='text-3xl font-bold opacity-70'>Fast. Secure. Hassle-Free</h2>
                </div>
                <div className="">
                    <div className="card bg-base-100 w-sm shrink-0 shadow-2xl border-2 border-gray-300 ">
                        <div className="card-body">
                            <h1 className='text-4xl font-bold mb-3'>Log In</h1>
                            <form onSubmit={handleLogin} className="fieldset border-b-2 border-gray-400 border-dashed">
                                <label className="label text-lg font-black text-blue-400">Email</label>
                                <input name='email' type="email" required className="w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input" placeholder="Email" />

                                <label className="label font-bold text-lg text-blue-400">Password</label>
                                <div className='relative'>
                                    <input name='password' required type={isPassVisible ? 'text' : "password"} className="w-full focus:outline-none focus:border-2  focus:border-blue-400 input pr-13 font-bold" placeholder="******" />
                                    <button type='button' onClick={() => setIsPassVisible(value => !value)} className='cursor-pointer p-0 h-6 w-4 absolute right-6 top-2 z-10 border-none'>
                                        {
                                            isPassVisible
                                                ? <FaEyeSlash size={18} />
                                                : <FaEye size={18} />
                                        }
                                    </button>
                                </div>
                                <Link to={'/forgot-password'} type='button' className='text-left cursor-pointer font-bold underline'>Forgot password?</Link>

                                <p className='text-green-400' >{success}</p>
                                <p className='text-red-400' >{error}</p>

                                <button type='submit' className='mt-5 btn btn-neutral shadow-none rounded-sm hover:bg-white hover:text-black border-2 border-black '>
                                    {isLogINBtnLoading && <span className="loading loading-spinner"></span>}
                                    Log IN
                                </button>
                            </form>


                            <button onClick={handleGoogleLogIn} className='btn btn-neutral shadow-none rounded-sm hover:bg-white hover:text-black border-2 border-black '>
                                {isGoogleBtnLoading && <span className="loading loading-spinner"></span>}
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" ></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <h2>Don't have an account? <Link className='underline text-blue-400' to={'/register'}>Register Now</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;