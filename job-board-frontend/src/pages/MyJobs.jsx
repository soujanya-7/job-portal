import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import '../styles/MyJobs.css';

function MyJobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get('/jobs/my');
      setJobs(res.data);
    } catch (err) {
      console.error('⚠️ Failed to fetch your jobs:', err);
      alert('⚠️ Could not load jobs. Are you logged in as EMPLOYER?');
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this job?');
    if (!confirm) return;

    try {
      await API.delete(`/jobs/${id}`);
      alert('✅ Job deleted successfully!');
      fetchJobs(); // refresh
    } catch (err) {
      console.error('❌ Failed to delete job:', err);
      alert('❌ Could not delete job.');
    }
  };

  const handleEdit = (id) => {
    navigate(`/employer/edit/${id}`);
  };

  return (
    <div className="job-list-container">
      <h2>Your Posted Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.employmentType}</p>
            <p>{job.description}</p>

            <div className="job-actions">
              <button className="edit-btn" onClick={() => handleEdit(job.id)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(job.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyJobs;
