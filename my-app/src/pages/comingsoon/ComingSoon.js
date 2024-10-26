import React, { useEffect } from 'react';
import './ComingSoon.css'; // Import the CSS file

const ComingSoon = () => {
  useEffect(() => {
    // Add class to body when component mounts
    document.body.classList.add('coming-soon-body');

    // Remove class from body when component unmounts
    return () => {
      document.body.classList.remove('coming-soon-body');
    };
  }, []);
  return (
    <div className="comingsoon container">
      <h1 className="title">Coming Soon</h1>
      <p className="description">We're working hard to bring you something awesome. Stay tuned!</p>
      <form className="subscribe-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default ComingSoon;
