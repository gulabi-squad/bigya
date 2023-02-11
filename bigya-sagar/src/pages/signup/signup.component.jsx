import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle ,faFacebook} from '@fortawesome/free-brands-svg-icons'
import './signup.css'

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
        <div className="container">
            <div className="allbox box1"><p className="create-account">Create your account</p></div>
            <div className="allbox box2">
                <div className="fn">

                <input type="text" name='firstname' placeholder="First name" required />
                </div>
                <div className="box2">
                <input className="ln" name='lastname' type="text" placeholder="Last name" required />
                </div>
            </div>
            <div className="allbox box3"><input type="email" name="email" id="email"placeholder="Enter your email"required/></div>
            <div className="allbox box4"><input type="number" name="number" id="number"placeholder="Phone number"required /></div>
            <div className="pw">
            <div className="allbox box5"><input type="password" name="password" id="createpassword"placeholder="Create password"required /></div>
            </div>
            <div className="pwd">
            <div className="allbox box6"><input type="password" name="passwordconfirm" id="confirmpassword" placeholder="Confirm password" required /></div>
            </div>
           
            <div className="allbox box7"><input type="submit" name="submit" id="submit" value="Signup" /></div>
            
            <div className="allbox box8">
                <div className="left-boundary"></div>
                <div className="or">or</div>
                <div className="right-boundary"></div>
            </div>
            <div className="allbox box9">
                <div className="google" >
                <FontAwesomeIcon icon={faGoogle} />
                    <a className="fb_google" href=""> Sign in with Google</a>
                </div>
            </div>
            <div className="allbox box10">
                <div className="facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                     <a className="fb_google" href="">Sign with Facebook</a>
                </div>
            </div>
            <div className="allbox box11"><p className="already">Already have an account ?
            <a href="./login.html">Login Now</a></p>
            </div>
        </div>
    </form>
    </div>

    )
}
export default Signup;