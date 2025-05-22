import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getUserProgress, updateUserProgress } from '../../supabase/progress';
import GoogleTranslateLanguageSelector from '../../components/GoogleTranslateLanguageSelector';

const learningObjectives = [
  'Volumetric attack methods',
  'Protocol-based attacks',
  'Application layer attacks',
  'DDoS mitigation strategies',
  'Traffic analysis techniques',
  'Load balancing implementation',
  'Rate limiting strategies',
  'Cloud protection services'
];

const levelContent = {
  1: {
    title: "Level 1: Introduction to DoS",
    overview: "This level introduces the basic concepts of Denial of Service attacks. You'll learn fundamental principles and basic attack vectors.",
    prerequisites: [
      'Basic understanding of computer networks',
      'Familiarity with web browsers',
      'No prior security knowledge required'
    ]
  },
  2: {
    title: "Level 2: Basic DoS Techniques",
    overview: "Learn about common DoS attack techniques and their impact on systems. Explore basic defense mechanisms.",
    prerequisites: [
      'Completion of Level 1',
      'Basic networking concepts (TCP/IP)',
      'Basic command line knowledge'
    ]
  },
  3: {
    title: "Level 3: DDoS Fundamentals",
    overview: "Understand the transition from DoS to DDoS attacks. Learn about distributed attack networks and amplification techniques.",
    prerequisites: [
      'Completion of Level 2',
      'Understanding of basic DoS concepts',
      'Familiarity with network protocols'
    ]
  },
  4: {
    title: "Level 4: Advanced Attack Vectors",
    overview: "Explore sophisticated DDoS attack methods and complex attack scenarios. Learn advanced traffic analysis.",
    prerequisites: [
      'Completion of Level 3',
      'Strong networking knowledge',
      'Experience with security tools'
    ]
  },
  5: {
    title: "Level 5: Expert Defense Strategies",
    overview: "Master advanced DDoS mitigation techniques and enterprise-level protection strategies.",
    prerequisites: [
      'Completion of Level 4',
      'Advanced networking knowledge',
      'Security implementation experience'
    ]
  }
};

const DosAndDdosHome = () => {
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
        if (userProgress?.progress?.dosddos) {
          const module = userProgress.progress.dosddos;
          const total = Object.keys(module).length;
          const completed = Object.values(module).filter(item => item.completed).length;
          const level = Math.min(5, Math.floor((completed / total) * 5) + 1);
          setSelectedLevel(level);
        } else {
          setSelectedLevel(1);
        }
      }
    };
    fetchProgress();
  }, [user]);

  const calculateProgress = () => {
    if (!progress?.progress?.dosddos) return 0;
    const module = progress.progress.dosddos;
    const total = Object.keys(module).length;
    const completed = Object.values(module).filter(item => item.completed).length;
    return Math.round((completed / total) * 100);
  };

  const resetProgress = async () => {
    if (window.confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
      try {
        const updatedProgress = {
          ...progress.progress,
          dosddos: Object.fromEntries(
            Object.entries(progress.progress.dosddos).map(([key]) => [
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

  const handleLevelClick = async (level) => {
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      const existingProgress = await getUserProgress(user.id);
      let newProgress = { ...existingProgress?.progress };
      if (!newProgress.dosddos) {
        newProgress.dosddos = {};
      }
      // Mark progress for levels up to clicked level as completed
      for (let lvl = 1; lvl <= level; lvl++) {
        newProgress.dosddos[`level${lvl}_article`] = { completed: true, completedAt: new Date().toISOString() };
        newProgress.dosddos[`level${lvl}_initial_quiz`] = { completed: true, completedAt: new Date().toISOString() };
        newProgress.dosddos[`level${lvl}_labs_first`] = { completed: true, completedAt: new Date().toISOString() };
        newProgress.dosddos[`level${lvl}_final_quiz`] = { completed: true, completedAt: new Date().toISOString() };
        newProgress.dosddos[`level${lvl}_labs_second`] = { completed: true, completedAt: new Date().toISOString() };
      }
      // If final level clicked, ensure progress is 100% and circle colored
      if (level === 5) {
        setSelectedLevel(5);
      }
      await updateUserProgress(user.id, newProgress);
      setProgress({ ...progress, progress: newProgress });
      setSelectedLevel(level);
    } catch (error) {
      console.error('Error updating progress on level click:', error);
    }
  };

  const getButtonLabel = (level) => {
    if (level === 1) return 'Start Course';
    if (level === 5) return 'Continue the final level';
    return `Continue Level ${level}`;
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
            DoS & DDoS: Advanced Attack and Defense Strategies
          </h1>
          <p style={{
            fontSize: '20px',
            textAlign: 'center',
            color: '#1A237E',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Master the complexities of Denial of Service attacks and defense mechanisms through hands-on labs and real-world scenarios.
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
      {[1, 2, 3, 4, 5].map((level) => {
        const progressPercent = calculateProgress();
        const isCompleted = level <= Math.floor(progressPercent / 20);
        const isSelected = level === selectedLevel;
        return (
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
              backgroundColor: isSelected || (level === 5 && progressPercent === 100) ? '#1A237E' : (isCompleted ? '#FFD740' : '#f0f0f0'),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isSelected || (level === 5 && progressPercent === 100) ? '#fff' : (isCompleted ? '#1A237E' : '#666'),
              fontWeight: 'bold',
              fontSize: '18px',
              marginBottom: '10px',
              border: '2px solid',
              borderColor: isCompleted || (level === 5 && progressPercent === 100) ? '#FFB300' : '#ddd',
              transition: 'all 0.3s ease'
            }}>
              {level}
            </div>
            <span style={{
              color: isCompleted || (level === 5 && progressPercent === 100) ? '#1A237E' : '#666',
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
        );
      })}
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
            }}>{levelContent[selectedLevel] ? levelContent[selectedLevel].title : levelContent[1].title}</h2>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#333',
              marginBottom: '20px'
            }}>
              {levelContent[selectedLevel] ? levelContent[selectedLevel].overview : levelContent[1].overview}
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
              {(levelContent[selectedLevel] ? levelContent[selectedLevel].prerequisites : levelContent[1].prerequisites).map((item, index) => (
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
