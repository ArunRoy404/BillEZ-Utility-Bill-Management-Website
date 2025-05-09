import React, { use, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import AuthContext from '../context/AuthContext/AuthContext';
import { notifyError, notifySuccess } from '../utilities/notify';


const ForgotPassword = () => {
    const { resetPass } = use(AuthContext)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [isBtnLoading, setIsBtnLoading] = useState(false)

    const location = useLocation()


    const handleResetEmail = (e) => {
        e.preventDefault()
        const email = e.target.email.value

        setSuccess('')
        setError('')
        setIsBtnLoading(true)

        resetPass(email)
            .then(() => {
                setSuccess('Password reset email sent successfully. Please check your inbox')
                notifySuccess('Password reset email sent successfully')
            })
            .catch(error => {
                setError(error.code)
                notifyError('Password reset email sent failed!')
            })
            .finally(() => {
                setIsBtnLoading(false)
            })
    }

    return (
        <div className="flex items-center justify-around mb-10 ">
            <div className="w-full  md:w-auto">
                <div className="card bg-base-100 md:w-lg shrink-0 shadow-2xl border-2 border-gray-300 ">
                    <div className="card-body">
                        <h1 className='text-4xl font-bold mb-3'>Reset Password</h1>
                        <form onSubmit={handleResetEmail} className="fieldset border-b-2 border-gray-400 border-dashed">

                            <label className="label text-lg font-black text-blue-400">Email</label>
                            <input name='email' type="email" required className="border-2 border-gray-200 w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input" placeholder="Enter Email" />

                            <p className='text-green-600' >{success}</p>
                            <p className='text-red-400' >{error}</p>

                            <button type='submit' className='mb-5 btn btn-neutral shadow-none rounded-sm hover:bg-white hover:text-black border-2 border-black '>
                                {isBtnLoading && <span className="loading loading-spinner"></span>}
                                Send password reset Email
                            </button>
                        </form>
                        <h2>Want to Log IN? <Link state={location.state} className='underline text-blue-400' to={'/login'}>Log IN</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;