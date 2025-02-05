import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import Champ from "../../components/Input/Champ";
import { userLogin, userRegister } from "../../api/auth";
import { useEffect, useState } from "react";
import { authStore } from "../../state/authStore";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Template = ({isLogin = true}) => {
  const navigate = useNavigate()
  const {saveToken} = authStore()

  const Line = ({className, ...rest}) => {
    return (
      <div {...rest} className={`{${className} w-full border-solid border-[1px] text-gris-50`}></div>
    )
  }

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleClick = () => {
    if (isLogin) {
      userLogin(email, password)
      .then((data) => {
        saveToken(data['token'])
      })
    } else {
      userRegister(username, email, password)
      .then((data)=>{
        saveToken(data['token'])
      })
    }
  }


  return (
    <main className="bg-main pb-[20px]">
        <section className="bg-white w-full max-w-[550px]
        mx-auto pb-[40px] px-[40px]
        rounded-lg">
          {/* title */}
          <h1 className="text-2xl text-center pt-[35px] pb-[30px] font-semibold text-gris-300">
            {isLogin ? 'Welcome back !' : 'Sign up to FinanceIT'}
          </h1>

          {/* desc */}
          <p className="text-gris-100 text-[15px]">
            By signing up, you agree to the <Link className="underline" to='/terms-of-use'>Terms of use</Link> and <Link className="underline" to="/privacy-policy">Privacy Policy</Link>.
          </p>

          {/* with google */}
          <button className="flex justify-center items-center
          border-solid border-[1px] border-gris-200
          w-full gap-x-[15px] rounded-2xl px-[40px] py-[10px]
          mx-auto my-[20px]
          ">
            <FcGoogle className="text-[20px]"/>
            <p className="text-gris-200 font-semibold pb-[1px]">Continue with Google</p>
          </button>

          {/* line or */}
          <div className="w-full flex justify-center items-center
          gap-x-[20px]">
            <Line/>
            <p className="text-gris-50 m-0 text-sm">OR</p>
            <Line/>
          </div>

          {/* champs */}
          {isLogin ? null :
            <Champ value={username} onChange={(e)=>setUsername(e.target.value)} title="Username" name='username'/>
          }
          <Champ value={email} onChange={(e)=>setEmail(e.target.value)} title="Email" name='email' type="email"/>
          <Champ value={password} onChange={(e)=>setPassword(e.target.value)} title="Password" name='password' type="password"/>

          {/* button */}
          <button className="bg-black text-white
          px-[40px] py-[10px] rounded-lg w-full my-[20px]"
          onClick={handleClick}
          >
            <span className="pb-[2px] block">{isLogin ? 'Sign in' : 'Sign up'}</span>
          </button>

          {/* autre choix */}
          <p className="text-center text-gris-200">
            {isLogin?
            <>Don{`'`}t have an account? <Link to="/signup" className="text-gris-300 font-semibold underline">Sign up</Link></>
            :
            <>Already have an account? <Link to="/signin" className="text-gris-300 font-semibold underline">Sign in</Link></>
            }
          </p>

        </section>
    </main>
  )
}

export default Template