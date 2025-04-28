import React from 'react';
import { Link } from 'react-router-dom';

const SpoofingHome = () => {
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
          Spoofing: Identity Deception Techniques
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
            Explore the world of spoofing attacks, from email and DNS to IP address manipulation. 
            Learn through practical labs, interactive exercises, and real-world examples.
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
              <h3 style={{ color: '#F1C40F', marginBottom: '15px' }}>Attack Techniques</h3>
              <ul style={{ listStyle: 'disc', marginLeft: '20px' }}>
                <li>Email Header Manipulation</li>
                <li>DNS Cache Poisoning</li>
                <li>IP Address Spoofing</li>
                <li>ARP Spoofing Methods</li>
                <li>MAC Address Spoofing</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px' }}>Defense Strategies</h3>
              <ul style={{ listStyle: 'disc', marginLeft: '20px' }}>
                <li>Email Authentication (SPF/DKIM)</li>
                <li>DNSSEC Implementation</li>
                <li>Network Monitoring</li>
                <li>Traffic Validation</li>
                <li>Security Protocols</li>
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
              Test your current knowledge of spoofing attacks and defense mechanisms.
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '22px' }}>
              2. Comprehensive Article
            </h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              In-depth coverage of spoofing techniques, detection methods, and countermeasures.
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
              <li>DNS Spoofing Lab</li>
              <li>Email Spoofing Lab</li>
              <li>IP Spoofing Lab</li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '22px' }}>
              4. Final Assessment
            </h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Comprehensive evaluation of your understanding of spoofing attacks and defenses.
            </p>
          </div>
        </div>

        {/* Start Course Button */}
        <div style={{ textAlign: 'center' }}>
          <Link 
            to="/Spoofing/Article"
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

export default SpoofingHome;
