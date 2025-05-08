import React from 'react';
import { Link } from 'react-router';
import { format } from "date-fns";
import { FcOk } from "react-icons/fc";

const BillCard = ({ bill }) => {
    const formattedDate = format(new Date(bill.due_date), 'dd MMM, y')

    const payBtn = (
        <Link to={`/bills/${bill.id}`} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Pay</span>
        </Link>
    )

    return (
        <div className="flex flex-col sm:flex-row gap-10 md:gap-15 lg:gap-20 bg-gray-900 text-white border border-gray-200 rounded-xl shadow-sm py-8 px-20 hover:shadow-md transition-shadow mx-auto">
            <div className="flex items-center border rounded-2xl overflow-hidden max-w-max mx-auto">
                <img
                    src={bill.imageURL}
                    alt={`${bill.billType} icon`}
                    className="w-40 h-40 object-cover bg-white sm:p-8"
                />
            </div>

            <div className='flex flex-col justify-between'>
                <div>
                    <div>
                        <h3 className="font-bold text-2xl md:text-4xl md:w-80">{bill.organization} <span>{bill.status == "paid" && <FcOk className='inline' size={25} />}</span></h3>

                    </div>

                    <div className="mt-1 mb-2 ">
                        <p className="text-sm font-bold opacity-70 capitalize">{bill.billType}</p>
                        <p className='text-sm '>Due: <strong>{formattedDate}</strong></p>
                    </div>
                </div>


                <div className={`flex items-center ${bill.status == "due" && 'gap-15'}`}>
                    <div>
                        {bill.status == "due" && <span className="md:text-xl font-bold text-blue-400">BDT {bill.amount}</span>}
                    </div>
                    {
                        bill.status == 'due'
                            ? payBtn
                            : <div className='text-lg font-bold text-green-400'>Bill paid</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BillCard;