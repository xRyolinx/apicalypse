import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import logo from '../../../assets/logo.svg'
import { isLarge } from "../../../utils/isLarge"
import { useLocation } from "react-router-dom";
import { useNavToggle } from "../../../state/navToggle";
import { useNavigate } from "react-router-dom";
import NavElement from "./NavElement";

import HomeIcon from "./icons/HomeIcon";
import ActivityIcon from "./icons/ActivityIcon";
import SendIcon from "./icons/SendIcon";
import WalletIcon from "./icons/WalletIcon"
import { authStore } from "../../../state/authStore";



const Navbar = () => {
    // fills
    const [fillHome, setFillHome] = useState("#2B2929")
    const [fillWallet, setFillWallet] = useState("#2B2929")
    const [fillSend, setFillSend] = useState("#2B2929")
    const [fillActivity, setFillActivity] = useState("#2B2929")

    // liens
    const links = [
        {
            link: '/dashboard',
            content: 'Dashboard',
            img: <HomeIcon fill={fillHome}/>,
            setFill: setFillHome,
        },
        {
            link: '/expense-tracking',
            content: "Expense tracking",
            img: <WalletIcon fill={fillWallet}/>,
            setFill: setFillWallet,
        },
        {
            link: '/predicted-expenses',
            content: "Predicted Expenses",
            img: <SendIcon fill={fillSend}/>,
            setFill: setFillSend,
        },
        {
            link: '/reports-generator',
            content: 'Reports Generator',
            img: <ActivityIcon fill={fillActivity}/>,
            setFill: setFillActivity,
        },
    ]

    const navigate = useNavigate()
    // toggle
    const { handleToggle, setToggle } = useNavToggle()

    // close nav when changing page
    const path = useLocation().pathname
    useEffect(() => {
        setToggle(false)
    }, [path, setToggle])

    // logout
    const {logout} = authStore()

    // component
    return (
        <nav className="hidden h-[100vh] w-[350px] bg-main p-[20px]
        sticky top-0 left-0
        lg:block">
            <div className={`flex flex-col justify-between items-center
            w-full h-full px-[20px] bg-white
            rounded-xl
            z-[700] `}>

                {/* nav marque */}
                <div className={`bg-red-00 w-full h-[20%] flex items-center`}>
                    <NavLink className={`bg-blue-00 w-full lg:flex-row-reverse no-underline flex justify-center items-center`} to="/">
                        <p className="text-2xl font-bold pr-[10px]">FinanceIT</p>
                        <div className={`w-full max-w-[70px] aspect-square p-3 rounded-full truncate`}>
                            <img className={`h-full`} src={logo} alt="" />
                        </div>
                    </NavLink>
                </div>

                {/* nav links lg */}
                <div className={`h-[50%] max-h-[400px] flex flex-col justify-between items-center
                w-full bg-green-00 border-none`}
                >
                    {
                        links.map((el, i) => {
                            return (
                                <NavElement key={i} setFill={el.setFill} icon={el.img} link={el.link} content={el.content}/>
                            )
                        })
                    }
                </div>


                {/* nav Logout */}
                <div className={`flex bg-red-00 h-[20%] justify-center items-center`}>
                    <button className="bg-black text-white rounded-full px-[40px] py-[10px]"
                    onClick={logout}>
                        <span className="pb-[1px] block">Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar