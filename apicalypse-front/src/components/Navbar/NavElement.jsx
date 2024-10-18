import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavToggle } from '../../state/navToggle'

const NavElement = ({ link, content }) => {
    // style
    const navElementStyle = {
        transition: 'border 0.3s',
    }

    // class
    const navElementClass = `text-sm no-underline font-sans
    text-black py-3 px-1 border-b-2 my-2
    lg:py-[6px] lg:border-solid lg:my-0
    hover:border-black`
    const getNavElementClass = ({ isActive }) =>
        isActive
            ? navElementClass + ' font-bold border-black'
            : navElementClass + ' font-medium border-transparent'

    // get setToggle from context
    const { setToggle } = useNavToggle()

    // component
    return (
        <NavLink onClick={() => { setToggle(false) }}
            style={navElementStyle} className={getNavElementClass} to={link}>
            {content}
        </NavLink>
    )
}

export default NavElement