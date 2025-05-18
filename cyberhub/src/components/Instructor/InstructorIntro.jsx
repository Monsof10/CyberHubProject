import React from "react";

export default function InstructorIntro() {
  return (
    <section className="instructor-intro section-padding" style={{backgroundColor: "#1a1a1a", color: "#f0f0f0"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="section-title" style={{color: "#f0f0f0"}}>About Our Instructors</h2>
            <p className="section-text" style={{color: "#ccc"}}>
              We are proud graduates of Ostim Technical University, bringing expertise and passion to the fields of Cyber Security and Artificial Intelligence.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="feature-card" style={{backgroundColor: "#2c2c2c", padding: "20px", borderRadius: "8px"}}>
              <h3 style={{color: "#f0f0f0"}}>Our Mission</h3>
              <p style={{color: "#ccc"}}>
                Our mission is to empower the next generation of cybersecurity and AI professionals. As graduates of Ostim Technical University, we bring real-world experience and academic excellence to our teaching, ensuring our students receive cutting-edge education in these rapidly evolving fields.
              </p>
            </div>
          </div>
          
          <div className="col-lg-4 mb-4">
            <div className="feature-card" style={{backgroundColor: "#2c2c2c", padding: "20px", borderRadius: "8px"}}>
              <h3 style={{color: "#f0f0f0"}}>Infrastructure</h3>
              <p style={{color: "#ccc"}}>We provide a comprehensive learning environment with:</p>
              <ul style={{color: "#ccc"}}>
                <li>Advanced cybersecurity labs</li>
                <li>AI and machine learning platforms</li>
                <li>Real-world simulation environments</li>
                <li>Industry-standard tools and software</li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4 mb-4">
            <div className="feature-card" style={{backgroundColor: "#2c2c2c", padding: "20px", borderRadius: "8px"}}>
              <h3 style={{color: "#f0f0f0"}}>Staff and Professors</h3>
              <p style={{color: "#ccc"}}>Our team consists of passionate educators and industry professionals who are:</p>
              <ul style={{color: "#ccc"}}>
                <li>Ostim Technical University graduates</li>
                <li>Certified cybersecurity experts</li>
                <li>AI and machine learning specialists</li>
                <li>Active industry practitioners</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
