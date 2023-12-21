// LandingPage.js
import React from 'react';
import { useUser } from '../UserContext/UserContext';

const LandingPage = () => {
  const { userData } = useUser();

  return (
    <div>
      <h1>Welcome to HeartfeltHappenings💞</h1>
      <p>User Information:</p>
      <ul>
        <li>Name: {userData.name}</li>
        <li>Email: {userData.email}</li>
        <li>Mobile No: {userData.mobile}</li>
        {/* Add other fields as needed */}
      </ul>
    </div>
  );
};

export default LandingPage;
