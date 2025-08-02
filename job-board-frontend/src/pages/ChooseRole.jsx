import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ChooseRole.css'; // Custom CSS

function ChooseRole() {
  const navigate = useNavigate();

  return (
    <div className="choose-role-container">
      <div className="choose-role-card">
        <h2>Select Your Role</h2>
        <div className="role-buttons">
          <button className="role-btn employer" onClick={() => navigate('/register/employer')}>
            👔 Employer
          </button>
          <button className="role-btn seeker" onClick={() => navigate('/register/jobseeker')}>
            💼 Job Seeker
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChooseRole;
