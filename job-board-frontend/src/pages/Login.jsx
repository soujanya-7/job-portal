// src/pages/Login.jsx
import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/employer'); // Modify as needed
    } catch (err) {
      alert('Login failed. Check credentials.');
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Login to Your Account</h2>

        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="auth-button" type="submit">Login</button>

        <p className="auth-footer">
          New user? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
