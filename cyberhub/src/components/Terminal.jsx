import React, { useState } from 'react';
import { Terminal as XTerm } from 'xterm';
import 'xterm/css/xterm.css';
import JSLinuxTerminal from './JSLinuxTerminal';

const Terminal = ({ title }) => {
  const [activeTab, setActiveTab] = useState('output');
  
  const tabs = [
    { id: 'output', label: 'Output' },
    { id: 'logs', label: 'Logs' },
    { id: 'history', label: 'History' }
  ];

  return (
    <div style={{
      backgroundColor: '#1a2147',
      height: '100%',
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Terminal Header */}
      <div style={{
        padding: '10px',
        borderBottom: '1px solid #5DADE2',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ color: '#5DADE2', fontWeight: 'bold' }}>{title}</div>
        <div>
          <button style={{
            backgroundColor: '#151B3B',
            color: '#fff',
            border: 'none',
            padding: '5px 10px',
            marginLeft: '5px',
            cursor: 'pointer',
            borderRadius: '3px'
          }}>Clear</button>
          <button style={{
            backgroundColor: '#151B3B',
            color: '#fff',
            border: 'none',
            padding: '5px 10px',
            marginLeft: '5px',
            cursor: 'pointer',
            borderRadius: '3px'
          }}>Reset</button>
        </div>
      </div>

      {/* Terminal Tabs */}
      <div style={{
        display: 'flex',
        padding: '5px 10px 0',
        borderBottom: '1px solid #5DADE2'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              backgroundColor: activeTab === tab.id ? '#151B3B' : 'transparent',
              color: activeTab === tab.id ? '#5DADE2' : '#fff',
              border: 'none',
              padding: '8px 15px',
              cursor: 'pointer',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px',
              marginRight: '5px'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Terminal Content */}
      <div style={{
        flex: 1,
        backgroundColor: '#000',
        margin: '10px',
        borderRadius: '5px',
        padding: '10px',
        fontFamily: 'monospace',
        color: '#fff',
        overflow: 'auto'
      }}>
        {activeTab === 'output' ? (
          <JSLinuxTerminal />
        ) : (
          <div>Terminal content for {activeTab}...</div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
