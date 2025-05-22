import React from 'react';
import ModuleProgressCircle from './ModuleProgressCircle';
import { MODULE_STATUS, MODULE_PROGRESS } from '../constants/progressConstants';

const CourseProgressIndicator = ({ 
  currentModule, 
  progress, 
  isCompleted,
  showNotification = false,
  style = {} 
}) => {
  const getModuleProgress = () => {
    if (isCompleted) return MODULE_PROGRESS[currentModule];
    return progress || 0;
  };

  return (
    <>
      {/* Fixed Progress Circle */}
      <div style={{
        position: 'fixed',
        top: '80px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        ...style
      }}>
        <ModuleProgressCircle
          module={{
            status: currentModule,
            completed: isCompleted,
            progress: getModuleProgress()
          }}
          size="medium"
        />
      </div>

      {/* Completion Notification */}
      {showNotification && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span>🎉</span>
          {MODULE_PROGRESS[currentModule]}% of level progress achieved!
        </div>
      )}
    </>
  );
};

export default CourseProgressIndicator;
