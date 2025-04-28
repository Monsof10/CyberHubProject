import React from 'react';
import { Link } from 'react-router-dom';

const SqlInjectionHome = () => {
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
          SQL Injection: Advanced Attack Techniques
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
            Master the art of SQL Injection from basic concepts to advanced exploitation techniques. 
            Learn through hands-on labs, interactive quizzes, and real-world scenarios.
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
              <h3 style={{ color: '#F1C40F', marginBottom: '15px' }}>Technical Skills</h3>
              <ul style={{ listStyle: 'disc', marginLeft: '20px' }}>
                <li>Class SQL Injection</li>
                <li>UNION-Based Attacks</li>
                <li>Blind SQL Injection Techniques</li>
                <li>Advanced Database Manipulation</li>
                <li>WAF Bypass Methods</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px' }}>Security Practices</h3>
              <ul style={{ listStyle: 'disc', marginLeft: '20px' }}>
                <li>Input Validation Strategies</li>
                <li>Parameterized Queries</li>
                <li>Database Hardening</li>
                <li>Security Monitoring</li>
                <li>Incident Response</li>
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
              Begin with a quiz to test your current knowledge and customize your learning path.
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '22px' }}>
              2. Comprehensive Article
            </h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Deep dive into SQL Injection concepts, techniques, and prevention methods.
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
              <li>Classic Injection Lab</li>
              <li>UNION-Based Injection Lab</li>
              <li>Blind SQL Injection Lab</li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '22px' }}>
              4. Final Assessment
            </h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Comprehensive quiz to test your mastery of SQL Injection concepts and techniques.
            </p>
          </div>
        </div>

        {/* Start Course Button */}
        <div style={{ textAlign: 'center' }}>
        <Link 
            to="/"
                              style={{
                                backgroundColor: '#5DADE2',
                                color: '#fff',
                                padding: '20px 65px',
                                borderRadius: '5px',
                                textDecoration: 'none',
                                display: 'inline-block',
                                alignItems: 'center',
                                gap: '10px'
                              }}
                            >
                              <span style={{ fontSize: '24px' }}>🏠</span>
                              Return to Home
                            </Link>
          <Link 
            to="/Sql-Injection/Article"
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
    </div>
  );
};

export default SqlInjectionHome;
