import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AIAssistant from '../AIAssistant/AIAssistant';
import GoogleTranslateLanguageSelector from '../GoogleTranslateLanguageSelector';

const AttackPagesHeader = ({ pageType }) => {
  const [showAssistant, setShowAssistant] = useState(false);

  return (
    <>
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        backgroundColor: '#000000',
        borderBottom: '1px solid #2d3748',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px',
        padding: '0 24px'
      }}>
        {/* Left side */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }}>
          <Link 
            to="/"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '24px',
              fontWeight: 'bold'
            }}
          >
            C_
          </Link>
        </div>

        {/* Center - AI Assistant Button */}
        <button
          onClick={() => setShowAssistant(!showAssistant)}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#0c1221',
            border: '1px solid #2d3748',
            borderRadius: '6px',
            color: '#fff',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'all 0.2s',
            width: 'auto',
            minWidth: '250px',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1e293b'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#0c1221'}
        >
          <span role="img" aria-label="AI" style={{ fontSize: '16px' }}>✨</span>
          Ask the AI Learning Assistant
        </button>

        {/* Right side */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }}>
          <GoogleTranslateLanguageSelector />
          <button style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            Tools
          </button>
          <Link 
            to="/profile"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#30363D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
          >
            👤
          </Link>
        </div>
      </div>
      
      {/* AI Assistant Component */}
      <AIAssistant 
        pageType={pageType} 
        isOpen={showAssistant} 
        onClose={() => setShowAssistant(false)} 
      />
    </>
  );
};

export default AttackPagesHeader;
