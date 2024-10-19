import NavbarDesk from '../components/SideBar/Desktop/Navbar'
import NavbarMob from '../components/SideBar/Mobile/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../utils/ScrollToTop'
import pdp from "../assets/img/sidebar/Mask.png"
import settings from "../assets/img/sidebar/settings.svg"
import notif from "../assets/img/sidebar/notif.svg"

const UserTemplate = () => {
  return (
    <>
      <ScrollToTop />

      <NavbarMob />

      <div className='w-full flex relative justify-center'>
        <NavbarDesk/>

        {/* main body */}
        <div className='flex-grow p-[20px] bg-red-00'
        style={{width: "calc(100% - 350px)"}}>
          
          <section className='w-full px-[20px] py-[15px] rounded-xl
          flex justify-between items-center bg-white mb-[20px]'>
            {/* infos */}
            <div className='flex justify-center items-center gap-x-[20px]'>
              {/* img */}
              <div className='h-[60px] aspect-square truncate rounded-full'>
                <img className='h-full object-cover' src={pdp} alt="" />
              </div>
              {/* text */}
              <div>
                <p className='text-[14px] text-slate-500'>Welcome Back!</p>
                <p className='text-3xl font-semibold'>John Doe</p>
              </div>
            </div>
            {/* buttons */}
            <div className='flex justify-center items-center gap-x-[10px]'>
              <div className='h-[35px] p-[8px] aspect-square rounded-full truncate border-solid border-[1px] border-slate-300 cursor-pointer'>
                <img className='h-full object-cover block mx-auto'
                src={notif} alt="" />
              </div>
              <div className='h-[35px] p-[8px] aspect-square rounded-full truncate border-solid border-[1px] border-slate-300 cursor-pointer'>
                <img className='h-full object-cover block mx-auto'
                src={settings} alt="" />
              </div>
            </div>
          </section>

          {/* rest */}
          <Outlet />
        </div>
      </div>
      <Footer/>
    </>
  ) 
}

export default UserTemplate