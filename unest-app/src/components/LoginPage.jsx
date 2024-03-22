import React, {useState} from 'react'
import './LoginPage.css'

import email_icon from '../Assets/email.png'
import lock_icon from '../Assets/lock.png'
import person_icon from '../Assets/person.png'
import school_icon from '../Assets/school.png'
import {Link, useNavigate} from "react-router-dom";
const LoginPage = () => {
    const [action,setAction] = useState("Login");
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/register';
        navigate(path);
    }
    return (
        <div className='outercontainer'>
            <div className='container'>
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <form className="inputs">
                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="input">
                        <img src={lock_icon} alt=""/>
                        <input type="password" placeholder="Password"/>
                    </div>
                </form>
                {action === "Sign Up" ? <div></div> :
                    <div className="forgot-password">Forgot Password?
                        <Link className="psw" to={'/forgotpass'}>  Click Here</Link>
                    </div>}

                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"}
                         onClick={routeChange}>Sign Up
                    </div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"}
                         onClick={() => alert("Welcome to UNest!")}>Login
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage