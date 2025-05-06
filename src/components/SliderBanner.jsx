import React from 'react';
import ButtonCustom from './ButtonCustom';

const SliderBanner = ({ data }) => {

    console.log(data);
    const {title, subtitle, ctaText, imgLink} = data

    return (
        <div className='border-2 flex gap-10 justify-center items-center h-100 bg-white rounded-2xl p-8  lg:p-16 lg:pl-10 '>
            <div className='w-80 h-80 rounded-2xl overflow-hidden flex items-center justify-center'>
                <img src={imgLink} alt="" />
            </div>
            <div className="flex flex-col justify-center lg:w-1/2">
                <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
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