import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

const HomeLayout = () => {
    return (
        <div className='p-5'>
            <header><Navbar></Navbar></header>
            <div className='container mx-auto min-h-[calc(100vh-178px-65px-40px)]'>
                <Slider></Slider>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;