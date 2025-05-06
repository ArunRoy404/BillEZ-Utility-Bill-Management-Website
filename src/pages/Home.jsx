import React, { Suspense } from 'react';
import Slider from '../components/Hero Carousal/Slider';
import Services from '../components/Services PRoviders/Services';
import WhyChooseUs from '../Sections/WhyChooseUs';
import LoaderRing from '../components/LoaderRing';
import HowItWorks from '../Sections/HowItWorks';
import Testimonial from '../Sections/Testimonial';

const Home = () => {
    return (
        <div>
            <section>
                <h1 className='text-center text-3xl font-bold mt-20'>Pay Your Utility Bills in One Click  </h1>
                <h2 className='text-center mt-4 font-black opacity-70 mb-5'>Fast. Secure. Hassle-Free.</h2>
                <Suspense fallback={<div className='h-50 flex justify-center items-center'><LoaderRing></LoaderRing></div>}>
                    <Slider></Slider>
                </Suspense>
            </section>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;