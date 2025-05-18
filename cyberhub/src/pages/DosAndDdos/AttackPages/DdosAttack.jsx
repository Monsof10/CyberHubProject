import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { getUserProgress, updateUserProgress } from '../../../supabase/progress';
import SimpleTerminal from '../../../components/SimpleTerminal';
import AttackPagesHeader from '../../../components/AttackPagesHeader/AttackPagesHeader';

const DdosAttack = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(null);
  const [labStarted, setLabStarted] = useState(false);
  const [isUnderAttack, setIsUnderAttack] = useState(false);
  const [attackStatus, setAttackStatus] = useState('Ready');

  const [monitorOutput, setMonitorOutput] = useState([
    '[System] Monitoring system ready...',
    '[System] Waiting for commands...'
  ]);

  const handleAttackCommand = (command) => {
    console.log('Command received:', command);
    
    if (command === 'sudo python3 ddos.py') {
      console.log('Starting attack...');
      setMonitorOutput([]);  // Clear previous output
      setIsUnderAttack(true);
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.contentWindow.postMessage({ type: 'startAttack', status: 'active' }, '*');
        localStorage.setItem('ddosAttackStatus', 'active');
      }

    } else if (command === 'sudo iptables -A INPUT -s 127.0.0.0/24 -j DROP') {
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
        
        const ips = [
          "127.0.0.112", "127.0.0.165", "127.0.0.3", "127.0.0.138", 
          "127.0.0.177", "127.0.0.126", "127.0.0.52", "127.0.0.71", 
          "127.0.0.210", "127.0.0.52"
        ];
        const randomIP = ips[Math.floor(Math.random() * ips.length)];
        const log = `${timestamp} IP ${randomIP}.20 > 127.0.0.2.4000: Flags [S], seq 0, win 8192, length 0`;
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
              labs: { completed: false },
              finalQuiz: { completed: false }
            }
          };
          await updateUserProgress(user.id, initialProgress);
          setProgress(initialProgress);
        } else {
          setProgress(userProgress.progress);
        }
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };
    fetchProgress();
  }, [user, navigate]);

  const updateLabProgress = async () => {
    if (!user || !progress) return;
    
    try {
      const updatedProgress = {
        ...progress,
        dosddos: {
          ...progress.dosddos,
          labs: {
            ...progress.dosddos.labs,
            completed: true,
            ddosCompleted: true
          }
        }
      };

      await updateUserProgress(user.id, updatedProgress);
      setProgress(updatedProgress);
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const proceedToLab = async () => {
    setShowNetworkArch(false);
    setLabStarted(true);
    await updateLabProgress();
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
                A Distributed Denial of Service (DDoS) attack leverages multiple compromised systems (botnets) to overwhelm a target. Unlike a regular DoS attack that uses a single source, DDoS attacks coordinate traffic from numerous distributed sources, making them more difficult to mitigate.
              </p>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Components</h2>
              <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li><strong>Command & Control Server:</strong> Coordinates the attack across multiple compromised systems.</li>
                <li><strong>Botnet Network:</strong> Multiple compromised systems distributed across different networks.</li>
                <li><strong>Network Infrastructure:</strong> Routes attack traffic from multiple sources to the target.</li>
                <li><strong>Target System:</strong> The victim server facing simultaneous attacks from multiple sources.</li>
              </ul>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Attack Flow</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                The attacker's command center coordinates multiple compromised systems to simultaneously flood the target with traffic. Each botnet member generates requests, creating a massive distributed attack that's harder to block than single-source attacks. The target system becomes overwhelmed trying to process the high volume of requests from multiple sources.
              </p>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Why It Matters</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Understanding DDoS architecture is crucial because these attacks are more complex and challenging to defend against than single-source DoS attacks. The distributed nature requires sophisticated detection and mitigation strategies, often involving traffic analysis across multiple network points and coordinated defense mechanisms.
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
            }}>Distributed-Denial-Of-Service(DDoS) Attack Lab</h1>
            
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
                <li>Learn about DDoS attacks and their impact on networks</li>
                <li>Identify different types of DDoS attacks and their techniques</li>
                <li>Monitor network congestion and packet loss</li>
                <li>Implement mitigation strategies to defend against DDoS attacks</li>
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
            }}>sudo python3 ddos.py</pre>
            <p style={{ marginTop: '10px' }}>
              • <span style={{color: '#40E0D0'}}>sudo</span> – Runs the command with superuser (admin) privileges.
            </p>
            <p>
              • <span style={{color: '#40E0D0'}}>python3</span> – Invokes the Python 3 interpreter to run a Python script.
            </p>
            <p>
              • <span style={{color: '#40E0D0'}}>ddos.py</span> – The Python script being executed which is carrying the ai model that will launch the attack.
            </p>
            <p style={{ marginTop: '10px' }}>2. Watch the Monitoring Terminal to see the attack progress and then click on the link again , DON'T refresh the old website because the attack is being fetched , we are using a local storage in the backend to organise events for the website , no need to confuse yourself , just click the link after and before running commands and you will understand </p>
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
            }}>sudo iptables -A INPUT -s 127.0.0.0/24 -j DROP</pre>
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
              • <span style={{color: '#40E0D0'}}>-s 127.0.0.0/24</span> – Specifies the source IP address range to match (here, all IPs from 127.0.0.0 to 127.0.0.255).And in our case the ip of the wesbite is "127.0.0.2.4000" and it's recieving a huge number of requests from multiple ips , unlike normal dos attack ,just 1 ip , that's the difference , ddos (distributed) it uses multiple botnets , you can see also the different ips from the monitoring terminal 
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
            to="/DosAndDdos/AttackPages/DosNormal"
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
            Previous: Dos Attack
          </Link>
        </div>
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
          Next: SlowLoris Attack 
          <span style={{ fontSize: '20px' }}>→</span>
        </Link>
      </div>
    </div>
  );
};

export default DdosAttack;
