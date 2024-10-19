import { Link } from 'react-router-dom'
import { useNavToggle } from '../../state/navToggle'

const NavElement = ({ link, content }) => {
    // style
    const navElementStyle = {
        transition: 'border 0.3s',
    }

    // class
    // const navElementClass = `text-sm no-underline font-sans
    // text-black py-3 px-1 border-b-2 my-2
    // lg:py-[6px] lg:border-solid lg:my-0
    // hover:border-black`
    // const getNavElementClass = ({ isActive }) =>
    //     isActive
    //         ? navElementClass + ' font-bold border-black'
    //         : navElementClass + ' font-medium border-transparent'

    // get setToggle from context
    const { setToggle } = useNavToggle()

    // scroll
    const scrollToElement = (event, id, padding = 0) => {
        event.preventDefault();
        
        const element = document.querySelector(id);
        if (element) {
            const targetPosition = element.getBoundingClientRect().top + window.scrollY - padding;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
    }

    // component
    return (
        <p onClick={(e) => {
            setToggle(false)
            scrollToElement(e, link, 100)
        }}
            style={navElementStyle} className={`text-sm no-underline font-sans
            text-black py-3 px-1 border-b-2 my-2
            lg:py-[6px] lg:border-solid lg:my-0 font-semibold border-transparent
            hover:border-black cursor-pointer`}
            >
            {content}
        </p>
    )
}

export default NavElement