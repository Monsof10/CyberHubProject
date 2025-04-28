import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chatbot from '../../components/ChatAssistant/ChatAssistant';

const DosAndDdosHome = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#151B3B',
      color: '#fff',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Georgia, serif'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ 
          color: '#5DADE2', 
          fontSize: '48px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          DoS & DDoS: Service Disruption Attacks
        </h1>

        {/* Course Overview */}
        <div style={{
          backgroundColor: '#1a2147',
          padding: '30px',
          borderRadius: '10px',
          marginBottom: '30px',
          border: '1px solid #5DADE2'
        }}>
          <h2 style={{ 
            color: '#5DADE2',
            fontSize: '28px',
            marginBottom: '20px'
          }}>Course Overview</h2>
          <p style={{ 
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            Understand Denial of Service attacks, from single-source DoS to distributed DDoS attacks. 
            Learn through detailed analysis, practical examples, and mitigation strategies.
          </p>
          <div style={{
            backgroundColor: '#F1C40F',
            color: '#000',
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '20px',
            fontSize: '18px'
          }}>
            ⚠️ All techniques taught are for educational purposes and ethical hacking only
          </div>
        </div>

        {/* What You'll Learn */}
        <div style={{
          backgroundColor: '#1a2147',
          padding: '30px',
          borderRadius: '10px',
          marginBottom: '30px',
          border: '1px solid #5DADE2'
        }}>
          <h2 style={{ 
            color: '#5DADE2',
            fontSize: '28px',
            marginBottom: '20px'
          }}>What You'll Learn</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            fontSize: '18px',
            lineHeight: '1.6'
          }}>
            <div>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px' }}>Attack Types</h3>
              <ul style={{ listStyle: 'disc', marginLeft: '20px' }}>
                <li>Volumetric Attacks</li>
                <li>Protocol-Based Attacks</li>
                <li>Application Layer Attacks</li>
                <li>Resource Exhaustion</li>
                <li>Amplification Methods</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px' }}>Defense Mechanisms</h3>
              <ul style={{ listStyle: 'disc', marginLeft: '20px' }}>
                <li>Traffic Analysis</li>
                <li>Rate Limiting</li>
                <li>Load Balancing</li>
                <li>Blackholing</li>
                <li>DDoS Mitigation Services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Course Structure */}
        <div style={{
          backgroundColor: '#1a2147',
          padding: '30px',
          borderRadius: '10px',
          marginBottom: '30px',
          border: '1px solid #5DADE2'
        }}>
          <h2 style={{ 
            color: '#5DADE2',
            fontSize: '28px',
            marginBottom: '20px'
          }}>Course Structure</h2>
          
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '22px' }}>
              1. Initial Assessment
            </h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Evaluate your knowledge of DoS/DDoS attacks and defense strategies.
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '22px' }}>
              2. Comprehensive Article
            </h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Detailed exploration of DoS/DDoS attack vectors, tools, and protection methods.
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '22px' }}>
              3. Interactive Labs
            </h3>
            <ul style={{ 
              listStyle: 'disc',
              marginLeft: '20px',
              fontSize: '18px',
              lineHeight: '1.6'
            }}>
              <li>Network Layer DDoS Lab</li>
              <li>Application Layer DoS Lab</li>
              <li>Mitigation Techniques Lab</li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '22px' }}>
              4. Final Assessment
            </h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Test your mastery of DoS/DDoS attack patterns and defense implementation.
            </p>
          </div>
        </div>

        {/* Start Course Button */}
        <div style={{ textAlign: 'center' }}>
          <Link 
            to="/DosAndDdos/Article"
            style={{
              backgroundColor: '#F1C40F',
              color: '#000',
              padding: '20px 40px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontSize: '24px',
              fontWeight: '600',
              display: 'inline-block',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            Start Learning →
          </Link>
        </div>
      </div>

      {/* Chat Assistant */}
      {isAuthenticated && (
        <Chatbot
          courseId="dos-ddos"
          currentPage="/DosAndDdos/HomePage"
        />
      )}
    </div>
  );
};

export default DosAndDdosHome;
