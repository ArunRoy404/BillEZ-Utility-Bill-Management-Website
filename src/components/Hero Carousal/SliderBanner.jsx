import React from 'react';
import ButtonCustom from '../ButtonCustom';

const SliderBanner = ({ data }) => {
    const { title, subtitle, ctaText, imgLink } = data

    return (
        <div className='border-2 shadow-sm border-gray-400 flex flex-row-reverse md:flex-row gap-10 justify-center items-center h-50 md:h-80 lg:h-100 bg-white rounded-2xl p-8  lg:p-16 lg:pl-10 '>
            <div className='hidden md:block md:w-60 md:h-55 lg:w-80 lg:h-80 rounded-2xl overflow-hidden flex items-center justify-center'>
                <img src={imgLink} alt="" />
            </div>
            <div className="flex flex-col justify-center lg:w-1/2">
                <h5 className="mb-3 text-xl md:text-3xl font-extrabold leading-none sm:text-4xl">
                    {title}
                </h5>
                <p className="mb-5 text-gray-800">
                    {subtitle}
                </p>
                <div className="flex items-center">
                    <ButtonCustom ctaText={ctaText}></ButtonCustom>
                </div>
            </div>
        </div>
    );
};

export default SliderBanner;