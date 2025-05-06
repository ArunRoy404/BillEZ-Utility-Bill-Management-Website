import React, { Suspense } from 'react';
import Slider from '../components/Slider';
import Loader from '../components/Loader';

const Home = () => {
    return (
        <div>
            <section>
                <Suspense fallback={<div className='h-[50vh] grid center'><Loader></Loader></div>}>
                    <Slider></Slider>
                </Suspense>
            </section>
        </div>
    );
};

export default Home;