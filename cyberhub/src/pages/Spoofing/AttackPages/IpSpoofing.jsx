import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import XtermTerminal from '../../../components/XtermTerminal';
import AttackPagesHeader from '../../../components/AttackPagesHeader/AttackPagesHeader';

const IpSpoofing = () => {
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
            }}>IP Spoofing Attack Lab</h1>
            
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
              }}>Available Scripts</h2>
              <p style={{ 
                fontSize: '18px',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                These Python scripts will guide you through understanding and executing IP spoofing attacks:
              </p>
              <ul style={{ 
                textAlign: 'left',
                fontSize: '18px',
                lineHeight: '1.6',
                marginBottom: '30px'
              }}>
                <li><code>ipspoofpt1.py</code> - <strong>Basic IP Spoofing:</strong> Learn how to create and send packets with forged source IP addresses</li>
                <li><code>ipspoofpt2.py</code> - <strong>Advanced Techniques:</strong> Explore IP flooding attacks using multiple spoofed addresses</li>
              </ul>
              <div style={{
                backgroundColor: '#151B3B',
                padding: '15px',
                borderRadius: '5px',
                marginBottom: '20px'
              }}>
                <p style={{ fontSize: '16px', margin: 0 }}>
                  <strong style={{ color: '#F1C40F' }}>How it works:</strong> These scripts simulate IP spoofing attacks in a controlled environment, demonstrating how attackers can forge packet source addresses to impersonate other systems or launch denial-of-service attacks.
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
                In this IP spoofing lab, we'll explore how attackers can forge the source IP addresses of network packets. The network setup includes target systems, an attacker's machine, and network infrastructure that processes and routes these spoofed packets.
              </p>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Components</h2>
              <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li><strong>Target System:</strong> The destination for spoofed packets</li>
                <li><strong>Attacker's Machine:</strong> The system generating packets with forged source IPs</li>
                <li><strong>Network Routers:</strong> Infrastructure devices that forward packets based on destination IP</li>
                <li><strong>Legitimate Hosts:</strong> Systems whose IP addresses are being spoofed</li>
              </ul>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Attack Flow</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                1. Attacker crafts network packets with forged source IP addresses
                2. These packets are injected into the network
                3. Network infrastructure routes packets based on destination IP
                4. Target system receives packets and responds to the spoofed source addresses
              </p>
            </section>
            <section style={{ marginBottom: '20px', backgroundColor: '#0b1437', padding: '20px', borderRadius: '8px', width: '100%' }}>
              <h2 style={{ color: '#F1C40F', fontSize: '28px', marginBottom: '10px' }}>Security Implications</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                IP spoofing enables various attacks including denial-of-service attacks, man-in-the-middle attacks, and bypass of IP-based authentication. Understanding this technique is crucial for implementing proper network security measures like ingress/egress filtering and source address validation.
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
            }}>Step 1: Basic IP Spoofing</h3>
            <pre style={{
              backgroundColor: '#151B3B',
              padding: '15px',
              borderRadius: '5px',
              overflowX: 'auto',
              marginBottom: '15px'
            }}>
{`# Run the basic IP spoofing script
python3 ipspoofpt1.py

# Check network interfaces
ip a

# View routing table
ip route

# Test connectivity to spoofed IP
ping -c 3 192.168.1.100

# View ARP cache
arp -a`}
            </pre>
            <div style={{ marginTop: '20px', color: '#fff' }}>
              <h4 style={{ color: '#5DADE2', marginBottom: '10px' }}>Command Explanations:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '25px' }}>
                  <code style={{ color: '#F1C40F' }}>python3 ipspoofpt1.py</code>
                  <p>Executes the basic IP spoofing script that creates and sends a packet with a forged source IP address (192.168.1.100). This demonstrates how attackers can masquerade as different hosts.</p>
                  <div style={{ marginTop: '10px', marginLeft: '15px', fontSize: '0.9em', color: '#888' }}>
                    <p><strong>Command Breakdown:</strong></p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>• python3: The Python interpreter (version 3)</li>
                      <li>• ipspoofpt1.py: The name of our Python script file for basic IP spoofing</li>
                    </ul>
                  </div>
                </li>
                <li style={{ marginBottom: '25px' }}>
                  <code style={{ color: '#F1C40F' }}>ip a</code>
                  <p>Shows detailed information about all network interfaces on the system. This helps verify our network configuration and identify the interfaces available for the attack.</p>
                  <div style={{ marginTop: '10px', marginLeft: '15px', fontSize: '0.9em', color: '#888' }}>
                    <p><strong>Command Breakdown:</strong></p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>• ip: The command for managing and displaying network interfaces</li>
                      <li>• a: Short for "address", shows all interface addresses and their details</li>
                    </ul>
                  </div>
                </li>
                <li style={{ marginBottom: '25px' }}>
                  <code style={{ color: '#F1C40F' }}>ip route</code>
                  <p>Displays the system's routing table, showing how packets will be directed to different networks. This helps understand the path our spoofed packets will take.</p>
                  <div style={{ marginTop: '10px', marginLeft: '15px', fontSize: '0.9em', color: '#888' }}>
                    <p><strong>Command Breakdown:</strong></p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>• ip: The network configuration command</li>
                      <li>• route: Subcommand to show routing table information and manage routes</li>
                    </ul>
                  </div>
                </li>
                <li style={{ marginBottom: '25px' }}>
                  <code style={{ color: '#F1C40F' }}>ping -c 3 192.168.1.100</code>
                  <p>Sends 3 ICMP echo requests to the spoofed IP address. This verifies if the address is actually in use and helps demonstrate the difference between real and spoofed addresses.</p>
                  <div style={{ marginTop: '10px', marginLeft: '15px', fontSize: '0.9em', color: '#888' }}>
                    <p><strong>Command Breakdown:</strong></p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>• ping: The ICMP echo request tool</li>
                      <li>• -c: Flag to specify count (number of packets)</li>
                      <li>• 3: Number of ping packets to send</li>
                      <li>• 192.168.1.100: Target IP address to ping</li>
                    </ul>
                  </div>
                </li>
                <li style={{ marginBottom: '25px' }}>
                  <code style={{ color: '#F1C40F' }}>arp -a</code>
                  <p>Shows the system's ARP (Address Resolution Protocol) cache, which maps IP addresses to MAC addresses. This helps verify that our spoofed IP isn't associated with a real device on the network.</p>
                  <div style={{ marginTop: '10px', marginLeft: '15px', fontSize: '0.9em', color: '#888' }}>
                    <p><strong>Command Breakdown:</strong></p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>• arp: The Address Resolution Protocol command</li>
                      <li>• -a: Flag to display all entries in the ARP table</li>
                    </ul>
                  </div>
                </li>
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
            }}>Step 2: Advanced IP Spoofing and ARP Manipulation</h3>
            <pre style={{
              backgroundColor: '#151B3B',
              padding: '15px',
              borderRadius: '5px',
              overflowX: 'auto',
              marginBottom: '15px'
            }}>
{`# Run the IP flooding script
python3 ipspoofpt2.py

# Test initial connectivity
ping -c 3 192.168.1.1

# Monitor ARP traffic
sudo tcpdump -i eth0 -n 'arp' -c 5

# Delete ARP entry
sudo arp -d 192.168.1.1

# Add static ARP entry
sudo arp -s 192.168.1.1 00:1a:2b:3c:4d:5e

# View updated ARP cache
arp -a

# Test final connectivity
ping -c 3 192.168.1.1`}
            </pre>
            <div style={{ marginTop: '20px', color: '#fff' }}>
              <h4 style={{ color: '#5DADE2', marginBottom: '10px' }}>Command Explanations:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '25px' }}>
                  <code style={{ color: '#F1C40F' }}>python3 ipspoofpt2.py</code>
                  <p>Executes the advanced IP spoofing script that performs IP flooding with multiple spoofed addresses. This demonstrates how attackers can overwhelm network devices with fake traffic.</p>
                  <div style={{ marginTop: '10px', marginLeft: '15px', fontSize: '0.9em', color: '#888' }}>
                    <p><strong>Command Breakdown:</strong></p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>• python3: The Python interpreter (version 3)</li>
                      <li>• ipspoofpt2.py: The advanced IP flooding script file</li>
                    </ul>
                  </div>
                </li>
                <li style={{ marginBottom: '25px' }}>
                  <code style={{ color: '#F1C40F' }}>ping -c 3 192.168.1.1</code>
                  <p>Initial connectivity test to the target IP address. This establishes a baseline for normal network behavior before manipulation.</p>
                  <div style={{ marginTop: '10px', marginLeft: '15px', fontSize: '0.9em', color: '#888' }}>
                    <p><strong>Command Breakdown:</strong></p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>• ping: The ICMP echo request tool</li>
                      <li>• -c: Flag to specify count of packets</li>
                      <li>• 3: Number of packets to send</li>
                      <li>• 192.168.1.1: Target gateway IP address</li>
                    </ul>
                  </div>
                </li>
                <li style={{ marginBottom: '25px' }}>
                  <code style={{ color: '#F1C40F' }}>sudo tcpdump -i eth0 -n 'arp' -c 5</code>
                  <p>Captures and displays 5 ARP packets on the eth0 interface. This allows us to monitor ARP traffic and observe how devices communicate at the link layer.</p>
                  <div style={{ marginTop: '10px', marginLeft: '15px', fontSize: '0.9em', color: '#888' }}>
                    <p><strong>Command Breakdown:</strong></p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>• sudo: Run command with administrative privileges</li>
                      <li>• tcpdump: Network packet analyzer tool</li>
                      <li>• -i: Interface flag</li>
                      <li>• eth0: Network interface name</li>
                      <li>• -n: Don't convert addresses to names</li>
                      <li>• 'arp': Filter for ARP packets only</li>
                      <li>• -c 5: Capture only 5 packets</li>
                    </ul>
                  </div>
                </li>
                <li style={{ marginBottom: '25px' }}>
                  <code style={{ color: '#F1C40F' }}>sudo arp -d 192.168.1.1</code>
                  <p>Removes the ARP cache entry for the target IP address. This clears any existing IP-to-MAC address mappings, preparing for our spoofed entry.</p>
                  <div style={{ marginTop: '10px', marginLeft: '15px', fontSize: '0.9em', color: '#888' }}>
                    <p><strong>Command Breakdown:</strong></p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>• sudo: Run with administrative privileges</li>
                      <li>• arp: ARP table manipulation command</li>
                      <li>• -d: Delete flag</li>
                      <li>• 192.168.1.1: Target IP to remove from ARP cache</li>
                    </ul>
                  </div>
                </li>
                <li style={{ marginBottom: '25px' }}>
                  <code style={{ color: '#F1C40F' }}>sudo arp -s 192.168.1.1 00:1a:2b:3c:4d:5e</code>
                  <p>Creates a static ARP entry with a spoofed MAC address. This demonstrates how attackers can manipulate the ARP cache to redirect traffic.</p>
                  <div style={{ marginTop: '10px', marginLeft: '15px', fontSize: '0.9em', color: '#888' }}>
                    <p><strong>Command Breakdown:</strong></p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>• sudo: Run with administrative privileges</li>
                      <li>• arp: ARP table manipulation command</li>
                      <li>• -s: Set/add static entry flag</li>
                      <li>• 192.168.1.1: IP address to map</li>
                      <li>• 00:1a:2b:3c:4d:5e: Spoofed MAC address to associate with the IP</li>
                    </ul>
                  </div>
                </li>
                <li style={{ marginBottom: '25px' }}>
                  <code style={{ color: '#F1C40F' }}>arp -a</code>
                  <p>Displays the ARP cache again to verify our static entry was added successfully. This confirms the manipulation of the IP-to-MAC mapping.</p>
                  <div style={{ marginTop: '10px', marginLeft: '15px', fontSize: '0.9em', color: '#888' }}>
                    <p><strong>Command Breakdown:</strong></p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>• arp: ARP table command</li>
                      <li>• -a: Show all entries flag</li>
                    </ul>
                  </div>
                </li>
                <li style={{ marginBottom: '25px' }}>
                  <code style={{ color: '#F1C40F' }}>ping -c 3 192.168.1.1</code>
                  <p>Final connectivity test to observe how network behavior has changed after ARP cache manipulation. This demonstrates the impact of our spoofing attack.</p>
                  <div style={{ marginTop: '10px', marginLeft: '15px', fontSize: '0.9em', color: '#888' }}>
                    <p><strong>Command Breakdown:</strong></p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>• ping: The ICMP echo request tool</li>
                      <li>• -c: Flag to specify count of packets</li>
                      <li>• 3: Number of packets to send</li>
                      <li>• 192.168.1.1: Target gateway IP to test</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <p>Now Continue To Test Your Knowledge</p>
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
                The files you ran are premade attack files done to show you how you can mitigate an IP spoofing attack. Those commands represent real life scenarios.
              </p>
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
          to="/Spoofing/AttackPages/DnsSpoofing"
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
          Previous: DNS Spoofing
        </Link>
        <Link 
          to="/Spoofing/final-quiz"
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
          Continue to Final Quiz
          <span style={{ fontSize: '20px' }}>→</span>
        </Link>
      </div>
    </div>
  );
};

export default IpSpoofing;
