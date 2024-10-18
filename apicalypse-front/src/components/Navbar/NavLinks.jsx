import NavElement from './NavElement'

const NavLinks = ({ links, className }) => {

    // component
    return (
        <div className={`${className} hidden flex-row justify-between items-center
            w-[60%] max-w-[550px] h-full px-10 border-none bg-green-00`}
        >
            {
                links.map((el, index) => {
                    return <NavElement key={index} link={el.link} content={el.content} />
                })
            }
        </div>
    )
}

export default NavLinks