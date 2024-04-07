import React, { useState } from 'react';
import './PassPage.css';

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [secretAnswer, setSecretAnswer] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'sud' && email === 'sud@gmail.com' && secretAnswer === 'hello') {
            // NEED TO CHANGE TI FETCH FROM DATABASE
            setShowPassword(true);
        } else {
            alert('Invalid username, email, or secret answer.');
        }
    };

    return (
        <div className="container">
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
