import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SimpleTerminal from '../../../components/SimpleTerminal';

const HttpFloodAttack = () => {
  const [labStarted, setLabStarted] = useState(false);
  const [isUnderAttack, setIsUnderAttack] = useState(false);
  const [attackStatus, setAttackStatus] = useState('Ready');

  const [monitorOutput, setMonitorOutput] = useState([
    '[System] Monitoring system ready...',
    '[System] Waiting for commands...'
  ]);

  const handleAttackCommand = (command) => {
    console.log('Command received:', command);
    
    if (command === 'sudo python3 launch_httpflood.py') {
      console.log('Starting attack...');
      setMonitorOutput([]);  // Clear previous output
      setIsUnderAttack(true);
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.contentWindow.postMessage({ type: 'startAttack', status: 'active' }, '*');
        localStorage.setItem('ddosAttackStatus', 'active');
      }

    } else if (command === 'sudo iptables -A INPUT -p tcp --dport 80 -m limit --limit 100/minute -j ACCEPT') {
      console.log('Stopping attack...');
      setIsUnderAttack(false);
      setMonitorOutput(['[System] Attack stopped.', '[System] Waiting for commands...']);
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.contentWindow.postMessage({ type: 'stopAttack', status: 'stopped' }, '*');
        localStorage.setItem('ddosAttackStatus', 'stopped');
      }
    }
  };

  useEffect(() => {
    let interval;
    if (isUnderAttack) {
      interval = setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
        const timestamp = `${hours}:${minutes}:${seconds}.${milliseconds}`;
        
        // Generate random port between 50000-60000
        const port = Math.floor(50000 + Math.random() * 10000);
        // Generate random sequence numbers and timestamps
        const clientSeq = Math.floor(Math.random() * 4294967295);
        const serverSeq = Math.floor(Math.random() * 4294967295);
        const tsVal = Math.floor(2524600000 + Math.random() * 100000);
        const tsEcr = Math.floor(2298200000 + Math.random() * 100000);
        
        // Simulate a complete HTTP request/response exchange
        const logs = [
          // Initial SYN
          `${timestamp} IP 127.0.0.1.${port} > 127.0.0.2.4000: Flags [S], seq ${clientSeq}, win 65495, options [mss 65495,sackOK,TS val ${tsVal} ecr 0,nop,wscale 7], length 0`,
          // SYN-ACK
          `${timestamp} IP 127.0.0.2.4000 > 127.0.0.1.${port}: Flags [S.], seq ${serverSeq}, ack ${clientSeq + 1}, win 65483, options [mss 65495,sackOK,TS val ${tsEcr} ecr ${tsVal},nop,wscale 7], length 0`,
          // ACK
          `${timestamp} IP 127.0.0.1.${port} > 127.0.0.2.4000: Flags [.], ack 1, win 512, options [nop,nop,TS val ${tsVal} ecr ${tsEcr}], length 0`,
          // HTTP Request (PSH, ACK)
          `${timestamp} IP 127.0.0.1.${port} > 127.0.0.2.4000: Flags [P.], seq 1:36, ack 1, win 512, options [nop,nop,TS val ${tsVal} ecr ${tsEcr}], length 35`,
          // ACK of request
          `${timestamp} IP 127.0.0.2.4000 > 127.0.0.1.${port}: Flags [.], ack 36, win 512, options [nop,nop,TS val ${tsEcr} ecr ${tsVal}], length 0`,
          // FIN from client
          `${timestamp} IP 127.0.0.1.${port} > 127.0.0.2.4000: Flags [F.], seq 36, ack 1, win 512, options [nop,nop,TS val ${tsVal} ecr ${tsEcr}], length 0`,
          // Response data + ACK of FIN
          `${timestamp} IP 127.0.0.2.4000 > 127.0.0.1.${port}: Flags [P.], seq 1:188, ack 37, win 512, options [nop,nop,TS val ${tsEcr + 1} ecr ${tsVal}], length 187`,
          // RST from client
          `${timestamp} IP 127.0.0.1.${port} > 127.0.0.2.4000: Flags [R], seq ${clientSeq + 37}, win 0, length 0`
        ];
        
        // Add all logs to the output
        setMonitorOutput(prev => [...prev, ...logs]);
      }, 50);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isUnderAttack]);

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
          }}>HTTP Flood Attack Lab</h1>
          
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
              <li>Learn about HTTP Flood attacks and their impact on web servers</li>
              <li>Understand how HTTP Flood overwhelms target systems</li>
              <li>Monitor HTTP request patterns and server responses</li>
              <li>Implement mitigation strategies against HTTP Flood attacks</li>
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
            onClick={() => setLabStarted(true)}
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
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: '20px',
      height: 'calc(100vh - 80px)',
      padding: '20px',
      backgroundColor: '#151B3B',
      overflowY: 'auto'
    }}>
      {/* Attack Terminal */}
      <div style={{
        backgroundColor: '#1a2147',
        borderRadius: '5px',
        padding: '20px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'calc(50vh - 60px)',
        overflowY: 'auto'
      }}>
        <h3 style={{ color: '#5DADE2', marginBottom: '15px', flexShrink: 0 }}>Attack Terminal</h3>
        <div style={{ flexGrow: 1, minHeight: '300px' }}>
          <SimpleTerminal onCommand={handleAttackCommand} />
        </div>
      </div>

      {/* Instructions */}
      <div style={{
        backgroundColor: '#1a2147',
        borderRadius: '5px',
        padding: '20px',
        color: '#fff',
        maxHeight: 'calc(50vh - 60px)',
        overflowY: 'auto'
      }}>
        <h3 style={{ color: '#5DADE2', marginBottom: '15px' }}>Instructions</h3>
        <div style={{
          backgroundColor: '#151B3B',
          padding: '15px',
          borderRadius: '5  px',
          marginBottom: '15px'
        }}>
          <h4 style={{ color: '#F1C40F', marginBottom: '10px' }}>Step 1: Launch the Attack</h4>
          <p>1. In the Attack Terminal, type and run:</p>
          <pre style={{ 
            backgroundColor: '#000', 
            padding: '10px', 
            borderRadius: '5px',
            marginTop: '10px',
            color: '#5DADE2'
          }}>sudo python3 launch_httpflood.py</pre>
