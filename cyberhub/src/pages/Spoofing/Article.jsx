import React from 'react';
import { Link } from 'react-router-dom';
import AttackPagesHeader from '../../components/AttackPagesHeader/AttackPagesHeader';

const Article = () => {
  return (
    <div style={{ 
      backgroundColor: '#151B3B',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <AttackPagesHeader pageType="spoofing" />
      <div style={{
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
            Understanding Spoofing Attacks
          </h1>

          {/* Definition Section */}
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
            }}>What is Spoofing?</h2>

            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
              Spoofing is a type of cyber attack where an attacker disguises themselves as a trusted source to gain unauthorized access, steal data, or spread malware. The attacker falsifies data to hide their true identity and pretends to be a legitimate entity or device to deceive systems and users.
            </p>

            <div style={{
              backgroundColor: '#151B3B',
              padding: '20px',
              borderRadius: '5px',
              fontSize: '18px'
            }}>
              <strong style={{ color: '#F1C40F' }}>Key Point:</strong> Spoofing attacks exploit the trust relationships between systems and users, making them particularly dangerous in network communications and authentication processes.
            </div>
          </div>

          {/* Types of Spoofing Section */}
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
            }}>Common Types of Spoofing</h2>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '24px' }}>
                1. DNS Spoofing
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                Also known as DNS cache poisoning, this attack corrupts Domain Name System data stored in the DNS resolver's cache, causing the name server to return an incorrect IP address and diverting traffic to the attacker's computer.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                DNS Spoofing can be used to redirect users to malicious websites, intercept sensitive information, or launch further attacks such as phishing or malware distribution.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                Defenses against DNS Spoofing include using DNSSEC to authenticate DNS responses, regularly clearing DNS caches, and monitoring DNS traffic for anomalies.
              </p>
              <div style={{
                backgroundColor: '#151B3B',
                padding: '15px',
                borderRadius: '5px',
                fontSize: '16px'
              }}>
                Impact: Users are redirected to malicious websites while believing they're visiting legitimate ones
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '24px' }}>
                2. IP Spoofing
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                Attackers create IP packets with a forged source IP address to hide their identity or impersonate another computing system. This can be used to bypass IP-based authentication or launch DDoS attacks.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                IP Spoofing is often used in man-in-the-middle attacks, session hijacking, and to overwhelm targets with traffic in denial-of-service attacks.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                Mitigation techniques include ingress and egress filtering, packet filtering, and using secure authentication methods that do not rely solely on IP addresses.
              </p>
              <div style={{
                backgroundColor: '#151B3B',
                padding: '15px',
                borderRadius: '5px',
                fontSize: '16px'
              }}>
                Impact: Network infiltration, man-in-the-middle attacks, and unauthorized access
              </div>
            </div>


            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '24px' }}>
                3. Email Spoofing
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                Involves forging email headers to make messages appear as if they came from a legitimate source. Often used in phishing attacks and social engineering attempts.
              </p>
              <div style={{
                backgroundColor: '#151B3B',
                padding: '15px',
                borderRadius: '5px',
                fontSize: '16px'
              }}>
                Impact: Phishing scams, corporate espionage, and spread of malware
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '24px' }}>
                4. MAC Spoofing
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                Modifies the Media Access Control (MAC) address of a network interface to impersonate a legitimate device or bypass MAC-based filtering.
              </p>
              <div style={{
                backgroundColor: '#151B3B',
                padding: '15px',
                borderRadius: '5px',
                fontSize: '16px'
              }}>
                Impact: Network access control bypass and device impersonation
              </div>
            </div>
          </div>

          {/* Attack Methods Section */}
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
            }}>Common Attack Methods</h2>

            <ul style={{ 
              fontSize: '18px',
              lineHeight: '1.6',
              listStyle: 'disc',
              marginLeft: '20px'
            }}>
              <li>Packet manipulation and injection</li>
              <li>ARP cache poisoning</li>
              <li>DNS cache poisoning</li>
              <li>Header manipulation in emails</li>
              <li>MAC address cloning</li>
              <li>Session hijacking</li>
            </ul>
          </div>

          {/* Prevention Methods */}
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
            }}>Protection Methods</h2>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '20px' }}>
                1. Authentication Protocols
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Implement SPF, DKIM, and DMARC for email authentication
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '20px' }}>
                2. Encryption
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Use SSL/TLS for secure communications and DNSSEC for DNS security
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '20px' }}>
                3. Network Security
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Implement packet filtering, ingress/egress filtering, and secure network protocols
              </p>
            </div>

            <div>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '20px' }}>
                4. Monitoring
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Regular network monitoring and traffic analysis to detect suspicious activities
              </p>
            </div>
          </div>
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
              Watch this video to get an overview of Spoofing attacks:
            </p>
            <a 
              href="https://www.youtube.com/watch?v=uo53e8PkYqc&ab_channel=IDSTRONG" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#F1C40F',
                fontSize: '18px',
                textDecoration: 'underline'
              }}
            >
              Spoofing Attack Video Preview
            </a>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '40px'
          }}>
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
              to="/Spoofing/InitialQuiz"
              style={{
                backgroundColor: '#F1C40F',
                color: '#000',
                padding: '15px 30px',
                borderRadius: '5px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              Start The Quiz
              <span style={{ fontSize: '20px' }}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
