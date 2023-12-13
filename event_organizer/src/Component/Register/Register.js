import React from 'react';
import './Register.css';

class Register extends React.Component{
    render(){
        return(
            <div id="back1">
            <div class='well' id="login_box">
                <div id="welcome">
                    <br></br>
                    <h1> HeartfeltHappenings❤️️  </h1>
                </div>
                <div>

                <h4 id="email_text">Name</h4>
                    <input type="text" placeholder="Enter your name ..." id="text">
                    </input><br></br>

                    <h4 id="age">Enter Age</h4>
                    <input type="number" placeholder='Enter your age ...' id="num"></input><br></br>

                    <h4 id="email_text">Email</h4>
                    <input type="email" placeholder="Enter your email ..." id="text">
                    </input><br></br>

                    <h4 id="age">Enter Mobile No</h4>
                    <input type="tel" placeholder='Enter your number ...' id="num"></input><br></br>

                    <h4 id="password_text">Password</h4>
                    <input type="password" placeholder="Enter your password ..." id="text"></input>

                    
                    <h4 id="Conf_pass"><b>Confirm Password</b></h4>
                    <input type="password" placeholder="Confirm your password ..." id="text">
                    </input><br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                   <button id="signin_button"><h3>Sign Up</h3></button>
                    
                </div>
            </div>
            </div>
        );
    }
}
export default Register;