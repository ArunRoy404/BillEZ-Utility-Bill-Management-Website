import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = ({ feature, index }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,   
        });
    }, []);


    return (
        <div data-aos={`${index%2==1 ? 'fade-left' : 'fade-right'}`} className="text-left bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 hover:shadow-md transition">
            <div className="text-3xl mb-2 md:mb-4">{feature.icon}</div>
            <h3 className="text-white text-xl font-semibold md:mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
        </div>
    );
};

export default Features;