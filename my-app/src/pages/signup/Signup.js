import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const [statusClass, setStatusClass] = useState('');
  useEffect(() => {
    // Add class to body when component mounts
    document.body.classList.add('signup');

    // Remove class from body when component unmounts
    return () => {
      document.body.classList.remove('signup');
    };
  }, []);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.name.value;

    // Retrieve users from localStorage or initialize as an empty array
    let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const userExists = users.some(user => user.email === email);

    if (userExists) {
      setStatusMessage("Account already exists! Please login.");
      setStatusClass('text-danger');
    } else {
      users.push({ email, password, username });
      localStorage.setItem('registeredUsers', JSON.stringify(users));

      setStatusMessage("Account successfully created! Redirecting to the login page...");
      setStatusClass('text-success');

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <div className="container">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone" className="form-control" required
              pattern="^\+?[1-9]\d{1,14}$"
              title="Please enter a valid international phone number, with or without a country code." />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" required
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{12,}$"
              title="Password must be at least 12 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)." />
          </div>

          <ul>
            <li>A mix of uppercase letters (A-Z).</li>
            <li>Include lowercase letters (a-z).</li>
            <li>Add numbers (0-9).</li>
            <li>Include special characters (e.g., !, @, #, $, %, ^, &, *).</li>
          </ul>

          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>

        <p id="statusMessage" className={`mt-3 ${statusClass}`}>{statusMessage}</p>
      </div>
    </div>
  );
};

export default Signup;
