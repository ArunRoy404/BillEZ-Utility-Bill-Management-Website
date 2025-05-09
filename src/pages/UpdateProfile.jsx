import { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import LoaderRing from '../components/LoaderRing';
import { FaPenToSquare } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { notifyError, notifySuccess } from '../utilities/notify';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {

    const { isLoading, updateUserProfile, reloadUser } = useContext(AuthContext)

    const navigate = useNavigate(null)

    const handleEditProfile = (e) => {
        e.preventDefault()
        const displayName = e.target.userName.value
        const photoURL = e.target.photoURL.value

        if (!displayName && !photoURL) {
            notifyError("Nothing to update")
            return
        }

        const updateInfo = {}
        if (displayName) updateInfo.displayName = displayName
        if (photoURL) updateInfo.photoURL = photoURL

        updateUserProfile(updateInfo)
            .then(() => {
                reloadUser()
                notifySuccess("Profile updated successfully")
                navigate('/my-profile')
            })
            .catch(error => { notifyError(error.code) })

    }

    if (isLoading) {
        return <div className="h-[80vh] flex items-center justify-center"><LoaderRing></LoaderRing></div>
    }

    return (
        <div className='mb-20 bg-indigo-50 border-gray-900 border-2 text-black flex py-20 justify-center p-10 rounded-2xl' >
            <div>
                <form onSubmit={handleEditProfile} action="">
                    <div className='flex'>
                        <p className='rounded-l p-3 w-30 text-white bg-blue-400 font-bold' htmlFor="">User name:</p>
                        <input className='bg-white p-3 text-black font-bold rounded-r' placeholder='enter username' type="text" name="userName" id="" />
                    </div>

                    <div className='flex mt-2'>
                        <p className='rounded-l p-3 w-30 text-white bg-blue-400 font-bold' htmlFor="">Photo URL:</p>
                        <input className='bg-white p-3 text-black font-bold rounded-r' placeholder='enter photo url' type="text" name="photoURL" id="" />
                    </div>
                    <div className='text-center mt-5'>
                        <button className='btn btn-neutral bg-blue-400 shadow-none rounded-4xl hover:bg-white hover:text-blue-400 border-2 border-blue-400 ' type='submit'>
                            <span><FaPenToSquare /></span>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;