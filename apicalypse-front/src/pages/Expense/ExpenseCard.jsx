import {useState} from 'react'
import arrow from "../../assets/img/expenses/arrow.svg"
import aiLogo from "../../assets/img/expenses/aiLogo.svg"

const ExpenseCard = ({ ai }) => {
    const [toggle, setToggle] = useState(false)

    const h = toggle ? '' : 'h-0'
    const px = toggle ? 'px-[20px]' : ''
    const py = toggle ? 'py-[10px]' : ''
    const mt = toggle ? 'mt-[15px]' : ''
    
    return (
        <article className='text-slate-800 text-[15px] py-[10px]
        bg-red-00 border-solid border-[2px] border-transparent border-t-slate-200
        max-w-full
        '>
            {/* infos */}
            <div className='cursor-pointer w-full flex justify-start items-center'
            onClick={()=>setToggle((t)=>!t)}
            >
                {/* desc */}
                <div className='flex w-[25%] justify-center items-center gap-x-[10px]'>
                    {/* arrow */}
                    <div className='h-[25px] aspect-square'>
                        <img className='h-auto mx-auto object-cover' src={arrow} alt="" />
                    </div>
                    {/* txt */}
                    <p>Paid for Google Ads campaign</p>
                </div>

                {/* category */}
                <p className='w-[15%]'>Marketing</p>

                {/* Date */}
                <p className='w-[20%]'>28 Jan, 12.30 AM</p>

                {/* Amount */}
                <p className='text-green-600 w-[15%] font-semibold'>+$750</p>

                {/* Ai */}
                <p className='text-red-600 bg-red-200 rounded-full py-[5px] px-[10px] max-w-[25%] font-semibold px-'>Way over the budget</p>
            </div>

            {/* ai part */}
            <div
            className={`${h} rounded-xl overflow-hidden max-w-full
            ${px} ${py} bg-main ${mt}`}>
                {/* assistant */}
                <div className='flex gap-x-[10px] justify-start items-center
                pb-[10px]'>
                    {/* img */}
                    <div className='h-[30px] aspect-square truncate'>
                        <img className='h-full mx-auto block object-cover' src={aiLogo} alt="" />
                    </div>
                    <div>
                        <p className='font-semibold'>AI assistant</p>
                        <p>This marketing expense is 20% higher than last month. Consider optimizing campaign targeting to reduce costs.</p>
                    </div>
                </div>
                {/* recommandation */}
                <div className='w-full px-[2px] py-[2px] rounded-lg'
                style={{background : "linear-gradient(90deg, #97B1FF 0%, #2ACBC5 6.25%, #40CDDC 12.5%, #7DE1FE 18.75%, #7CD0FE 25%, #7BBEFE 31.25%, #7AACFE 37.5%, #799AFE 43.75%, #7887FE 50%, #7976FF 56.25%, #8A75FF 62.5%, #9B74FF 68.75%, #AC73FF 75%, #BE72FF 81.25%, #D170FF 87.5%, #E36FFF 93.75%, #F66EFF 100%)"}}
                >
                    <div className='px-[20px] py-[5px] rounded-lg
                    w-full bg-main'>

                    <p className='font-semibold pb-[5px]'>✨ Recommanded by AI</p>
                    <p>Analyze the performance of individual ad channels and reallocate budget towards the ones generating the highest conversion rates. You can also test different ad creatives and adjust keyword bidding strategies to improve cost-efficiency. Additionally, consider leveraging A/B testing to identify high-performing campaigns and pause low-performing ones.</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ExpenseCard