import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/EmployerDashboard.css';
import '../styles/JobList.css';

function EmployerDashboard() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const res = await API.get('/jobs/my');
      setJobs(res.data);
    } catch {
      alert('⚠️ Could not load your jobs.');
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await API.delete(`/jobs/${id}`);
        fetchJobs(); // Refresh list
      } catch {
        alert('⚠️ Failed to delete.');
      }
    }
  };

  const handleEdit = (job) => {
    navigate('/employer/create', { state: { job } });
  };

  return (
    <div className="job-list-container">
      <h2>Welcome, Employer!</h2>
      <Link to="/employer/create" className="post-btn">+ Post New Job</Link>
      <h3>Your Posted Jobs</h3>
      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        <div className="job-list-grid">
          {jobs.map(job => (
            <div className="job-card" key={job.id}>
              <h4>{job.title}</h4>
              <p>{job.location}</p>
              <p>{job.description}</p>
              <div className="job-actions">
                <button onClick={() => handleEdit(job)}>✏️ Edit</button>
                <button onClick={() => handleDelete(job.id)}>🗑️ Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmployerDashboard;
