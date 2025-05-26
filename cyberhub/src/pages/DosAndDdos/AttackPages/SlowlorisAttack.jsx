import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SimpleTerminal from '../../../components/SimpleTerminal';
import { AuthContext } from '../../../context/AuthContext';
import { getUserProgress, updateUserProgress, createUserProgress } from '../../../supabase/progress';
import AttackPagesHeader from '../../../components/AttackPagesHeader/AttackPagesHeader';

const SlowlorisAttack = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [labStarted, setLabStarted] = useState(false);
  const [showNetworkArch, setShowNetworkArch] = useState(false);
  const [isUnderAttack, setIsUnderAttack] = useState(false);
  const [attackStatus, setAttackStatus] = useState('Ready');
  const [labCompleted, setLabCompleted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [monitorOutput, setMonitorOutput] = useState([
    '[System] Monitoring system ready...',
    '[System] Waiting for commands...'
  ]);

  const saveProgress = async () => {
    if (!user || !labCompleted) return;
    
    setIsSaving(true);
    try {
      const existingProgress = await getUserProgress(user.id);
      
      const newProgress = {
        ...existingProgress?.progress,
        dosddos: {
          ...existingProgress?.progress?.dosddos,
          slowlorisAttack: {
            completed: true,
            completedAt: new Date().toISOString()
          }
        }
      };

      if (existingProgress) {
        await updateUserProgress(user.id, newProgress);
      } else {
        await createUserProgress(user.id, newProgress);
      }
    } catch (error) {
      console.error('Error saving progress:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleAttackCommand = (command) => {
    console.log('Command received:', command);
    
    if (command === 'sudo python3 launch_slowloris.py') {
      console.log('Starting attack...');
      setMonitorOutput([]);  // Clear previous output
      setIsUnderAttack(true);
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.contentWindow.postMessage({ type: 'startAttack', status: 'active' }, '*');
        localStorage.setItem('ddosAttackStatus', 'active');
      }

    } else if (command === 'sudo iptables -A INPUT -p tcp --syn --dport 4000 -m connlimit --connlimit-above 20 -j DROP') {
      console.log('Stopping attack...');
      setIsUnderAttack(false);
      setMonitorOutput(['[System] Attack stopped.', '[System] Waiting for commands...']);
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.contentWindow.postMessage({ type: 'stopAttack', status: 'stopped' }, '*');
        localStorage.setItem('ddosAttackStatus', 'stopped');
      }
      // Mark lab as completed when attack is successfully stopped
      setLabCompleted(true);
      saveProgress();
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    let interval;
    if (isUnderAttack) {
      interval = setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
        const timestamp = `${hours}:${minutes}:${seconds}.${milliseconds}`;
        
        // Generate random port between 30000-60000
        const port = Math.floor(30000 + Math.random() * 30000);
        // Generate random sequence number
        const seq = Math.floor(Math.random() * 4294967295);
        const log = `${timestamp} IP 127.0.0.1.${port} > 127.0.0.2.4000: Flags [S], seq ${seq}, win 65495, options [mss 65495,sackOK,TS val ${Math.floor(Math.random() * 4294967295)} ecr 0,nop,wscale 7], length 0`;
        setMonitorOutput(prev => [...prev, log]);
      }, 50);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isUnderAttack]);

  const startLab = () => {
    setShowNetworkArch(true);
  };

  const proceedToLab = () => {
    setShowNetworkArch(false);
    setLabStarted(true);
  };

  const errorPageHtml = `
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
                margin-bottom: 8px;
            }
            .subtitle {
                color: #5f6368;
                margin-bottom: 20px;
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
  `;

  if (showNetworkArch) {
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            maxWidth: '900px',
            width: '100%'
          }}>
            <h1 style={{ color: '#5DADE2', fontSize: '36px', marginBottom: '30px', textAlign: 'center' }}>
              Network Architecture Explanation
            </h1>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Overview</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Slowloris is a low-bandwidth DDoS attack that works by keeping many HTTP connections open for as long as possible. Unlike traditional DDoS attacks that flood servers with traffic, Slowloris achieves denial of service by slowly and partially completing HTTP requests.
              </p>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Components</h2>
              <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li><strong>Web Server:</strong> The target system with limited connection pool.</li>
                <li><strong>Connection Pool:</strong> Server's capacity to handle concurrent connections.</li>
                <li><strong>HTTP Headers:</strong> Partial headers sent to keep connections alive.</li>
                <li><strong>Connection Timeout:</strong> Server's wait time for complete requests.</li>
                <li><strong>Attacker Client:</strong> System maintaining multiple incomplete connections.</li>
              </ul>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Attack Flow</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                1. Attacker opens multiple connections to the target server.<br/>
                2. Each connection sends partial HTTP headers periodically.<br/>
                3. Server keeps connections open waiting for completion.<br/>
                4. Connection pool becomes exhausted with incomplete requests.<br/>
                5. Legitimate users cannot establish new connections.
              </p>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Why It Matters</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Understanding Slowloris architecture is crucial because it's particularly effective against Apache and similar servers. The attack requires minimal bandwidth and appears legitimate in logs. Proper implementation of connection timeouts, rate limiting, and reverse proxy configurations are essential countermeasures.
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

  if (!labStarted && !showNetworkArch) {
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
          color: '#fff'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ 
              color: '#5DADE2', 
              fontSize: '36px',
              marginBottom: '30px'
            }}>Slowloris Attack Lab</h1>
            
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
                <li>Learn about Slowloris attacks and their impact on web servers</li>
                <li>Understand how Slowloris keeps connections open indefinitely</li>
                <li>Monitor server resource exhaustion</li>
                <li>Implement mitigation strategies against Slowloris attacks</li>
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

  return (
    <div style={{ 
      backgroundColor: '#151B3B',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <AttackPagesHeader pageType="dos" />
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '20px',
        padding: '20px',
        flex: 1,
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
            borderRadius: '5px',
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
            }}>sudo python3 launch_slowloris.py</pre>
            <p style={{ marginTop: '10px' }}>
              • <span style={{color: '#40E0D0'}}>sudo</span> – Runs the command with superuser (admin) privileges.
            </p>
            <p>
              • <span style={{color: '#40E0D0'}}>python3</span> – Invokes the Python 3 interpreter to run a Python script.
            </p>
            <p>
              • <span style={{color: '#40E0D0'}}>launch_slowloris.py</span> – The Python script that initiates a Slowloris attack by keeping many connections open indefinitely.
            </p>
            <p style={{ marginTop: '10px' }}>2. Watch the Monitoring Terminal to see the attack progress and then click on the link again , DON'T refresh the old website because the attack is being fetched , we are using a local storage in the backend to organise events for the website , no need to confuse yourself , just click the link after and before running commands and you will understand</p>
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
            }}>sudo iptables -A INPUT -p tcp --syn --dport 4000 -m connlimit --connlimit-above 20 -j DROP</pre>
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
              • <span style={{color: '#40E0D0'}}>-p tcp --syn</span> – Matches TCP SYN packets (new connection attempts).
            </p>
            <p>
              • <span style={{color: '#40E0D0'}}>--dport 4000</span> – Specifies port 4000 as the destination port, which is where the Slowloris attack is targeting.
            </p>
            <p>
              • <span style={{color: '#40E0D0'}}>-m connlimit --connlimit-above 20</span> – Limits connections to port 4000 to 20 per source IP, preventing the Slowloris attack from keeping too many connections open.
            </p>
            <p>
              • <span style={{color: '#40E0D0'}}>-j DROP</span> – Tells iptables to drop any matching packets (ignore and do not respond).
            </p>
            <p style={{ marginTop: '10px' }}>2. Watch the Monitoring Terminal - traffic should normalize</p>
            <p style={{ marginTop: '10px' }}>3. The target website should become responsive again</p>
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
                The files you ran are premade attack files done to show you how you can mitigate a Slowloris attack. Those commands represent real life scenarios. In the next levels you will learn how can you start these attacks by yourself
              </p>
            </div>
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
                    win.document.write(errorPageHtml);
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
      </div>

      {/* Navigation Footer */}
      <div style={{
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
            to="/DosAndDdos/AttackPages/DdosAttack"
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
            Previous: DDoS Attack
          </Link>
        </div>
        <Link 
          to="/DosAndDdos/AttackPages/HttpFloodAttack"
          style={{
            backgroundColor: labCompleted ? '#F1C40F' : '#5DADE2',
            color: labCompleted ? '#000' : '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onClick={saveProgress}
        >
          {labCompleted ? 'Continue to HTTP Flood Attack' : 'Next: HTTP Flood Attack'}
          <span style={{ fontSize: '20px' }}>→</span>
        </Link>
      </div>
    </div>
  );
};

export default SlowlorisAttack;
