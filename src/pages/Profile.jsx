import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import LoaderRing from '../components/LoaderRing';
import { FaPenToSquare } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { notifyError, notifySuccess } from '../utilities/notify';

const Profile = () => {
    const [isEdit, setIsEdit] = useState(false)

    const { user, isLoading, updateUserProfile, reloadUser } = useContext(AuthContext)

    const handleEditProfile = (e) => {
        e.preventDefault()
        const displayName = e.target.userName.value
        const photoURL = e.target.photoURL.value 

        if(!displayName && !photoURL){
            notifyError("Nothing to update")
            return
        }

        const updateInfo = {}
        if(displayName) updateInfo.displayName = displayName
        if(photoURL) updateInfo.photoURL = photoURL

        updateUserProfile(updateInfo)
        .then(()=>{
            reloadUser()
            notifySuccess("Profile updated successfully")
        })
        .catch(error=>{notifyError(error.code)})

    }

    if (isLoading) {
        return <div className="h-[80vh] flex items-center justify-center"><LoaderRing></LoaderRing></div>
    }

    const editBox = (
        <div>
            <form className='mb-5' onSubmit={handleEditProfile} action="">
                <div className='flex'>
                    <p className='rounded-l p-3 w-30 bg-blue-400' htmlFor="">User name:</p>
                    <input className='bg-white p-3 text-black font-bold rounded-r' placeholder='enter username' type="text" name="userName" id="" />
                </div>

                <div className='flex mt-2'>
                    <p className='rounded-l p-3 w-30 bg-blue-400' htmlFor="">Photo URL:</p>
                    <input className='bg-white p-3 text-black font-bold rounded-r' placeholder='enter photo url' type="text" name="photoURL" id="" />
                </div>
                <div className='text-center mt-5'>
                    <button className='bg-green-600 hover:bg-green-800 hover:cursor-pointer py-2 px-4 rounded font-bold' type='submit'>Save</button>
                </div>
            </form>
        </div>
    )

    return (
        <div className='mb-20 bg-gray-900 text-white flex flex-col items-center p-10 rounded-2xl' >
            <div className='text-center'>
                <img className='w-40 h-40 mx-auto rounded-full p-2 bg-white mb-5' src={user?.photoURL} alt="" />
                <h1 className='text-3xl font-bold mb-2'>{user?.displayName}</h1>
                <h2 className='font-bold mb-5'>{user?.email || user?.providerData[0]?.email || 'Email is Private'}</h2>
            </div>

            <button onClick={() => setIsEdit(state => !state)} className='mb-10 btn btn-neutral bg-blue-400 shadow-none rounded-4xl hover:bg-white hover:text-blue-400 border-2 border-blue-400 '>
                {
                    isEdit
                    ? <span><ImCross /></span>
                    : <span><FaPenToSquare /></span>
                }
                {
                    isEdit
                        ? 'Cancel edit'
                        : 'Edit profile'
                }
            </button>

            {
                isEdit && editBox
            }

            
        </div>
    );
};

export default Profile;