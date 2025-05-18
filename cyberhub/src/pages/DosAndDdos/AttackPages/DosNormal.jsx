import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { getUserProgress, updateUserProgress } from '../../../supabase/progress';
import SimpleTerminal from '../../../components/SimpleTerminal';
import AttackPagesHeader from '../../../components/AttackPagesHeader/AttackPagesHeader';

const DosNormal = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [labStarted, setLabStarted] = useState(false);
  const [progress, setProgress] = useState(null);
  const [labCompleted, setLabCompleted] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchProgress = async () => {
      try {
        const userProgress = await getUserProgress(user.id);
        if (!userProgress?.progress?.dosddos) {
          const initialProgress = {
            ...userProgress?.progress,
            dosddos: {
              article: { completed: false, progress: 0 },
              initialQuiz: { completed: false },
              labs: { completed: false, currentLab: 'dos', labsCompleted: [] },
              finalQuiz: { completed: false }
            }
          };
          await updateUserProgress(user.id, initialProgress);
          setProgress(initialProgress);
        } else {
          setProgress(userProgress.progress);
          // Check if this lab was already completed
          setLabCompleted(userProgress.progress.dosddos.labs?.labsCompleted?.includes('dos') || false);
        }
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };
    fetchProgress();
  }, [user, navigate]);
  const [isUnderAttack, setIsUnderAttack] = useState(false);
  const [attackStatus, setAttackStatus] = useState('Ready');

  const [monitorOutput, setMonitorOutput] = useState([
    '[System] Monitoring system ready...',
    '[System] Waiting for commands...'
  ]);

  const updateLabProgress = async () => {
    if (!user || !progress) return;

    const updatedProgress = {
      ...progress,
      dosddos: {
        ...progress.dosddos,
        labs: {
          completed: true,
          currentLab: 'dos',
          labsCompleted: [...(progress.dosddos.labs?.labsCompleted || []), 'dos']
        }
      }
    };

    try {
      await updateUserProgress(user.id, updatedProgress);
      setProgress(updatedProgress);
      setLabCompleted(true);
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const handleAttackCommand = async (command) => {
    console.log('Command received:', command);
    
    if (command === 'sudo python3 launch_dos.py') {
      console.log('Starting attack...');
      setMonitorOutput([]);  // Clear previous output
      setIsUnderAttack(true);
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.contentWindow.postMessage({ type: 'startAttack', status: 'active' }, '*');
        localStorage.setItem('ddosAttackStatus', 'active');
      }

    } else if (command === 'sudo iptables -A INPUT -s 127.0.0.3 -j DROP') {
      console.log('Stopping attack...');
      setIsUnderAttack(false);
      setMonitorOutput(['[System] Attack stopped.', '[System] Waiting for commands...']);
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.contentWindow.postMessage({ type: 'stopAttack', status: 'stopped' }, '*');
        localStorage.setItem('ddosAttackStatus', 'stopped');
      }
      // Update progress when lab is completed
      if (!labCompleted) {
        await updateLabProgress();
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
        
        const log = `${timestamp} IP 127.0.0.3.20 > 127.0.0.2.4000: Flags [S], seq 0, win 8192, length 0`;
        setMonitorOutput(prev => [...prev, log]);
      }, 50);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isUnderAttack]);

  const [showNetworkArch, setShowNetworkArch] = useState(false);

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
                A Denial of Service (DoS) attack targets a single system by overwhelming it with a flood of traffic or requests from a single source. The attack exploits the limited resources of the target system, such as bandwidth, CPU, or memory.
              </p>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Components</h2>
              <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li><strong>Attacker System:</strong> Single source generating high-volume traffic or resource-intensive requests.</li>
                <li><strong>Network Infrastructure:</strong> Carries the attack traffic to the target system.</li>
                <li><strong>Target System:</strong> The victim server that becomes overwhelmed and unresponsive.</li>
              </ul>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Attack Flow</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                The attacker initiates a flood of requests or packets from their system to the target. As the target's resources become consumed handling these requests, legitimate users experience degraded service or complete unavailability. The attack continues until the target's resources are exhausted or defensive measures are implemented.
              </p>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Why It Matters</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Understanding DoS attack architecture is crucial for implementing effective defenses. While simpler than distributed attacks, DoS attacks can still cause significant disruption, making it essential to recognize their patterns and deploy appropriate countermeasures like rate limiting and traffic filtering.
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

  if (!showNetworkArch && !labStarted) {
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
            }}>Denial-of-Service (DoS) Attack Lab</h1>
            
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
                <li>Learn about DoS attacks and their impact on networks</li>
                <li>Understand how DoS attacks overwhelm target systems</li>
                <li>Monitor network traffic and resource utilization</li>
                <li>Implement mitigation strategies against DoS attacks</li>
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
            }}>sudo python3 launch_dos.py</pre>
            <p style={{ marginTop: '10px' }}>
              • <span style={{color: '#40E0D0'}}>sudo</span> – Runs the command with superuser (admin) privileges.
            </p>
            <p>
              • <span style={{color: '#40E0D0'}}>python3</span> – Invokes the Python 3 interpreter to run a Python script.
            </p>
            <p>
              • <span style={{color: '#40E0D0'}}>launch_dos.py</span> – The Python script that initiates the basic DoS attack by overwhelming the target with requests.
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
            }}>sudo iptables -A INPUT -s 127.0.0.3 -j DROP</pre>
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
              • <span style={{color: '#40E0D0'}}>-s 127.0.0.3</span> – Specifies the source IP address to match.
            </p>
            <p>
              • <span style={{color: '#40E0D0'}}>-j DROP</span> – Tells iptables to drop any matching packets (ignore and do not respond).
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
            to="/DosAndDdos/Article"
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
            Previous: Article
          </Link>
        </div>
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
          Next: DDoS Attack
          <span style={{ fontSize: '20px' }}>→</span>
        </Link>
      </div>
    </div>
  );
};

export default DosNormal;
