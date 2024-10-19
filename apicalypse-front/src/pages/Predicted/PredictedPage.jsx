import React, { useState } from 'react'

const PredictedCard = ({title}) => {
    const [approved, setApproved] = useState("")
    return (
        <article className={`bg-white w-full lg:w-[45%] max-w-[500px] pb-[30px] px-[20px] pt-[15px] rounded-xl
        border-[1px] border-slate-300 border-solid`}>
            <p className='font-semibold text-[16px] text-center pb-[15px]'>{title}</p>
            <p className='text-[14px] text-slate-600 font-semibold'>Oct 5 to Nov 5</p>

            {/* months */}
            <div className='flex justify-start gap-[10px] items-start py-[10px]'>
                <div className='bg-slate-100 w-[50%] px-[20px] py-[10px]
                text-center text-[14px] text-slate-700 rounded-lg'>
                    <p className='pb-[5px] font-semibold text-[15px] text-black'>This month</p>
                    <p className='pb-[4px]'>USD $10,000</p>
                    <p>Actual</p>
                </div>
                <div className='bg-slate-100 w-[50%] px-[20px] py-[10px]
                text-center text-[14px] text-slate-700 rounded-lg'>
                    <p className='pb-[5px] font-semibold text-[15px] text-black'>Next month</p>
                    <p className='pb-[4px]'>USD $20,000</p>
                    <p>Predicted</p>
                </div>
            </div>

            {/* recommandation */}
            <div className='w-full my-[20px] px-[2px] py-[2px] rounded-lg'
            style={{background : "linear-gradient(90deg, #97B1FF 0%, #2ACBC5 6.25%, #40CDDC 12.5%, #7DE1FE 18.75%, #7CD0FE 25%, #7BBEFE 31.25%, #7AACFE 37.5%, #799AFE 43.75%, #7887FE 50%, #7976FF 56.25%, #8A75FF 62.5%, #9B74FF 68.75%, #AC73FF 75%, #BE72FF 81.25%, #D170FF 87.5%, #E36FFF 93.75%, #F66EFF 100%)"}}
            >
                <div className='px-[20px] py-[5px] rounded-lg
                w-full bg-main'>
                    <p className='text-[14px] text-slate-600'>
                        Based on past trends, marketing expenses tend to increase during this period due to seasonal campaigns. Consider reallocating resources for optimized ad performance.
                    </p>
                </div>
            </div>

            {/* button */}
            <div className='w-full'>
                {approved == "approved" ?(
                    <button className='border-solid border-[2px] border-green-400
                    text-green-400 font-semibold mt-[10px] py-[8px] rounded-xl
                    w-full
                    '>
                        Approved
                    </button>
                )
                :
                    approved != "rejected"
                    ? (
                        <div className='flex justify-center items-center gap-x-[10px]'>
                            <button className='border-solid border-[2px] border-slate-300
                            text-slate-800 font-semibold mt-[10px] py-[8px] rounded-xl
                            w-[50%]'
                            onClick={()=>setApproved("rejected")}
                            >
                                Reject
                            </button>

                            <button className='border-solid border-[2px] border-black
                            text-white bg-black font-semibold mt-[10px] py-[8px] rounded-xl
                            w-[50%]
                            '
                            onClick={()=>setApproved("approved")}
                            >
                                Approve
                            </button>
                        </div>
                    )
                    : (
                        <button className='border-solid border-[2px] border-red-400
                        text-red-400 font-semibold mt-[10px] py-[8px] rounded-xl
                        w-full
                        '>
                            Rejected
                        </button>
                    )

                }
            </div>
        </article>
    )
}

const PredictedPage = () => {
  return (
    <main className='bg-green-00 py-[20px]'>
        <h1 className='font-semibold text-[18px]'>Predicted Budget</h1>
        
        {/* list */}
        <div className='flex justify-center gap-y-[30px] gap-x-[20px] items-center flex-wrap py-[20px]'>
            <PredictedCard title={"Utilities"}/>
            <PredictedCard title={"Utilities"}/>
            <PredictedCard title={"Utilities"}/>
            <PredictedCard title={"Utilities"}/>
            <PredictedCard title={"Utilities"}/>
            <PredictedCard title={"Utilities"}/>
        </div>
    </main>
  )
}

export default PredictedPage