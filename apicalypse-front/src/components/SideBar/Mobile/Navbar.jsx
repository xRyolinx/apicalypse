import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import NavLinks from "./NavLinks";
import SideBar from "../Mobile/SideBar";
import logo from '../../../assets/logo.svg'
import { isLarge } from "../../../utils/isLarge";
import { useLocation } from "react-router-dom";
import { useNavToggle } from "../../../state/navToggle";
import { useNavigate } from "react-router-dom";


// liens
const links = [
    {
        link: '/dashboard',
        content: 'Dashboard',
    },
    {
        link: '/expense-tracking',
        content: "Expense tracking",
    },
    {
        link: '/predicted-expenses',
        content: "Predicted Expenses",
    },
    {
        link: '/reports-generator',
        content: 'Reports Generator',
    },
]


const Navbar = () => {
    const navigate = useNavigate()
    // toggle
    const { handleToggle, setToggle } = useNavToggle()

    // style
    const bg = 'bg-main'
    const bgNav = 'bg-main'

    // close nav when changing page
    const path = useLocation().pathname
    useEffect(() => {
        setToggle(false)
    }, [path, setToggle])

    // component
    return (
        <nav className={`flex justify-between items-center
        sticky top-0 left-0 w-full h-[70px] px-6
        lg:hidden
        z-[700] ${bgNav} `}>
            
            {/* background */}
            <div className={`h-full w-full absolute top-0 left-0 ${bg} z-[-10]`}></div>

            {/* menu button */}
            <button onClick={handleToggle}
                className="w-[50px] cursor-pointer border-none
                lg:hidden"
            >
                <IoMdMenu color="black"
                    className="text-[25px] lg:text-[30px]"
                />
            </button>

            {/* nav marque */}
            <div className={`bg-red-00 h-[70%] lg:h-[75%]`}>
                <NavLink className={`h-full lg:flex-row-reverse no-underline flex justify-center items-center`} to="/">
                    <p className="text-xl font-bold pr-[10px]">FinanceIT</p>
                    <div className={`h-full aspect-square p-1 lg:p-3 rounded-full truncate`}>
                        <img className={`h-full`} src={logo} alt="" />
                    </div>
                </NavLink>
            </div>

            {/* nav links lg */}
            <NavLinks className={`${'lg:flex'}`} links={links} />

            {/* nav get started */}
            <div className={`${'lg:flex'} hidden bg-red-00 h-full lg:w-[15%] justify-center items-center`}>
                <button className="bg-black text-white rounded-full px-[30px] py-[10px]"
                onClick={()=>navigate('/signup')}>
                    <span className="pb-[1px] block">Get Started</span>
                </button>
            </div>

            {/* side bar for mb */}
            <SideBar links={links} />
        </nav>
    )
}

export default Navbar