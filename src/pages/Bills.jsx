import React from 'react';
import { useLoaderData } from 'react-router';
import BillCard from '../components/BillCard/BillCard';

const Bills = () => {

    const bills = useLoaderData()

    return (
        <div className='my-20'>
            <h1 className='text-center text-4xl font-bold'>Your Bill Dashboard</h1>
            <h2 className='text-center text-lg font-bold opacity-70 mb-10'>Track pending bills and make payments with just a few clicks.</h2>

            <div className='space-y-10 sm:grid grid-cols-1'>
                {
                    bills.map(bill => <BillCard key={bill.id} bill={bill}></BillCard>)
                }

            </div>
        </div>
    );
};

export default Bills;