import React, { createContext, useState } from 'react';
import axios from 'axios';

// Create a context
export const AppContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      const { token } = response.data;
      console.log(token)
      localStorage.setItem('token', token);
      setToken(token);
      setUser({ username });
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
