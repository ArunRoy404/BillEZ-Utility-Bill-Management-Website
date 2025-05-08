import React, { useEffect, useState } from 'react';
import BillContext from './BillContext';
import AuthContext from '../AuthContext/AuthContext';

const BillProvider = ({ children }) => {

    const [bills, setBills] = useState([])
    const [isBillsLoading, setIsBillsLoading] = useState(false)
    const [bodyRef, setBodyRef] = useState(null)

    useEffect(() => {
        setIsBillsLoading(true)
        fetch('../bills.json')
            .then(res => res.json())
            .then(data => setBills(data))
            .finally(() => {
                setIsBillsLoading(false)
            })
    }, [])


    const setStatusPaid = (id) => {
        const paidBill = bills.find(bill => bill.id == id)
        const filteredBills = bills.filter(bill => bill.id != id)

        paidBill.status = 'paid'
        setBills([paidBill, ...filteredBills])
    }


    const billsInfo = {
        bills,
        isBillsLoading,
        setStatusPaid,
        bodyRef,
        setBodyRef
    }

    return (
        <BillContext value={billsInfo}>
            {children}
        </BillContext>
    );
};

export default BillProvider;