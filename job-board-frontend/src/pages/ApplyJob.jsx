// src/pages/ApplyJob.jsx
import React, { useEffect, useState } from 'react';
import API from '../services/api';
import '../styles/JobList.css'; // Make sure this file exists

function ApplyJob() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get('/jobs'); // Ensure this route exists in backend
        setJobs(res.data);
      } catch (err) {
        console.error('⚠️ Failed to load jobs:', err);
        alert('⚠️ Could not load job listings. Check backend or login status.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = async (jobId) => {
    try {
      await API.post(`/jobs/${jobId}/apply`);
      alert('✅ Successfully applied!');
    } catch (err) {
      console.error('❌ Failed to apply:', err);
      alert('❌ Application failed. Are you logged in as a JOB_SEEKER?');
    }
  };

  return (
    <div className="job-list-container">
      <h2>Available Jobs</h2>

      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.employmentType}</p>
            <p>{job.description}</p>
            <button onClick={() => handleApply(job.id)}>Apply</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ApplyJob;
