import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const [statusClass, setStatusClass] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState({
    length: false,
    capital: false,
    lowercase: false,
    number: false,
    symbol: false,
  });

  useEffect(() => {
    document.body.classList.add('signup');
    return () => {
      document.body.classList.remove('signup');
    };
  }, []);

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setValidation({
      length: newPassword.length >= 12,
      capital: /[A-Z]/.test(newPassword),
      lowercase: /[a-z]/.test(newPassword),
      number: /[0-9]/.test(newPassword),
      symbol: /[!@#$%^&*]/.test(newPassword),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const username = event.target.name.value;

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
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="form-control"
              required
              pattern="^\+?[1-9]\d{1,14}$"
              title="Please enter a valid international phone number, with or without a country code."
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <ul>
            <li style={{ color: validation.length ? 'green' : 'red' }}>At least 12 characters</li>
            <li style={{ color: validation.capital ? 'green' : 'red' }}>One uppercase letter (A-Z)</li>
            <li style={{ color: validation.lowercase ? 'green' : 'red' }}>One lowercase letter (a-z)</li>
            <li style={{ color: validation.number ? 'green' : 'red' }}>One number (0-9)</li>
            <li style={{ color: validation.symbol ? 'green' : 'red' }}>One special character (!@#$%^&*)</li>
          </ul>

          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>

        <p id="statusMessage" className={`mt-3 ${statusClass}`}>{statusMessage}</p>
      </div>
    </div>
  );
};

export default Signup;
