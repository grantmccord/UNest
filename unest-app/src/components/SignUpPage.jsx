import React, { useState } from "react";
import "./SignupPage.css";
import RegistrationInput from "./RegistrationInput";
import {Link} from "react-router-dom";
import axios from "axios";


const App = () => {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "firstname",
            type: "text",
            placeholder: "Ex: Jane",
            errorMessage: "Please enter your first name.",
            label: "First Name",
            required: true,
        },
        {
            id: 2,
            name: "lastname",
            type: "text",
            placeholder: "Ex: Doe",
            errorMessage: "Please enter your last name.",
            label: "Last Name",
            required: true,
        },
        {
            id: 3,
            name: "username",
            type: "text",
            placeholder: "Ex: DJane2002",
            errorMessage:
                "Username must be 5-10 characters. No special characters!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{5,10}$",
            required: true,
        },
        {
            id: 4,
            name: "email",
            type: "email",
            placeholder: "Ex: jdoe334@purdue.edu",
            errorMessage: "Please use a valid university email (.edu)!",
            label: "Email",
            required: true,
        },
        {
            id: 5,
            name: "birthday",
            type: "date",
            placeholder: "xx/xx/xxxx",
            label: "Birthday",
            required: true,
        },
        {
            id: 6,
            name: "password",
            type: "password",
            placeholder: "Ex: **********",
            errorMessage:
                "Password must be at least 5 characters and include at 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,20}$`,
            required: true,
        },
        {
            id: 7,
            name: "confirmPassword",
            type: "password",
            placeholder: "Ex: **********",
            errorMessage: "Passwords don't match! Please try again.",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    async function registerUser (ev){
        ev.preventDefault();
        try{
            await axios.post('/register', {
                firstname: values.firstname,
                lastname: values.lastname,
                username: values.username,
                email: values.email,
                birthday: values.birthday,
                password: values.password,
            })
            alert('Thank you for registering! Welcome to UNEST!');
        } catch (e){
            alert('Oops! Registration failed. Please try again.');
        }
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    function forgotPass (){
        alert("UH-OH, Forgot your Password!")
    }

    function completeForm (){
        alert("Thank you for Registering!")
    }

    function refreshPage(){
        window.location.reload(false);
    }


    return (
        <div className="app">
            <form onSubmit={registerUser}>
                <h1>Sign Up!</h1>
                <div className="underline"></div>
                {inputs.map((input) => (
                    <RegistrationInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <div className="text-center">
                    Already a member? <Link className="reg" to={'/login'}>Sign In Now!</Link>
                </div>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default App;