import React from 'react';
import { Link } from 'react-router-dom';


const DosArticle = () => {
  return (
    <div style={{ 
      backgroundColor: '#151B3B',
      color: '#fff',
      minHeight: '100vh',
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
          <Link 
            to="/DosAndDdos/InitialQuiz"
            style={{
              backgroundColor: '#F1C40F',
              color: '#000',
              padding: '15px 30px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontSize: '18px'
            }}
          >
            Take Initial Quiz →
          </Link>
        </div>
      </div>
    </div>
  );
};

// Wrap the component with chat assistant
export default DosArticle ;
