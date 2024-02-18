import React, {useState} from 'react'
import './LoginSignup.css'

import email_icon from '../Assets/email.png'
import lock_icon from '../Assets/lock.png'
import person_icon from '../Assets/person.png'
const LoginSignup = () => {
    const [action,setAction] = useState("Login");
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={person_icon} alt=""/>
                    <input type="text" placeholder="Name"/>
                </div>
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="University Email"/>
                </div>
                <div className="input">
                    <img src={lock_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            <div className= "forgot-password">Forgot Password? <span>Click Here!</span></div>
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"}
                     onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}
                     onClick={()=>setAction("Login")}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup