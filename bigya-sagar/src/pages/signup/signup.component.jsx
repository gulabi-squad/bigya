import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle ,faFacebook} from '@fortawesome/free-brands-svg-icons'

import { Link, Navigate, useNavigate } from 'react-router-dom'


const Signup=()=>{
    let navigate=useNavigate()
    const SignupUser=async (e)=>{
        e.preventDefault()
        let response=await fetch('http://127.0.0.1:8000/register/',{
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify({'email':e.target.email.value,'password':e.target.password.value,'passwordconfirm':e.target.passwordconfirm.value,'phone_no':e.target.number.value,'first_name':e.target.firstname.value,'last_name':e.target.lastname.value})
     
        })
        let data=await response.json()
        console.log(data)
        if (data.status===200){
            console.log('haha saved')
            navigate('/signup/otp')
            
           }
           else{
            alert('Something went wrong')
           }
           
    }
    

    return(

  
    <div className='signup'>
        
        <div className="flex flex-col gap-4 border-[1px] border-solid border-[rgba(127,159,177,0.3)] h-[522px] w-[472px] ml-[28rem] mt-[4.3rem] border-radius-[1rem]">
          
            <div className="text-center font-semibold h-[2.5rem]">
              <p className="mt-[1.5rem]">Create your account</p>
             </div>
           <div className="h-[47.884px] w-[444px]">
  
  
             <form    onSubmit={SignupUser} action="" method="">
               <div className="relative  mb-[1.2rem]">
                  <i className="u-logo absolute ml-[4.8rem] mt-[10px] fa-solid fa-user"></i>
                  <input className="w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center border-[1.5px] border-color-[rgba(127,159,177,0.3)] " type="text" name="firstname" id="" placeholder="First name" required/>
               </div>

               <div className="relative  mb-[1.2rem]">
                  <i className="u-logo absolute ml-[4.8rem] mt-[14px] fa-solid fa-user"></i>
                  <input className="w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center border-[1.5px] border-color-[rgba(127,159,177,0.3)] " type="text" name="lastname" id="" placeholder="Last name" required/>
               </div>
  
  

               <div className="relative  mb-[1.2rem]">
                  <i className="u-logo absolute ml-[4.8rem] mt-[14px] fa-solid fa-user"></i>
                  <input className="w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center border-[1.5px] border-color-[rgba(127,159,177,0.3)] " type="email" name="email" id="" placeholder="Email" required/>
               </div>
  
  
               <div className="relative  mb-[1.2rem]">
                  <i className="u-logo absolute ml-[4.8rem] mt-[14px] fa-solid fa-user"></i>
                  <input className="w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center border-[1.5px] border-color-[rgba(127,159,177,0.3)] " type="number" name="number" id="" placeholder="Phone Number" required/>
               </div>
  
  
               <div className="relative  mb-[1.2rem]">
                  <i className="u-logo absolute ml-[4.8rem] mt-[14px] fa-solid fa-user"></i>
                  <input className="w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center border-[1.5px] border-color-[rgba(127,159,177,0.3)] " type="password" name="password" id="" placeholder="Create Password" required/>
               </div>
  
  

          <div className=" relative mb-[1.2rem]">
              <i className="u-pwd absolute ml-[4.8rem] mt-[14px] fa-solid fa-lock"></i>
              <input className="w-[340px] ml-[4rem] h-[43px] rounded-[7px] text-center border-[1.5px] border-color-[rgba(127,159,177,0.3)] " type="password" name="passwordconfirm" id="" placeholder="Confirm Password" required />
          </div>
  
  
         
  
  
           
  
  
          <div className="">
              <input className="block h-[43px] w-[339px] text-center ml-[4rem] rounded-[5px] border-0 bg-[#00905d] text-white" type="submit" value="Signup"/>
          </div>
          </form>
     
          
          
       
  
  
        
  
  
         
  
  
          <div className="mt-4">
              <p className="end-text text-center">Already have an account ?  
              <Link to="/login">            <span className="font-500 text-decoration-none text-blue-700 hover:text-blue-500 hover:underline" href=""> Login Now</span>
  </Link>
  </p>
          </div>
      </div>
  </div>
  </div>

  
    
  

    
    

    )
}
export default Signup;