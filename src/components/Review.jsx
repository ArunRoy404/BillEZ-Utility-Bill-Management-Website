import React from 'react';
import Rating from './Rating';

const Review = ({ testimonial }) => {

    const { name, location, image, rating, content } = testimonial
    return (
        <div className="border border-gray-200 p-8 rounded-xl shadow-md bg-white text-gray-800">
            <div className="space-y-6">

                <div className="text-4xl text-gray-400">“</div>

                <p className="text-lg leading-relaxed">
                    {content}
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 mt-4">
                    <img
                        src={image}
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold">{name}</h4>
                        <p className="text-sm text-gray-500">{location}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <Rating rating={rating}></Rating>
                    <p className="text-sm text-gray-500">{rating} out of 5 stars</p>
                </div>
            </div>
        </div>

    );
};

export default Review;