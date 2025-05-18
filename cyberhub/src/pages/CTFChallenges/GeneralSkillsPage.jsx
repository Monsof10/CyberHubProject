import React, { useState } from 'react';
import AttackPagesHeader from '../../components/AttackPagesHeader/AttackPagesHeader';
import './styles.css';

const GeneralSkillsPage = () => {
  const [activeModule, setActiveModule] = useState(null);

  const challenges = [
    {
      id: 1,
      title: "Command Line Basics",
      description: "Learn essential command line skills for CTF challenges",
      difficulty: "Easy",
      points: "100",
      solves: "15,415",
      tasks: [
        "Basic File Operations",
        "Directory Navigation",
        "Text Processing",
        "File Permissions"
      ]
    },
    {
      id: 2,
      title: "Python Scripting",
      description: "Master Python scripting for automation and problem solving",
      difficulty: "Medium",
      points: "150",
      solves: "12,354",
      tasks: [
        "Basic Python Syntax",
        "File Handling",
        "Regular Expressions",
        "Network Programming"
      ]
    },
    {
      id: 3,
      title: "Binary Analysis",
      description: "Understanding binary files and basic reverse engineering",
      difficulty: "Hard",
      points: "200",
      solves: "8,233",
      tasks: [
        "File Format Analysis",
        "Hex Editing",
        "Basic Assembly",
        "Debugging Tools"
      ]
    },
    {
      id: 4,
      title: "Cryptography Basics",
      description: "Learn fundamental cryptographic concepts and tools",
      difficulty: "Medium",
      points: "150",
      solves: "10,916",
      tasks: [
        "Base64 Encoding",
        "Caesar Cipher",
        "Hash Functions",
        "XOR Operations"
      ]
    },
    {
      id: 5,
      title: "Network Analysis",
      description: "Network traffic analysis and protocol understanding",
      difficulty: "Medium",
      points: "175",
      solves: "9,958",
      tasks: [
        "Wireshark Basics",
        "TCP/IP Analysis",
        "HTTP Traffic",
        "Network Protocols"
      ]
    },
    {
      id: 6,
      title: "Linux Fundamentals",
      description: "Essential Linux skills for cybersecurity",
      difficulty: "Easy",
      points: "125",
      solves: "14,233",
      tasks: [
        "Basic Commands",
        "System Navigation",
        "File Permissions",
        "Process Management"
      ]
    },
    {
      id: 7,
      title: "Git Basics",
      description: "Version control and repository analysis",
      difficulty: "Easy",
      points: "100",
      solves: "11,547",
      tasks: [
        "Repository Cloning",
        "Commit History",
        "Branch Analysis",
        "Hidden Files"
      ]
    },
    {
      id: 8,
      title: "Data Encoding",
      description: "Various data encoding and decoding techniques",
      difficulty: "Medium",
      points: "150",
      solves: "8,892",
      tasks: [
        "ASCII Encoding",
        "Hex Encoding",
        "URL Encoding",
        "Binary Conversion"
      ]
    },
    {
      id: 9,
      title: "Web Basics",
      description: "Introduction to web technologies and protocols",
      difficulty: "Easy",
      points: "120",
      solves: "13,000",
      tasks: [
        "HTTP Protocol",
        "HTML Basics",
        "CSS Fundamentals",
        "JavaScript Basics"
      ]
    },
    {
      id: 10,
      title: "Scripting with Bash",
      description: "Automate tasks using Bash scripting",
      difficulty: "Medium",
      points: "140",
      solves: "9,500",
      tasks: [
        "Shell Scripting Basics",
        "Variables and Loops",
        "File Manipulation",
        "Process Automation"
      ]
    },
    {
      id: 11,
      title: "Basic Reverse Engineering",
      description: "Analyze simple binaries and understand assembly",
      difficulty: "Medium",
      points: "160",
      solves: "7,800",
      tasks: [
        "Assembly Basics",
        "Disassembly Tools",
        "Control Flow Analysis",
        "Function Identification"
      ]
    }
  ];

  const toggleModule = (moduleId) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };

  return (
    <div style={{ 
      backgroundColor: '#151B3B',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <AttackPagesHeader pageType="ctf-challenges" />
      
      {/* Career Path Section */}
      <section style={{ padding: '3rem 0', backgroundColor: '#1a2147' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 60%' }}>
              <h6 style={{ color: '#a0aec0', marginBottom: '1rem' }}>CTF Challenge Track</h6>
              <h1 style={{ 
                fontSize: '2.5rem',
                color: '#5DADE2',
                marginBottom: '1.5rem'
              }}>General Skills</h1>
              <p style={{ 
                fontSize: '1.25rem',
                color: '#e2e8f0',
                marginBottom: '1.5rem'
              }}>
                Master the fundamental skills required for CTF challenges. Learn command line basics,
                scripting, and essential tools used in cybersecurity.
              </p>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                marginTop: '2rem',
                color: '#a0aec0'
              }}>
                <span style={{ marginRight: '2rem' }}>
                  <i className="fas fa-users"></i> 25,140 participants
                </span>
                <span>
                  <i className="fas fa-trophy"></i> 1,250 completions
                </span>
              </div>
            </div>
            
            <div style={{ 
              flex: '0 0 35%',
              backgroundColor: '#0c1221',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #2d3748'
            }}>
              <h5 style={{ color: '#5DADE2', marginBottom: '1rem' }}>Track Overview</h5>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#48bb78', marginRight: '0.5rem' }}>✓</span>
                  Multiple difficulty levels
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#48bb78', marginRight: '0.5rem' }}>✓</span>
                  Hands-on challenges
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#48bb78', marginRight: '0.5rem' }}>✓</span>
                  Real-world scenarios
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#48bb78', marginRight: '0.5rem' }}>✓</span>
                  Detailed solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: '2rem 0',
        backgroundColor: '#0c1221',
        borderTop: '1px solid #2d3748',
        borderBottom: '1px solid #2d3748'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h6 style={{ color: '#a0aec0', marginBottom: '0.5rem' }}>Difficulty</h6>
            <p style={{ color: '#5DADE2', fontSize: '1.25rem' }}>Beginner-Friendly</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h6 style={{ color: '#a0aec0', marginBottom: '0.5rem' }}>Challenges</h6>
            <p style={{ color: '#5DADE2', fontSize: '1.25rem' }}>8 Total</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h6 style={{ color: '#a0aec0', marginBottom: '0.5rem' }}>Points Available</h6>
            <p style={{ color: '#5DADE2', fontSize: '1.25rem' }}>1,150</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h6 style={{ color: '#a0aec0', marginBottom: '0.5rem' }}>Completion Rate</h6>
            <p style={{ color: '#5DADE2', fontSize: '1.25rem' }}>75%</p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ color: '#5DADE2', marginBottom: '2rem' }}>Available Challenges</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {challenges.map((challenge) => (
              <div 
                key={challenge.id}
                style={{
                  backgroundColor: '#1a2147',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  border: '1px solid #2d3748'
                }}
                onClick={() => toggleModule(challenge.id)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ color: '#5DADE2', marginBottom: '0.5rem' }}>{challenge.title}</h3>
                    <p style={{ color: '#a0aec0', marginBottom: '0.5rem' }}>{challenge.description}</p>
                  </div>
                  <span style={{
                    padding: '0.25rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: challenge.difficulty === 'Easy' ? '#48bb78' : 
                                   challenge.difficulty === 'Medium' ? '#ed8936' : '#e53e3e',
                    color: 'white',
                    fontSize: '0.875rem'
                  }}>{challenge.difficulty}</span>
                </div>

                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1rem'
                }}>
                  <span style={{ color: '#a0aec0' }}>{challenge.solves} solves</span>
                  <span style={{ color: '#48bb78' }}>{challenge.points} points</span>
                </div>

                {activeModule === challenge.id && (
                  <div style={{ 
                    marginTop: '1.5rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid #2d3748'
                  }}>
                    <h4 style={{ color: '#5DADE2', marginBottom: '1rem' }}>Required Tasks:</h4>
                    <ul style={{ 
                      listStyle: 'none',
                      padding: 0,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1rem'
                    }}>
                      {challenge.tasks.map((task, index) => (
                        <li 
                          key={index}
                          style={{
                            color: '#a0aec0',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          <span style={{ color: '#5DADE2', marginRight: '0.5rem' }}>•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralSkillsPage;
