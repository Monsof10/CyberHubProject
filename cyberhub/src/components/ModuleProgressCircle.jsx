import React, { useState, useEffect } from 'react';
import ProgressCircle from './ProgressCircle';
import { MODULE_NAMES } from '../constants/progressConstants';
import { calculateModuleProgress, isModuleLocked, getModuleStatusText } from '../utils/progressUtils';

const ModuleProgressCircle = ({ module, previousModuleStatus, size = 'medium' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const progress = calculateModuleProgress(module);
  const locked = isModuleLocked(module?.status, previousModuleStatus);
  const name = MODULE_NAMES[module?.status] || 'Module';
  const status = getModuleStatusText(module);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sizes = {
    small: {
      container: '100px',
      circle: 35,
      fontSize: '12px'
    },
    medium: {
      container: '120px',
      circle: 40,
      fontSize: '14px'
    },
    large: {
      container: '150px',
      circle: 50,
      fontSize: '16px'
    }
  };

  const sizeConfig = sizes[size];

  const getColor = () => {
    if (locked) return '#ccc';
    if (progress === 100) return '#4CAF50';
    if (progress > 0) return '#FFD740';
    return '#1A237E';
  };

  const containerStyle = {
    position: 'fixed',
    bottom: '120px',
    left: '1px',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.5s ease-out',
    zIndex: 1000,
    backgroundColor: 'rgba(26, 35, 126, 0.9)',
    borderRadius: '12px',
    padding: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    width: sizeConfig.container
  };

  return (
    <div style={containerStyle}>
      <div style={{ 
        position: 'relative',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <ProgressCircle 
          progress={progress} 
          radius={sizeConfig.circle}
          stroke={4}
          primaryColor={getColor()}
          secondaryColor="rgba(255, 255, 255, 0.2)"
        />
        {locked && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '20px'
          }}>
            🔒
          </div>
        )}
      </div>

      <div style={{
        textAlign: 'center',
        fontSize: sizeConfig.fontSize,
        color: '#fff',
        marginTop: '5px',
        fontWeight: '500'
      }}>
        {name}
      </div>

      <div style={{
        textAlign: 'center',
        fontSize: sizeConfig.fontSize,
        color: progress === 100 ? '#4CAF50' : 'rgba(255, 255, 255, 0.7)',
        marginTop: '5px'
      }}>
        {status}
      </div>

      {progress === 100 && (
        <div style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          backgroundColor: '#4CAF50',
          color: 'white',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          ✓
        </div>
      )}

      {progress > 0 && progress < 100 && (
        <div style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          backgroundColor: 'rgba(255, 215, 64, 0.9)',
          color: '#1A237E',
          borderRadius: '12px',
          padding: '3px 8px',
          fontSize: '12px',
          fontWeight: '600',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          {progress}%
        </div>
      )}
    </div>
  );
};

export default ModuleProgressCircle;
