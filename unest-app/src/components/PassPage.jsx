import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './PassPage.css';
import axios from "axios";

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [secretAnswer, setSecretAnswer] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    async function handleSubmit(event) {
        event.preventDefault();
        try{
            const {check} = await axios.post('/validate', {username, email});
            setShowPassword(true);
            alert("check");
        }catch(e){
            alert('NO MATCH FOUND');
        }

        //if (username === 'sud' && email === 'sud@gmail.com' && secretAnswer === 'hello') {
            // NEED TO CHANGE TI FETCH FROM DATABASE
            //setShowPassword(true);
        //} else {
          //  alert('Invalid username, email, or secret answer.');
        //}
    }

    return (
        <div className="container">
            <Link to="/login" className="returnToLogin">Return to Login</Link>
            <h2 className="title">Forgot Password</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="inputContainer">
                    <label htmlFor="username" className="label">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="email" className="label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="secretAnswer" className="label">Secret Answer:</label>
                    <input
                        type="text"
                        id="secretAnswer"
                        value={secretAnswer}
                        onChange={(e) => setSecretAnswer(e.target.value)}
                        className="input"
                    />
                </div>
                <button type="submit" className="button">Submit</button>
            </form>
            {showPassword && (
                <div className="passwordContainer">
                    <p className="passwordLabel">Your Password:</p>
                    <p className="password">CS307</p>
                </div>
            )}
        </div>
    );
};

export default ForgotPassword;
