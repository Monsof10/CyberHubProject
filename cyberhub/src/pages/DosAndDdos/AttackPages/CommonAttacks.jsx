import React from 'react';
import { Link } from 'react-router-dom';
import AttackPagesHeader from '../../../components/AttackPagesHeader/AttackPagesHeader';

const CommonAttacks = () => {
  return (
    <div style={{ 
      backgroundColor: '#151B3B',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <AttackPagesHeader pageType="dos" />
      <div style={{
        padding: '40px',
        fontFamily: 'Georgia, serif',
        color: '#fff',
        flex: 1
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ 
            color: '#5DADE2', 
            fontSize: '48px',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Common DoS/DDoS Attacks and Mitigation
          </h1>

          {/* ICMP Flood Attack */}
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px',
            border: '1px solid #5DADE2'
          }}>
            <h2 style={{ color: '#F1C40F', marginBottom: '20px', fontSize: '28px' }}>
              ICMP Flood Attack
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
              An ICMP (Internet Control Message Protocol) flood attack, also known as a Ping flood, overwhelms a target system with ICMP echo request (ping) packets. The target must process and respond to each request, consuming bandwidth and processing power.
            </p>
            <div style={{
              backgroundColor: '#151B3B',
              padding: '20px',
              borderRadius: '5px',
              marginBottom: '20px'
            }}>
              <h3 style={{ color: '#5DADE2', marginBottom: '10px' }}>Mitigation Commands:</h3>
              <pre style={{ 
                backgroundColor: '#0d1117', 
                padding: '15px',
                borderRadius: '5px',
                overflowX: 'auto'
              }}>
{`# Linux iptables rules to limit ICMP
iptables -A INPUT -p icmp -m limit --limit 1/s --limit-burst 1 -j ACCEPT
iptables -A INPUT -p icmp -j DROP

# Windows Firewall (PowerShell)
New-NetFirewallRule -DisplayName "ICMP Rate Limit" -Protocol ICMPv4 -IcmpType 8 -Action Allow -ThrottleLimit 10`}
              </pre>
            </div>
          </div>

          {/* SYN Flood Attack */}
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px',
            border: '1px solid #5DADE2'
          }}>
            <h2 style={{ color: '#F1C40F', marginBottom: '20px', fontSize: '28px' }}>
              SYN Flood Attack
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
              A SYN flood attack exploits the TCP three-way handshake by sending numerous SYN packets without completing the handshake. This leaves the server with many half-open connections, exhausting its resources.
            </p>
            <div style={{
              backgroundColor: '#151B3B',
              padding: '20px',
              borderRadius: '5px',
              marginBottom: '20px'
            }}>
              <h3 style={{ color: '#5DADE2', marginBottom: '10px' }}>Mitigation Commands:</h3>
              <pre style={{ 
                backgroundColor: '#0d1117', 
                padding: '15px',
                borderRadius: '5px',
                overflowX: 'auto'
              }}>
{`# Linux sysctl settings
sysctl -w net.ipv4.tcp_syncookies=1
sysctl -w net.ipv4.tcp_max_syn_backlog=2048
sysctl -w net.ipv4.tcp_synack_retries=2

# Linux iptables SYN packet rate limiting
iptables -A INPUT -p tcp --syn -m limit --limit 1/s -j ACCEPT`}
              </pre>
            </div>
          </div>

          {/* UDP Flood Attack */}
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px',
            border: '1px solid #5DADE2'
          }}>
            <h2 style={{ color: '#F1C40F', marginBottom: '20px', fontSize: '28px' }}>
              UDP Flood Attack
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
              A UDP flood attack sends a large number of UDP packets to random ports on a target system. The system becomes overwhelmed trying to process packets and determine which applications are listening on the targeted ports.
            </p>
            <div style={{
              backgroundColor: '#151B3B',
              padding: '20px',
              borderRadius: '5px',
              marginBottom: '20px'
            }}>
              <h3 style={{ color: '#5DADE2', marginBottom: '10px' }}>Mitigation Commands:</h3>
              <pre style={{ 
                backgroundColor: '#0d1117', 
                padding: '15px',
                borderRadius: '5px',
                overflowX: 'auto'
              }}>
{`# Linux iptables UDP flood protection
iptables -A INPUT -p udp -m limit --limit 50/s -j ACCEPT
iptables -A INPUT -p udp -j DROP

# Rate limit specific UDP ports (example for DNS)
iptables -A INPUT -p udp --dport 53 -m limit --limit 50/s -j ACCEPT`}
              </pre>
            </div>
          </div>

          {/* General Best Practices */}
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px',
            border: '1px solid #5DADE2'
          }}>
            <h2 style={{ color: '#F1C40F', marginBottom: '20px', fontSize: '28px' }}>
              General Mitigation Best Practices
            </h2>
            <ul style={{ fontSize: '18px', lineHeight: '1.6', listStyle: 'disc', marginLeft: '20px' }}>
              <li>Implement rate limiting at network and application levels</li>
              <li>Use DDoS mitigation services or CDNs</li>
              <li>Monitor network traffic patterns</li>
              <li>Configure timeout values appropriately</li>
              <li>Keep systems and security patches up to date</li>
              <li>Have incident response plans ready</li>
            </ul>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '40px'
          }}>
            <div style={{ display: 'flex', gap: '10px' }}>
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
                Home
              </Link>
              <Link 
                to="/DosAndDdos/AttackPages/HttpFloodAttack"
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
                <span style={{ fontSize: '20px' }}>←</span>
                Back to HTTP Flood
              </Link>
            </div>
            
            <Link 
              to="/DosAndDdos/FinalQuiz"
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
              Go to Final Quiz
              <span style={{ fontSize: '20px' }}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonAttacks;
