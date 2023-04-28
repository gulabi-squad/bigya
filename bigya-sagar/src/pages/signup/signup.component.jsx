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
<div>
    <form  onSubmit={SignupUser}>

    </form>
    </div>

    )
}
export default Signup;