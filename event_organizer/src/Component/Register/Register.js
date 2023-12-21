// Register.js
import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            mobile: '',
            password: '',
            passwordError: '',
            emailError: '', // Added emailError state
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
            passwordError: '',
            emailError: '', // Clear email error when user types
        });
    };

    handleSignUp = (event) => {
        event.preventDefault();

        const { name, email, mobile, password } = this.state;

        // Perform email and password validation here
        if (!password) {
            this.setState({ passwordError: 'Password not entered' });
        }

        if (!email) {
            this.setState({ emailError: 'Email not entered' });
        }

        // Check if either password or email is not provided
        if (!password || !email) {
            return; // Exit the function if validation fails
        }

        // Perform additional validation if needed

        // If everything is valid, you can proceed with registration
        console.log('Registration successful');
    };

    render() {
        const { name, email, mobile, password, passwordError, emailError } = this.state;

        return (
            <div id="back1">
                <div className='well' id="login_box">
                    <div id="welcome">
                        <br></br>
                        <h1> HeartfeltHappenings💞</h1>
                    </div>
                    <Link to='/Login'>
                        <button style={{ position: 'absolute', top: '10px', right: '10px' }} id="login_button">
                            <h3>Login</h3>
                        </button>
                    </Link>
                    <div>
                        <h4 id="email_text">Name</h4>
                        <input
                            type="text"
                            placeholder="Enter your name ..."
                            id="name"
                            value={name}
                            onChange={this.handleInputChange}
                            required
                        />
                        <br></br>
                        <br></br>

                        <h4 id="email_text">Email</h4>
                        <input
                            type="email"
                            placeholder="Enter your email ..."
                            id="email"
                            value={email}
                            onChange={this.handleInputChange}
                            required
                        />
                        {emailError && <div className="error-message">{emailError}</div>}
                        <br></br>
                        <br></br>

                        <h4 id="age">Mobile No</h4>
                        <input
                            type="tel"
                            placeholder='Enter your number ...'
                            id="mobile"
                            value={mobile}
                            onChange={this.handleInputChange}
                            required
                        ></input>
                        <br></br>
                        <br></br>

                        <h4 id="password_text">Password</h4>
                        <input
                            type="password"
                            placeholder="🗝️Enter your password ..."
                            id="password"
                            value={password}
                            onChange={this.handleInputChange}
                            required
                        ></input>

                        {passwordError && <div className="error-message">{passwordError}</div>}

                        <br></br>
                        <br></br>
                        <br></br>

                        <Link to='/Home'>
                            <button id="signin_button" onClick={this.handleSignUp}>
                                <h3>Sign Up</h3>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
