// src/pages/JobList.jsx
import React, { useEffect, useState } from 'react';
import API from '../services/api';
import '../styles/JobList.css';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get('/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error("Error fetching jobs", err));
  }, []);

  return (
    <div className="job-list-container">
      <h2>Available Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        jobs.map(job => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.employmentType}</p>
            <p>{job.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default JobList;
