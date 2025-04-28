import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ClassicSqlInjection = () => {
  const [labStarted, setLabStarted] = useState(false);

  const startLab = () => {
    setLabStarted(true);
  };

  if (!labStarted) {
    return (
      <div style={{ 
        backgroundColor: '#151B3B',
        color: '#fff',
        minHeight: '100vh',
        padding: '40px',
        fontFamily: 'Georgia, serif'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ 
            color: '#5DADE2', 
            fontSize: '36px',
            marginBottom: '30px'
          }}>Classic SQL Injection Lab</h1>
          
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px',
            border: '1px solid #5DADE2'
          }}>
            <h2 style={{ 
              color: '#5DADE2',
              fontSize: '24px',
              marginBottom: '20px'
            }}>Before You Begin</h2>
            <p style={{ 
              fontSize: '18px',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              In this lab, you will:
            </p>
            <ul style={{ 
              textAlign: 'left',
              fontSize: '18px',
              lineHeight: '1.6',
              marginBottom: '30px'
            }}>
              <li>Learn basic SQL injection techniques</li>
              <li>Understand login bypass vulnerabilities</li>
              <li>Practice exploiting unsanitized inputs</li>
              <li>Master SQL query manipulation</li>
            </ul>
            <div style={{
              backgroundColor: '#F1C40F',
              color: '#000',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '20px'
            }}>
              ⚠️ This is a controlled environment for educational purposes only
            </div>
          </div>

          <button 
            onClick={startLab}
            style={{
              backgroundColor: '#F1C40F',
              color: '#000',
              padding: '15px 30px',
              borderRadius: '5px',
              border: 'none',
              fontSize: '20px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Start Lab Environment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#151B3B'
    }}>
      <div style={{ 
        display: 'flex', 
        flex: 1
      }}>
        {/* Left Side - Explanation and Link */}
        <div style={{ 
          flex: 1,
          padding: '20px',
          borderRight: '1px solid #5DADE2',
          color: '#5DADE2',
          fontSize: '18px',
          fontFamily: 'Georgia, serif',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '15px'
        }}>
          <p>
            The link below will take you to the Classic SQL Attack Lab environment where you can practice and explore classic SQL injection techniques in a controlled setting.
          </p>
          <a 
            href="https://sqlclassic1.onrender.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#F1C40F', textDecoration: 'underline', fontSize: '20px' }}
          >
            Go to Classic SQL Attack Lab
          </a>
        </div>

        {/* Right Side - Vertically Centered Introduction Text */}
        <div style={{ 
          flex: 1,
          padding: '20px',
          backgroundColor: '#1a2147',
          borderRadius: '5px',
          color: '#fff',
          fontFamily: 'Georgia, serif',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflowY: 'auto'
        }}>
          <h2 style={{ color: '#5DADE2', marginBottom: '15px' }}>Introduction to Classic SQL Injection</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
            Classic SQL Injection is a type of security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. It occurs when user input is improperly sanitized, allowing malicious SQL code to be inserted into a query.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
            This can lead to unauthorized access to sensitive data, modification or deletion of data, and in some cases, full control over the database server. Understanding classic SQL injection is crucial for developing secure applications and protecting data integrity.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            In this lab, you will explore the fundamentals of classic SQL injection attacks, learn how to detect them, and practice mitigation techniques.
          </p>
        </div>
      </div>

      {/* Navigation Button at Bottom */}
      <div style={{
        padding: '20px',
        backgroundColor: '#1a2147',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Link 
          to="/Sql-Injection/initial-quiz"
          style={{
            backgroundColor: '#5DADE2',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{ fontSize: '20px' }}>←</span>
          Return to Initial Quiz
        </Link>
        <Link 
                            to="/"
                            style={{
                              backgroundColor: '#5DADE2',
                              color: '#fff',
                              padding: '15px 30px',
                              borderRadius: '5px',
                              textDecoration: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px'
                            }}
                          >
                            <span style={{ fontSize: '20px' }}>🏠</span>
                            Return to Home
                          </Link>
        <Link 
          to="/Sql-Injection/attack-pages/union-based-injection"
          style={{
            backgroundColor: '#5DADE2',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          Next Attack: Union-Based Injection
          <span style={{ fontSize: '20px' }}>→</span>
        </Link>
      </div>
    </div>
  );
};

export default ClassicSqlInjection;
