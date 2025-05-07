import React from 'react';
import CountUp from 'react-countup';

const StatCard = ({ data }) => {

    const { title, value, suffix } = data

    return (
        <div className="flex justify-center hover:scale-105 transition-transform duration-200 items-center flex-col border-2 hover:cursor-pointer border-gray-400 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-blue-400/30">
            <div className="text-4xl font-bold mb-2">
                <CountUp enableScrollSpy={true} duration={3} end={value} />{suffix}
            </div>
            <p className="text-lg font-bold">{title}</p>
        </div>
    );
};

export default StatCard;