import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getUserProgress, updateUserProgress, createUserProgress } from '../../supabase/progress';
import GoogleTranslateLanguageSelector from '../../components/GoogleTranslateLanguageSelector';

const learningObjectives = [
  'SQL query fundamentals',
  'Common injection techniques',
  'Input validation bypassing',
  'Database security measures',
  'Prevention strategies',
  'Secure coding practices',
  'Real-world attack scenarios',
  'Defense implementation'
];

const levelContent = {
  1: {
    title: "Level 1: Introduction to SQL Injection",
    overview: "Learn the basics of SQL injection attacks and understand how they exploit database vulnerabilities.",
    prerequisites: [
      'Basic understanding of databases',
      'Familiarity with web browsers',
      'No prior security knowledge required'
    ]
  },
  2: {
    title: "Level 2: Basic SQL Injection Techniques",
    overview: "Explore common SQL injection methods and understand their impact on database security.",
    prerequisites: [
      'Completion of Level 1',
      'Basic SQL knowledge',
      'Understanding of web forms'
    ]
  },
  3: {
    title: "Level 3: Advanced Injection Methods",
    overview: "Master complex SQL injection techniques and learn about automated attack tools.",
    prerequisites: [
      'Completion of Level 2',
      'Intermediate SQL knowledge',
      'Basic security concepts'
    ]
  },
  4: {
    title: "Level 4: Defense Strategies",
    overview: "Learn advanced protection techniques against SQL injection attacks.",
    prerequisites: [
      'Completion of Level 3',
      'Advanced SQL knowledge',
      'Security implementation experience'
    ]
  },
  5: {
    title: "Level 5: Expert Security Implementation",
    overview: "Implement enterprise-level database security and advanced protection measures.",
    prerequisites: [
      'Completion of Level 4',
      'Expert SQL knowledge',
      'Advanced security experience'
    ]
  }
};

