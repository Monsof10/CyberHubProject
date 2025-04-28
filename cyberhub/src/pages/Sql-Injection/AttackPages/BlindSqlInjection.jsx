import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlindSqlInjection = () => {
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
          }}>Blind SQL Injection Lab</h1>
          
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
              <li>Master Boolean-based blind injection</li>
              <li>Learn time-based blind techniques</li>
              <li>Practice data extraction without output</li>
              <li>Implement detection mechanisms</li>
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
            The link below will take you to the Blind SQL Attack Lab environment where you can practice and explore classic SQL injection techniques in a controlled setting.
          </p>
          <a 
            href="https://blindsql.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#F1C40F', textDecoration: 'underline', fontSize: '20px' }}
          >
            Go to Blind SQL Attack Lab
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
          <h2 style={{ color: '#5DADE2', marginBottom: '15px' }}>Introduction to Blind SQL Injection</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
          Blind SQL Injection is a type of security vulnerability that allows an attacker to interfere with the queries an application makes to its database — even when the application does not visibly display error messages or query results. It occurs when user input is not properly sanitized, allowing malicious SQL code to be inserted into queries. Unlike classic SQL injection, blind SQLi does not reveal data directly through the web page. Instead, attackers infer information by observing the application's behavior, such as differences in response time, HTTP status codes, or the presence or absence of specific content..
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
          This can lead to unauthorized access to sensitive data, modification or deletion of records, and in some cases, full control over the database server — even without directly viewing the database output. Understanding Blind SQL Injection is crucial for building secure applications, especially since its subtle nature often allows it to bypass basic security checks. Properly validating and sanitizing user input is essential to protect data confidentiality, integrity, and overall system security.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            In this lab, you will explore the fundamentals of blind SQL injection attacks, learn how to detect them, and practice mitigation techniques.
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
          <span style={{ fontSize: '20px' }}>←</span>
          Previous: Union-Based Injection
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
          to="/Sql-Injection/final-quiz"
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
          Next: Final Quiz
          <span style={{ fontSize: '20px' }}>→</span>
        </Link>
      </div>
    </div>
  );
};

export default BlindSqlInjection;
