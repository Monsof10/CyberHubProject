import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import HeaderOne from '../../components/Header/HeaderOne';
import FooterOne from '../../components/Footer/FooterOne';

const ProgramSecurity = () => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: "Introduction to Program Security",
      description: "Welcome to the Program Security Career Path!",
      units: [
        "Understanding Program Security",
        "Security Development Lifecycle",
        "Setting Up Secure Development Environment"
      ],
      projects: [
        "Security Development Environment Setup",
        "Basic Code Review",
        "Security Requirements Analysis"
      ],
      exercises: [
        "Code Analysis Basics",
        "Security Testing",
        "Vulnerability Identification"
      ],
      quizzes: [
        "Program Security Fundamentals",
        "Development Lifecycle",
        "Security Testing Basics"
      ]
    },
    {
      id: 2,
      title: "Secure Coding Practices",
      description: "Learn essential secure coding principles and practices.",
      units: [
        "Input Validation",
        "Output Encoding",
        "Authentication & Authorization"
      ],
      projects: [
        "Input Validation Implementation",
        "Authentication System",
        "Access Control System"
      ],
      exercises: [
        "Data Sanitization",
        "Session Management",
        "Error Handling"
      ],
      quizzes: [
        "Secure Coding Principles",
        "Authentication Methods",
        "Authorization Concepts"
      ]
    },
    {
      id: 3,
      title: "Code Analysis & Review",
      description: "Master techniques for analyzing and reviewing code for security issues.",
      units: [
        "Static Analysis",
        "Dynamic Analysis",
        "Code Review Methodologies"
      ],
      projects: [
        "Static Analysis Tool Setup",
        "Dynamic Testing Environment",
        "Code Review Report"
      ],
      exercises: [
        "Tool-based Analysis",
        "Manual Code Review",
        "Vulnerability Reporting"
      ],
      quizzes: [
        "Analysis Techniques",
        "Tool Usage",
        "Review Processes"
      ]
    },
    {
      id: 4,
      title: "Security Testing",
      description: "Learn comprehensive security testing methodologies.",
      units: [
        "Unit Testing",
        "Integration Testing",
        "Security Test Planning"
      ],
      projects: [
        "Test Suite Development",
        "Integration Test Cases",
        "Security Test Plan"
      ],
      exercises: [
        "Test Case Writing",
        "Security Testing Tools",
        "Results Analysis"
      ],
      quizzes: [
        "Testing Methodologies",
        "Tool Selection",
        "Results Interpretation"
      ]
    },
    {
      id: 5,
      title: "Secure Development Lifecycle",
      description: "Implement security throughout the development lifecycle.",
      units: [
        "Requirements Analysis",
        "Design Review",
        "Implementation Security"
      ],
      projects: [
        "Security Requirements Doc",
        "Secure Design Review",
        "Implementation Analysis"
      ],
      exercises: [
        "Threat Modeling",
        "Security Architecture",
        "Risk Assessment"
      ],
      quizzes: [
        "SDL Fundamentals",
        "Design Principles",
        "Implementation Best Practices"
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
              <h1 className="display-4 mb-4">Program Security</h1>
              <p className="lead mb-4">
                Program security engineers ensure applications are designed, developed, and maintained 
                with security in mind from the ground up.
              </p>
              <p className="mb-4">
                Includes Secure Coding Practices, Code Analysis, Security Testing, Vulnerability Management, 
                and Security Architecture.
              </p>
              <button className="btn btn-warning btn-lg px-4">Start</button>
              <div className="d-flex align-items-center mt-4">
                <img src="/assets/imgs/icon/user-three-red.svg" alt="users" className="me-2" />
                <span>98,320 learners enrolled</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title mb-4">This career path includes</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-robot me-2"></i>
                      AI assistance for guided coding help
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
                <h5 className="mb-0">140 hours</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <h6 className="text-muted">Projects</h6>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-tasks me-2"></i>
                <h5 className="mb-0">92</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <h6 className="text-muted">Prerequisites</h6>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-list-check me-2"></i>
                <h5 className="mb-0">Basic Programming</h5>
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
            Program security engineers are essential in today's digital world, ensuring that applications 
            are built securely from the ground up. This Career Path will teach you the fundamental concepts 
            and practical skills needed to develop secure applications.
          </p>
          <div className="salary-info card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <i className="fas fa-money-bill-wave fa-2x me-3"></i>
                <div>
                  <h6 className="text-muted mb-1">Average Salary (US)</h6>
                  <h3 className="mb-0">$125,000</h3>
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

export default ProgramSecurity;
