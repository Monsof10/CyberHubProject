import React from 'react';
import JSLinuxTerminal from '../../components/JSLinuxTerminal';

const TerminalPage = () => {
  return (
    <div style={{
      padding: '20px',
      height: 'calc(100vh - 40px)', // Full height minus padding
      backgroundColor: '#1a2147',
      color: 'white'
    }}>
      <div style={{
        marginBottom: '20px'
      }}>
        <h1>Linux Terminal Emulator</h1>
        <p>This is a full Linux environment running in your browser using JSLinux.</p>
      </div>
      
      <div style={{
        height: 'calc(100% - 100px)', // Full remaining height minus header
        backgroundColor: '#151B3B',
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <JSLinuxTerminal />
      </div>
    </div>
  );
};

export default TerminalPage;
