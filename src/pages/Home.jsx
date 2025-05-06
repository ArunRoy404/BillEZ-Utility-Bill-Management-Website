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
                <SliderUtility></SliderUtility>
            </section>
        </div>
    );
};

export default Home;