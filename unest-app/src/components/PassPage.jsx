import React, { useState } from 'react';

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [secretAnswer, setSecretAnswer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can add your logic to handle form submission here
        console.log('Submitted:', { username, email, secretAnswer });
        // Display an alert with a message
        alert(`Your password reset instructions have been sent to your email.`);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Forgot Password</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputContainer}>
                    <label htmlFor="username" style={styles.label}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputContainer}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputContainer}>
                    <label htmlFor="secretAnswer" style={styles.label}>Secret Answer:</label>
                    <input
                        type="text"
                        id="secretAnswer"
                        value={secretAnswer}
                        onChange={(e) => setSecretAnswer(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '2rem',
        borderBottom: `2px solid #EA5455`, // Add underline
    },
    form: {
        width: '100%',
        maxWidth: '400px',
    },
    inputContainer: {
        marginBottom: '1rem',
    },
    label: {
        fontSize: '1.2rem',
        marginBottom: '0.5rem',
    },
    input: {
        width: '100%',
        padding: '0.5rem',
        fontSize: '1rem',
    },
    button: {
        width: '100%',
        padding: '0.5rem',
        fontSize: '1.2rem',
        backgroundColor: '#EA5455',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '1rem',
    },
};

export default ForgotPassword;
