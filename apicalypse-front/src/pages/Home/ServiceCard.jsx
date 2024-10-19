import React from 'react'

const ServiceCard = ({className, classNameImg, img, title, content}) => {
  return (
    <article className={`bg-white rounded-[30px] col-span-10
    flex flex-col
    pt-[20px] pb-[30px] px-[30px]
    ${className}`}>
        {/* img container */}
        <div className={`bg-gren-200
        w-full aspect-[2] px-[20px]

        `}>
            <div className=' w-full h-full relative truncate'>
                {/* img */}
                <img className={`w-full left-0 absolute top-0 ${classNameImg}`} src={img} alt="" />
                {/* bg gradient */}
                <div className='h-full w-full absolute'
                style={{background: "linear-gradient(to top, #FFFFFF 0%, transparent 60%)"}}
                ></div>
            </div>
        </div>

        {/* text */}
        <div className='text-gris-300 bg-lue-200 mt-auto
        pt-[10px]'>
            <p className='pb-[20px] text-[20px] font-semibold'>
                {title}
            </p>
            <p>
                {content}
            </p>
        </div>
    </article>
  )
}

export default ServiceCard