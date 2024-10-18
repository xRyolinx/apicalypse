
import { MdArrowRightAlt } from "react-icons/md";
import img1 from "../../assets/img/hero/imgHome1.png"
import img2 from "../../assets/img/hero/imgHome2.png"
import './home.css'
import LogoSlider from "./LogoSlider"



const HomePage = () => {
  const StatCard = ({title, content}) => {
    return (
      <div className="bg-gren-200 w-[40%]">
        <p className="text-[40px] text-gris-300 font-semibold">{title}</p>
        <p className="text-[15px] text-gris-100">{content}</p>
      </div>
    )
  }
  return (
    <main className="w-full pt-[20px]">
      {/* hero section */}
      <div className="bg-white">
        <section className="px-[60px] pb-[60px] hero -full flex justify-between items-stretch">
          {/* text */}
          <div className="bg-blue-00 w-[50%]
          b-red-200">

            {/* title */}
            <h1 className="text-[55px] text-[#0C0D0E] mb-[30px] leading-[70px]">
              Reliable Financial Solutions for Business
            </h1>

            {/* desc */}
            <p className="text-[20px] text-gris-200">
              FinanceOT provides reliable financial services for various business needs powered by the latest AI. We are pioneers in this service field, and the best among others.
            </p>

            {/* buttons */}
            <div className="flex justify-start items-center w-full
            gap-x-[20px] py-[50px]">
              {/* black */}
              <button className="flex justify-center items-center
              bg-black px-[20px] pb-[8px] pt-[10px] rounded-full
              gap-x-[5px]">
                <p className="pb-[5px] text-white font-semibold">Get started now</p>
                <MdArrowRightAlt className="text-[25px] text-white" />
              </button>
              {/* white */}
              <button className="flex justify-center items-center
              bg-white px-[20px] pb-[8px] pt-[10px] rounded-full
              border-solid border-[1px] border-gris-50">
                <p className="pb-[5px] text-black font-semibold">View Live Demo</p>
              </button>

            </div>

            {/* stats */}
            <div className="w-full flex justify-start items-start
            bg-red-20 gap-x-[10%]">
              <StatCard title="20+" content="Multinational businesses have used Cashbank"/>
              <StatCard title="4K+" content="            Daily transactions from around the world"/>
            </div>
          </div>

          {/* img */}
          <div className=" bg-red-00 w-[40%] relative">
            <img className="w-full rounded-[30px]" src={img1} alt="" />
            <img className="w-[50%] absolute top-[40%] left-[-15%]" src={img2} alt="" />
          </div>
        </section>
      </div>

      {/* logo section */}
      <section className="px-[60px] bg-white py-[30px]">
        <LogoSlider/>
      </section>

      {/* services */}
      <section className="px-[60px] py-[40px]">
        <h2 className="text-[40px] w-full max-w-[600px] mx-auto text-center">
          Smarter Financial Management with Real-Time Data and AI
        </h2>
      </section>
      
    </main>
  )
}

export default HomePage