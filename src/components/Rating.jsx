import React from 'react';
import { IoMdStar } from "react-icons/io";

const Rating = ({ rating }) => {
    return (
        <div className='flex'>
            {
                [...Array(5)].map((value, index) => {return index + 1 <= rating ? <IoMdStar key={index} className='text-orange-500' size={22} /> : <IoMdStar key={index} className='text-orange-200' size={22} /> })
            }
        </div>
    );
};

export default Rating;