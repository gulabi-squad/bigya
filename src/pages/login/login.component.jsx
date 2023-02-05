import React from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle ,faFacebook} from '@fortawesome/free-brands-svg-icons'


const Login = () => {
  return (
    <div className='login'>


<body>
    <div class="l-container">
        {/* <!-- <div class="allbox box0"></div> --> */}
        <div class="l-allbox l-box1"><p class="l-sign_up">Login To Bigya</p></div>
        <form action="" method="">
            <div class="l-allbox l-box2">
                <i class="l-u-logo fa-solid fa-user"></i>
                <input type="text" name="" id="" placeholder="Username Or Email" required /></div>
        <div class="l-allbox l-box3">
            <i class="l-u-pwd fa-solid fa-lock"></i>
            <input type="password" name="" id="" placeholder="Password" required /></div>
        <div class="l-allbox l-box4">
            <input class="l-checkbox" type="checkbox" name="" id=""/>
            <div class="l-remember_me"><p class="l-remember-me">Remember Me</p></div>
            <div class="l-forgot_password"><a class="l-forgot-pwd" href="#">Forgot Password ?</a></div>
        </div>
        <div class="l-allbox l-box5"><input type="submit" class="l-submit-button" value="Login"/></div>
        </form>
        
        
        <div class="l-allbox l-box6">
            <div class="l-left-boundary"></div>
            <div class="l-or">or</div>
            <div class="l-right-boundary"></div> 
        </div>
        <div class="l-allbox l-box7">
        {/* <FontAwesomeIcon icon={faGoogle} /> */}
            <a class="l-fb_google" href=""><FontAwesomeIcon icon={faGoogle} /> Sign in with Google</a>
        </div>
        <div class="l-allbox l-box8">
        {/* <FontAwesomeIcon icon={faFacebook} /> */}
            <a class="l-fb_google" href=""><FontAwesomeIcon icon={faFacebook} />Sign with Facebook</a>
        </div>
        <div class="l-allbox box9"><p class="l-end-text">New to Bigya ?  
            <a href="./signup.html"> Create an Account</a></p></div>
    </div>
</body>



    </div>
  )
}

export default Login