// JSX
import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  render() {
    return (
      <div className='img'>
        <div className="overlay">
          <p className="l1">HeartfeltHappenings❤️️</p>
          <p className="l2">An event is not over until everyone is tired of talking about it.</p>
          <Link to='/Login'><button id='login'>Login</button></Link>
          <Link to='/Register'><button id='signup'>Sign Up</button></Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
