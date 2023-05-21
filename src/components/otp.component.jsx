import React from 'react'
import { useNavigate } from 'react-router-dom'

const Otp = () => {
  let navigate=useNavigate()
  const OtpVerify=async (e)=>{
    e.preventDefault()
    let response=await fetch('http://127.0.0.1:8000/verify/',{
     method:'POST',
     headers:{
         'Content-Type':'application/json'
     },
     body:JSON.stringify({"otp":e.target.otp.value})
 
    })
    let data=await response.json()
    console.log(data)
    if (data.status===200){
        console.log('haha saved')
        navigate('/')
        
       }
       else{
        alert('Invalid otp')
       }
  }
  return (
    <div class="flex flex-row h-screen w-screen justify-around">
    <div class="flex  items-center justify-center"> 
    <div class="">
        <span class="flex items-center justify-center font-bold"> 
            
            We have sent an OTP to your Registered Email. Please Enter the OTP to Continue.
        </span>
        <form onSubmit={OtpVerify}>
        <div>
        <input  type="text" name="otp" class="border-2 border-black p-2 mt-6 w-[12rem] h-[3rem] rounded-xl ml-[8rem] placeholder-slate-500" placeholder="Enter OTP" />
        <button class="ml-4 h-[3rem] w-[6rem] text-white hover:bg-slate-600 bg-slate-700 rounded-xl" type="submit"> Confirm

        </button>

    </div>
    </form>

    </div>

    </div>
    </div>

  )
}

export default Otp
