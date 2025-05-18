import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getUserProgress, updateUserProgress } from '../../supabase/progress';

const learningObjectives = [
  'Understanding Server-Side Request Forgery (SSRF)',
  'Common SSRF attack vectors',
  'Impact on web applications and servers',
  'Detection and mitigation strategies',
  'Secure server configuration',
  'Real-world SSRF attack scenarios',
  'Defense implementation',
  'Security best practices'
];

const levelContent = {
  1: {
    title: "Level 1: Introduction to SSRF",
    overview: "Learn the basics of Server-Side Request Forgery and its impact on web security.",
    prerequisites: [
      'Basic understanding of web servers',
      'Familiarity with HTTP protocols',
      'No prior security knowledge required'
    ]
  },
  2: {
    title: "Level 2: Basic SSRF Techniques",
    overview: "Explore common SSRF attack methods and understand their impact.",
    prerequisites: [
      'Completion of Level 1',
      'Basic networking knowledge',
      'Understanding of server requests'
    ]
  },
  3: {
    title: "Level 3: Advanced SSRF Methods",
    overview: "Master complex SSRF techniques and automated tools.",
    prerequisites: [
      'Completion of Level 2',
      'Intermediate security knowledge',
      'Basic scripting skills'
    ]
  },
  4: {
    title: "Level 4: Detection & Prevention",
    overview: "Learn advanced techniques for detecting and preventing SSRF attacks.",
    prerequisites: [
      'Completion of Level 3',
      'Advanced security skills',
      'Experience with security monitoring'
    ]
  },
  5: {
    title: "Level 5: Enterprise Security",
    overview: "Implement enterprise-level protection against SSRF attacks.",
    prerequisites: [
      'Completion of Level 4',
      'Expert security knowledge',
      'Advanced security experience'
    ]
  }
};

