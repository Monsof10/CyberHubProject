import React from 'react';

const ModuleProgressTracker = ({ progress }) => {
  if (!progress) return null;

  const calculateTotalProgress = () => {
    let total = 0;
    let completed = 0;

    // Article progress (25% of total)
    if (progress.article?.completed) {
      completed += 25;
    } else if (progress.article?.progress) {
      completed += (progress.article.progress * 25) / 100;
    }

    // Initial Quiz (25% of total)
    if (progress.initialQuiz?.completed) {
      completed += 25;
    }

    // Labs progress (25% of total)
    const labsProgress = calculateLabsProgress();
    completed += (labsProgress * 25) / 100;

    // Final Quiz (25% of total)
    if (progress.finalQuiz?.completed) {
      completed += 25;
    }

    total = Math.round(completed);
    return total;
  };

  const calculateLabsProgress = () => {
    const labs = ['dosNormal', 'ddosAttack', 'slowlorisAttack', 'httpFloodAttack'];
    const completedLabs = labs.filter(lab => progress[lab]?.completed).length;
    return (completedLabs / labs.length) * 100;
  };

  const totalProgress = calculateTotalProgress();

  return (
    <div style={{
      backgroundColor: '#1a2147',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px'
    }}>
      <h3 style={{ color: '#5DADE2', marginBottom: '15px' }}>Module Progress</h3>
      
      {/* Overall Progress */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '5px'
        }}>
          <span>Overall Progress</span>
          <span>{totalProgress}%</span>
        </div>
        <div style={{
          width: '100%',
          height: '8px',
          backgroundColor: '#2C3E50',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${totalProgress}%`,
            height: '100%',
            backgroundColor: '#F1C40F',
            transition: 'width 0.3s ease'
          }}/>
        </div>
      </div>

      {/* Individual Components */}
      <div style={{ fontSize: '14px' }}>
        <div style={{ marginBottom: '10px' }}>
          <span>Article: </span>
          <span style={{ color: progress.article?.completed ? '#44ff44' : '#5DADE2' }}>
            {progress.article?.completed ? 'Completed' : `${Math.round(progress.article?.progress || 0)}%`}
          </span>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <span>Initial Quiz: </span>
          <span style={{ color: progress.initialQuiz?.completed ? '#44ff44' : '#5DADE2' }}>
            {progress.initialQuiz?.completed ? 'Completed' : 'Not Started'}
          </span>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <span>Labs: </span>
          <span style={{ color: calculateLabsProgress() === 100 ? '#44ff44' : '#5DADE2' }}>
            {`${Math.round(calculateLabsProgress())}%`}
          </span>
        </div>
        
        <div>
          <span>Final Quiz: </span>
          <span style={{ color: progress.finalQuiz?.completed ? '#44ff44' : '#5DADE2' }}>
            {progress.finalQuiz?.completed ? 'Completed' : 'Not Started'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModuleProgressTracker;
