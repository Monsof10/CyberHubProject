import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getUserProgress, updateUserProgress } from '../../supabase/progress';
import AttackPagesHeader from '../../components/AttackPagesHeader/AttackPagesHeader';

const DosArticle = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(null);
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 3; // Introduction, Types of Attacks, Defense Strategies

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchProgress = async () => {
      try {
        const userProgress = await getUserProgress(user.id);
        if (!userProgress?.progress?.dosddos) {
          // Initialize progress structure for DOS/DDOS module
          const initialProgress = {
            ...userProgress?.progress,
            dosddos: {
              article: { completed: false, progress: 0 },
              initialQuiz: { completed: false },
              labs: { completed: false },
              finalQuiz: { completed: false }
            }
          };
          await updateUserProgress(user.id, initialProgress);
          setProgress(initialProgress);
        } else {
          setProgress(userProgress.progress);
        }
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };
    fetchProgress();
  }, [user, navigate]);

  const updateArticleProgress = async () => {
    if (!user || !progress) return;

    const newSectionProgress = (currentSection / totalSections) * 100;
    const updatedProgress = {
      ...progress,
      dosddos: {
        ...progress.dosddos,
        article: {
          completed: currentSection === totalSections,
          progress: newSectionProgress
        }
      }
    };

    try {
      await updateUserProgress(user.id, updatedProgress);
      setProgress(updatedProgress);
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const handleNext = () => {
    if (currentSection < totalSections) {
      setCurrentSection(prev => prev + 1);
      updateArticleProgress();
    } else {
      navigate('/DosAndDdos/InitialQuiz');
    }
  };
  return (
    <div style={{ 
      backgroundColor: '#151B3B',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <AttackPagesHeader pageType="dos" />
      <div style={{ 
        padding: '40px',
        fontFamily: 'Georgia, serif'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            color: '#5DADE2', 
            fontSize: '36px',
            marginBottom: '30px'
          }}>Understanding DoS and DDoS Attacks</h1>
          
          {/* Introduction */}
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px',
            fontSize: '18px',
            lineHeight: '1.6'
          }}>
            <h2 style={{ color: '#F1C40F', marginBottom: '20px' }}>Introduction</h2>
            <p style={{ marginBottom: '20px' }}>
              Denial of Service (DoS) and Distributed Denial of Service (DDoS) attacks 
              are among the most common and disruptive forms of cyber attacks. These attacks 
              aim to make a service, network, or system unavailable to its intended users 
              by overwhelming it with a flood of traffic or requests.
            </p>
            <p>
              In this comprehensive guide, we'll explore the different types of DoS/DDoS 
              attacks, their mechanisms, and essential defense strategies.
            </p>
          </div>

          {/* Types of Attacks */}
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px'
          }}>
            <h2 style={{ color: '#F1C40F', marginBottom: '20px' }}>Types of DoS/DDoS Attacks</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#5DADE2', marginBottom: '15px' }}>1. Volumetric Attacks</h3>
              <p>
                These attacks attempt to consume all available bandwidth between the target 
                and the internet. Common examples include UDP floods and ICMP floods.
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#5DADE2', marginBottom: '15px' }}>2. Protocol Attacks</h3>
              <p>
                These attacks target server resources or intermediate communication equipment. 
                Examples include SYN floods and Ping of Death attacks.
              </p>
            </div>

            <div>
              <h3 style={{ color: '#5DADE2', marginBottom: '15px' }}>3. Application Layer Attacks</h3>
              <p>
                These sophisticated attacks target specific applications or services. 
                Examples include HTTP floods and Slowloris attacks.
              </p>
            </div>
          </div>

          {/* Defense Strategies */}
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px'
          }}>
            <h2 style={{ color: '#F1C40F', marginBottom: '20px' }}>Defense Strategies</h2>
            
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#5DADE2' }}>• Traffic Analysis:</strong>
                <p>Monitor and analyze network traffic patterns to detect anomalies.</p>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#5DADE2' }}>• Rate Limiting:</strong>
                <p>Implement restrictions on the rate of requests from individual IP addresses.</p>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#5DADE2' }}>• Load Balancing:</strong>
                <p>Distribute traffic across multiple servers to prevent overload.</p>
              </li>
              <li>
                <strong style={{ color: '#5DADE2' }}>• DDoS Mitigation Services:</strong>
                <p>Utilize specialized services designed to filter and scrub malicious traffic.</p>
              </li>
            </ul>
          </div>

          {/* Progress Bar */}
          {/* Removed progress bar as per request */}
          {/* <div style={{
            backgroundColor: '#1a2147',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '30px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}>
              <span>Progress</span>
              <span>{Math.round((currentSection / totalSections) * 100)}%</span>
            </div>
            <div style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#2C3E50',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${(currentSection / totalSections) * 100}%`,
                height: '100%',
                backgroundColor: '#F1C40F',
                transition: 'width 0.3s ease'
              }}/>
            </div>
          </div> */}
          {/* Video Preview Section */}
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px',
            border: '1px solid #5DADE2',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <h2 style={{
              color: '#5DADE2',
              fontSize: '28px',
              marginBottom: '20px'
            }}>Video Preview</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
              Watch this video to get an overview of Dos and DDOs attacks:
            </p>
            <a 
              href="https://www.youtube.com/watch?v=OWLGUgiz_eE&ab_channel=CyberShaolin" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#F1C40F',
                fontSize: '18px',
                textDecoration: 'underline'
              }}
            >
              Dos and Ddos Attack Video Preview
            </a>
          </div>

          {/* Navigation Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '40px'
          }}>
            <Link 
              to="/DosAndDdos/HomePage"
              style={{
                backgroundColor: '#5DADE2',
                color: '#fff',
                padding: '15px 30px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: '18px'
              }}
            >
              ← Back to Overview
            </Link>
            <button 
              onClick={() => navigate('/DosAndDdos/InitialQuiz')}
              style={{
                backgroundColor: '#F1C40F',
                color: '#000',
                padding: '15px 30px',
                borderRadius: '5px',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >
              Go to Initial Quiz →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DosArticle;
