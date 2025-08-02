// src/pages/MyApplications.jsx
import React, { useEffect, useState } from 'react';
import API from '../services/api';
import '../styles/MyApplications.css';

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    API.get('/jobs/applied')
      .then(res => setApplications(res.data))
      .catch(() => alert('⚠️ Could not fetch your applications.'));
  }, []);

  return (
    <div className="my-applications">
      <h2>My Applied Jobs</h2>
      {applications.length === 0 ? (
        <p>You haven't applied to any jobs yet.</p>
      ) : (
        applications.map(job => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyApplications;
