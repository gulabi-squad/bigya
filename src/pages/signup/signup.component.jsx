import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle ,faFacebook} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'



const Signup=()=>{
    return(
<div>
    {/* added comments */}
    <form action="">
    <div className="flex flex-col gap-2 border-[1px] border-solid border-[rgba(127,159,177,0.3)] h-[522px] w-[472px] ml-[28rem] mt-[4.3rem] rounded-md ">
        <div className="flex flex-col gap-6 items-center justify-center items-center">
            <div className="mt-[28px] h-[31px] text-center"> Create Your Account </div>
            <div className="flex items-center">
            <div> <input className="w-[160px] h-[43px] rounded-md border-2 text-center" placeholder="First Name" type="text" required/></div>
            <div> <input className="w-[160px] ml-4 h-[43px] rounded-md border-2 text-center" placeholder="Last Name" type="text" required/></div>
            </div>
            <div> <input className="w-[339px] h-[43px] rounded-md border-2 text-center" placeholder="Enter your Email" type="email" required/></div>
            <div> <input className="w-[339px] h-[43px] rounded-md border-2 text-center" placeholder="Phone number" type="text"/></div>
            <div> <input className="w-[339px] h-[43px] rounded-md border-2 text-center" placeholder=" Create Password" type="password" required/></div>
            <div> <input className="w-[339px] h-[43px] rounded-md border-2 text-center" placeholder="Confirm Password" type="password" required/></div>

            <div className="w-[339px] h-[43px] rounded-md bg-green-600 text-white text-[18px] justify-center text-center items-center" value="Sign Up" type="submit"><p className="mt-2 font-medium">Sign Up</p></div>
            <div>         <p className="">Already have an Account? 
            <Link to="/login">            <span className="font-500 text-decoration-none text-blue-700 hover:text-blue-500 hover:underline" href=""> Login here </span>
</Link>
</p></div>

            </div>




        </div>
       
    </form>
    </div>

    )
}
export default Signup;