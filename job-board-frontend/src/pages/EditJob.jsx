import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../services/api';
import '../styles/JobList.css';

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    employmentType: 'Full-Time',
  });


  useEffect(() => {
    async function fetchJob() {
      try {
        const res = await API.get(`/jobs/${id}`);
        setForm({
          title: res.data.title,
          company: res.data.company,
          location: res.data.location,
          description: res.data.description,
          employmentType: res.data.employmentType,
        });
      } catch (err) {
        alert('❌ Failed to load job for editing.');
        console.error(err);
      }
    }

    fetchJob();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/jobs/${id}`, form);
      alert('✅ Job updated successfully!');
      navigate('/employer/my-jobs');
    } catch (err) {
      console.error('❌ Error updating job:', err);
      alert('❌ Failed to update job.');
    }
  };

  return (
    <div className="job-post-container">
      <form className="job-form-box" onSubmit={handleSubmit}>
        <h2>Edit Job</h2>

        <input
          placeholder="Job Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          placeholder="Company Name"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          required
        />
        <input
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
        />
        <textarea
          placeholder="Job Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows={5}
          required
        />
        <select
          value={form.employmentType}
          onChange={(e) => setForm({ ...form, employmentType: e.target.value })}
        >
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>

        <button type="submit">Update Job</button>
      </form>
    </div>
  );
}

export default EditJob;
