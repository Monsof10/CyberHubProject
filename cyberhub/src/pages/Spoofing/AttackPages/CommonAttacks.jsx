import React from 'react';
import { Link } from 'react-router-dom';

const CommonAttacks = () => {
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
          fontSize: '36px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>Common Spoofing Attacks</h1>

        {/* Email Spoofing Section */}
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
          }}>Email Spoofing</h2>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#F1C40F', marginBottom: '15px' }}>What is Email Spoofing?</h3>
            <p style={{ lineHeight: '1.6' }}>
              Email spoofing is the creation of email messages with a forged sender address. 
              Attackers often use this technique in phishing campaigns and social engineering attacks.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#F1C40F', marginBottom: '15px' }}>Common Techniques</h3>
            <ul style={{ lineHeight: '1.6', marginLeft: '20px' }}>
              <li>Header Manipulation</li>
              <li>SMTP Server Exploitation</li>
              <li>Display Name Spoofing</li>
              <li>Domain Lookalike Attacks</li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#F1C40F', marginBottom: '15px' }}>Mitigation Commands</h3>
            <pre style={{
              backgroundColor: '#151B3B',
              padding: '15px',
              borderRadius: '5px',
              overflowX: 'auto',
              marginBottom: '15px'
            }}>
{`# Check SPF Record
dig TXT example.com

# Verify DKIM Signature
openssl dgst -sha256 -verify public.key -signature sig.txt email.txt

# Configure Postfix with DMARC
postconf -e 'smtpd_relay_restrictions = reject_unauth_destination'
postconf -e 'smtpd_sender_restrictions = reject_unknown_sender_domain'`}
            </pre>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#F1C40F', marginBottom: '15px' }}>Protection Measures</h3>
            <ul style={{ lineHeight: '1.6', marginLeft: '20px' }}>
              <li>Implement SPF (Sender Policy Framework)
                <pre style={{ backgroundColor: '#151B3B', padding: '10px', marginTop: '5px' }}>
                  v=spf1 ip4:192.0.2.0/24 include:_spf.example.com -all
                </pre>
              </li>
              <li>Set up DKIM (DomainKeys Identified Mail)
                <pre style={{ backgroundColor: '#151B3B', padding: '10px', marginTop: '5px' }}>
                  sudo opendkim-genkey -t -s mail -d example.com
                </pre>
              </li>
              <li>Configure DMARC Policy
                <pre style={{ backgroundColor: '#151B3B', padding: '10px', marginTop: '5px' }}>
                  v=DMARC1; p=reject; rua=mailto:reports@example.com
                </pre>
              </li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#F1C40F',
            color: '#000',
            padding: '15px',
            borderRadius: '5px',
            marginTop: '20px'
          }}>
            <strong>Best Practice:</strong> Always implement all three protocols (SPF, DKIM, and DMARC) 
            together for maximum protection against email spoofing attacks.
          </div>
        </div>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '30px'
        }}>
          <Link 
            to="/Spoofing/Article"
            style={{
              backgroundColor: '#5DADE2',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none'
            }}
          >
            ← Back to Article
          </Link>
          <Link 
            to="/Spoofing/AttackPages/DnsSpoofing"
            style={{
              backgroundColor: '#5DADE2',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none'
            }}
          >
            Continue to DNS Spoofing Lab →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommonAttacks;
