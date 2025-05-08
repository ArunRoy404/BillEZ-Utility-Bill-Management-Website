import React from 'react';

const UtilityCard = ({provider}) => {

    return (
        <div className=' md:p-5 lg:p-10 xl:p-15 2xl:p-20 h-30 md:h-50 flex items-center justify-center rounded-2xl'>
        <img src={provider.logo} alt="" />
    </div>
    );
};

export default UtilityCard;