// Login.js
import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform email and password verification here (e.g., call an authentication API).
    // For simplicity, I'm checking if email and password are not empty.
    if (email && password) {
      // Authentication successful
      setLoggedIn(true);
      // Redirect or perform any other actions after successful login
      console.log('Login successful');
    } else {
      // Authentication failed
      setError('Invalid email or password');
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="input-box">
          <input
            type="text"
            placeholder='👤Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder='🔒Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            maxLength={8}
          />
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" /><b>Remember me</b></label>
          <a href="#"><b>Forgot password?</b></a>
        </div>
        <Link to='/Home'><button type="submit">Login</button></Link>
        <div className="register-link">
          <p><b>Don't have an account?</b><Link to='/Register'><b>Register</b></Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
