 import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AttackPagesHeader from '../../../components/AttackPagesHeader/AttackPagesHeader';
import ModuleProgressCircle from '../../../components/ModuleProgressCircle';
import { AuthContext } from '../../../context/AuthContext';

const OutOfBandInjection = () => {
  const [labStarted, setLabStarted] = useState(false);
  const [showNetworkArch, setShowNetworkArch] = useState(false);
  const { user } = useContext(AuthContext);

  // Module progress data
  const moduleData = {
    status: 'lab_started',
    component_progress: {
      article: { completed: true, started: true },
      initial_quiz: { completed: true, started: true },
      labs: {
        first: { completed: true, started: true },
        second: { started: true, completed: false },
        third: { started: false, completed: false }
      },
      final_quiz: { started: false, completed: false }
    }
  };

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
        <div style={{ position: 'relative' }}>
          <AttackPagesHeader pageType="sql" />
          {user && (
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              zIndex: 1000
            }}>
              <ModuleProgressCircle 
                module={moduleData}
                size="small"
              />
            </div>
          )}
        </div>
        <div style={{
          padding: '40px',
          fontFamily: 'Georgia, serif'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
<h1 style={{ 
  color: '#5DADE2', 
  fontSize: '36px',
  marginBottom: '30px'
}}>Out-of-Band SQL Injection Lab</h1>
            
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
    <li>Understand Out-of-Band SQL injection techniques</li>
    <li>Learn how to detect and exploit OOB SQL injection</li>
    <li>Practice using DNS and HTTP channels for data exfiltration</li>
    <li>Implement defensive strategies against OOB SQL injection</li>
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
  <div style={{ position: 'relative' }}>
    <AttackPagesHeader pageType="sql" />
    {user && (
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '20px',
        transform: 'translateY(-50%)',
        zIndex: 1000
      }}>
        <ModuleProgressCircle 
          module={moduleData}
          size="small"
        />
      </div>
    )}
  </div>
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
          Out-of-Band SQL injection exploits the ability to trigger SQL queries that cause the database to make DNS or HTTP requests to an attacker-controlled server, allowing data exfiltration through these channels.
        </p>
      </section>
      <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
        <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Components</h2>
        <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '20px' }}>
          <li><strong>Web Application Server:</strong> Processes user inputs and constructs SQL queries that trigger OOB requests.</li>
          <li><strong>Database Server:</strong> Executes queries that cause DNS or HTTP requests to attacker-controlled servers.</li>
          <li><strong>Result Processing Layer:</strong> Handles indirect data exfiltration via OOB channels.</li>
        </ul>
      </section>
      <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
        <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Attack Flow</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          The attacker crafts SQL queries that cause the database to make external requests, such as DNS lookups or HTTP calls, to attacker-controlled servers. These requests carry sensitive data, enabling data extraction without direct query results.
        </p>
      </section>
      <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
        <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Why It Matters</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Understanding Out-of-Band SQL injection is important because it allows attackers to bypass traditional detection methods and extract data through indirect channels, making it a stealthy and powerful attack vector.
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
      <div style={{ position: 'relative' }}>
        <AttackPagesHeader pageType="sql" />
        {user && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            zIndex: 1000
          }}>
            <ModuleProgressCircle 
              module={moduleData}
              size="small"
            />
          </div>
        )}
      </div>
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
            The link below will take you to the Out-of-Band SQL Attack Lab environment where you can practice and explore out-of-band SQL injection techniques in a controlled setting.
          </p>
          <a 
            href="https://outofbandsql.onrender.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#F1C40F', textDecoration: 'underline', fontSize: '20px' }}
          >
            Go to Out-of-Band SQL Attack Lab
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
          <h2 style={{ color: '#5DADE2', marginBottom: '15px' }}>Introduction to Out-of-Band SQL Injection</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
            Out-of-Band SQL Injection is a technique that leverages the ability of the database to make DNS or HTTP requests to attacker-controlled servers, allowing data to be exfiltrated through these channels.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
            Successful exploitation requires understanding how to trigger these external requests and how to detect the data sent through them. Proper defenses include network restrictions and input validation.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            In this lab, you will learn how to identify, exploit, and mitigate out-of-band SQL injection vulnerabilities.
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
          to="/Sql-Injection/AttackPages/ClassicSqlInjection"
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
          Previous: Classic SQL Injection
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
          to="/Sql-Injection/AttackPages/BlindSqlInjection"
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
          Next Attack: Blind SQL Injection
          <span style={{ fontSize: '20px' }}>→</span>
        </Link>
      </div>
    </div>
  );
};

export default OutOfBandInjection;
