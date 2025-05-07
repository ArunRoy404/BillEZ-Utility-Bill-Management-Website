import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {
    return (
        <div className='p-5 container mx-auto'>
            <header><Navbar></Navbar></header>
            <div className='container mx-auto min-h-[calc(100vh-178px-65px-40px-40px-30px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;