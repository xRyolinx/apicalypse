import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const Footer = () => {
    const elements = [
        {"Product": null, "Features": "#features", "Support": "#support"},
        {"Legals": null, "Terms of Service" : "/terms-of-service", "Privacy Policy": "privacy-policy"},
        {"Company": "", "Blog": "#blog", "Contact": "#contact"},
        {"Contact us": null, "contact@FinanceIT.com": null, "+213 734 82 90 42": null}
    ]
    const FooterElement = ({links}) => {
        return (
            <div className=''>
                {Object.keys(links).map((key, i) => (
                    <div key={i} className='py-[5px]'>
                        {
                            links[key] ? (
                                <Link to={links[key]} className='no-underline block
                                text-[14px] text-gris-300'>
                                    {key}
                                </Link>
                            )
                            : (
                                <p className={`
                                    ${i == 0 ? 'font-semibold text-[16px] pb-[8px]' : "text-gris-300 text-[14px]"}
                                `}>
                                    {key}
                                </p>
                            )
                        }
                    </div>
                ))}
            </div>
        )
    }
  return (
    <footer id="contact">
        {/* footer */}
        <div className="bg-white w-full text-center
        flex flex-col gap-y-[25px] justify-between items-center
        lg:flex-row lg:text-start
        py-[40px]
        lg:py-[60px] px-[20px] lg:px-[100px]">
            {/* logo */}
            <div className={`bg-red-00 h-[70px]`}>
                <Link className={`h-full no-underline flex justify-center items-center`} to="/">
                    <div className={`h-full aspect-square p-1 lg:p-2 rounded-full truncate`}>
                        <img className={`h-full`} src={logo} alt="" />
                    </div>
                    <p className="text-2xl font-bold pl-[10px]">FinanceIT</p>
                </Link>
            </div>

            {/* elements */}
            {
                elements.map((arr, i) => (
                    <FooterElement key={i} links={arr}/>
                ))
            }

        </div>

        {/* copyright */}
        <div className="w-full py-[10px] px-[20px]">
            <p className="text-[14px] text-center text-gris-300">
                All rights reserved &#169;2024 APIcalypse
            </p>
        </div>
    </footer>
  )
}

export default Footer