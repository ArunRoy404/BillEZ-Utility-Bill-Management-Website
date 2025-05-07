import React from 'react';
import CountUp from 'react-countup';

const StatCard = ({ data }) => {

    const { title, value, suffix } = data

    return (
        <div className="flex justify-center items-center flex-col border-2 border-gray-400 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-orange-500/30 transition-shadow">
            <div className="text-4xl font-bold mb-2">
                <CountUp enableScrollSpy={true} duration={3} end={value} />{suffix}
            </div>
            <p className="text-lg font-bold">{title}</p>
        </div>
    );
};

export default StatCard;