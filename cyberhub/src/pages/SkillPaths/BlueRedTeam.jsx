import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import HeaderOne from '../../components/Header/HeaderOne';
import FooterOne from '../../components/Footer/FooterOne';

const BlueRedTeam = () => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: "Introduction to Blue/Red Team Operations",
      description: "Welcome to the Blue/Red Team Career Path!",
      units: [
        "Overview of Blue and Red Teams",
        "Security Operations Center (SOC)",
        "Incident Response Basics"
      ],
      projects: [
        "SOC Setup",
        "Incident Response Plan",
        "Security Monitoring"
      ],
      exercises: [
        "Log Analysis",
        "Alert Triage",
        "Incident Handling"
      ],
      quizzes: [
        "Blue Team Fundamentals",
        "Red Team Basics",
        "SOC Operations"
      ]
    },
    {
      id: 2,
      title: "Blue Team Fundamentals",
      description: "Learn defensive security operations and strategies.",
      units: [
        "Network Defense",
        "Endpoint Security",
        "Threat Intelligence"
      ],
      projects: [
        "Firewall Configuration",
        "Endpoint Protection Setup",
        "Threat Intelligence Report"
      ],
      exercises: [
        "Network Monitoring",
        "Malware Analysis",
        "Threat Hunting"
      ],
      quizzes: [
        "Defense Techniques",
        "Security Tools",
        "Threat Intelligence"
      ]
    },
    {
      id: 3,
      title: "Red Team Operations",
      description: "Master offensive security techniques and methodologies.",
      units: [
        "Penetration Testing",
        "Social Engineering",
        "Attack Simulation"
      ],
      projects: [
        "Penetration Test Engagement",
        "Phishing Campaign",
        "Red Team Report"
      ],
      exercises: [
        "Vulnerability Scanning",
        "Exploit Development",
        "Social Engineering Exercises"
      ],
      quizzes: [
        "Offensive Techniques",
        "Exploitation Tools",
        "Attack Methodologies"
      ]
    },
    {
      id: 4,
      title: "Threat Hunting and Analysis",
      description: "Learn to identify and analyze security threats.",
      units: [
        "Threat Hunting Techniques",
        "Data Analysis",
        "Behavioral Analytics"
      ],
      projects: [
        "Threat Hunting Campaign",
        "Anomaly Detection",
        "Hunting Report"
      ],
      exercises: [
        "Log Analysis",
        "Network Traffic Analysis",
        "Endpoint Data Analysis"
      ],
      quizzes: [
        "Hunting Techniques",
        "Data Analytics",
        "Threat Detection"
      ]
    },
    {
      id: 5,
      title: "Advanced Security Operations",
      description: "Discover advanced techniques in security operations and management.",
      units: [
        "Security Automation",
        "Incident Management",
        "Security Orchestration"
      ],
      projects: [
        "Automation Scripts",
        "Incident Response Drill",
        "Orchestration Playbooks"
      ],
      exercises: [
        "Automation Tools",
        "Incident Simulation",
        "Playbook Development"
      ],
      quizzes: [
        "Automation Concepts",
        "Incident Handling",
        "Orchestration Tools"
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
              <h1 className="display-4 mb-4">Blue/Red Team</h1>
              <p className="lead mb-4">
                Blue/Red team professionals work on both defensive (Blue) and offensive (Red) security operations, 
                simulating attacks and strengthening defenses.
              </p>
              <p className="mb-4">
                Includes Threat Hunting, Attack Simulation, Defense Strategies, Incident Response, 
                and Security Operations.
              </p>
              <button className="btn btn-warning btn-lg px-4">Start</button>
              <div className="d-flex align-items-center mt-4">
                <img src="/assets/imgs/icon/user-three-red.svg" alt="users" className="me-2" />
                <span>62,890 learners enrolled</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title mb-4">This career path includes</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-robot me-2"></i>
                      AI assistance for attack/defense scenarios
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
                <h5 className="mb-0">Advanced</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <h6 className="text-muted">Time to complete</h6>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-clock me-2"></i>
                <h5 className="mb-0">200 hours</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <h6 className="text-muted">Projects</h6>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-tasks me-2"></i>
                <h5 className="mb-0">105</h5>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <h6 className="text-muted">Prerequisites</h6>
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-list-check me-2"></i>
                <h5 className="mb-0">Security Fundamentals</h5>
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
            Blue/Red team professionals are essential in modern cybersecurity, combining offensive and defensive 
            skills to create robust security programs. This Career Path will teach you both attack and defense 
            techniques used in real-world scenarios.
          </p>
          <div className="salary-info card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <i className="fas fa-money-bill-wave fa-2x me-3"></i>
                <div>
                  <h6 className="text-muted mb-1">Average Salary (US)</h6>
                  <h3 className="mb-0">$135,000</h3>
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

export default BlueRedTeam;
