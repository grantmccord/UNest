import React from 'react'
import './LoginSignup.css'

import email_icon from '../Assets/email.png'
import lock_icon from '../Assets/lock.png'
import person_icon from '../Assets/person.png'
const LoginSignup = () => {
    return(
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="input"></div>
            <div className="input">
                <img src={person_icon} alt=""/>
                <input type="text"/>
            </div>

            <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email"/>
            </div>

            <div className="input">
                <img src={lock_icon} alt=""/>
                <input type="password"/>
            </div>

        </div>
    )
}

export default LoginSignup