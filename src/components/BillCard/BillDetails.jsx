import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router'
import LoaderRing from '../LoaderRing';
import BillTypeIcon from './BillTypeIcon';
import { format } from 'date-fns';
import AuthContext from '../../context/AuthContext/AuthContext';
import { notifySuccess } from '../../utilities/notify';
import BillContext from '../../context/BillContext/BillContext';

const BillDetails = () => {
    const { setBalance } = useContext(AuthContext)
    const {bills, isBillsLoading, setStatusPaid} = useContext(BillContext)
    const { bill_id } = useParams();

    const navigate = useNavigate(null)

    if (isBillsLoading) {
        return <div className="h-[80vh] flex items-center justify-center"><LoaderRing></LoaderRing></div>
    }

    const currentBill = bills.find(bill => bill.id == bill_id)
    const formattedDate = format(new Date(currentBill.due_date), 'dd MMM, yyyy')

    

    
    const handlePayBill = () => {
        setBalance(balance => balance - currentBill.amount)
        setStatusPaid(currentBill.id)
        notifySuccess('Bill payed successfully')
        navigate('/bills')
    }

    
    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-10 md:gap-15 lg:gap-20 border-2 bg-gray-600 text-white border-gray-300 rounded-xl shadow-xl py-8 px-20 hover:shadow-md transition-shadow max-w-max mx-auto">
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
                            <p>Due: <strong>{formattedDate}</strong></p>
                        </div>
                    </div>


                    <div className='items-center space-y-2'>
                        <div className='text-xl'>
                            Amount: <span className="md:text-xl font-bold text-blue-400">BDT {currentBill.amount}</span>
                        </div>

                        <button onClick={handlePayBill} className='text-lg px-10 btn btn-neutral shadow-none rounded-xl hover:bg-white hover:text-black border-2 border-black '>Pay Bill</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BillDetails;