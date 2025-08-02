import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/JobBoardLanding.css';

function JobBoardLanding() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="landing-wrapper">
      {/* Hero Section */}
      <section className="hero" id="home" data-aos="fade-up">
        <nav className="navbar">
          <div className="logo">JobBoard</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#pricing">Pricing</a>
            <a href="#features">Features</a>
          </div>
          <div className="nav-actions">
            <Link to="/register" className="btn-purple">Register</Link>
            <Link to="/login" className="btn-outline">Get A Quote</Link>
          </div>
        </nav>

        <div className="hero-content" data-aos="zoom-in">
          <h1 className="gradient-text">
            One Step Closer To <br />
            <span>Your Dream Job</span>
          </h1>
          <p className="hero-sub">Let us help you find a job that suits you the best!</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn-purple large">Get Started</Link>
            <button className="btn-outline large icon-btn" onClick={() => alert('Playing story...')}>
              <span className="icon">▶</span> Our Story
            </button>
          </div>
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="300">
            
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="job-listing" id="features" data-aos="fade-up">
        <h2>Newest <span>Jobs</span> For You</h2>
        <p>Get the fastest application so that your name is above other applications</p>

        <div className="job-filters" data-aos="fade-up" data-aos-delay="200">
          <button className="active">All Recent</button>
          <button>Finance</button>
          <button>Development</button>
          <button>Marketing</button>
          <button>Specialist</button>
        </div>

        <div className="job-cards">
          {[...Array(6)].map((_, i) => (
            <div className="job-card" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="tags">
                <span>Fulltime</span>
                <span>Onsite</span>
                <span>$200K</span>
              </div>
              <h4>UX Designer</h4>
              <p>Advait Digital Agency</p>
              <button className="btn-purple">Apply</button>
              <p className="applied">👥 24 Applied</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories" id="pricing" data-aos="fade-up">
        <h2>Explore By <span>Categories</span></h2>
        <p>Find roles across various job types</p>

        <div className="popular-categories">
          <ul data-aos="fade-right">
            <li>System Analyst <span>6</span></li>
            <li>Frontend Developer <span>12</span></li>
            <li>Backend Developer <span>14</span></li>
            <li>Full Stack Developer <span>8</span></li>
          </ul>
          <div className="category-boxes" data-aos="fade-left">
            <button>Arts Media</button>
            <button>HR</button>
            <button className="highlighted">Business Dev</button>
            <button>Finance</button>
          </div>
        </div>

        <button className="btn-purple get-started">Get Started</button>
      </section>

      {/* Global Community Section */}
      <section className="community" id="about" data-aos="fade-up">
        <div>
          <h2>So Many People Are <span>Engaged</span><br /> All Over The World</h2>
          <p>We help connect talent globally across industries.</p>
          <Link to="/employer/create" className="btn-purple">Post A Job</Link>
        </div>
        <div className="orbit-users">
          {/* Orbit-style avatars coming soon */}
        </div>
      </section>

      {/* Footer */}
      <footer data-aos="fade-up">
        <h3>JobBoard™</h3>
        <div className="socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>Copyright © 2025 JobBoard</p>
      </footer>
    </div>
  );
}

export default JobBoardLanding;
