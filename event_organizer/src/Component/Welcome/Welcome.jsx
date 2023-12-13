import React from 'react';
import './Welcome.css';
class Welcome extends React.Component{
    render(){
        return(
        <div>
                    <p className="l1">“HeartfeltHappenings❤️️”</p>
                    <p className="l2">“An event is not over until everyone is tired of talking about it.”</p>
                    <button id='login'>Login</button>
                    <button id='signup'>Sign Up</button>
        </div>
        );
    }
}

export default Welcome;