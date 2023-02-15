import React from "react";
import './SignupStyles.css';

import Signupback from '../../assets/signupback.jpg';



function Signup () {
    return (
        <div className="signupdiv">
            <div className="signup-container">
            <div className="signupimg"><img src={Signupback} alt='/'/> </div>
            <div className="signuplayover">
                <h2>Sign Up!</h2>
                <p>Get all our deals and special offers</p>
                <form className="signupform">
                    <div> <input type='text' placeholder="Your Email address" /> </div>
                    <div><button>Join</button></div>
                </form>
                </div>
            </div>

        </div>
    )
}

export default Signup;