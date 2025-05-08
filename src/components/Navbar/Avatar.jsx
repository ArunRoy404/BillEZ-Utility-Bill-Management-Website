import React, { use } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { Link } from 'react-router';

const Avatar = () => {
    const { user, logOut } = use(AuthContext)

    const { photoURL, balance } = user
    console.log(balance);

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={photoURL} />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="font-bold text-sm menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Balance: <span className='text-blue-400'>{balance}</span></a></li>
                <li>
                    <Link to={'/my-profile'} className="justify-between">
                        View Profile
                    </Link>
                </li>
                <li><a onClick={handleLogOut}>Logout</a></li>
            </ul>
        </div>
    );
};

export default Avatar;