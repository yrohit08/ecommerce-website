import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext(null)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize from session storage if available
    const storedUser = sessionStorage.getItem('loggedInUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize from session storage if available
    const storedUser = sessionStorage.getItem('loggedInUser');
    return storedUser ? true : null;
  });
  // Sync with session storage
  useEffect(() => {
    const savedUser = sessionStorage.getItem('loggedInUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    sessionStorage.setItem('loggedInUser', JSON.stringify(userData));
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    sessionStorage.removeItem('loggedInUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};