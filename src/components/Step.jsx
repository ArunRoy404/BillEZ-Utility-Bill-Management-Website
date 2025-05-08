import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Step = ({ step, index }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    
    return (
        <div data-aos={`${index%2==1 ? 'fade-right' : 'fade-left'}`} className={`mb-4 md:mb-8 flex items-center justify-between gap-10 w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div
                className="order-2 md:w-5/12 backdrop-blur-sm bg-gray-900 text-white p-3 md:p-6 rounded-lg shadow-xl"
            >
                <div className="text-3xl mb-2">{step.icon}</div>
                <h3 className="text-xl font-bold md:mb-2">{step.title}</h3>
                <p className="text-sm md:text-lg text-gray-300">{step.description}</p>
            </div>

            <div>
                <div className="z-10 flex items-center justify-center order-1 bg-blue-400 rounded-full w-12 h-12 shadow-md">
                    <span className="text-white font-bold">{index + 1}</span>
                </div>
            </div>

            <div className="hidden md:block order-3 w-5/12"></div>
        </div>
    );
};

export default Step;