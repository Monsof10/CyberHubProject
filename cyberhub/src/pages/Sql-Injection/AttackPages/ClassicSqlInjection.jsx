import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AttackPagesHeader from '../../../components/AttackPagesHeader/AttackPagesHeader';

const ClassicSqlInjection = () => {
  const [labStarted, setLabStarted] = useState(false);
  const [showNetworkArch, setShowNetworkArch] = useState(false);

  const startLab = () => {
    setShowNetworkArch(true);
  };

  const proceedToLab = () => {
    setShowNetworkArch(false);
    setLabStarted(true);
  };

  if (!labStarted && !showNetworkArch) {
    return (
      <div style={{ 
        backgroundColor: '#151B3B',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <AttackPagesHeader pageType="sql" />
        <div style={{
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
      </div>
    );
  }

  if (showNetworkArch) {
    return (
      <div style={{
        backgroundColor: '#151B3B',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <AttackPagesHeader pageType="sql" />
        <div style={{
          padding: '40px',
          fontFamily: 'Georgia, serif'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'left',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <h1 style={{ color: '#5DADE2', fontSize: '36px', marginBottom: '30px', textAlign: 'center' }}>
              Network Architecture Explanation
            </h1>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Overview</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                In this classic SQL injection lab, the network architecture consists of a web application server connected to a backend database server. The attacker exploits unsanitized user inputs in the web application to inject malicious SQL queries, which are executed on the database server.
              </p>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Components</h2>
              <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li><strong>Web Application Server:</strong> Hosts the application interface where users input data.</li>
                <li><strong>Database Server:</strong> Stores and manages the data accessed by the web application.</li>
                <li><strong>Attacker:</strong> Sends crafted inputs to exploit vulnerabilities in the web application.</li>
              </ul>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Attack Flow</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                The attacker sends crafted input through the web interface, which is not properly sanitized, allowing malicious SQL commands to be executed on the database. This can lead to unauthorized data access or manipulation.
              </p>
              <img 
                src="https://user-images.githubusercontent.com/123456789/SQLInjectionNetworkDiagram.png" 
                alt="SQL Injection Network Architecture Diagram" 
                style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}
              />
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Why It Matters</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Understanding this architecture helps in grasping how SQL injection attacks manipulate database queries through the web interface. This knowledge is essential for developing secure applications and protecting sensitive data.
              </p>
            </section>
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={proceedToLab}
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
                Proceed to Lab
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#151B3B',
      position: 'relative'
    }}>
      <AttackPagesHeader pageType="sql" />
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
