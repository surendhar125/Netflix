import { useState } from "react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

const Login = () => {

  const [signState, setSignState]= useState("Sign In");

  return (
    <div className="h-screen bg-cover bg-center px-5 py-2 flex flex-col"
      style={{backgroundImage: "linear-gradient(#0000007e, #0000007e), url('/background_banner.jpg')"}}>
      
      <Link to={"/"}><img src={logo} alt="" className="w-[150px]  mt-4" /></Link>

      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-[450px] w-full bg-[#000000bf] rounded-md p-[60px]">
          <h1 className="text-4xl font-bold mb-5 text-white">{signState}</h1>
          
          <form action="">
            {signState==="Sign Up"? <input type="text" placeholder="Your Name" className="w-full h-11 bg-[#333] rounded-xs px-4 my-4 text-xl outline-0 border-0 text-white"/>: null}
            <input type="email" placeholder="Email" className="w-full h-11 bg-[#333] rounded-xs px-4 text-xl outline-0 border-0 text-white"/>
            <input type="password" placeholder="Password" className="w-full h-11 bg-[#333] rounded-xs px-4 my-4 text-xl outline-0 border-0 text-white"/>
            
            <button className="w-full border-0 outline-0 p-[11px] bg-[#e50914] hover:bg-[#a3050d] text-xl rounded-lg mt-5 cursor-pointer text-white">{signState}</button>

            <div className="flex justify-between text-sm pt-4 text-white">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="w-4 cursor-pointer" />
                <label htmlFor="remember" className="cursor-pointer">Remember Me</label>
              </div>
              <p className="cursor-pointer">Need Help?</p>
            </div>
          </form>
          
          <div className="text-[#737373] mt-5">
            {signState==="Sign In"?<p>New to Netflix? <span className="ml-2 text-[#fff] font-semibold cursor-pointer" onClick={()=>setSignState("Sign Up")}>Sign Up Now</span></p> :
            <p>Already have account? <span className="ml-2 text-[#fff] font-semibold cursor-pointer" onClick={()=>setSignState("Sign In")}>Sign In Now</span></p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
