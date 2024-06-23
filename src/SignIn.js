// src/SignIn.js
import React, { useState } from 'react';
import './SignIn.css';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Example validation (you can replace this with real validation logic)
        if (username === 'user' && password === 'password') {
            setErrorMessage('');
            alert('Sign in successful!');
            // Redirect to another page or perform other actions here
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
}

export default SignIn;