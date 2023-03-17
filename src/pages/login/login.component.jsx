import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle ,faFacebook} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='login'>
        
      <div className="flex flex-col gap-4 border-[1px] border-solid border-[rgba(127,159,177,0.3)] h-[522px] w-[472px] ml-[28rem] mt-[4.3rem] border-radius-[1rem]">
        
          <div className="allbox box1 text-center h-[8rem]">
            <p className="mt-[1.5rem]">Login To Bigya</p>
           </div>
         <div className="h-[47.884px] w-[444px]">


           <form action="" method="">
             <div className="relative  mb-[1.2rem]">
                <i className="u-logo absolute ml-[4.8rem] mt-[14px] fa-solid fa-user"></i>
                <input className="w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center border-[1.5px] border-color-[rgba(127,159,177,0.3)] " type="text" name="" id="" placeholder="Username Or Email" required/>
             </div>


        <div className=" relative">
            <i className="u-pwd absolute ml-[4.8rem] mt-[14px] fa-solid fa-lock"></i>
            <input className="w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center border-[1.5px] border-color-[rgba(127,159,177,0.3)] " type="password" name="" id="" placeholder="Password" required />
        </div>


        <div className="flex justify-evenly mt-[0.5rem]">
            <input className="mb-[1.9rem] ml-[3.7rem]" type="checkbox" name="" id=""/>
            <div className="remember_me">
                <p className="mr-[2rem] font-normal text-sm">Remember Me</p>
            </div>


            <div className="forgot_password">
                <a className="mr-[2rem] font-normal text-sm text-black-800" href="#">Forgot Password ?</a>
            </div>
        </div>


        <div className="">
            <input className="block h-[43px] w-[339px] text-center ml-[4rem] rounded-[5px] border-0 bg-[#00905d] text-white" type="submit" value="Login"/>
        </div>
        </form>
    </div>
        <div className="mt-[10rem] flex flex-col content-center text-center">
        
        <div className="">
            <div className="or">or</div>
        </div>


        <div className="">
            <i className="mt-2 google fa-brands fa-google"></i>
            <a className="fb_google" href="">Sign in with Google</a>
        </div>


        <div className="mt-3">
            <i className="facebook fa-brands fa-facebook"></i>
            <a className="fb_google" href="">Sign with Facebook</a>
        </div>


        <div className="mt-4">
            <p className="end-text text-center">New to Bigya ?  
            <Link to="/signup">            <span className="font-500 text-decoration-none text-blue-700 hover:text-blue-500 hover:underline" href=""> Create an Account</span>
</Link>
</p>
        </div>
    </div>


    </div>
    </div>




    
    
  )
}

export default Login