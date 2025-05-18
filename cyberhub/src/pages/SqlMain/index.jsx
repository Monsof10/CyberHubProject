import React from 'react';
import Layout from '../../components/Layout/Layout';
import HeaderOne from '../../components/Header/HeaderOne';
import FooterOne from '../../components/Footer/FooterOne';
import { Link } from 'react-router-dom';

const SqlMain = () => {
  return (
    <Layout>
      <HeaderOne />
      {/* Hero Section */}
      <section className="hero-sql">
        <div className="container">
          <div className="hero-content">
            <h1>Build A Solid Background<br />And Prevent Yourself<br />From SQL Injection</h1>
            <p>Sometimes attackers don't want to access your data, they just want to manipulate it</p>
            <div className="hero-buttons">
              <Link to="/sql-injection/start" className="btn-get-started">Get Started</Link>
              <Link to="/sql-injection/about" className="btn-learn-more">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="shape-3"></div>
        </div>
      </section>

      {/* Course Cards Section */}
      <section className="sql-courses">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Course<br />Topics</h2>
            <p className="section-subtitle">Master SQL injection through our comprehensive curriculum</p>
          </div>
          <div className="course-grid">
            <div className="course-card">
              <div className="card-icon">🔰</div>
              <div className="card-content">
                <h3>Basic SQL Injection</h3>
                <p>Start with understanding the fundamentals of SQL Injection attacks</p>
                <ul className="card-features">
                  <li>Database Basics</li>
                  <li>Query Structure</li>
                  <li>Basic Exploits</li>
                </ul>
                <Link to="/sql-injection/basic" className="btn-get-started">Get Started →</Link>
              </div>
            </div>
            <div className="course-card">
              <div className="card-icon">⚡</div>
              <div className="card-content">
                <h3>Advanced SQL Injection</h3>
                <p>Learn advanced techniques and prevention methods for SQL Injection</p>
                <ul className="card-features">
                  <li>Union Attacks</li>
                  <li>Blind Injection</li>
                  <li>Advanced Techniques</li>
                </ul>
                <Link to="/sql-injection/advanced" className="btn-get-started">Get Started →</Link>
              </div>
            </div>
            <div className="course-card">
              <div className="card-icon">🛡️</div>
              <div className="card-content">
                <h3>Prevention & Security</h3>
                <p>Focus on assessing and preventing SQL Injection to safeguard your databases</p>
                <ul className="card-features">
                  <li>Security Best Practices</li>
                  <li>Input Validation</li>
                  <li>Secure Architecture</li>
                </ul>
                <Link to="/sql-injection/prevention" className="btn-get-started">Get Started →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What People Say<br />About Us</h2>
            <p className="section-subtitle">Hear from our community of cybersecurity learners</p>
          </div>
          <div className="testimonial-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">❝</div>
                <p>"Initially skeptical, but the strategies from my Cyberhub SQL injection course really work—I feel more secure than ever against database attacks"</p>
                <div className="author">
                  <div className="author-avatar">DB</div>
                  <div className="author-info">
                    <span className="name">David Bergstrom</span>
                    <span className="title">— Cyberhub Member, Austin</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-controls">
              <button className="prev">←</button>
              <button className="next">→</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="why-learn">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Learn About SQL<br />Injection Attacks?</h2>
            <p className="section-subtitle">Essential knowledge for modern cybersecurity</p>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <div className="icon-circle">🛡️</div>
              </div>
              <h3>Protection</h3>
              <p>Your organization must understand SQL injection attacks to strengthen its database security and maintain data integrity</p>
              <Link to="/sql-injection/protection" className="feature-link">Learn More →</Link>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <div className="icon-circle">⚡</div>
              </div>
              <h3>Prevention</h3>
              <p>Your organization must implement proactive security measures to detect, mitigate, and prevent SQL injection effectively</p>
              <Link to="/sql-injection/prevention" className="feature-link">Learn More →</Link>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <div className="icon-circle">🔄</div>
              </div>
              <h3>Response</h3>
              <p>Your organization must develop a robust incident response plan to minimize downtime and secure databases against attacks</p>
              <Link to="/sql-injection/response" className="feature-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe">
        <div className="container">
          <div className="subscribe-content">
            <div className="subscribe-text">
              <h2>Subscribe For<br />Exclusive Offers,</h2>
              <p className="highlight">Giveaways</p>
              <p>& More</p>
            </div>
            <form className="subscribe-form">
              <div className="form-group">
                <input type="text" placeholder="Full Name" className="input-field" />
                <div className="input-icon">👤</div>
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" className="input-field" />
                <div className="input-icon">✉️</div>
              </div>
              <button type="submit" className="btn-join">
                <span>Join Now</span>
                <span className="arrow">→</span>
              </button>
            </form>
            <div className="subscribe-shapes">
              <div className="shape-1"></div>
              <div className="shape-2"></div>
            </div>
          </div>
        </div>
      </section>

      <FooterOne />
    </Layout>
  );
};

export default SqlMain;
