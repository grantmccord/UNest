import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PassPage.css';
import axios from "axios";

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [secretAnswer, setSecretAnswer] = useState('');
    const [showPasswordInput, setShowPasswordInput] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [pass, setPass] = useState('');
    const [matchFound, setMatchFound] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const { data } = await axios.post('/validate', { username, email, secretAnswer});
            if (data.status === "FOUND" && data.pass) {
                setPass(data.pass);
                setMatchFound(true);
                setShowPasswordInput(true);
                alert("Match Found!");
            } else {
                alert('NO MATCH FOUND');
            }
        } catch (e) {
            console.error('Error occurred:', e);
            alert('Could not validate user. Please try again');
        }
    }

    const handlePasswordChange = (event) => {
        setNewPassword(event.target.value);
    }

    const handlePasswordSubmit = (event) => {
        event.preventDefault();
        console.log("New Password:", newPassword);
        setNewPassword('');
        setShowPasswordInput(false);
        setMatchFound(false);
    }

    return (
        <div className="container">
            <Link to="/login" className="returnToLogin">Return to Login</Link>
            <h2 className="title">Forgot Password</h2>
            {!showPasswordInput ? (
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
            ) : (
                <form onSubmit={handlePasswordSubmit} className="form">
                    <div className="inputContainer">
                        <label htmlFor="newPassword" className="label">New Password:</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={handlePasswordChange}
                            className="input"
                        />
                    </div>
                    <Link to={'/login'} style={{fontWeight: "bold", backgroundColor: "#de6363", color:"white", textAlign: "center"}} type="submit" className="button">Change Password</Link>
                </form>
            )}
            {matchFound && (
                <div className="passwordContainer">
                    <p className="passwordLabel">Your Password:</p>
                    <p className="password">{pass}</p>
                </div>
            )}
        </div>
    );
};

export default ForgotPassword;
