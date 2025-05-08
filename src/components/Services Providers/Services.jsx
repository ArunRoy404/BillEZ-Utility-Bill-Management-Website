import React, { Suspense } from 'react';
import SliderUtility from './SliderUtility';
import LoaderRing from '../LoaderRing';

const Services = () => {
    return (
        <div className='mt-20 md:mt-24'>
            <h1 className='text-center font-bold text-3xl'>All Your Services in One Place</h1>
            <div className='text-center mt-4 font-bold opacity-70 mb-2'>
                <p>Manage bills from top service providers in one place.</p>
                <p>We support payments for electricity, gas, water, internet & more.</p>
            </div>
            <Suspense fallback={<div className='h-50 flex justify-center items-center'><LoaderRing></LoaderRing></div>}>
                <SliderUtility></SliderUtility>
            </Suspense>
        </div>
    );
};

export default Services;