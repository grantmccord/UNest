import React, { useState } from "react";
import "./App.css";
import Registration_Input from "./components/Registration_Input";


const App = () => {
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
            name: "First Name",
            type: "text",
            placeholder: "First Name",
            errorMessage: "Please enter your first name.",
            label: "First Name",
            required: true,
        },
        {
            id: 2,
            name: "Last Name",
            type: "text",
            placeholder: "Last Name",
            errorMessage: "Please enter your last name.",
            label: "Last Name",
            required: true,
        },
        {
            id: 3,
            name: "username",
            type: "text",
            placeholder: "Username",
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
            placeholder: "Email",
            errorMessage: "Please use a valid university email (.edu)!",
            label: "Email",
            required: true,
        },
        {
            id: 5,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
            required: true,
        },
        {
            id: 6,
            name: "password",
            type: "password",
            placeholder: "Password",
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
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match! Please try again.",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

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
            <form onSubmit={handleSubmit}>
                <h1>Sign Up!</h1>
                <div className="underline"></div>
                {inputs.map((input) => (
                    <Registration_Input
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button onClick={forgotPass} className="forgotButton">Forgot Password?</button>
                <button onClick={completeForm}>Submit</button>
            </form>
        </div>
    );
};

export default App;