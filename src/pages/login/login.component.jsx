import React from 'react'
import './login.css'


const Login = () => {
  return (
    <div>


<body>
    <div class="container">
        
        <div class="allbox box1"><p class="sign_up">Login To Bigya</p></div>
        <form action="" method="">
            <div class="allbox box2">
                <i class="u-logo fa-solid fa-user"></i>
                <input type="text" name="text" id="text" placeholder="Username Or Email" required/></div>
        <div class="allbox box3">
            <i class="u-pwd fa-solid fa-lock"></i>
            <input type="password" name="pass" id="pass" placeholder="Password" required /></div>
        <div class="allbox box4">
            <input class="checkbox" type="checkbox" name="cb" id="cb"/>
            <div class="remember_me"><p class="remember-me">Remember Me</p></div>
            <div class="forgot_password"><a class="forgot-pwd" href="#">Forgot Password ?</a></div>
        </div>
        <div class="allbox box5"><input type="submit" class="submit-button" value="Login"/></div>
        </form>
        
        
        <div class="allbox box6">
            <div class="left-boundary"></div>
            <div class="or">or</div>
            <div class="right-boundary"></div> 
        </div>
        <div class="allbox box7">
            <i class="google fa-brands fa-google"></i>
            <a class="fb_google" href="">Sign in with Google</a>
        </div>
        <div class="allbox box8">
            <i class="facebook fa-brands fa-facebook"></i>
            <a class="fb_google" href="">Sign with Facebook</a>
        </div>
        <div class="allbox box9"><p class="end-text">New to Bigya ?  
            <a href="./signup.html"> Create an Account</a></p></div>
    </div>
</body>


    </div>
  )
}

export default Login