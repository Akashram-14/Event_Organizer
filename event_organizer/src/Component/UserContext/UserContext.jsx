// UserContext.js
import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const updateUserInput = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserInput }}>
      {children}
    </UserContext.Provider>
  );
};

// Modified useUser function to work in class components
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
