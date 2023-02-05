import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle ,faFacebook} from '@fortawesome/free-brands-svg-icons'
import './signup.css'


const Signup=()=>{
    return(
<div>
    <form action="">
        <div className="container">
            <div className="allbox box1"><p className="create-account">Create your account</p></div>
            <div className="allbox box2">
                <div className="fn">

                <input type="text" placeholder="First name" required />
                </div>
                <div className="ln">
                <input className="ln" type="text" placeholder="Last name" required />
                </div>
            </div>
            <div className="allbox box3"><input type="email" name="email" id="email"placeholder="Enter your email"required/></div>
            <div className="allbox box4"><input type="number" name="number" id="number"placeholder="Phone number"required /></div>
            <div className="allbox box5"><input type="password" name="password" id="createpassword"placeholder="Create password"required /></div>
            <div className="allbox box6"><input type="password" name="password" id="confirmpassword"placeholder="Confirm password"required /></div>
            <div className="allbox box7"><input type="submit"name="submit" id="submit"value="Signup" /></div>
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