<p style={{ marginTop: '10px' }}>
• <span style={{color: '#40E0D0'}}>sudo</span> – Runs the command with superuser (admin) privileges.
</p>
<p>
• <span style={{color: '#40E0D0'}}>python3</span> – Invokes the Python 3 interpreter to run a Python script.
</p>
<p>
• <span style={{color: '#40E0D0'}}>launch_httpflood.py</span> – The Python script that initiates the HTTP Flood attack by sending a high volume of HTTP requests.
</p>
          <p style={{ marginTop: '10px' }}>2. Watch the Monitoring Terminal to see the attack progress and then click on the link again</p>
          <p style={{ marginTop: '10px' }}>3. The target website should become unresponsive</p>
        </div>
        <div style={{
          backgroundColor: '#151B3B',
          padding: '15px',
          borderRadius: '5px'
        }}>
          <h4 style={{ color: '#F1C40F', marginBottom: '10px' }}>Step 2: Stop the Attack</h4>
          <p>1. Once the website is unresponsive, type and run:</p>
          <pre style={{ 
            backgroundColor: '#000', 
            padding: '10px', 
            borderRadius: '5px',
            marginTop: '10px',
            color: '#5DADE2'
          }}>sudo iptables -A INPUT -p tcp --dport 80 -m limit --limit 100/minute -j ACCEPT</pre>
