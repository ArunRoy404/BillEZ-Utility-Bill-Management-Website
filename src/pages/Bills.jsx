import React, { useContext, useEffect, useState } from 'react';
import BillCard from '../components/BillCard/BillCard';
import LoaderRing from '../components/LoaderRing';
import DropDown from '../components/DropDown/DropDown';
import BillContext from '../context/BillContext/BillContext';

const Bills = () => {
    const [catBills, setCatBills] = useState([])
    const { bills } = useContext(BillContext)

    const handleLoadTypes = (type) => {
        if (type == 'Select all') {
            setCatBills(bills)
        } else {
            setCatBills(bills.filter(bill => bill.billType == type))
        }
    }

    useEffect(() => {
        setCatBills(bills)
    }, [bills])



    return (
        <div className='my-20'>
            <h1 className='text-center text-4xl font-bold'>Your Bill Dashboard</h1>
            <h2 className='text-center text-lg font-bold opacity-70 mb-10'>Track pending bills and make payments with just a few clicks.</h2>

            <div className='relative'>
                <div className='flex justify-end'>
                    <div className='max-w-max mb-10'>
                        <h2 className='text-2xl font-bold mb-2'>Select Bill Type</h2>
                        <DropDown bills={bills} handleLoadTypes={handleLoadTypes}></DropDown>
                    </div>
                </div>

                <div className='space-y-3 md:space-y-10 sm:grid grid-cols-1 flex-1'>
                    {
                        catBills.map(bill => <BillCard key={bill.id} bill={bill}></BillCard>)
                    }

                </div>
                <div className='w-'></div>
            </div>
        </div>
    );
};

export default Bills;