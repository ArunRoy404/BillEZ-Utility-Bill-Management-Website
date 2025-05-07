import React from 'react';
import { GiWaterDrop } from 'react-icons/gi';
import { FaBolt } from 'react-icons/fa';
import { BsFillFuelPumpDieselFill } from 'react-icons/bs';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { MdOutlineWifi } from 'react-icons/md';
import { AiOutlineCreditCard } from 'react-icons/ai';

const BillTypeIcon = ({ billType }) => {
    switch (billType) {
        case 'electricity':
            return <FaBolt size={28} />;
        case 'water':
            return <GiWaterDrop size={28} />;
        case 'gas':
            return <BsFillFuelPumpDieselFill size={28} />;
        case 'tuition':
            return <HiOutlineAcademicCap size={28} />;
        case 'internet':
            return <MdOutlineWifi size={28} />;
        case 'credit card':
            return <AiOutlineCreditCard size={28} />;
    }
};

export default BillTypeIcon;