<p style={{ marginTop: '10px' }}>
• <span style={{color: '#40E0D0'}}>sudo</span> – Runs the command with superuser (admin) privileges.
</p>
<p>
• <span style={{color: '#40E0D0'}}>iptables</span> – The command-line utility to set up, maintain, and inspect Linux firewall rules.
</p>
<p>
• <span style={{color: '#40E0D0'}}>-A INPUT</span> – Appends (-A) a rule to the INPUT chain (which handles incoming traffic).
</p>
<p>
• <span style={{color: '#40E0D0'}}>-p tcp --dport 80</span> – Matches TCP packets destined for port 80 (HTTP).
</p>
<p>
• <span style={{color: '#40E0D0'}}>-m limit --limit 100/minute</span> – Limits requests to 100 per minute per IP.
</p>
<p>
• <span style={{color: '#40E0D0'}}>-j ACCEPT</span> – Tells iptables to accept matching packets (all others will be dropped by default policy).
</p>
          <p style={{ marginTop: '10px' }}>2. Watch the Monitoring Terminal - traffic should normalize</p>
          <p style={{ marginTop: '10px' }}>3. The target website should become responsive again</p>
        </div>
      </div>

      {/* Monitoring Terminal */}
      <div style={{
        backgroundColor: '#1a2147',
        borderRadius: '5px',
        padding: '20px',
        color: '#fff',
        maxHeight: 'calc(50vh - 60px)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h3 style={{ color: '#5DADE2', marginBottom: '15px', flexShrink: 0 }}>Monitoring Terminal</h3>
        <div style={{ 
          flexGrow: 1,
          backgroundColor: '#000',
          borderRadius: '5px',
          padding: '10px',
          overflowY: 'auto',
          minHeight: '200px'
        }}>
          {monitorOutput.map((line, i) => (
            <div 
              key={i}
              style={{
                color: line.includes('normalizing') || line.includes('<100ms') ? '#44ff44' : '#ff4444',
                marginBottom: '5px',
                fontFamily: 'monospace',
                fontSize: '14px'
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Target Website */}
      <div style={{
        backgroundColor: '#151B3B',
        borderRadius: '10px',
        padding: '20px',
        color: '#fff'
      }}>
        <h2 style={{ 
          color: '#5DADE2', 
          marginBottom: '20px',
          fontSize: '28px',
          fontWeight: 'normal'
        }}>Target Website</h2>
          <div style={{
            backgroundColor: '#1a2147',
            padding: '20px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            <div style={{
              backgroundColor: '#151B3B',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '10px'
            }}>
              <div 
                onClick={() => {
                  if (isUnderAttack) {
                    const win = window.open('', '_blank');
                    win.document.write(`
                      <!DOCTYPE html>
                      <html>
                      <head>
                          <title>This site can't be reached</title>
                          <style>
                              body {
                                  font-family: -apple-system, system-ui, sans-serif;
                                  padding: 40px;
                                  color: #202124;
                              }
                              .error-icon {
                                  font-size: 48px;
                                  margin-bottom: 20px;
                              }
                              .title {
                                  font-size: 20px;
                                  font-weight: 500;
                                  marginBottom: 8px;
                              }
                              .subtitle {
                                  color: #5f6368;
                                  marginBottom: 20px;
                              }
                              .try-list {
                                  color: #5f6368;
                                  padding-left: 20px;
                              }
                              .try-list li {
                                  margin: 8px 0;
                              }
                              .error-code {
                                  color: #5f6368;
                                  margin-top: 20px;
                                  margin-bottom: 20px;
                              }
                              .btn {
                                  padding: 8px 16px;
                                  border-radius: 4px;
                                  font-size: 14px;
                                  cursor: pointer;
                              }
                              .reload {
                                  background: #1a73e8;
                                  color: white;
                                  border: none;
                                  margin-right: 12px;
                              }
                              .details {
                                  background: white;
                                  color: #1a73e8;
                                  border: 1px solid #dadce0;
                              }
                          </style>
                      </head>
                      <body>
                          <div class="error-icon">⚠️</div>
                          <div class="title">This site can't be reached</div>
                          <div class="subtitle">blairhotels.com took too long to respond.</div>
                          
                          <div>Try:</div>
                          <ul class="try-list">
                              <li>Checking the connection</li>
                              <li>Checking the proxy and the firewall</li>
                              <li>Running Windows Network Diagnostics</li>
                          </ul>

                          <div class="error-code">ERR_CONNECTION_TIMED_OUT</div>

                          <button class="btn reload">Reload</button>
                          <button class="btn details">Details</button>
                      </body>
                      </html>
                    `);
                  } else {
                    window.open('https://blairhotels.com', '_blank');
                  }
                }}
                style={{
                  color: '#5DADE2',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                https://blairhotels.com
              </div>
            </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '16px' }}>Status:</span>
            <span style={{ 
              color: isUnderAttack ? '#ff4444' : '#44ff44', 
              fontSize: '16px' 
            }}>
              {isUnderAttack ? 'Offline' : 'Online'}
            </span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '16px' }}>Response Time:</span>
            <span style={{ 
              color: isUnderAttack ? '#ff4444' : '#5DADE2', 
              fontSize: '16px' 
            }}>
              {isUnderAttack ? `>${Math.floor(2000 + Math.random() * 1000)}ms` : '<100ms'}
            </span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '16px' }}>Traffic:</span>
            <span style={{ 
              color: isUnderAttack ? '#ff4444' : '#5DADE2', 
              fontSize: '16px' 
            }}>
              {isUnderAttack ? `${Math.floor(10000 + Math.random() * 5000)} req/s` : 'Normal'}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '20px',
        backgroundColor: '#1a2147',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link 
            to="/"
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
            <span style={{ fontSize: '20px' }}>🏠</span>
            Home
          </Link>
          <Link 
            to="/DosAndDdos/AttackPages/SlowlorisAttack"
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
            Previous: Slowloris Attack
          </Link>
        </div>
        <Link 
          to="/DosAndDdos/AttackPages/CommonAttacks"
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
          Next: See Common Attacks 
          <span style={{ fontSize: '20px' }}>→</span>
        </Link>
      </div>
    </div>
  );
};

export default HttpFloodAttack;
