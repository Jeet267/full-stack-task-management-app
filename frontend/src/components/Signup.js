import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AuthContext';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { login } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      if (response.data.token) {
        login(formData.username, formData.password);
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        className="bg-white shadow-md rounded-lg p-6 w-96" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold text-gray-700 mb-4">Create Account</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="username"
            className="w-full p-2 border rounded-lg"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded-lg"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded-lg"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            className="w-full p-2 border rounded-lg"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
