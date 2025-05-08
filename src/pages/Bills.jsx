import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import BillCard from '../components/BillCard/BillCard';
import LoaderRing from '../components/LoaderRing';
import DropDown from '../components/DropDown/DropDown';

const Bills = () => {

    const [bills, setBills] = useState([])
    const [catBills, setCatBills] = useState([])
    const loadedBills = useLoaderData()
    const navigation = useNavigation();

    const handleLoadTypes = (type)=>{
        if(type=='Select all'){
            setCatBills(bills)
        }else{
            setCatBills(bills.filter(bill=>bill.billType==type))
        }
    }

    useEffect(() => {
        setBills(loadedBills)
        setCatBills(loadedBills)
    }, [loadedBills])

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
            
            <div className='relative'>
                <div className='flex justify-end'>
                    <div className='max-w-max mb-10'>
                        <h2 className='text-2xl font-bold mb-2'>Select Bill Type</h2>
                        <DropDown bills={bills} handleLoadTypes={handleLoadTypes}></DropDown>
                    </div>
                </div>

                <div className='space-y-10 sm:grid grid-cols-1 flex-1'>
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