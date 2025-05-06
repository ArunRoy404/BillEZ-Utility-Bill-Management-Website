import React, { Suspense } from 'react';
import Slider from '../components/Hero Carousal/Slider';
import Loader from '../components/Loader';
import Services from '../components/Services PRoviders/Services';

const Home = () => {
    return (
        <div>
            <section>
                <h1 className='text-3xl font-bold mt-20'>Pay Your Utility Bills in One Click  </h1>
                <h2 className='text-sm font-medium opacity-70 mb-5'>Fast. Secure. Hassle-Free.</h2>
                <Suspense fallback={<div className='h-[50vh] grid center'><Loader></Loader></div>}>
                    <Slider></Slider>
                </Suspense>
            </section>
            <section>
                <Services></Services>
            </section>
        </div>
    );
};

export default Home;