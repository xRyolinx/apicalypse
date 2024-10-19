import React, { useEffect, useState } from 'react';
import ExpenseCard from './ExpenseCard';
import { LineChart } from '@mui/x-charts';
import { getExpenses } from '../../api/expenses';
import { useNavigate } from "react-router-dom";

const ExpensePage = () => {
    const navigate = useNavigate()
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        getExpenses()
        .then((data) => {
            console.log(data)
            setExpenses(data)
        })
    }, []);
    

    const headerClass = 'font-semibold text-start text-slate-500 text-[14px]';

    return (
        <main className='bg-main text-black'>
            {/* transactions */}
            <section>
                <h1 className='font-bold text-[20px] pt-[10px] mb-[15px]'>Recent Transactions</h1>

                {/* tabs */}
                <div className='flex justify-between items-center flex-wrap gap-y-[20px]'>
                <div className='flex justify-start items-center bg-red-00'>
                    <p className='font-semibold border-solid border-[3px] border-transparent border-b-slate-600
                      min-w-[120px] text-center px-[20px] py-[5px] text-[13px]'>
                        All Transactions
                    </p>
                    <p className='font-semibold border-solid border-[3px] border-transparent border-b-slate-200
                      min-w-[120px] text-center px-[20px] py-[5px] text-[13px]'>
                        Income
                    </p>
                    <p className='font-semibold border-solid border-[3px] border-transparent border-b-slate-200
                      min-w-[120px] text-center px-[20px] py-[5px] text-[13px]'>
                        Expense
                    </p>
                </div>
                <div className='bg-red-00'>
                    <button onClick={()=>navigate('/upload')} className='block px-[30px] py-[10px] rounded-lg bg-black text-white'>
                        Upload File
                    </button>
                </div>
                </div>

                {/* transactions */}
                <div className='w-full overflow-scroll lg:overflow-hidden bg-white rounded-xl mt-[20px] px-[20px] py-[10px]'>
                    <div className='min-w-[800px] '>
                        {/* headers */}
                        <div className='flex justify-between items-center pb-[15px]'>
                            <p className={`${headerClass} w-[25%]`}>Description</p>
                            <p className={`${headerClass} w-[15%]`}>Category</p>
                            <p className={`${headerClass} w-[20%]`}>Date</p>
                            <p className={`${headerClass} w-[15%]`}>Amount</p>
                            <p className={`${headerClass} w-[25%]`}>AI shortcut</p>
                        </div>

                        {/* list of expenses */}
                        <div>
                            {expenses.length > 0 ? expenses.map((expense, i) => (
                                <ExpenseCard
                                    key={i}
                                    description={expense.description}
                                    category={expense.category}
                                    date={expense.expense_date}
                                    amount={expense.amount}
                                    shortcut={expense.shortcut}  
                                    recommandation={expense.recommendation}
                                    insight={expense.insight}
                                />
                            )) : <p>No transactions found.</p>}
                        </div>
                    </div>
                </div>
            </section>

            {/* chart */}
            <section className='pt-[40px]'>
                <h1 className='font-bold text-[20px] mb-[15px]'>Expense Tracking Overview</h1>
                <LineChart
                    series={[
                        { curve: "catmullRom", data: [0, 20000, 30000, 15000, 36000, 12000] },
                        { curve: "catmullRom", data: [0, 10000, 25000, 10000, 20000, 42000] },
                    ]}
                    className='w-full aspect-[2] bg-white rounded-xl'
                />
            </section>
        </main>
    );
};

export default ExpensePage;
