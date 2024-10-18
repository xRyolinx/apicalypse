
import { MdArrowRightAlt } from "react-icons/md";
import imgHome1 from "../../assets/img/hero/imgHome1.png"
import imgHome2 from "../../assets/img/hero/imgHome2.png"
import './home.css'
import LogoSlider from "./LogoSlider"
import Card from "./Card";

import imgService1 from "../../assets/img/services/service1.png"
import imgService2 from "../../assets/img/services/service2.png"
import imgService3 from "../../assets/img/services/service3.png"
import imgService4 from "../../assets/img/services/service4.png"

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
            <img className="w-full rounded-[30px]" src={imgHome1} alt="" />
            <img className="w-[50%] absolute top-[40%] left-[-15%]" src={imgHome2} alt="" />
          </div>
        </section>
      </div>

      {/* logo section */}
      <section className="px-[60px] bg-white py-[30px]">
        <LogoSlider/>
      </section>

      {/* services */}
      <section className="px-[60px] py-[40px]">
        <h2 className="text-[40px] w-full max-w-[600px] mx-auto text-center pt-[20px] pb-[40px]">
          Smarter Financial Management with Real-Time Data and AI
        </h2>

        <div className="grid gap-y-[3rem] gap-x-[1rem]
        justify-center
        grid-cols-10">
          <Card
          className={"col-span-5"}
          img={imgService1}
          title="Real-Time Financial Dashboard"
          content="Track key financial metrics like cash flow, expenses, and profits in real-time. Customize your dashboard to see the KPIs that matter most."
          />
          <Card
          className={"col-span-5"}
          img={imgService2}
          title="Automated Financial Reports"
          content="Generate detailed Income Statements, Balance Sheets, and Cash Flow Reports instantly. Export in PDF, Excel, or CSV."
          />
          <Card
          className={"col-span-6"}
          img={imgService3}
          title="AI-Powered Expense Insights"
          content="Get AI-driven insights into your spending patterns and personalized recommendations to optimize future expenses. Discover areas of overspending, improve budgeting, and make data-driven decisions for smarter financial planning."
          />
          <Card
          className={"col-span-4"}
          img={imgService4}
          classNameImg={"bottom-0 top-auto"}
          title="Expense Tracking System"
          content="Log and categorize expenses easily. Visualize spending trends and manage your expenses with real-time updates."
          />
        </div>

      </section>
      
    </main>
  )
}

export default HomePage