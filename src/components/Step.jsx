import React from 'react';

const Step = ({ step, index }) => {
    return (
        <div className={`mb-8 flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div
                className="order-2 w-5/12 backdrop-blur-sm bg-gray-900 text-white p-6 rounded-lg shadow-xl"
            >
                <div className="text-3xl mb-2">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
            </div>

            <div className="z-10 flex items-center justify-center order-1 bg-blue-400 rounded-full w-12 h-12 shadow-md">
                <span className="text-white font-bold">{index + 1}</span>
            </div>

            <div className="order-3 w-5/12"></div>
        </div>
    );
};

export default Step;