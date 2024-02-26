import React, {useState} from 'react'
import './LoginSignup.css'

import email_icon from '../Assets/email.png'
import lock_icon from '../Assets/lock.png'
import person_icon from '../Assets/person.png'
import school_icon from '../Assets/school.png'
const LoginSignup = () => {
    const [action,setAction] = useState("Login");
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });
    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    return (
        <div className='outercontainer'>
            <div className='container'>
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <form className="inputs" onSubmit={{handleSubmit}}>
                    {action === "Login" ? <div></div> : <div className="input">
                        <img src={person_icon} alt=""/>
                        <input type="text" placeholder="First Name"/>
                    </div>}

                    {action === "Login" ? <div></div> : <div className="input">
                        <img src={person_icon} alt=""/>
                        <input type="text" placeholder="Last Name"/>
                    </div>}

                    {action === "Login" ? <div></div> : <div className="input">
                        <img src={school_icon} alt=""/>
                        <input type="text" placeholder="University Name"/>
                    </div>}

                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type="email" placeholder="University Email"/>
                    </div>
                    <div className="input">
                        <img src={lock_icon} alt=""/>
                        <input type="password" placeholder="Password"/>
                    </div>
                </form>
                {action === "Sign Up" ? <div></div> :
                    <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}

                <div className="submit-container">
                    <button className={action === "Login" ? "submit gray" : "submit"}
                         onClick={() => {
                             setAction("Sign Up")
                         }}>Sign Up
                    </button>
                    <button className={action === "Sign Up" ? "submit gray" : "submit"}
                         onClick={() => setAction("Login")}>Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup