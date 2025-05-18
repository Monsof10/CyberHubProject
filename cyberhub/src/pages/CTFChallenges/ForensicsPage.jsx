import React, { useState } from 'react';
import AttackPagesHeader from '../../components/AttackPagesHeader/AttackPagesHeader';
import './styles.css';

const ForensicsPage = () => {
  const [activeModule, setActiveModule] = useState(null);

  const challenges = [
    {
      id: 1,
      title: "File Signature Analysis",
      description: "Learn to analyze and fix corrupted file signatures",
      difficulty: "Easy",
      points: "100",
      solves: "12,415",
      tasks: [
        "File Header Analysis",
        "Magic Numbers",
        "File Type Detection",
        "Signature Repair"
      ]
    },
    {
      id: 2,
      title: "Steganography Basics",
      description: "Discover hidden data in images and audio files",
      difficulty: "Medium",
      points: "150",
      solves: "9,354",
      tasks: [
        "Image Analysis",
        "Audio Steganography",
        "Metadata Extraction",
        "Hidden Text Recovery"
      ]
    },
    {
      id: 3,
      title: "Memory Dump Analysis",
      description: "Analyze system memory dumps for evidence",
      difficulty: "Hard",
      points: "200",
      solves: "5,233",
      tasks: [
        "Memory Acquisition",
        "Process Analysis",
        "String Extraction",
        "Artifact Recovery"
      ]
    },
    {
      id: 4,
      title: "Network Packet Analysis",
      description: "Investigate network traffic captures",
      difficulty: "Medium",
      points: "175",
      solves: "7,916",
      tasks: [
        "Wireshark Analysis",
        "Protocol Investigation",
        "Traffic Patterns",
        "Data Extraction"
      ]
    },
    {
      id: 5,
      title: "Disk Image Analysis",
      description: "Recover data from disk images",
      difficulty: "Hard",
      points: "225",
      solves: "4,958",
      tasks: [
        "File System Analysis",
        "Deleted File Recovery",
        "Timeline Analysis",
        "Evidence Collection"
      ]
    },
    {
      id: 6,
      title: "PDF Analysis",
      description: "Extract hidden information from PDF files",
      difficulty: "Easy",
      points: "125",
      solves: "10,233",
      tasks: [
        "PDF Structure Analysis",
        "Metadata Extraction",
        "Hidden Content",
        "JavaScript Analysis"
      ]
    },
    {
      id: 7,
      title: "Registry Analysis",
      description: "Windows registry forensics investigation",
      difficulty: "Medium",
      points: "175",
      solves: "6,547",
      tasks: [
        "Registry Structure",
        "User Activity Analysis",
        "System Configuration",
        "Artifact Recovery"
      ]
    },
    {
      id: 8,
      title: "Log File Analysis",
      description: "Investigate system and application logs",
      difficulty: "Medium",
      points: "150",
      solves: "8,892",
      tasks: [
        "Log Parsing",
        "Timeline Creation",
        "Anomaly Detection",
        "Event Correlation"
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
              }}>Digital Forensics</h1>
              <p style={{ 
                fontSize: '1.25rem',
                color: '#e2e8f0',
                marginBottom: '1.5rem'
              }}>
                Master digital forensics techniques used in CTF challenges. Learn file analysis,
                steganography, memory forensics, and network traffic investigation.
              </p>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                marginTop: '2rem',
                color: '#a0aec0'
              }}>
                <span style={{ marginRight: '2rem' }}>
                  <i className="fas fa-users"></i> 18,540 participants
                </span>
                <span>
                  <i className="fas fa-trophy"></i> 950 completions
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
                  File analysis techniques
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#48bb78', marginRight: '0.5rem' }}>✓</span>
                  Memory forensics
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#48bb78', marginRight: '0.5rem' }}>✓</span>
                  Network analysis
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#48bb78', marginRight: '0.5rem' }}>✓</span>
                  Evidence collection
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
            <p style={{ color: '#5DADE2', fontSize: '1.25rem' }}>Intermediate</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h6 style={{ color: '#a0aec0', marginBottom: '0.5rem' }}>Challenges</h6>
            <p style={{ color: '#5DADE2', fontSize: '1.25rem' }}>8 Total</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h6 style={{ color: '#a0aec0', marginBottom: '0.5rem' }}>Points Available</h6>
            <p style={{ color: '#5DADE2', fontSize: '1.25rem' }}>1,300</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h6 style={{ color: '#a0aec0', marginBottom: '0.5rem' }}>Completion Rate</h6>
            <p style={{ color: '#5DADE2', fontSize: '1.25rem' }}>65%</p>
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

export default ForensicsPage;
