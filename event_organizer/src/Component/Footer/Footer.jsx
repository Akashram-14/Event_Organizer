// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <marquee>
        <p>&copy; 2023 My Company</p>
        </marquee>
      </div>
      <div className="contact-info">
        <div>
          <h4>Contact Information</h4>
          <p>Email: <a href="mailto:info@example.com">info@yahoo.com</a></p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div>
          <h4>Follow Us</h4>
          <p>
            Twitter:{' '}
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} /> @example
            </a>
          </p>
          <p>
            Facebook:{' '}
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} /> facebook.com/example
            </a>
          </p>
        </div>
        <div>
          <h4>Address</h4>
          <p>123 Main Street</p>
          <p>Cityville, State 12345</p>
        </div>
      </div>
      <div className="important-pages">
        <div>
          <h4>Important Pages</h4>
          <p><a href="/terms">Terms and Conditions</a></p>
          <p><a href="/privacy">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;