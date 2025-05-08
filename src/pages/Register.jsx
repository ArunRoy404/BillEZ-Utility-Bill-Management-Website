import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import AuthContext from '../context/AuthContext/AuthContext';
import { notifyError, notifySuccess } from '../utilities/notify';


const Register = () => {
    const { createUser, updateUserProfile, reloadUser } = use(AuthContext)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [isPassVisible, setIsPassVisible] = useState(false)
    const [isBtnLoading, setISBtnLoading] = useState(false)


    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);

    const handleCreateUser = e => {
        e.preventDefault()
        const userName = e.target.userName.value
        const photoURL = e.target.photoURL.value
        const email = e.target.email.value
        const password = e.target.password.value

        setSuccess('')
        setError('')

        const digitExist = /(?=.\d)/.test(password)
        const isLowerCase = /(?=.*[a-z])/.test(password)
        const isUpperCase = /(?=.*[A-Z])/.test(password)
        const isPassLong = password.length > 5

        digitExist || setError('Password must contain at least one digit')
        isLowerCase || setError('Password must contain at least one lowercase character')
        isUpperCase || setError('Password must contain at least one uppercase character')
        isPassLong || setError('Password length must be at least 6 characters long.')


        if (digitExist && isLowerCase && isUpperCase && isPassLong) {
            setISBtnLoading(true)
            createUser(email, password)
                .then(() => {
                    const updateInfo = {
                        displayName: userName,
                        photoURL: photoURL
                    }
                    updateUserProfile(updateInfo)
                        .then(() => {
                            setSuccess('Account created successfully')
                            notifySuccess("Account created successfully")
                            reloadUser()
                            navigate(location.state || '/')
                        })
                        .catch(error => {
                            setError(error.code)
                            notifyError('Registration failed')
                        })
                })
                .catch(error => {
                    setError(error.code)
                    notifyError('Registration failed')
                })
                .finally(() => {
                    setISBtnLoading(false)
                })
        }


    }


    return (
        <div className='flex md:py-10'>
            <div className="flex flex-col md:flex-row flex-1 items-center justify-around mb-10 ">
                <div className='hidden md:block'>
                    <h1 className='text-6xl font-bold mb-3' >BillEZ</h1>
                    <h2 className='md:text-3xl font-bold opacity-70'>Fast. Secure. Hassle-Free</h2>
                </div>
                <div className="w-full">
                    <div className="card bg-base-100 md:w-sm shrink-0 shadow-2xl border-2 border-gray-300 ">
                        <div className="card-body">
                            <h1 className='text-4xl font-bold mb-3'>Register</h1>
                            <form onSubmit={handleCreateUser} className="fieldset border-b-2 border-gray-400 border-dashed">

                                <label className="label text-lg font-black text-blue-400">User name</label>
                                <input name='userName' type="text" required className="w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input" placeholder="username" />

                                <label className="label text-lg font-black text-blue-400">Photo URL</label>
                                <input name='photoURL' type="text" required className="w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input" placeholder="photo URL" />


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

                                <p className='text-green-400' >{success}</p>
                                <p className='text-red-400' >{error}</p>

                                <button type='submit' className=' btn btn-neutral shadow-none rounded-sm hover:bg-white hover:text-black border-2 border-black '>
                                    {isBtnLoading && <span className="loading loading-spinner"></span>}
                                    Register
                                </button>
                            </form>
                            <h2>Already have an account? <Link state={location.state} className='underline text-blue-400' to={'/login'}>Log IN Now</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;