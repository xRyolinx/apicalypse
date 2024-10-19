import React, { useState } from 'react'

const ReportCard = ({index}) => {
    return (
        <article className='bg-red-00 py-[20px] px-[10px]'>
            {/* title */}
            <h3 className='font-semibold text-[18px] pb-[15px]'>{index}. Income Statement Overview</h3>
            {/* tableau */}
            <div className='w-full rounded-xl overflow-hidden'>
                {/* header */}
                <div className='w-full flex justify-between items-center
                py-[10px] px-[10px]
                font-semibold text-[15px] bg-[#E9EDF7FC] text-center'>
                    <p className='w-[50%]'>Category</p>
                    <p className='w-[50%]'>Amount (USD)</p>
                </div>

                {/* list */}
                <div className='w-full flex justify-between items-center
                py-[10px] px-[10px] border-t-[2px] border-solid border-slate-300
                font-medium text-[14px] bg-main text-center'>
                    <p className='w-[50%]'>Revenue</p>
                    <p className='w-[50%]'>150,000</p>
                </div>
                <div className='w-full flex justify-between items-center
                py-[10px] px-[10px] border-t-[2px] border-solid border-slate-300
                font-medium text-[14px] bg-main text-center'>
                    <p className='w-[50%]'>Revenue</p>
                    <p className='w-[50%]'>150,000</p>
                </div>
                <div className='w-full flex justify-between items-center
                py-[10px] px-[10px] border-t-[2px] border-solid border-slate-300
                font-medium text-[14px] bg-main text-center'>
                    <p className='w-[50%]'>Revenue</p>
                    <p className='w-[50%]'>150,000</p>
                </div>
                <div className='w-full flex justify-between items-center
                py-[10px] px-[10px] border-t-[2px] border-solid border-slate-300
                font-medium text-[14px] bg-main text-center'>
                    <p className='w-[50%]'>Revenue</p>
                    <p className='w-[50%]'>150,000</p>
                </div>
                <div className='w-full flex justify-between items-center
                py-[10px] px-[10px] border-t-[2px] border-solid border-slate-300
                font-medium text-[14px] bg-main text-center'>
                    <p className='w-[50%]'>Revenue</p>
                    <p className='w-[50%]'>150,000</p>
                </div>

            </div>
            {/* insights */}
            <div className='text-[15px] pt-[20px]'>
                <h4 className='font-semibold pb-[3px]'>Ai insights</h4>
                <p className='text-[14px]'>
                Your gross profit margin is 60%, which is consistent with your industry standard. However, the operating expenses have increased by 15% compared to last quarter, largely driven by higher marketing and administrative costs.
                </p>
            </div>
            {/* Recommandations */}
            <div className='text-[15px] pt-[20px]'>
                <h4 className='font-semibold pb-[3px]'>Recommandations</h4>
                <p className='text-[14px]'>
                    Consider evaluating your marketing strategy, as the return on investment (ROI) for recent campaigns is lower than expected. Focus on channels with higher conversion rates and reduce spend on underperforming platforms.
                </p>
            </div>
        </article>
    )
}

const ButtonReport = ({content}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <button className={`px-[20px] py-[10px] text-[15px] rounded-lg
        border-solid border-slate-400 border-[1px]
        ${toggle ? 'bg-black hover:bg-black text-white' : 'hover:bg-slate-700'}
        hover:text-white
        `}
        onClick={()=>setToggle((t)=>!t)}
        >
            {content}
        </button>
    )
}

const ReportPage = () => {
    const filters = [
        "Cash flow", "Expenses", "Profits", "Revenue", "Liabilities",
        // "Start date", "End date"
    ]
    return (
        <main>
            {/* choose filters */}
            <section className='flex flex-wrap gap-[20px] px-[30px] py-[15px]'>
                {
                    filters.map((f, i) => (
                        <ButtonReport key={i} content={f}/>
                    ))
                }
            </section>

            {/* report */}
            <section className='bg-white mt-[20px] pt-[20px] px-[20px] rounded-lg'>
                {/* debut */}
                <h2 className='text-[20px] font-semibold'>Company X Y Z - Monthly Report</h2>
                <p className='text-[14px] pt-[5px]'>
                    <span className='font-semibold'>Period: </span>
                    September 2024
                </p>

                {/* reports */}
                <ReportCard index={1}/>
                <ReportCard index={2}/>
            </section>
        </main>
    )
}

export default ReportPage