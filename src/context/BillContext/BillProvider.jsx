import React, { useEffect, useState } from 'react';
import BillContext from './BillContext';

const BillProvider = ({ children }) => {

    const [bills, setBills] = useState([])
    const [isBillsLoading, setIsBillsLoading] = useState(false)

    useEffect(() => {
        setIsBillsLoading(true)
        fetch('../bills.json')
            .then(res => res.json())
            .then(data => setBills(data))
            .finally(()=>{
                setIsBillsLoading(false)
            })
    }, [])

    const setStatusPaid = (id) =>{
        const paidBill = bills.find(bill=> bill.id == id)
        const filteredBills = bills.filter(bill=> bill.id!=id)

        paidBill.status = 'paid'
        setBills([paidBill, ...filteredBills])
    }


    const billsInfo = {
        bills,
        setBills,
        isBillsLoading,
        setStatusPaid
    }

    return (
        <BillContext value={billsInfo}>
            {children}
        </BillContext>
    );
};

export default BillProvider;