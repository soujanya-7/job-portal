import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import JobBoardLanding from './pages/JobBoardLanding';
import Login from './pages/Login';
import ChooseRole from './pages/ChooseRole'; // 🔄 New role selector
import RegisterEmployer from './pages/RegisterEmployer'; // 🔄 New
import RegisterJobSeeker from './pages/RegisterJobSeeker'; // 🔄 New

import EmployerDashboard from './pages/EmployerDashboard';
import CreateJob from './pages/CreateJob';
import MyJobs from './pages/MyJobs';
import EditJob from './pages/EditJob';
import ApplyJob from './pages/ApplyJob';

import './App.css';

// ✅ Inner wrapper to conditionally show Navbar
function AppContent() {
  const location = useLocation();

  // Hide navbar on login and all register pages
  const hideNavbarRoutes = [
    '/', 
    '/login', 
    '/register', 
    '/register/employer', 
    '/register/jobseeker'
  ];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        {/* Public */}
        <Route path="/" element={<JobBoardLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<ChooseRole />} />
        <Route path="/register/employer" element={<RegisterEmployer />} />
        <Route path="/register/jobseeker" element={<RegisterJobSeeker />} />

        {/* Employer Routes */}
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/employer/create" element={<CreateJob />} />
        <Route path="/employer/my-jobs" element={<MyJobs />} />
        <Route path="/employer/edit/:id" element={<EditJob />} />

        {/* Job Seeker */}
        <Route path="/seeker" element={<ApplyJob />} />
      </Routes>
    </>
  );
}

// ✅ Root wrapper
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
