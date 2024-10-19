import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../utils/ScrollToTop'


const MainTemplate = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  ) 
}

export default MainTemplate