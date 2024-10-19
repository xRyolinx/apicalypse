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
    flex justify-start items-center bg-red-200
    hover:bg-black hover:text-white`
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
            : navElementClass + ' '
        )
    }


    // component
    return (
        <NavLink to={link}
            style={navElementStyle} className={getNavElementClass}
            >
            <div
            className='bg-red-300 mx-auto w-[180px] flex justify-start
            gap-x-[15px] text-center items-center'>
                {content}
            </div>
        </NavLink>
    )
}

export default NavElement