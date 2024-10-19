import React, { useState } from 'react'
import NavElement from '../Desktop/NavElement'
import { IoMdClose } from 'react-icons/io'
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useNavToggle } from "../../../state/navToggle";


const SideBar = ({ links }) => {
    // context of state
    const { toggle, handleToggle } = useNavToggle()

    // style
    const style = {
        transition: 'width 0.3s, padding 0.3s',
    }

    // class
    const width = toggle ? 'w-[300px]' : 'w-[0]'
    const px = toggle ? 'px-10' : 'px-0'
    const grayDisplay = toggle ? 'block' : 'hidden'

    
    // component
    return (
        <>
            {/* side bar component */}
            <div style={style} className={`
            absolute ${width} h-[100vh] top-0 left-0
            py-6 bg-main z-[800] truncate
            lg:sticky lg:w-[300px]
            `}>
                {/* closing container */}
                <div className={`bg-geen-300 pl-6 flex items-center justify-start`}>
                    <IoMdClose onClick={handleToggle}
                        className={`block cursor-pointer
                        text-[25px] text-black`}
                    />
                </div>

                {/* side bar elements container */}
                <div style={style} className={` bg-ed-300
                flex flex-col justify-between items-center
                w-full h-full max-h-[320px] pt-[30px] ${px}`
                }>

                    {/* navlinks */}
                    {
                        links.map((el, index) => {
                            return <NavElement key={index}
                                link={el.link} content={el.content} />
                        })
                    }
                </div>

            </div>

            {/* grey area */}
            <div onClick={handleToggle} className={`${grayDisplay}
            lg:hidden absolute h-[100vh] w-full
            bg-gray-500 opacity-50 top-0 left-0`}>
            </div>
        </>
    )
}

export default SideBar