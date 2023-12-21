// JSX
import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';

class NittyGritty extends React.Component {
  render() {
    return (
      <div>
        <div className='nav'>
          <Navbar />
        </div>
        <div className="center-container">
          <div id="nitty-gritty-section">
            <h2>Nitty Gritty</h2>
            <p>
              Welcome to the heart of our event planning! At HeartFeltHappenings, we pay attention to every detail
              to make your event truly special. Here's a glimpse into the nitty-gritty of our event planning process:
            </p>

            <h3>1. Initial Consultation</h3>
            <p>
              We start by understanding your vision and requirements through a detailed consultation. Your ideas and
              preferences are the foundation of our planning process.
            </p>

            <h3>2. Customized Packages</h3>
            <p>
              Our team offers customized packages tailored to your event type, size, and budget. Whether it's a wedding,
              corporate event, or a celebration, we have you covered.
            </p>

            <h3>3. Venue Selection</h3>
            <p>
              We help you find the perfect venue for your event. Our team considers factors like location, capacity,
              and ambiance to ensure a seamless experience.
            </p>

            {/* Add more sections as needed */}

            <h3>Let's Get Started!</h3>
            <p>
              Ready to dive into the nitty-gritty details of planning your event?{' '}
              <a href="#contact-us">Contact us</a> today to schedule a consultation and let us bring your vision to life!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NittyGritty;
