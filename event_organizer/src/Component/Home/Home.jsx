// Home.js
import React from 'react';

import './Home.css'; // Import the CSS file
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import back1 from "./wedding.png";
import back2 from "./birth.png";

const Home = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="content-container">
        <h1>Welcome to HeartFeltHappenings💞</h1>
        <p>" Wedding planning is all fun and games until you realize you have no time, no sleep, and cannot think of anything else."</p>

        <div className="additional-content">
          <br></br>
          <h2>Why Choose Us?</h2>
          <p>
          "Choose us for seamless event experiences crafted with precision, where every detail reflects your unique vision.
           Elevate your events with our expert planning and execution."
          </p>
          <br></br>
          <h2>How It Works</h2>
          <p>
          " We Transform your vision into reality with our event organizing website - from conceptualization to flawless execution, we simplify the complexities of event planning for a memorable and stress-free experience."
          </p>
          <div>
            <img src={back1} className='img1' alt='wed'/>
          </div>
          <div>
            <img src={back2} className='img2' alt='birth'/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;