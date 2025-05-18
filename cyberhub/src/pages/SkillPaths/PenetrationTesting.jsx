import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import HeaderOne from '../../components/Header/HeaderOne';
import FooterOne from '../../components/Footer/FooterOne';

const PenetrationTesting = () => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: "Introduction to Penetration Testing",
      description: "Welcome to the Penetration Testing Career Path!",
      units: [
        "Understanding Penetration Testing",
        "Ethics and Legal Considerations",
        "Setting Up Your Testing Environment"
      ],
      projects: [
        "Create a Testing Lab",
        "Document Testing Scope",
        "Basic Reconnaissance Exercise"
      ],
      exercises: [
        "Network Scanning Basics",
        "Information Gathering",
        "Vulnerability Assessment"
      ],
      quizzes: [
        "Penetration Testing Fundamentals",
        "Legal and Ethical Guidelines",
        "Testing Methodology"
      ]
    },
    {
      id: 2,
      title: "Network Fundamentals",
      description: "Learn the core networking concepts essential for penetration testing.",
      units: [
        "TCP/IP Protocol Suite",
        "Network Architecture",
        "Common Network Services"
      ],
      projects: [
        "Network Mapping Project",
        "Service Enumeration",
        "Network Traffic Analysis"
      ],
      exercises: [
        "Wireshark Packet Analysis",
        "Port Scanning Techniques",
        "Network Service Configuration"
      ],
      quizzes: [
        "Networking Basics",
        "Protocol Understanding",
        "Network Security"
      ]
    },
    {
      id: 3,
      title: "Information Gathering",
      description: "Master the techniques for gathering intelligence about target systems.",
      units: [
        "OSINT Techniques",
        "Active vs Passive Reconnaissance",
        "Social Engineering Basics"
      ],
      projects: [
        "OSINT Investigation",
        "Target Profiling",
        "Information Collection Report"
      ],
      exercises: [
        "DNS Enumeration",
        "Web Application Fingerprinting",
        "Social Media Analysis"
      ],
      quizzes: [
        "OSINT Tools and Techniques",
        "Reconnaissance Methods",
        "Information Analysis"
      ]
    },
    {
      id: 4,
      title: "Vulnerability Assessment",
      description: "Learn to identify and analyze security vulnerabilities in systems.",
      units: [
        "Vulnerability Types",
        "Assessment Tools",
        "Risk Analysis"
      ],
      projects: [
        "Vulnerability Scanner Setup",
        "Assessment Report Creation",
        "Risk Mitigation Planning"
      ],
      exercises: [
        "Manual Testing",
        "Automated Scanning",
        "Result Analysis"
      ],
      quizzes: [
        "Vulnerability Categories",
        "Assessment Tools",
        "Risk Evaluation"
      ]
    },
    {
      id: 5,
      title: "Web Application Testing",
      description: "Discover how to test web applications for security vulnerabilities.",
      units: [
        "Web Technologies Overview",
        "Common Vulnerabilities",
        "Testing Methodologies"
      ],
      projects: [
        "Web App Security Assessment",
        "Vulnerability Exploitation",
        "Security Report Writing"
      ],
      exercises: [
        "SQL Injection Testing",
        "XSS Attack Simulation",
        "CSRF Testing"
      ],
      quizzes: [
        "Web Security Basics",
        "Attack Vectors",
        "Defense Mechanisms"
      ]
    }
  ];

  const toggleModule = (moduleId) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };

  return (
    <Layout>
      <HeaderOne />
      
      {/* Career Path Section */}
      <section className="career-path bg-navy-blue text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h6 className="text-white-50">Career Path</h6>
              <h1 className="display-4 mb-4">Penetration Testing</h1>
              <p className="lead mb-4">
                Penetration testers identify and exploit security vulnerabilities in web-based applications, 
                networks, and systems to help organizations improve their security posture.
              </p>
              <p className="mb-4">
                Includes Network Security, Web Application Testing, Social Engineering, Vulnerability Assessment, 
                and Report Writing.
              </p>
              <button className="btn btn-warning btn-lg px-4">Start</button>
              <div className="d-flex align-items-center mt-4">
                <img src="/assets/imgs/icon/user-three-red.svg" alt="users" className="me-2" />
                <span>152,140 learners enrolled</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title mb-4">This career path includes</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-robot me-2"></i>
                      AI assistance for guided testing help
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-project-diagram me-2"></i>
                      Projects to apply new skills
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-tasks me-2"></i>
                      Quizzes to test your knowledge
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-certificate me-2"></i>
                      A professional certification
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="course-details py-5 bg-light">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3 text-center">
              <h6 className="text-muted">Skill level</h6>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-chart-line me-2"></i>
                <h5 className="mb-0">Beginner</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <h6 className="text-muted">Time to complete</h6>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-clock me-2"></i>
                <h5 className="mb-0">120 hours</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <h6 className="text-muted">Projects</h6>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-tasks me-2"></i>
                <h5 className="mb-0">85</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <h6 className="text-muted">Prerequisites</h6>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-list-check me-2"></i>
                <h5 className="mb-0">None</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-path py-5">
        <div className="container">
          <h2 className="mb-4">About this career path</h2>
          <p className="lead mb-4">
            Penetration testers play a crucial role in identifying and helping fix security vulnerabilities 
            before malicious hackers can exploit them. This Career Path will teach you the skills needed to 
            become a professional penetration tester.
          </p>
          <div className="salary-info card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <i className="fas fa-money-bill-wave fa-2x me-3"></i>
                <div>
                  <h6 className="text-muted mb-1">Average Salary (US)</h6>
                  <h3 className="mb-0">$116,000</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="syllabus py-5 bg-light">
        <div className="container">
          <div className="syllabus-header text-center mb-5">
            <h2 className="text-dark">Syllabus</h2>
          </div>
          <div className="syllabus-content">
            {modules.map((module) => (
              <div 
                key={module.id} 
                className="unit mb-4 p-4 bg-white rounded shadow-sm"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleModule(module.id)}
              >
                <div className="d-flex align-items-center mb-3">
                  <span className="unit-number me-3">{module.id}</span>
                  <h5 className="mb-0 text-dark">{module.title}</h5>
                </div>
                <p className="text-dark mb-0">{module.description}</p>
                
                {activeModule === module.id && (
                  <div className="unit-details mt-4">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <h6 className="text-dark mb-3">Units</h6>
                        <div className="list-group">
                          {module.units.map((unit, index) => (
                            <div key={index} className="list-group-item border-0 text-dark">
                              {unit}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="text-dark mb-3">Projects</h6>
                        <div className="list-group">
                          {module.projects.map((project, index) => (
                            <div key={index} className="list-group-item border-0 text-dark">
                              {project}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="text-dark mb-3">Exercises</h6>
                        <div className="list-group">
                          {module.exercises.map((exercise, index) => (
                            <div key={index} className="list-group-item border-0 text-dark">
                              {exercise}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h6 className="text-dark mb-3">Quizzes</h6>
                        <div className="list-group">
                          {module.quizzes.map((quiz, index) => (
                            <div key={index} className="list-group-item border-0 text-dark">
                              {quiz}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterOne />
    </Layout>
  );
};

export default PenetrationTesting;
