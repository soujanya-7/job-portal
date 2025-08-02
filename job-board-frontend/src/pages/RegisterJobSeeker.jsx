import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

function RegisterJobSeeker() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post('/auth/register', {
        ...form,
        role: 'JOB_SEEKER'
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', 'JOB_SEEKER');
      navigate('/seeker');
    } catch (err) {
      alert('❌ Registration failed. Check backend & CORS.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Register as Job Seeker</h2>

        <input
          className="auth-input"
          type="text"
          placeholder="Username"
          required
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="auth-button" type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterJobSeeker;
