// Home.js
import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import back1 from "./wedding.png";
import UserReview from './UserReview';

const Home = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="content-container">
        <h1>Welcome to HeartFeltHappenings💞</h1>
        <br></br>
        <p>" Wedding planning is all fun and games until you realize you have no time, no sleep, and cannot think of anything else."</p>

        <div className="additional-content">
          <br></br>
          <h2>Why Choose Us?</h2>
          <p>
            "Choose us for seamless event experiences crafted with precision, where every detail reflects your unique vision. Elevate your events with our expert planning and execution."
          </p>
          <br></br>
          <h2>How It Works</h2>
          <p>
            " We Transform your vision into reality with our event organizing website - from conceptualization to flawless execution, we simplify the complexities of event planning for a memorable and stress-free experience."
          </p>
          <br></br>
          <br></br>
          <div className="user-reviews">
            {/* First column of reviews */}
            <div className="user-review">
              <UserReview name="John Doe" text="Amazing experience with HeartFeltHappenings! The team made our wedding day truly special." />
            </div>
            <div className="user-review">
              <UserReview name="Alice Johnson" text="Great job! HeartFeltHappenings exceeded our expectations. The event was flawless, and we received many compliments." />
            </div>
            {/* Second column of reviews */}
            <div className="user-review">
              <UserReview name="Jane Smith" text="Highly recommend their services for any event. Professional and detail-oriented." />
            </div>
            <div className="user-review">
              <UserReview name="Bob Anderson" text="Wonderful experience! HeartFeltHappenings made our special day memorable without any hassle. Thank you!" />
            </div>
          </div>

          <div>
            <img src={back1} className='img1' alt='wed'/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
