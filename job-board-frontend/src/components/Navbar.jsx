// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="main-navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">JobBoard</Link>
        <Link to="/employer/create">Post Job</Link>
        <Link to="/seeker">Jobs</Link>
      </div>
      <div className="nav-right">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
