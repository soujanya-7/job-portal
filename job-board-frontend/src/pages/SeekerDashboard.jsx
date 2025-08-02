// src/pages/SeekerDashboard.jsx
import React, { useEffect, useState } from 'react';
import API from '../services/api';
import '../styles/SeekerDashboard.css';

function SeekerDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get('/jobs')
      .then(res => setJobs(res.data))
      .catch(() => alert('⚠️ Could not load jobs.'));
  }, []);

  const handleApply = async (jobId) => {
    try {
      await API.post(`/jobs/${jobId}/apply`);
      alert('✅ Applied successfully!');
    } catch (err) {
      alert('❌ Failed to apply.');
    }
  };

  return (
    <div className="seeker-dashboard">
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div className="job-card" key={job.id}>
          <h3>{job.title} @ {job.company}</h3>
          <p>{job.location}</p>
          <p>{job.description}</p>
          <button onClick={() => handleApply(job.id)}>Apply</button>
        </div>
      ))}
    </div>
  );
}

export default SeekerDashboard;
