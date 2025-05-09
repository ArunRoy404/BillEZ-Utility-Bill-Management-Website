import { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import LoaderRing from '../components/LoaderRing';
import { FaPenToSquare } from "react-icons/fa6";
import { useNavigate } from 'react-router';


const Profile = () => {
    const { user, isLoading } = useContext(AuthContext)
    const navigate = useNavigate(null)

    if (isLoading) {
        return <div className="h-[80vh] flex items-center justify-center"><LoaderRing></LoaderRing></div>
    }

    return (
        <div className='mb-20 bg-gray-900 text-white flex flex-col items-center p-10 rounded-2xl' >
            <div className='text-center'>
                <img className='w-40 h-40 mx-auto rounded-full p-2 bg-white mb-5' src={user?.photoURL} alt="" />
                <h1 className='text-3xl font-bold mb-2'>{user?.displayName}</h1>
                <h2 className='font-bold mb-5'>{user?.email || user?.providerData[0]?.email || 'Email is Private'}</h2>
            </div>

            <button onClick={() => { navigate('/update-profile') }} className='mb-10 btn btn-neutral bg-blue-400 shadow-none rounded-4xl hover:bg-white hover:text-blue-400 border-2 border-blue-400 '>
                <span><FaPenToSquare /></span>Update profile
            </button>
        </div>
    );
};

export default Profile;