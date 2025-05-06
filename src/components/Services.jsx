import React, { Suspense } from 'react';
import SliderUtility from './SliderUtility';
import Loader from './Loader';

const Services = () => {
    return (
        <div className='mt-20'>
            <h1 className='font-bold text-3xl'>All Your Services in One Place</h1>
            <div className='text-sm font-medium opacity-70 mb-5'>
                <p>Manage bills from top service providers in one place.</p>
                <p>We support payments for electricity, gas, water, internet & more.</p>
            </div>
            <Suspense fallback={<div className='h-50 grid center'><Loader></Loader></div>}>
                <SliderUtility></SliderUtility>
            </Suspense>
        </div>
    );
};

export default Services;