
import { MdArrowRightAlt } from "react-icons/md";
import imgHome1 from "../../assets/img/hero/imgHome1.png"
import imgHome2 from "../../assets/img/hero/imgHome2.png"
import './home.css'
import LogoSlider from "./LogoSlider"
import ServiceCard from "./ServiceCard";
import StatCard from "./StatCard";
import ClientCard from "./ClientCard";


import imgService1 from "../../assets/img/services/service1.png"
import imgService2 from "../../assets/img/services/service2.png"
import imgService3 from "../../assets/img/services/service3.png"
import imgService4 from "../../assets/img/services/service4.png"

import client1 from "../../assets/img/clients/client1.png"
import client2 from "../../assets/img/clients/client2.png"
import client3 from "../../assets/img/clients/client3.png"

const HomePage = () => {

  return (
    <main className="w-full pt-[20px]">
      {/* hero section */}
      <div id="home" className="bg-white w-full">
        <section className="bg-red-00 px-[30px] lg:px-[60px] pb-[60px] hero w-full
        text-center lg:text-start
        lg:flex justify-between items-stretch">
          {/* text */}
          <div className="bg-blue-00 lg:w-[50%]
          b-red-200">

            {/* title */}
            <h1 className="text-[55px] text-[#0C0D0E] mb-[30px] leading-[70px]">
              Reliable Financial Solutions for Business
            </h1>

            {/* desc */}
            <p className="text-[20px] text-gris-200">
              FinanceIT provides reliable financial services for various business needs powered by the latest AI. We are pioneers in this service field, and the best among others.
            </p>

            {/* buttons */}
            <div className="flex justify-center lg:justify-start items-center w-full flex-wrap
            gap-[20px] py-[50px]">
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
            <div className="w-full flex justify-center lg:justify-start items-start
            bg-red-20 gap-x-[10%]">
              <StatCard title="20+" content="Multinational businesses have used Cashbank" />
              <StatCard title="4K+" content="Daily transactions from around the world" />
            </div>
          </div>

          {/* img */}
          <div className="hidden lg:block bg-red-00 w-[40%] relative">
            <img className="w-full rounded-[30px]" src={imgHome1} alt="" />
            <img className="w-[50%] absolute top-[40%] left-[-15%]" src={imgHome2} alt="" />
          </div>
        </section>
      </div>

      {/* logo section */}
      <section id="clients" className="px-[60px] bg-white py-[30px]">
        <LogoSlider />
      </section>

      {/* services section */}
      <section id="features" className="px-[30px] lg:px-[60px] py-[40px]">
        <h2 className="text-[40px] w-full max-w-[600px] mx-auto text-center pt-[20px] pb-[40px]">
          Smarter Financial Management with Real-Time Data and AI
        </h2>

        <div className="grid gap-y-[3rem] gap-x-[1rem]
        justify-center
        grid-cols-10">
          <ServiceCard
            className={"lg:col-span-5"}
            img={imgService1}
            title="Real-Time Financial Dashboard"
            content="Track key financial metrics like cash flow, expenses, and profits in real-time. Customize your dashboard to see the KPIs that matter most."
          />
          <ServiceCard
            className={"lg:col-span-5"}
            img={imgService2}
            title="Automated Financial Reports"
            content="Generate detailed Income Statements, Balance Sheets, and Cash Flow Reports instantly. Export in PDF, Excel, or CSV."
          />
          <ServiceCard
            className={"lg:col-span-6"}
            img={imgService3}
            title="AI-Powered Expense Insights"
            content="Get AI-driven insights into your spending patterns and personalized recommendations to optimize future expenses. Discover areas of overspending, improve budgeting, and make data-driven decisions for smarter financial planning."
          />
          <ServiceCard
            className={"lg:col-span-4"}
            img={imgService4}
            classNameImg={"bottom-0 top-auto"}
            title="Expense Tracking System"
            content="Log and categorize expenses easily. Visualize spending trends and manage your expenses with real-time updates."
          />
        </div>

      </section>

      {/* avis section */}
      <section id="testimonials" className="px-[30px] lg:px-[60px] py-[40px]">
        <h2 className="text-[40px] w-full max-w-[800px] mx-auto text-center pb-[40px]">
          What our clients say about us
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full bg-red-20 pt-[20px] gap-[30px]">
          <ClientCard
            img={client1}
            content="This platform gave us the insights we needed to boost growth and engagement instantly!"
            name="John Doe"
          />
          <ClientCard
            img={client2}
            content="This platform gave us the insights we needed to boost growth and engagement instantly!"
            name="John Doe"
          />
          <ClientCard
            img={client3}
            content="This platform gave us the insights we needed to boost growth and engagement instantly!"
            name="John Doe"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-[30px] lg:px-[60px] pt-[10px] pb-[40px]">
        <div className="bg-white py-[40px] pb-[50px] px-[30px]">
          {/* text */}
          <div className="max-w-[700px] w-full mx-auto text-center">
            <h2 className="font-semibold text-[40px] w-full pb-[30px]">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-[17px]">
              Simplify your financial management with our AI-powered tools. Track expenses, generate reports, and optimize your budget effortlessly.
            </p>
          </div>

          {/* button */}
          <button className="block mx-auto bg-black text-white
          px-[30px] py-[10px] rounded-full mt-[20px] mb-[40px]">
            <span className="pb-[2px] block">Start for free</span>
          </button>

          {/* img */}
          <div className="w-full max-w-[800px] aspect-[1.5] lg:aspect-[2] px-[20px] mx-auto">
            <div className=' w-full h-full relative truncate'>
              {/* img */}
              <img className={`w-full left-0 absolute top-0`} src={imgService2} alt="" />
              {/* bg gradient */}
              <div className='h-full w-full absolute'
                style={{ background: "linear-gradient(to top, #FFFFFF 0%, transparent 60%)" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage