import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import Avatar from './Avatar';
import AuthContext from '../../context/AuthContext/AuthContext';
import BillContext from '../../context/BillContext/BillContext';
import { useRef } from 'react';
import { useEffect } from 'react';

const Navbar = () => {

    const { user, balance } = useContext(AuthContext)
    const {setNavRef} = useContext(BillContext)

    const location = useLocation()

    const navRef = useRef(null)

    useEffect(()=>{
        setNavRef(navRef)
    },[setNavRef])

    const links = (
        <>
            <li className='text-lg font-bold' ><NavLink to={'/'} >Home</NavLink></li>
            <li className='text-lg font-bold'><NavLink to={'/bills'} >Bills</NavLink></li>
            <li className='text-lg font-bold'><NavLink to={'/my-profile'} >My Profile</NavLink></li>
        </>
    )

    const userOptions = (
        <div className='flex items-center gap-4'>
            {user && <p className='hidden md:block text-sm font-bold border-2 border-blue-400 bg-gray-100 px-4 py-2 rounded-3xl' >Current balance: {balance}</p>}
            <Avatar></Avatar>
        </div>
    )

    const loginOptions = (
        <div className='space-x-4 font-bold'>
            <Link state={location.state} to={'register'} className='text-sm' >Register</Link>
            <Link state={location.state} to={'/login'} className='btn btn-neutral shadow-none rounded-4xl hover:bg-white hover:text-black border-2 border-black '>Login</Link>
        </div>
    )

    return (
        <div ref={navRef} className="shadow-sm rounded-xl mb-8 z-100">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-black text-3xl">BillEZ</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end mr-3">
                    {
                        user
                            ? userOptions
                            : loginOptions

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;