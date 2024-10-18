import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import Champ from "../../components/Input/Champ";
import DropFileInput from "./DropFileInput"

import { useDropzone } from "react-dropzone";

const Template = () => {
  // file
  

  // Line component
  const Line = ({className, ...rest}) => {
    return (
      <div {...rest} className={`{${className} w-full border-solid border-[1px] text-gris-50`}></div>
    )
  }

  // component
  return (
    <main className="bg-main pb-[20px]">
        <section className="bg-white w-full max-w-[550px]
        mx-auto pb-[40px] px-[40px]
        rounded-lg">
          {/* title */}
          <h1 className="text-2xl text-center pt-[35px] pb-[30px] font-semibold text-gris-300">
            Upload
          </h1>

          {/* desc */}
          <p className="text-gris-100 text-[15px] text-center">
            Upload an Excel or CSV File that contains you financial data
          </p>

          {/* upload file */}
          <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />

          {/* line or */}
          <div className="w-full flex justify-center items-center
          gap-x-[20px]">
            <Line/>
            <p className="text-gris-50 m-0 text-sm">OR</p>
            <Line/>
          </div>

          {/* desc 2 */}
          <p className="text-gris-100 text-[15px] text-center pt-[20px] pb-[10px]">
            Connect via ERP System using public API key
          </p>

          {/* champs */}
          <Champ title="API public key" name='apiKey' type="email"/>
          <Champ title="Confirm key" name='password' type="password"/>

          {/* button */}
          <button className="bg-black text-white
          px-[40px] py-[10px] rounded-lg w-full mt-[20px]">
            <span className="pb-[2px] block">
                Next
            </span>
          </button>


        </section>
    </main>
  )
}

export default Template