const SqlInjectionHome = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [activeLevel, setActiveLevel] = useState(null);
  const [showModal, setShowModal] = useState(false);
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
    if (activeLevel === 1) {
      return 20;
    }
    if (activeLevel === 2) {
      return 40;
    }
    if (activeLevel === 3) {
      return 60;
    }
    if (activeLevel === 4) {
      return 80;
    }
    if (activeLevel === 5) {
      return 100;
    }
    if (!progress?.progress?.sqlinjection) return 0;
    const module = progress.progress.sqlinjection;
    const total = Object.keys(module).length;
    const completed = Object.values(module).filter(item => item.completed).length;
    return Math.round((completed / total) * 100);
  };

  const handleLevelClick = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      const existingProgress = await getUserProgress(user.id);
      let newProgress;
      if (selectedLevel === 1) {
        newProgress = {
          ...existingProgress?.progress,
          sqlinjection: {
            ...existingProgress?.progress?.sqlinjection,
            level1_article: { completed: true, completedAt: new Date().toISOString() },
            level1_initial_quiz: { completed: false, completedAt: null },
            level1_labs_first: { completed: false, completedAt: null },
            level1_final_quiz: { completed: false, completedAt: null },
            level1_labs_second: { completed: false, completedAt: null }
          }
        };
      } else if (selectedLevel === 2) {
        newProgress = {
          ...existingProgress?.progress,
          sqlinjection: {
            ...existingProgress?.progress?.sqlinjection,
            level1_article: { completed: true, completedAt: new Date().toISOString() },
            level1_initial_quiz: { completed: true, completedAt: new Date().toISOString() },
            level1_labs_first: { completed: true, completedAt: new Date().toISOString() },
            level1_final_quiz: { completed: true, completedAt: new Date().toISOString() },
            level1_labs_second: { completed: true, completedAt: new Date().toISOString() },
            level2_article: { completed: true, completedAt: new Date().toISOString() },
            level2_initial_quiz: { completed: false, completedAt: null },
            level2_labs_first: { completed: false, completedAt: null },
            level2_final_quiz: { completed: false, completedAt: null },
            level2_labs_second: { completed: false, completedAt: null }
          }
        };
      } else if (selectedLevel === 3) {
        newProgress = {
          ...existingProgress?.progress,
          sqlinjection: {
            ...existingProgress?.progress?.sqlinjection,
            level1_article: { completed: true, completedAt: new Date().toISOString() },
            level1_initial_quiz: { completed: true, completedAt: new Date().toISOString() },
            level1_labs_first: { completed: true, completedAt: new Date().toISOString() },
            level1_final_quiz: { completed: true, completedAt: new Date().toISOString() },
            level1_labs_second: { completed: true, completedAt: new Date().toISOString() },
            level2_article: { completed: true, completedAt: new Date().toISOString() },
            level2_initial_quiz: { completed: true, completedAt: new Date().toISOString() },
            level2_labs_first: { completed: true, completedAt: new Date().toISOString() },
            level2_final_quiz: { completed: true, completedAt: new Date().toISOString() },
            level2_labs_second: { completed: true, completedAt: new Date().toISOString() },
            level3_article: { completed: true, completedAt: new Date().toISOString() },
            level3_initial_quiz: { completed: false, completedAt: null },
            level3_labs_first: { completed: false, completedAt: null },
            level3_final_quiz: { completed: false, completedAt: null },
            level3_labs_second: { completed: false, completedAt: null }
          }
        };
      } else if (selectedLevel === 4) {
        newProgress = {
          ...existingProgress?.progress,
          sqlinjection: {
            ...existingProgress?.progress?.sqlinjection,
            level1_article: { completed: true, completedAt: new Date().toISOString() },
            level1_initial_quiz: { completed: true, completedAt: new Date().toISOString() },
            level1_labs_first: { completed: true, completedAt: new Date().toISOString() },
            level1_final_quiz: { completed: true, completedAt: new Date().toISOString() },
            level1_labs_second: { completed: true, completedAt: new Date().toISOString() },
            level2_article: { completed: true, completedAt: new Date().toISOString() },
            level2_initial_quiz: { completed: true, completedAt: new Date().toISOString() },
            level2_labs_first: { completed: true, completedAt: new Date().toISOString() },
            level2_final_quiz: { completed: true, completedAt: new Date().toISOString() },
            level2_labs_second: { completed: true, completedAt: new Date().toISOString() },
            level3_article: { completed: true, completedAt: new Date().toISOString() },
            level3_initial_quiz: { completed: true, completedAt: new Date().toISOString() },
            level3_labs_first: { completed: true, completedAt: new Date().toISOString() },
            level3_final_quiz: { completed: true, completedAt: new Date().toISOString() },
            level3_labs_second: { completed: true, completedAt: new Date().toISOString() },
            level4_article: { completed: true, completedAt: new Date().toISOString() },
            level4_initial_quiz: { completed: false, completedAt: null },
            level4_labs_first: { completed: false, completedAt: null },
            level4_final_quiz: { completed: false, completedAt: null },
            level4_labs_second: { completed: false, completedAt: null }
          }
        };
      } else if (selectedLevel === 5) {
        newProgress = {
          ...existingProgress?.progress,
          sqlinjection: {
            ...existingProgress?.progress?.sqlinjection,
            level1_article: { completed: true, completedAt: new Date().toISOString() },
            level1_initial_quiz: { completed: true, completedAt: new Date().toISOString() },
            level1_labs_first: { completed: true, completedAt: new Date().toISOString() },
            level1_final_quiz: { completed: true, completedAt: new Date().toISOString() },
            level1_labs_second: { completed: true, completedAt: new Date().toISOString() },
            level2_article: { completed: true, completedAt: new Date().toISOString() },
            level2_initial_quiz: { completed: true, completedAt: new Date().toISOString() },
            level2_labs_first: { completed: true, completedAt: new Date().toISOString() },
            level2_final_quiz: { completed: true, completedAt: new Date().toISOString() },
            level2_labs_second: { completed: true, completedAt: new Date().toISOString() },
            level3_article: { completed: true, completedAt: new Date().toISOString() },
            level3_initial_quiz: { completed: true, completedAt: new Date().toISOString() },
            level3_labs_first: { completed: true, completedAt: new Date().toISOString() },
            level3_final_quiz: { completed: true, completedAt: new Date().toISOString() },
            level3_labs_second: { completed: true, completedAt: new Date().toISOString() },
            level4_article: { completed: true, completedAt: new Date().toISOString() },
            level4_initial_quiz: { completed: true, completedAt: new Date().toISOString() },
            level4_labs_first: { completed: true, completedAt: new Date().toISOString() },
            level4_final_quiz: { completed: true, completedAt: new Date().toISOString() },
            level4_labs_second: { completed: true, completedAt: new Date().toISOString() },
            level5_article: { completed: true, completedAt: new Date().toISOString() },
            level5_initial_quiz: { completed: false, completedAt: null },
            level5_labs_first: { completed: false, completedAt: null },
            level5_final_quiz: { completed: false, completedAt: null },
            level5_labs_second: { completed: false, completedAt: null }
          }
        };
      } else {
        newProgress = existingProgress?.progress;
      }
      if (existingProgress) {
        await updateUserProgress(user.id, newProgress);
      } else {
        await createUserProgress(user.id, newProgress);
      }
      setProgress({ ...progress, progress: newProgress });
      setActiveLevel(selectedLevel);
    } catch (error) {
      console.error('Error updating progress on start course:', error);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const resetProgress = async () => {
    try {
      const updatedProgress = {
        ...progress.progress,
        sqlinjection: Object.fromEntries(
          Object.entries(progress.progress.sqlinjection).map(([key]) => [
            key,
            { completed: false, completedAt: null }
          ])
        )
      };
      await updateUserProgress(user.id, updatedProgress);
      setProgress({ ...progress, progress: updatedProgress });
      setModalVisible(false);
    } catch (error) {
      console.error('Error resetting progress:', error);
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
        gap: '600px',
        alignItems: 'center',
        zIndex: 1000
      }}>
        <div style={{
          width: '20px',
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '5px',
          border: '1px solid #1A237E',
          cursor: 'pointer',
          backgroundColor: 'white'
        }}>
          <GoogleTranslateLanguageSelector />
        </div>
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
            SQL Injection: Advanced Database Security
          </h1>
          <p style={{
            fontSize: '20px',
            textAlign: 'center',
            color: '#1A237E',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Master SQL injection techniques and database security through hands-on labs and real-world scenarios.
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
                  backgroundColor: level === activeLevel ? '#FFD740' : (level === selectedLevel ? '#1A237E' : '#f0f0f0'),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: level === activeLevel ? '#1A237E' : (level === selectedLevel ? '#fff' : '#666'),
                  fontWeight: 'bold',
                  fontSize: '18px',
                  marginBottom: '10px',
                  border: '2px solid',
                  borderColor: level === activeLevel ? '#FFB300' : '#ddd',
                  transition: 'all 0.3s ease'
                }}>
                  {level}
                </div>
                <span style={{
                  color: level === activeLevel ? '#1A237E' : '#666',
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
                    onClick={(e) => {
                      // Ripple effect
                      const button = e.currentTarget;
                      const circle = document.createElement('span');
                      const diameter = Math.max(button.clientWidth, button.clientHeight);
                      const radius = diameter / 2;
                      circle.style.width = circle.style.height = `${diameter}px`;
                      circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
                      circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
                      circle.classList.add('ripple');
                      const ripple = button.getElementsByClassName('ripple')[0];
                      if (ripple) {
                        ripple.remove();
                      }
                      button.appendChild(circle);

                      setModalVisible(true);
                    }}
                    style={{
                      backgroundColor: '#E74C3C',
                      color: '#fff',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      position: 'relative',
                      overflow: 'hidden'
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
              to={user ? "/Sql-Injection/Article" : "/login"}
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
              onClick={handleLevelClick}
            >
              {!user ? 'Login to Start' : 
               selectedLevel === 1 ? 'Start Course' :
               selectedLevel === 2 ? 'Continue Level 2' :
               selectedLevel === 3 ? 'Continue Level 3' :
               selectedLevel === 4 ? 'Continue Level 4' :
               'Complete the Final Level'}
            </Link>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="modal-overlay" onClick={() => setModalVisible(false)} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'fadeIn 0.3s ease forwards',
          zIndex: 1000
        }}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{
            background: '#2c3e50',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.7)',
            maxWidth: '400px',
            width: '90%',
            textAlign: 'center',
            animation: 'scaleIn 0.3s ease forwards'
          }}>
            <h3>Reset Progress</h3>
            <p>Are you sure you want to reset your progress? This cannot be undone.</p>
            <div className="modal-buttons" style={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'space-around'
            }}>
              <button
                className="modal-button cancel"
                onClick={() => setModalVisible(false)}
                style={{
                  backgroundColor: '#7f8c8d',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#95a5a6'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#7f8c8d'}
              >
                Cancel
              </button>
              <button
                className="modal-button"
                onClick={resetProgress}
                style={{
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#c0392b'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#e74c3c'}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
          @keyframes scaleIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 600ms linear;
            background-color: rgba(255, 255, 255, 0.7);
            pointer-events: none;
          }
        `}
      </style>
    </div>
  );
};

export default SqlInjectionHome;
