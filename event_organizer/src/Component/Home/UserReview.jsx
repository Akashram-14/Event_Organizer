// UserReview.js
import React from 'react';
import './UserReview.css'; // Import the CSS file

const UserReview = ({ name, text }) => {
  return (
    <div className="user-review">
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default UserReview;
