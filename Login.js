// Login.js

import React, { useState } from 'react';
import './Login.css'; // Import CSS file for login styles

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login functionality here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;
