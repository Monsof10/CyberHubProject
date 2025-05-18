import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import HeaderOne from '../../components/Header/HeaderOne';
import FooterOne from '../../components/Footer/FooterOne';

const SystemSecurity = () => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: "Introduction to System Security",
      description: "Welcome to the System Security Career Path!",
      units: [
        "System Security Fundamentals",
        "Security Architecture Overview",
        "Risk Assessment Basics"
      ],
      projects: [
        "Security Environment Setup",
        "System Analysis",
        "Risk Assessment Report"
      ],
      exercises: [
        "System Hardening",
        "Security Baseline",
        "Vulnerability Assessment"
      ],
      quizzes: [
        "Security Fundamentals",
        "Architecture Concepts",
        "Risk Management"
      ]
    },
    {
      id: 2,
      title: "Operating System Security",
      description: "Learn to secure different operating systems and their components.",
      units: [
        "Windows Security",
        "Linux Security",
        "OS Hardening"
      ],
      projects: [
        "Windows Hardening",
        "Linux Server Security",
        "OS Security Audit"
      ],
      exercises: [
        "Security Configuration",
        "Patch Management",
        "Service Hardening"
      ],
      quizzes: [
        "OS Security Concepts",
        "Hardening Techniques",
        "Security Best Practices"
      ]
    },
    {
      id: 3,
      title: "Network Infrastructure Security",
      description: "Master the techniques for securing network infrastructure.",
      units: [
        "Network Security Fundamentals",
        "Firewall Configuration",
        "IDS/IPS Implementation"
      ],
      projects: [
        "Network Security Setup",
        "Firewall Deployment",
        "Security Monitoring"
      ],
      exercises: [
        "Network Analysis",
        "Security Rules Creation",
        "Traffic Monitoring"
      ],
      quizzes: [
        "Network Concepts",
        "Security Controls",
        "Monitoring Techniques"
      ]
    },
    {
      id: 4,
      title: "Access Control and Authentication",
      description: "Learn about implementing robust access control mechanisms.",
      units: [
        "Access Control Models",
        "Authentication Methods",
        "Identity Management"
      ],
      projects: [
        "IAM Implementation",
        "SSO Setup",
        "Access Audit System"
      ],
      exercises: [
        "Permission Setup",
        "User Management",
        "Access Review"
      ],
      quizzes: [
        "Access Control",
        "Authentication",
        "Identity Management"
      ]
    },
    {
      id: 5,
      title: "Security Monitoring and Response",
      description: "Discover how to monitor systems and respond to security incidents.",
      units: [
        "Security Monitoring",
        "Incident Response",
        "System Recovery"
      ],
      projects: [
        "SIEM Setup",
        "IR Plan Development",
        "Recovery Testing"
      ],
      exercises: [
        "Alert Configuration",
        "Incident Handling",
        "Recovery Procedures"
      ],
      quizzes: [
        "Monitoring Systems",
        "Incident Response",
        "Disaster Recovery"
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
              <h1 className="display-4 mb-4">System Security</h1>
              <p className="lead mb-4">
                System security specialists protect organizational infrastructure by implementing and 
                maintaining security controls across operating systems and networks.
              </p>
              <p className="mb-4">
                Includes System Hardening, Access Control, Security Monitoring, Incident Response, 
                and Infrastructure Security.
              </p>
              <button className="btn btn-warning btn-lg px-4">Start</button>
              <div className="d-flex align-items-center mt-4">
                <img src="/assets/imgs/icon/user-three-red.svg" alt="users" className="me-2" />
                <span>78,450 learners enrolled</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title mb-4">This career path includes</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-robot me-2"></i>
                      AI assistance for guided system configuration
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
                <h5 className="mb-0">Intermediate</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <h6 className="text-muted">Time to complete</h6>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-clock me-2"></i>
                <h5 className="mb-0">160 hours</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <h6 className="text-muted">Projects</h6>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-tasks me-2"></i>
                <h5 className="mb-0">88</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <h6 className="text-muted">Prerequisites</h6>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-list-check me-2"></i>
                <h5 className="mb-0">Basic IT Knowledge</h5>
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
            System security specialists are the guardians of organizational infrastructure, ensuring that 
            systems remain secure and operational. This Career Path will teach you the essential skills 
            needed to protect and maintain secure systems.
          </p>
          <div className="salary-info card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <i className="fas fa-money-bill-wave fa-2x me-3"></i>
                <div>
                  <h6 className="text-muted mb-1">Average Salary (US)</h6>
                  <h3 className="mb-0">$110,000</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="syllabus py-5 bg-light">
        <div className="container">
          <div className="syllabus-header mb-4">
            <h2>Syllabus</h2>
            <p>45 units • 168 lessons • 88 projects • 140 quizzes</p>
          </div>
          <div className="syllabus-content">
            {modules.map((module) => (
              <div 
                key={module.id} 
                className="unit mb-4"
                onClick={() => toggleModule(module.id)}
              >
                <h5>
                  <span className="unit-number me-3">{module.id}</span>
                  {module.title}
                </h5>
                <p>{module.description}</p>
                <div className={`unit-details ${activeModule === module.id ? 'active' : ''}`}>
                  <div className="detail-section">
                    <h6>Units</h6>
                    <ul>
                      {module.units.map((unit, index) => (
                        <li key={index}>{unit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="detail-section">
                    <h6>Projects</h6>
                    <ul>
                      {module.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="detail-section">
                    <h6>Exercises</h6>
                    <ul>
                      {module.exercises.map((exercise, index) => (
                        <li key={index}>{exercise}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="detail-section">
                    <h6>Quizzes</h6>
                    <ul>
                      {module.quizzes.map((quiz, index) => (
                        <li key={index}>{quiz}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterOne />
    </Layout>
  );
};

export default SystemSecurity;
