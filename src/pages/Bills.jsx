import React from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import BillCard from '../components/BillCard/BillCard';
import LoaderRing from '../components/LoaderRing';

const Bills = () => {

    const bills = useLoaderData()
    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return (
            <div className="h-[80vh] flex items-center justify-center">
                <LoaderRing />
            </div>
        );
    }

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