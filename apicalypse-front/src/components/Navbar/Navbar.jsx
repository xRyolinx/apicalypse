import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import NavLinks from "./NavLinks";
import SideBar from "./SideBar";
import logo from '../../assets/logo.svg'
import { isLarge } from "../../utils/isLarge";
import { useLocation } from "react-router-dom";
import { useNavToggle } from "../../state/navToggle";
import { useNavigate } from "react-router-dom";

// NAV HEIGHT CONSTS
const heightLarge = 100
const heightSmall = 69

// liens
const links = [
    {
        link: '/',
        content: 'Home',
    },
    {
        link: '/about',
        content: "About",
    },
    {
        link: '/blog',
        content: "Blog",
    },
    {
        link: '/services',
        content: 'Services',
    },
    {
        link: '/contact',
        content: 'Contact',
    },
]
// liens où nav est transparente
const linkTransparants = [
    '',
]
// liens où show = true
const linkNotShow = [
    '/signup',
    '/signin',
]

const Navbar = () => {
    const navigate = useNavigate()
    // toggle
    const { handleToggle } = useNavToggle()

    // for transparent
    const [transparent, setTransparent] = useState(true)
    const [navTransparent, setNavTransparent] = useState(true)

    // for hiding
    const [show, setShow] = useState(false)

    // change color when changing page
    const path = useLocation().pathname
    useEffect(() => {
        const pathIncluded = linkTransparants.includes(path)
        setNavTransparent(pathIncluded)
        setTransparent(pathIncluded)

        const showNavEl = !linkNotShow.includes(path)
        setShow(showNavEl)
    }, [path])

    // change color while scrolling
    useEffect(() => {
        // is nav transparant ?
        const pathIncluded = linkTransparants.includes(path)
        const handleScroll = () => {
            const navHeight = isLarge() ? heightLarge : heightSmall
            if (window.scrollY >= (window.innerHeight - navHeight)) {
                setTransparent(false)
            }
            else {
                setTransparent(true)
            }
        }
        // if transparent, add event
        if (pathIncluded) {
            window.addEventListener('scroll', handleScroll)

            return (() => {
                window.removeEventListener('scroll', handleScroll)
            })
        }
    }, [path, transparent, setTransparent])

    // style
    const bg = transparent ? 'bg-transparent' : (show ? 'bg-main' : 'bg-main lg:bg-transparent')
    const bgNav = navTransparent ? 'bg-transparent' : (show ? 'bg-main' : 'bg-main lg:bg-transparent')
    const style = {
        transition: 'background-color 0.4s',
    }

    // component
    return (
        <nav className={`flex justify-between items-center
        sticky top-0 w-full h-[70px] px-6
        lg:h-[100px] lg:px-12
        z-[700] ${bgNav} `}>
            
            {/* background */}
            <div style={style} className={`h-full w-full absolute top-0 left-0 ${bg} z-[-10]`}></div>

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
                    <div className={`h-full aspect-square p-1 lg:p-2 bg-main rounded-full truncate`}>
                        <img className={`h-full`} src={logo} alt="" />
                    </div>
                </NavLink>
            </div>

            {/* nav links lg */}
            <NavLinks className={`${!show ? 'hidden' : 'lg:flex'}`} links={links} />

            {/* nav get started */}
            <div className={`${!show ? 'hidden' : 'lg:flex'} hidden bg-red-00 h-full lg:w-[15%] justify-center items-center`}>
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