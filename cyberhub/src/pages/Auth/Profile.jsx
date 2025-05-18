import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { getUserProgress, updateUserProgress, createUserProgress } from '../../supabase/progress';

const Profile = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('progress');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProgress = async () => {
      if (user) {
        try {
          const userProgress = await getUserProgress(user.id);
          if (!userProgress) {
            // Initialize progress for new users
            const initialProgress = {
              'sql injection': {},
              'spoofing': {},
              'dosddos': {}
            };
            await createUserProgress(user.id, initialProgress);
            setProgress({ progress: initialProgress });
          } else {
            setProgress(userProgress);
          }
        } catch (error) {
          console.error('Error fetching progress:', error);
        }
      }
    };
    fetchProgress();
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const calculateModuleProgress = (moduleName) => {
    if (!progress?.progress?.[moduleName]) return 0;
    const module = progress.progress[moduleName];
    const total = Object.keys(module).length;
    const completed = Object.values(module).filter(item => item.completed).length;
    return Math.round((completed / total) * 100);
  };

  const resetCourseProgress = async (courseName) => {
    if (window.confirm(`Are you sure you want to reset your progress for ${courseName}?`)) {
      try {
        const updatedProgress = {
          ...progress.progress,
          [courseName.toLowerCase().replace('/', '')]: Object.fromEntries(
            Object.entries(progress.progress[courseName.toLowerCase().replace('/', '')]).map(([key]) => [
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
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          aside ul li {
            transition: color 0.3s ease, background-color 0.3s ease;
            padding: 8px 12px;
            border-radius: 6px;
          }
          aside ul li:hover {
            color: #1abc9c !important;
            background-color: #144d4d;
          }
          button {
            transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
            border-radius: 6px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          }
          button:hover {
            background-color: #f39c12 !important;
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(243, 156, 18, 0.7);
          }
          button:focus {
            outline: none;
            box-shadow: 0 0 12px #f1c40f;
          }
          .avatar {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            box-shadow: 0 0 20px #1abc9c;
            cursor: default;
          }
          .avatar:hover {
            transform: scale(1.15) rotate(5deg);
            box-shadow: 0 0 35px #1abc9c;
          }
          main, section {
            animation: fadeIn 0.8s ease forwards;
            opacity: 0;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.6);
            padding: 30px;
            margin-bottom: 30px;
            background: linear-gradient(135deg, #34495e, #2c3e50);
          }
          .progress-bar-container {
            width: 100%;
            height: 14px;
            background-color: #223344;
            border-radius: 7px;
            overflow: hidden;
            box-shadow: inset 0 2px 5px rgba(0,0,0,0.7);
            margin-top: 6px;
          }
          .progress-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #1abc9c, #16a085);
            box-shadow: 0 0 12px #1abc9c;
            transition: width 1.2s ease-in-out;
            border-radius: 7px;
          }
          .course-reset-button {
            background-color: #e74c3c;
            color: #fff;
            padding: 6px 14px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 600;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 2px 6px rgba(0,0,0,0.4);
          }
          .course-reset-button:hover {
            background-color: #c0392b;
            transform: scale(1.1);
            box-shadow: 0 4px 14px rgba(192, 57, 43, 0.8);
          }
          .achievement-item {
            background-color: #2c3e50;
            padding: 22px;
            border-radius: 14px;
            margin-bottom: 18px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background-color 0.4s ease, transform 0.3s ease;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          }
          .achievement-item:hover {
            background-color: #34495e;
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.7);
          }
          .achievement-completed {
            background-color: #27ae60;
            padding: 6px 14px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            box-shadow: 0 0 12px #27ae60;
          }
          .billing-section {
            background-color: #2c3e50;
            border-radius: 14px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.7);
            padding: 36px;
            box-sizing: border-box;
            animation: fadeIn 0.8s ease forwards;
            opacity: 0;
          }
          .billing-header {
            color: #1abc9c;
            margin-bottom: 24px;
            font-weight: 700;
            font-size: 24px;
          }
          .billing-info {
            color: #bdc3c7;
            font-size: 18px;
            line-height: 1.6;
          }
        `}
      </style>
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#151B3B', 
        padding: '40px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#fff',
        display: 'flex',
        gap: '40px',
        boxSizing: 'border-box'
      }}>
        {/* Sidebar */}
        <aside style={{ 
          width: '220px', 
          backgroundColor: '#1a2147', 
          borderRadius: '10px', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)', 
          padding: '20px',
          boxSizing: 'border-box',
          height: 'fit-content',
          userSelect: 'none'
        }}>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li 
                onClick={() => setActiveTab('progress')}
                style={{ fontWeight: activeTab === 'progress' ? '700' : '400', marginBottom: '15px', cursor: 'pointer', color: activeTab === 'progress' ? '#5DADE2' : '#fff' }}
              >
                Progress Tracking
              </li>
              <li 
                onClick={() => setActiveTab('skillpath')}
                style={{ fontWeight: activeTab === 'skillpath' ? '700' : '400', marginBottom: '15px', cursor: 'pointer', color: activeTab === 'skillpath' ? '#5DADE2' : '#fff' }}
              >
                Skill Path Progress
              </li>
              <li 
                onClick={() => setActiveTab('ctfchallenges')}
                style={{ fontWeight: activeTab === 'ctfchallenges' ? '700' : '400', marginBottom: '15px', cursor: 'pointer', color: activeTab === 'ctfchallenges' ? '#5DADE2' : '#fff' }}
              >
                CTF Challenges Accomplished
              </li>
              <li 
                onClick={() => setActiveTab('achievements')}
                style={{ fontWeight: activeTab === 'achievements' ? '700' : '400', marginBottom: '15px', cursor: 'pointer', color: activeTab === 'achievements' ? '#5DADE2' : '#fff' }}
              >
                Achievements
              </li>
              <li 
                onClick={() => setActiveTab('billing')}
                style={{ fontWeight: activeTab === 'billing' ? '700' : '400', marginBottom: '15px', cursor: 'pointer', color: activeTab === 'billing' ? '#5DADE2' : '#fff' }}
              >
                Billing
              </li>
              <li
                onClick={() => navigate('/Settings')}
                style={{ fontWeight: '400', marginBottom: '15px', cursor: 'pointer', color: '#fff' }}
              >
                Profile Settings
              </li>
              <li 
                onClick={handleLogout}
                style={{ marginTop: '20px', padding: '8px 16px', border: '1px solid #E74C3C', borderRadius: '5px', color: '#E74C3C', cursor: 'pointer', textAlign: 'center' }}
              >
                Logout
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, animation: 'fadeIn 0.6s ease forwards', opacity: 0 }}>
          {/* User Info Section */}
          <section style={{ backgroundColor: '#1a2147', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', padding: '30px', marginBottom: '30px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="avatar" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#5DADE2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#fff' }}>
              {user?.email?.[0]?.toUpperCase()}
            </div>
            <div>
              <h2 style={{ margin: 0, fontWeight: '700', color: '#5DADE2' }}>{user?.email}</h2>
              <p style={{ margin: '5px 0 0 0', color: '#888' }}>Member since {new Date(user?.created_at).toLocaleDateString()}</p>
            </div>
          </section>

          {/* Content based on active tab */}
          {activeTab === 'progress' && (
            <section style={{ backgroundColor: '#1a2147', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', padding: '30px', boxSizing: 'border-box', animation: 'fadeIn 0.6s ease forwards', opacity: 0 }}>
              <h3 style={{ margin: '0 0 20px 0', color: '#5DADE2' }}>Course Progress</h3>
              {['SQL Injection', 'Spoofing', 'DOS/DDOS', 'Cross-Site Scripting', 'Forensic Science', 'User Enumeration', 'Privilege Escalation', 'Buffer Overflows', 'Server-Side Request Forgery', 'DNS Poisoning'].map(course => {
                const key = course.toLowerCase().replace(/[\s-]/g, '');
                const progressPercent = calculateModuleProgress(key);
                return (
                  <div key={course} style={{ marginBottom: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span>{course}</span>
                      <div>
                        <span style={{ marginRight: '15px' }}>{progressPercent}%</span>
                        <button
                          onClick={() => resetCourseProgress(course)}
                          className="course-reset-button"
                        >
                          Reset Progress
                        </button>
                      </div>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}/>
                    </div>
                  </div>
                );
              })}
            </section>
          )}
          {activeTab === 'skillpath' && (
            <section style={{ backgroundColor: '#1a2147', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', padding: '30px', boxSizing: 'border-box', animation: 'fadeIn 0.6s ease forwards', opacity: 0 }}>
              <h3 style={{ margin: '0 0 20px 0', color: '#5DADE2' }}>Skill Path Progress</h3>
              {/* TODO: Implement skill path progress details */}
              <p>Skill path progress details will be displayed here.</p>
            </section>
          )}
          {activeTab === 'ctfchallenges' && (
            <section style={{ backgroundColor: '#1a2147', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', padding: '30px', boxSizing: 'border-box', animation: 'fadeIn 0.6s ease forwards', opacity: 0 }}>
              <h3 style={{ margin: '0 0 20px 0', color: '#5DADE2' }}>CTF Challenges Accomplished</h3>
              {/* TODO: Implement CTF challenges completion details */}
              <p>CTF challenges completion details will be displayed here.</p>
            </section>
          )}
          {activeTab === 'achievements' && (
            <section style={{ backgroundColor: '#1a2147', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', padding: '30px', boxSizing: 'border-box', animation: 'fadeIn 0.6s ease forwards', opacity: 0 }}>
              <h3 style={{ margin: '0 0 20px 0', color: '#5DADE2' }}>Achievements</h3>
              {['SQL Injection', 'Spoofing', 'DOS/DDOS'].map(course => {
                const progressPercent = calculateModuleProgress(course.toLowerCase().replace('/', ''));
                const isCompleted = progressPercent === 100;
                return (
                  <div
                    key={course}
                    className="achievement-item"
                    style={{ cursor: isCompleted ? 'default' : 'pointer' }}
                  >
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', color: isCompleted ? '#27AE60' : '#fff' }}>
                        {course} {isCompleted && '✓'}
                      </h4>
                      <p style={{ margin: 0, color: '#888', fontSize: '14px' }}>
                        {isCompleted ? 'Course completed' : `${progressPercent}% completed`}
                      </p>
                    </div>
                    {isCompleted && (
                      <div className="achievement-completed">
                        Completed
                      </div>
                    )}
                  </div>
                );
              })}
            </section>
          )}
          {activeTab === 'billing' && (
            <section className="billing-section">
              <h3 className="billing-header">Billing Information</h3>
              <p className="billing-info">
                This is your billing section. Here you can view your subscription details, payment methods, and billing history.
                (This is a placeholder section. You can integrate actual billing data and functionality as needed.)
              </p>
            </section>
          )}
        </main>
      </div>
    </>
  );
};

export default Profile;
