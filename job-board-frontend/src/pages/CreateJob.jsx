import React, { useState, useEffect } from 'react';
import API from '../services/api';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/CreateJob.css'; // ✅ THE CORRECT FILE FOR THIS PAGE



function CreateJob() {
  const navigate = useNavigate();
  const location = useLocation();
  const editingJob = location.state?.job;

  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    employmentType: 'Full-Time',
  });

  useEffect(() => {
    if (editingJob) setForm(editingJob);
  }, [editingJob]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingJob) {
        await API.put(`/jobs/${editingJob.id}`, form);
        alert('✅ Job updated!');
      } else {
        await API.post('/jobs', form);
        alert('✅ Job posted!');
      }
      navigate('/employer');
    } catch (err) {
      console.error('❌ Error:', err);
      alert('⚠️ Failed. Are you logged in as EMPLOYER?');
    }
  };

  return (
    <div className="job-post-container">
      <form className="job-form-box" onSubmit={handleSubmit}>
        <h2>{editingJob ? 'Update Job' : 'Post a New Job'}</h2>
        <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <input placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
        <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
        <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
        <select value={form.employmentType} onChange={(e) => setForm({ ...form, employmentType: e.target.value })}>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
        <button type="submit">{editingJob ? 'Update Job' : 'Post Job'}</button>
      </form>
    </div>
  );
}

export default CreateJob;
