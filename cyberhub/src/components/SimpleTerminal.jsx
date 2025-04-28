import React, { useState, useEffect, useRef } from 'react';

const SimpleTerminal = ({ onCommand }) => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [currentPath, setCurrentPath] = useState('/home/kali');
  const [commandBuffer, setCommandBuffer] = useState([]);
  const [bufferIndex, setBufferIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Simulated file system
  const fileSystem = {
    '/home/kali': {
      type: 'dir',
      contents: {
        'ddos.py': { type: 'file', content: '# DDoS Attack Script' },
        'Dos.py': { type: 'file', content: '# DoS Attack Script' },
        'http_flood.py': { type: 'file', content: '# HTTP Flood Attack Script' },
        'slowloris.py': { type: 'file', content: '# Slowloris Attack Script' }
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const getDirectoryContents = (path) => {
    const parts = path.split('/').filter(p => p);
    let current = fileSystem;
    for (const part of parts) {
      current = current[part]?.contents;
      if (!current) return null;
    }
    return current;
  };

  const getCurrentDirectory = () => {
    const contents = getDirectoryContents(currentPath);
    return contents ? Object.entries(contents).map(([name, info]) => ({
      name,
      type: info.type
    })) : [];
  };

  const handleCommand = (cmd) => {
    const parts = cmd.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Handle empty command
    if (!command) return '';

    // Handle multiple arguments for commands
    const flags = args.filter(arg => arg.startsWith('-'));
    const nonFlags = args.filter(arg => !arg.startsWith('-'));

    switch (command) {
      case 'clear':
        setCommandHistory([]);
        return '';

      case 'help':
        return `Available commands:
  ls [-l|-a]       List directory contents
                   -l: detailed view
                   -a: show hidden files
  cd [dir]         Change directory
                   ..: parent directory
                   /: root directory
                   ~: home directory
  pwd              Print working directory
  cat [file]       Display file contents
  clear            Clear terminal screen
  whoami           Print current user
  hostname         Print system hostname
  date             Print current date/time
  help             Show this help message


Notes:
- Use Tab for command/file name completion
- Use Up/Down arrows to navigate command history
- Use Ctrl+C to cancel current command
- Use Ctrl+L to clear screen (same as clear)
- All commands are case-insensitive
- Combine flags like -la for multiple options`;

      case 'ls':
        const files = getCurrentDirectory();
        const showHidden = flags.includes('-a') || flags.includes('-la') || flags.includes('-al');
        const showLong = flags.includes('-l') || flags.includes('-la') || flags.includes('-al');
        return "ddos.py Dos.py  http_flood.py  slowloris.py"; 
        // Add . and .. to directory listing
        const allFiles = [
          { name: '.', type: 'dir' },
          { name: '..', type: 'dir' },
          ...files
        ];
        
        const visibleFiles = allFiles.filter(f => showHidden || !f.name.startsWith('.'));
        
        if (showLong) {
          const now = new Date();
          return visibleFiles.map(f => {
            const isDir = f.type === 'dir';
            const perms = `${isDir ? 'd' : '-'}rwxr-xr-x`;
            const size = '4096';
            const date = now.toLocaleString('en-US', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
            const name = isDir ? `\x1b[34m${f.name}/\x1b[0m` : f.name;
            return `${perms} 1 kali kali ${size} ${date} ${name}`;
          }).join('\n');
        }
        
        return visibleFiles.map(f => 
          f.type === 'dir' ? `\x1b[34m${f.name}/\x1b[0m` : f.name
        ).join('  ');

      case 'pwd':
        return currentPath;

      case 'cd':
        if (!args[0] || args[0] === '~' || args[0] === '~/') {
          setCurrentPath('/home/kali');
          return '';
        }
        
        if (args[0] === '.') return '';
        
        if (args[0] === '..') {
          const parentPath = currentPath.split('/').slice(0, -1).join('/') || '/home/kali';
          setCurrentPath(parentPath);
          return '';
        }
        
        try {
          const resolvedPath = args[0].startsWith('~/')
            ? `/home/kali/${args[0].slice(2)}`
            : args[0].startsWith('/') 
              ? args[0]
              : `${currentPath}/${args[0]}`;
              
          // Clean up path (remove double slashes, resolve . and ..)
          const cleanPath = resolvedPath
            .replace(/\/+/g, '/')
            .replace(/\/\.\//g, '/')
            .replace(/[^/]+\/\.\.\//g, '');
            
          const targetDir = getDirectoryContents(cleanPath);
          if (!targetDir) throw new Error(`no such directory: ${args[0]}`);
          
          setCurrentPath(cleanPath);
          return '';
        } catch (error) {
          return `cd: ${error.message}`;
        }

      case 'cat':
        if (!args[0]) return 'cat: missing file operand';
        const dir = getDirectoryContents(currentPath);
        const file = dir[args[0]];
        if (!file) return `cat: ${args[0]}: No such file`;
        if (file.type !== 'file') return `cat: ${args[0]}: Is a directory`;
        return file.content;

      case 'sudo':
        const fullCommand = args.join(' ');
        if (fullCommand === 'python3 ddos.py') {
          onCommand('sudo python3 ddos.py');
          return 'Starting DDoS attack...\n' +
                 'Attack initiated successfully.\n' +
                 'Monitor the traffic in the monitoring terminal.\n' +
                 'To stop the attack, run: sudo iptables -A INPUT -s 127.0.0.0/24 -j DROP';
        } else if (fullCommand === 'iptables -A INPUT -s 127.0.0.0/24 -j DROP') {
          onCommand('sudo iptables -A INPUT -s 127.0.0.0/24 -j DROP');
          return 'Blocking attack traffic...\n' +
                 'Rule added successfully.\n' +
                 'Attack traffic has been blocked.\n' +
                 'System returning to normal operation.';
        }
        else if (fullCommand === 'python3 launch_dos.py') {
          onCommand('sudo python3 launch_dos.py');
          return 'Starting DoS attack...\n' +
                 'Attack initiated successfully.\n' +
                 'Monitor the traffic in the monitoring terminal.\n' +
                 'To stop the attack, run: sudo iptables -A INPUT -s 127.0.0.3 -j DROP';
        }
        else if (fullCommand === 'iptables -A INPUT -s 127.0.0.3 -j DROP') {
          onCommand('sudo iptables -A INPUT -s 127.0.0.3 -j DROP');
          return 'Blocking attack traffic...\n' +
                 'Rule added successfully.\n' +
                 'Attack traffic has been blocked.\n' +
                 'System returning to normal operation.';
        }
        else if (fullCommand === 'python3 launch_slowloris.py') {
          onCommand('sudo python3 launch_slowloris.py');
          return 'Starting SlowLoris attack...\n' +
                 'Attack initiated successfully.\n' +
                 'Monitor the traffic in the monitoring terminal.\n' +
                 'To stop the attack, run: sudo iptables -A INPUT -p tcp --syn --dport 4000 -m connlimit --connlimit-above 20 -j DROP';
        }
        else if (fullCommand === 'iptables -A INPUT -p tcp --syn --dport 4000 -m connlimit --connlimit-above 20 -j DROP') {
          onCommand('sudo iptables -A INPUT -p tcp --syn --dport 4000 -m connlimit --connlimit-above 20 -j DROP');
          return 'Blocking attack traffic...\n' +
                 'Rule added successfully.\n' +
                 'Attack traffic has been blocked.\n' +
                 'System returning to normal operation.';
        }
        else if (fullCommand === 'python3 launch_httpflood.py') {
          onCommand('sudo python3 launch_httpflood.py');
          return 'Starting Http Flood attack...\n' +
                 'Attack initiated successfully.\n' +
                 'Monitor the traffic in the monitoring terminal.\n' +
                 'To stop the attack, run: sudo iptables -A INPUT -p tcp --dport 80 -m limit --limit 100/minute -j ACCEPT';
        }
        else if (fullCommand === 'iptables -A INPUT -p tcp --dport 80 -m limit --limit 100/minute -j ACCEPT') {
          onCommand('sudo iptables -A INPUT -p tcp --dport 80 -m limit --limit 100/minute -j ACCEPT');
          return 'Blocking attack traffic...\n' +
                 'Rule added successfully.\n' +
                 'Attack traffic has been blocked.\n' +
                 'System returning to normal operation.';
        }

        return 'sudo: command not found or insufficient permissions';

      case 'whoami':
        return 'kali';

      case 'hostname':
        return 'kali-linux';

      case 'date':
        return new Date().toString();

      case '':
        return '';

      default:
        return `${command}: command not found`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (currentCommand.trim()) {
        setCommandBuffer(prev => [currentCommand, ...prev].slice(0, 50));
        setBufferIndex(-1);
      }
      e.preventDefault();
      
      // Add command to history
      const newHistory = [...commandHistory, { type: 'input', text: `${currentPath}$ ${currentCommand}` }];
      
      // Handle command and add output
      const output = handleCommand(currentCommand);
      if (output) {
        newHistory.push({ type: 'output', text: output });
      }

      setCommandHistory(newHistory);
      setCurrentCommand('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (bufferIndex < commandBuffer.length - 1) {
        const newIndex = bufferIndex + 1;
        setBufferIndex(newIndex);
        setCurrentCommand(commandBuffer[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (bufferIndex > 0) {
        const newIndex = bufferIndex - 1;
        setBufferIndex(newIndex);
        setCurrentCommand(commandBuffer[newIndex]);
      } else if (bufferIndex === 0) {
        setBufferIndex(-1);
        setCurrentCommand('');
      }
    } else if (e.ctrlKey) {
      if (e.key === 'c') {
        e.preventDefault();
        setCurrentCommand('');
        setCommandHistory(prev => [...prev, { type: 'input', text: '^C' }]);
      } else if (e.key === 'l') {
        e.preventDefault();
        setCommandHistory([]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const parts = currentCommand.split(' ');
      if (parts.length > 0) {
        const lastPart = parts[parts.length - 1];
        const dir = getDirectoryContents(currentPath);
        if (dir) {
          const matches = Object.keys(dir).filter(name => name.startsWith(lastPart));
          if (matches.length === 1) {
            parts[parts.length - 1] = matches[0];
            setCurrentCommand(parts.join(' '));
          } else if (matches.length > 1) {
            // Show all possible completions
            const newHistory = [...commandHistory, 
              { type: 'output', text: '\nPossible completions:' },
              { type: 'output', text: matches.map(m => 
                dir[m].type === 'dir' ? `\x1b[34m${m}/\x1b[0m` : m
              ).join('  ') + '\n' }
            ];
            setCommandHistory(newHistory);
          }
        }
      }
    }
  };

  return (
    <div 
      style={{ 
        backgroundColor: '#1a1a1a',
        color: '#fff',
        fontFamily: 'monospace',
        padding: '10px',
        height: '100%',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column'
      }}
      onClick={() => inputRef.current?.focus()}
    >
      <div 
        ref={terminalRef}
        style={{ 
          flexGrow: 1,
          overflowY: 'auto',
          marginBottom: '10px'
        }}
      >
        {commandHistory.map((entry, i) => (
          <div 
            key={i} 
            style={{ 
              color: entry.type === 'error' ? '#ff4444' : 
                     entry.type === 'input' ? '#44ff44' : '#ffffff',
              whiteSpace: 'pre-wrap',
              marginBottom: '5px'
            }}
          >
            {entry.text}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: '#44ff44' }}>{currentPath}$&nbsp;</span>
        <input
          ref={inputRef}
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#ffffff',
            fontFamily: 'monospace',
            fontSize: 'inherit',
            flexGrow: 1,
            outline: 'none'
          }}
          autoFocus
        />
      </div>
    </div>
  );
};

export default SimpleTerminal;
