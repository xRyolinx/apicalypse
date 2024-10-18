import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../utils/ScrollToTop'


const MainTemplate = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainTemplate