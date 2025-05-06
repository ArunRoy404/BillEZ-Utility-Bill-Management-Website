import React from 'react';
import { Link, NavLink } from 'react-router';
import Avatar from './Avatar';

const Navbar = () => {

    const links = (
        <>
            <li className='text-lg font-bold' ><NavLink to={'/'} >Home</NavLink></li>
            <li className='text-lg font-bold'><NavLink to={'/bills'} >Bills</NavLink></li>
            <li className='text-lg font-bold'><NavLink to={'/my-profile'} >My Profile</NavLink></li>
        </>
    )

    return (
        <div className="shadow-sm rounded-xl mb-8">
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
                <div className="navbar-end">
                    <div className='space-x-4 font-bold'>
                        <Link to={'register'} className='text-sm' >Register</Link>
                        <Link to={'/login'} className='btn btn-neutral shadow-none rounded-4xl'>Login</Link>
                    </div>
                    <Avatar></Avatar>
                </div>
            </div>
        </div>
    );
};

export default Navbar;