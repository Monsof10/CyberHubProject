import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import XtermTerminal from '../../../components/XtermTerminal';
import AttackPagesHeader from '../../../components/AttackPagesHeader/AttackPagesHeader';

const DnsSpoofing = () => {
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
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <AttackPagesHeader pageType="spoofing" />
        <div style={{
          flex: 1,
          color: '#fff',
          padding: '40px',
          fontFamily: 'Georgia, serif'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ 
              color: '#5DADE2', 
              fontSize: '36px',
              marginBottom: '30px'
            }}>DNS Spoofing Attack Lab</h1>
            
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
                This lab contains 3 Python script files that will guide you through understanding, detecting, and mitigating a DNS spoofing attack:
              </p>
              <ul style={{ 
                textAlign: 'left',
                fontSize: '18px',
                lineHeight: '1.6',
                marginBottom: '30px'
              }}>
                <li><code>dnspt1.py</code> - <strong>Detection Phase:</strong> Helps you identify DNS spoofing by checking DNS resolution and system configurations</li>
                <li><code>dnspt2.py</code> - <strong>Analysis Phase:</strong> Guides you through cross-checking with trusted DNS servers and confirming the attack</li>
                <li><code>dnspt3.py</code> - <strong>Remediation Phase:</strong> Walks you through the steps to fix the spoofed DNS settings and restore proper resolution</li>
              </ul>
              <div style={{
                backgroundColor: '#151B3B',
                padding: '15px',
                borderRadius: '5px',
                marginBottom: '20px'
              }}>
                <p style={{ fontSize: '16px', margin: 0 }}>
                  <strong style={{ color: '#F1C40F' }}>How it works:</strong> These scripts will simulate a DNS spoofing attack where a malicious actor has modified your system to redirect traffic to a fake website. You'll learn how to identify the attack, analyze what happened, and fix the issue step by step.
                </p>
              </div>
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
        <AttackPagesHeader pageType="spoofing" />
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
                In this DNS spoofing lab, we'll explore how attackers can manipulate DNS queries to redirect users to malicious websites. The network setup includes legitimate DNS servers, a victim's computer, and an attacker attempting to intercept and modify DNS responses.
              </p>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Components</h2>
              <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li><strong>Legitimate DNS Server:</strong> The authentic DNS server that normally responds to DNS queries</li>
                <li><strong>Victim's Computer:</strong> The target system making DNS queries</li>
                <li><strong>Attacker's System:</strong> The malicious entity intercepting and modifying DNS responses</li>
                <li><strong>Network Infrastructure:</strong> The network components through which DNS traffic flows</li>
              </ul>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Attack Flow</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                1. The victim's computer sends a DNS query to resolve a domain name
                2. The attacker intercepts this query using various techniques
                3. Instead of allowing the legitimate response, the attacker sends a spoofed DNS response
                4. The victim's computer receives the spoofed response and is directed to a malicious IP address
              </p>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Security Implications</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                DNS spoofing can lead to various security issues including phishing attacks, malware distribution, and man-in-the-middle attacks. Understanding this attack helps in implementing proper DNS security measures like DNSSEC and DNS over HTTPS.
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
      backgroundColor: '#151B3B'
    }}>
      <AttackPagesHeader pageType="spoofing" />
      <div style={{ 
        display: 'flex', 
        flex: 1,
        height: 'calc(100vh - 100px)',
        overflow: 'hidden'
      }}>
        {/* Terminal Section - Left Side */}
        <div style={{ 
          flex: 1,
          padding: '20px',
          borderRight: '1px solid #5DADE2'
        }}>
          <div style={{
            backgroundColor: '#1a2147',
            height: '100%',
            borderRadius: '5px',
            padding: '10px'
          }}>
            <XtermTerminal />
          </div>
        </div>

        {/* Instructions Section - Right Side */}
        <div style={{ 
          flex: 1,
          padding: '20px',
          color: '#fff',
          backgroundColor: '#1a2147',
          borderRadius: '5px',
          height: 'calc(100vh - 140px)',
          overflowY: 'auto',
          position: 'relative'
        }}>
          <h2 style={{ 
            color: '#5DADE2',
            fontSize: '24px',
            marginBottom: '20px'
          }}>Lab Instructions</h2>

          <div style={{
            backgroundColor: '#1a2147',
            padding: '20px',
            borderRadius: '5px',
            marginBottom: '20px'
          }}>
            <h3 style={{ 
              color: '#5DADE2',
              fontSize: '20px',
              marginBottom: '15px'
            }}>Step 1: Detecting DNS Spoofing</h3>
            <pre style={{
              backgroundColor: '#151B3B',
              padding: '15px',
              borderRadius: '5px',
              overflowX: 'auto',
              marginBottom: '15px'
            }}>
{`# Navigate to the dns_spoofing directory
cd ~/dns_spoofing
# Run the detection script
python3 dnspt1.py

# Check DNS resolver configuration
cat /etc/resolv.conf

# Test domain resolution
nslookup cyberhub.com`}
            </pre>
            <div style={{ marginTop: '10px', color: '#888' }}>
              <p style={{ marginBottom: '10px' }}>Command explanations:</p>
              <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><code>python3 dnspt1.py</code>: Run the detection script that performs comprehensive DNS spoofing checks</li>
                <li style={{ marginBottom: '8px' }}><code>cat /etc/resolv.conf</code>: Display DNS resolver configuration to identify unauthorized DNS servers</li>
                <li style={{ marginBottom: '8px' }}><code>nslookup cyberhub.com</code>: Test domain resolution to detect potential DNS hijacking</li>
              </ul>
            </div>
          </div>

          <div style={{
            backgroundColor: '#1a2147',
            padding: '20px',
            borderRadius: '5px',
            marginBottom: '20px'
          }}>
            <h3 style={{ 
              color: '#5DADE2',
              fontSize: '20px',
              marginBottom: '15px'
            }}>Step 2: Analyzing DNS Resolution</h3>
            <pre style={{
              backgroundColor: '#151B3B',
              padding: '15px',
              borderRadius: '5px',
              overflowX: 'auto'
            }}>
{`# Run the analysis tool
python3 dnspt2.py

# Cross-check with trusted DNS server
dig @8.8.8.8 cyberhub.com

# Check hosts file for malicious entries
grep cyberhub.com /etc/hosts`}
            </pre>
            <div style={{ marginTop: '10px', color: '#888' }}>
              <p style={{ marginBottom: '10px' }}>Command explanations:</p>
              <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><code>python3 dnspt2.py</code>: Run analysis script for deeper investigation</li>
                <li style={{ marginBottom: '8px' }}><code>dig @8.8.8.8 cyberhub.com</code>: Query trusted DNS server to verify resolution</li>
                <li style={{ marginBottom: '8px' }}><code>grep cyberhub.com /etc/hosts</code>: Check for malicious host file entries</li>
              </ul>
            </div>
          </div>

          <div style={{
            backgroundColor: '#1a2147',
            padding: '20px',
            borderRadius: '5px'
          }}>
            <h3 style={{ 
              color: '#5DADE2',
              fontSize: '20px',
              marginBottom: '15px'
            }}>Step 3: Fixing DNS Spoofing</h3>
            <pre style={{
              backgroundColor: '#151B3B',
              padding: '15px',
              borderRadius: '5px',
              overflowX: 'auto'
            }}>
{`# Run the remediation script
python3 dnspt3.py

# Remove malicious entries
sudo sed -i '/cyberhub.com/d' /etc/hosts

# Verify removal
grep 'cyberhub.com' /etc/hosts || echo 'No entries found'

# Add correct DNS entry
echo '172.67.182.31 cyberhub.com' | sudo tee -a /etc/hosts

# Verify new entry
grep 'cyberhub.com' /etc/hosts

# Clear DNS cache
sudo systemd-resolve --flush-caches

# Verify DNS resolution
nslookup cyberhub.com

# Test HTTPS connection
curl -Is https://cyberhub.com | head -n 1`}            </pre>
            <div style={{ marginTop: '10px', color: '#888' }}>
              <p style={{ marginBottom: '10px' }}>Command explanations:</p>
              <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><code>python3 dnspt3.py</code>: Run the remediation script that guides you through the process of fixing DNS spoofing issues</li>
                <li style={{ marginBottom: '8px' }}><code>sudo sed -i '/cyberhub.com/d' /etc/hosts</code>: Remove any existing entries for cyberhub.com from the hosts file</li>
                <li style={{ marginBottom: '8px' }}><code>grep 'cyberhub.com' /etc/hosts || echo 'No entries found'</code>: Check if any cyberhub.com entries remain in the hosts file, displaying "No entries found" if none exist</li>
                <li style={{ marginBottom: '8px' }}><code>echo '172.67.182.31 cyberhub.com' | sudo tee -a /etc/hosts</code>: Add the correct IP address mapping for cyberhub.com to the hosts file</li>
                <li style={{ marginBottom: '8px' }}><code>grep 'cyberhub.com' /etc/hosts</code>: Verify that the new legitimate entry was added correctly to the hosts file</li>
                <li style={{ marginBottom: '8px' }}><code>sudo systemd-resolve --flush-caches</code>: Clear the system's DNS cache to ensure it starts using the new DNS settings</li>
                <li style={{ marginBottom: '8px' }}><code>nslookup cyberhub.com</code>: Verify that the domain now resolves to the correct IP address</li>
                <li style={{ marginBottom: '8px' }}><code>curl -Is https://cyberhub.com | head -n 1</code>: Test the HTTPS connection to verify the website is accessible and returns a valid response</li>
              </ul><p>These commands help you systematically remove malicious DNS entries, add correct ones, and verify that everything is working properly.</p>
              <div style={{
                backgroundColor: '#0b1437',
                padding: '20px',
                borderRadius: '5px',
                marginTop: '20px',
                color: '#F1C40F',
                fontSize: '18px'
              }}>
                <h3 style={{ marginTop: 0, marginBottom: '10px' }}>Note on Attack Files</h3>
                <p>
                  The files you ran are premade attack files done to show you how you can mitigate a DNS spoofing attack. Those commands represent real life scenarios. In the next levels you will learn how can you start these attacks by yourself
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{
        padding: '20px',
        backgroundColor: '#1a2147',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Link 
          to="/Spoofing/AttackPages/CommonAttacks"
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
          Back to Common Attacks
        </Link>
        <Link 
          to="/Spoofing/AttackPages/IpSpoofing"
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
          Next: IP Spoofing Lab
          <span style={{ fontSize: '20px' }}>→</span>
        </Link>
      </div>
    </div>
  );
};

export default DnsSpoofing;