const ServerSideRequestForgeryHome = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProgress = async () => {
      if (user) {
        const userProgress = await getUserProgress(user.id);
        setProgress(userProgress);
      }
    };
    fetchProgress();
  }, [user]);

  const calculateProgress = () => {
    if (!progress?.progress?.serversiderequestforgery) return 0;
    const module = progress.progress.serversiderequestforgery;
    const total = Object.keys(module).length;
    const completed = Object.values(module).filter(item => item.completed).length;
    return Math.round((completed / total) * 100);
  };

  const resetProgress = async () => {
    if (window.confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
      try {
        const updatedProgress = {
          ...progress.progress,
          serversiderequestforgery: Object.fromEntries(
            Object.entries(progress.progress.serversiderequestforgery).map(([key]) => [
              key,
              { completed: false, completedAt: null }
            ])
          )
        };
        
        await updateUserProgress(user.id, updatedProgress);
        setProgress({ ...progress, progress: updatedProgress });
      } catch (error) {
        console.error('Error resetting progress:', error);
      }
    }
  };

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Cyberhub Button */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1100
      }}>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#fff',
            color: '#1A237E',
            fontWeight: 'bold',
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          Cyberhub
        </Link>
      </div>

      {/* Auth Buttons */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        display: 'flex',
        gap: '15px',
        zIndex: 1000
      }}>
        {user ? (
          <Link
            to="/Profile"
            style={{
              padding: '10px 20px',
              backgroundColor: '#1A237E',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span>Profile</span>
            {progress && (
              <div style={{
                backgroundColor: '#FFD740',
                color: '#1A237E',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '12px'
              }}>
                {calculateProgress()}%
              </div>
            )}
          </Link>
        ) : (
          <>
            <button
              onClick={() => navigate('/login')}
              style={{
                padding: '10px 20px',
                backgroundColor: 'transparent',
                color: '#1A237E',
                border: '2px solid #1A237E',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              style={{
                padding: '10px 20px',
                backgroundColor: '#1A237E',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Sign Up
            </button>
          </>
        )}
      </div>

      {/* Yellow Banner Header */}
      <div style={{
        background: 'linear-gradient(45deg, #FFE57F, #FFD740)',
        padding: '60px 0',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          position: 'relative', 
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: '48px',
            textAlign: 'center',
            color: '#1A237E',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Server-Side Request Forgery: Attack & Defense
          </h1>
          <p style={{
            fontSize: '20px',
            textAlign: 'center',
            color: '#1A237E',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Master SSRF attacks and defenses through practical labs and real-world scenarios.
          </p>
        </div>
      </div>

      {/* Level Progress */}
      <div style={{
        background: '#fff',
        padding: '30px 0',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative'
          }}>
            {[1, 2, 3, 4, 5].map((level) => (
              <div
                key={level}
                onClick={() => user ? setSelectedLevel(level) : navigate('/login')}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: level === selectedLevel ? '#1A237E' : (level <= (calculateProgress() / 20) ? '#FFD740' : '#f0f0f0'),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: level === selectedLevel ? '#fff' : (level <= (calculateProgress() / 20) ? '#1A237E' : '#666'),
                  fontWeight: 'bold',
                  fontSize: '18px',
                  marginBottom: '10px',
                  border: '2px solid',
                  borderColor: level <= (calculateProgress() / 20) ? '#FFB300' : '#ddd',
                  transition: 'all 0.3s ease'
                }}>
                  {level}
                </div>
                <span style={{
                  color: level <= (calculateProgress() / 20) ? '#1A237E' : '#666',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  {level === 1 ? 'Beginner' :
                   level === 2 ? 'Basic' :
                   level === 3 ? 'Intermediate' :
                   level === 4 ? 'Advanced' :
                   'Expert'}
                </span>
              </div>
            ))}
            {/* Connecting line */}
            <div style={{
              position: 'absolute',
              top: '25px',
              left: '50px',
              right: '50px',
              height: '2px',
              backgroundColor: '#eee',
              zIndex: 1
            }}>
              <div style={{
                width: `${calculateProgress()}%`,
                height: '100%',
                backgroundColor: '#FFD740',
                transition: 'width 0.3s ease'
              }}/>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '40px 20px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '40px'
      }}>
        {/* Main Content */}
        <div>
          {/* Course Overview */}
          <section style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '30px',
            marginBottom: '30px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '28px',
              color: '#1A237E',
              marginBottom: '20px'
            }}>{levelContent[selectedLevel].title}</h2>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#333',
              marginBottom: '20px'
            }}>
              {levelContent[selectedLevel].overview}
            </p>
          </section>

          {/* Prerequisites */}
          <section style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '30px',
            marginBottom: '30px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '28px',
              color: '#1A237E',
              marginBottom: '20px'
            }}>Prerequisites</h2>
            <ul style={{ paddingLeft: '20px' }}>
              {levelContent[selectedLevel].prerequisites.map((item, index) => (
                <li key={index} style={{
                  marginBottom: '10px',
                  color: '#333',
                  fontSize: '16px'
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* What You'll Learn */}
          <section style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '30px',
            marginBottom: '30px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '28px',
              color: '#1A237E',
              marginBottom: '20px'
            }}>What You'll Learn</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px'
            }}>
              {learningObjectives.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '16px',
                  color: '#333'
                }}>
                  <span style={{ color: '#4CAF50' }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: '20px' }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            {user && progress && (
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '20px'
              }}>
                <h4 style={{ marginBottom: '15px', color: '#1A237E' }}>Your Progress</h4>
                <div style={{ 
                  width: '100%', 
                  height: '10px', 
                  backgroundColor: '#e9ecef',
                  borderRadius: '5px',
                  overflow: 'hidden',
                  marginBottom: '10px'
                }}>
                  <div style={{ 
                    width: `${calculateProgress()}%`, 
                    height: '100%', 
                    backgroundColor: '#FFD740',
                    transition: 'width 0.3s ease'
                  }}/>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span>{calculateProgress()}% Complete</span>
                  <button
                    onClick={resetProgress}
                    style={{
                      backgroundColor: '#E74C3C',
                      color: '#fff',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    Reset Progress
                  </button>
                </div>
              </div>
            )}

            {/* Course Info */}
            <div style={{
              marginBottom: '20px'
            }}>
              {[
                { label: 'Duration', value: selectedLevel === 1 ? '45min' : 
                                        selectedLevel === 2 ? '1h' :
                                        selectedLevel === 3 ? '1.5h' :
                                        selectedLevel === 4 ? '2h' : '3h' },
                { label: 'Difficulty', value: selectedLevel === 1 ? 'Beginner' :
                                            selectedLevel === 2 ? 'Basic' :
                                            selectedLevel === 3 ? 'Intermediate' :
                                            selectedLevel === 4 ? 'Advanced' : 'Expert' },
                { label: 'Language', value: 'English' },
                { label: 'Certificate', value: selectedLevel === 5 ? 'Yes' : 'No' }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: index !== 3 ? '1px solid #eee' : 'none'
                }}>
                  <span style={{ color: '#666' }}>{item.label}</span>
                  <span style={{ color: '#1A237E', fontWeight: '500' }}>{item.value}</span>
                </div>
              ))}
            </div>

            <Link 
              to={user ? "/ServerSideRequestForgery/Article" : "/login"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: isHovered ? '#FF7043' : '#FF5722',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                textAlign: 'center',
                display: 'block'
              }}
            >
              {!user ? 'Login to Start' : 
               selectedLevel === 1 ? 'Start Course' :
               calculateProgress() < (selectedLevel - 1) * 20 ? 'Complete Previous Level' :
               'Continue Course'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerSideRequestForgeryHome;
