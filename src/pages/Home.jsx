import React, { Suspense } from 'react';
import Slider from '../components/Slider';
import Loader from '../components/Loader';
import Services from '../components/Services';
import SliderUtility from '../components/SliderUtility';

const Home = () => {
    return (
        <div>
            <section>
                <Suspense fallback={<div className='h-[50vh] grid center'><Loader></Loader></div>}>
                    <Slider></Slider>
                </Suspense>
                <Services></Services>
                <Suspense fallback={<div className='h-50 grid center'><Loader></Loader></div>}>
                    <SliderUtility></SliderUtility>
                </Suspense>
            </section>
        </div>
    );
};

export default Home;