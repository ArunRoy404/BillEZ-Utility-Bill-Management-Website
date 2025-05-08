import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router'
import LoaderRing from '../LoaderRing';
import BillTypeIcon from './BillTypeIcon';
import { format } from 'date-fns';
import AuthContext from '../../context/AuthContext/AuthContext';
import { notifyError, notifySuccess } from '../../utilities/notify';
import BillContext from '../../context/BillContext/BillContext';

const BillDetails = () => {

    const [loadedBills, setLoadedBills] = useState([])
    const [currentBill, setCurrentBill] = useState(null)
    const [billDueDate, setBillDueDate] = useState(null)

    const navigate = useNavigate(null)
    const { bill_id } = useParams();

    const { setBalance, isLoading, balance } = useContext(AuthContext)
    const { bills, isBillsLoading, setStatusPaid } = useContext(BillContext)


    const handlePayBill = () => {
        if (balance >= currentBill.amount) {
            setBalance(balance=> balance-currentBill.amount)
            setStatusPaid(currentBill.id)
            notifySuccess('Bill payed successfully')
            navigate('/bills')
        }else{
            notifyError("Not enough Balance")
        }
    }


    useEffect(() => {
        setLoadedBills(bills)
    }, [bills])

    useEffect(() => {
        if (loadedBills.length > 0) {
            const bill = loadedBills.find(bill => bill.id == bill_id)
            if (bill) {
                setCurrentBill(bill)
                const formattedDate = format(new Date(bill.due_date), 'dd MMM, yyyy')
                setBillDueDate(formattedDate)
            }
        }
    }, [loadedBills, bill_id])



    if (isBillsLoading || isLoading) {
        return <div className="h-[80vh] flex items-center justify-center"><LoaderRing></LoaderRing></div>
    }

    const notBillFound = (
        <div className='text-center font-bold mt-10'>
            <h1 className='text-4xl'>No bill found</h1>
            <p className='text-lg opacity-70'>What are you searching?</p>
        </div>
    )

    if (!currentBill) {
        return notBillFound
    }

    return (
        <div>
            <div className="mb-20 flex flex-col sm:flex-row gap-10 md:gap-15 lg:gap-20 border-2 bg-gray-600 text-white border-gray-300 rounded-xl shadow-xl py-8 px-20 hover:shadow-md transition-shadow max-w-max mx-auto">
                <div className="relative flex items-center shadow-lg rounded-2xl overflow-hidden max-w-max mx-auto">
                    <img
                        src={currentBill.imageURL}
                        alt={`${currentBill.billType} icon`}
                        className="w-40 h-40 md:w-60 md:h-60 object-cover bg-white sm:p-8"
                    />
                    <div className='absolute text-black right-3 bottom-3 border-2 p-2 rounded-xl'>
                        <BillTypeIcon billType={currentBill.billType}></BillTypeIcon>
                    </div>
                </div>

                <div className='flex flex-col justify-between'>
                    <div>
                        <div>
                            <h3 className="font-bold text-3xl md:text-5xl">{currentBill.organization}</h3>
                        </div>

                        <div className="mt-3 mb-2 ">
                            <p className=" font-bold opacity-70 capitalize">{currentBill.billType}</p>
                            <p>Due: <strong>{billDueDate}</strong></p>
                        </div>
                    </div>


                    <div className='items-center space-y-2'>
                        <div className='text-xl'>
                            Amount: <span className="md:text-xl font-bold text-blue-400">BDT {currentBill.amount}</span>
                        </div>

                        {
                            currentBill.status == 'paid'
                                ? <p className='text-lg text-green-400 font-bold'>Bill paid</p>
                                : <button onClick={handlePayBill} className='text-lg px-10 btn btn-neutral shadow-none rounded-xl hover:bg-white hover:text-black border-2 border-black '>Pay Bill</button>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BillDetails;