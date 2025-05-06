import React from 'react';

const Features = ({feature}) => {
    return (

        <div
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 hover:shadow-md transition"
        >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
        </div>
    );
};

export default Features;