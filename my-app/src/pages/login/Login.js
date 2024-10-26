import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Login.css';

const Login = () => {
    const [statusMessage, setStatusMessage] = useState('');
    const [statusClass, setStatusClass] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const { login, isLoggedIn } = useContext(AuthContext);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get('redirectTo');

    useEffect(() => {
        setShowPopup(true);
    }, []);
    useEffect(() => {
        // Add class to body when component mounts
        document.body.classList.add('login');

        // Remove class from body when component unmounts
        return () => {
            document.body.classList.remove('login');
        };
    }, []);

    useEffect(() => {
        // Check if the user is already logged in
        if (isLoggedIn) {
          setStatusMessage("You're already logged in! Redirecting...");
          setTimeout(() => {
            navigate('/'); // Redirect to the dashboard or home page
          }, 2000);
        }
      }, []);


    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Retrieve stored users from localStorage
        const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const validUser = users.find(user => user.email === email && user.password === password);

        if (validUser) {
            login(validUser);
            setStatusMessage("Login successful! Redirecting...");
            setStatusClass('text-success');

            setTimeout(() => {
                if(paramValue == 'cart') navigate('/cart');
                else navigate('/');
            }, 2000);
        } else {
            setStatusMessage("Invalid username or password!");
            setStatusClass('text-danger');
        }
    };

    return (
        <div className="container">
            <div className="login-container">
                <div className="slogan">
                    Welcome to E-Kart - Shop the Smart Way!
                </div>

                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" required />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>

                <p id="statusMessage" className={`mt-3 text-center ${statusClass}`}>{statusMessage}</p>

                <div className="mt-3 text-center">
                    <p>
                        <Link to="/signup" className="btn btn-secondary">Create an account</Link>
                        {showPopup && (
                            <span className="popup-message" id="popup">New user? Sign up today!</span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
