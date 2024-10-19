import { NavLink } from 'react-router-dom'
import { useNavToggle } from '../../../state/navToggle'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavElement = ({ setFill, icon, link, content }) => {
    // style
    const navElementStyle = {
        transition: 'border 0.3s',
    }

    // class
    const navElementClass = `text-sm no-underline font-sans font-medium
    text-black pl-5 py-[15px] my-0 text-center
    rounded-full w-full
    flex justify-start items-center
    `
    const getNavElementClass = ({ isActive }) => {
        if (!setFill) return

        if (isActive) {
            setFill("white")
        }
        else if (!isActive) {
            setFill("#2B2929")
        }
        return (
        isActive
            ? navElementClass + ' bg-black text-white'
            : navElementClass + ' hover:bg-main2'
        )
    }


    // component
    return (
        <NavLink to={link}
            style={navElementStyle} className={getNavElementClass}
            >
            <div
            className='bg-red-00 mx-auto w-[180px] flex justify-start
            gap-x-[15px] items-center'>
                {icon}
                {content}
            </div>
        </NavLink>
    )
}

export default NavElement