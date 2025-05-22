import React from 'react';
import ModuleProgressCircle from './ModuleProgressCircle';
import ProgressCircle from './ProgressCircle';
import { 
  MODULE_ORDER, 
  MODULE_NAMES, 
  LEVELS,
  LEVEL_NAMES,
  LEVEL_PROGRESS_WEIGHT 
} from '../constants/progressConstants';
import { 
  calculateLevelProgress, 
  calculateCourseProgress,
  formatProgress 
} from '../utils/progressUtils';

const UserCourseProgress = ({ progressData, loading, error }) => {
  if (loading) return <div>Loading user progress...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!progressData || progressData.length === 0) return <div>No course progress found.</div>;

  return (
    <div style={{ padding: '20px' }}>
      {progressData.map((enrollment) => {
        const courseProgress = calculateCourseProgress(enrollment.levels);
        
        return (
          <div key={enrollment.id} style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '30px',
            marginBottom: '30px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            {/* Course Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
              borderBottom: '1px solid #eee',
              paddingBottom: '20px'
            }}>
              <div>
                <h3 style={{ 
                  color: '#1A237E', 
                  marginBottom: '5px',
                  fontSize: '24px'
                }}>
                  {enrollment.courses.title}
                </h3>
                <p style={{ 
                  color: '#666',
                  fontSize: '14px'
                }}>
                  Enrolled: {new Date(enrollment.enrolled_at).toLocaleDateString()}
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <ProgressCircle 
                  progress={courseProgress}
                  radius={40}
                  stroke={4}
                  primaryColor="#4CAF50"
                />
                <p style={{ 
                  marginTop: '10px',
                  color: '#1A237E',
                  fontWeight: 'bold'
                }}>
                  Overall: {formatProgress(courseProgress)}
                </p>
              </div>
            </div>

            {/* Level Progress */}
            {Object.values(LEVELS).map((level) => {
              const levelData = enrollment.levels?.find(l => l.level === level);
              const levelProgress = calculateLevelProgress(levelData?.modules || []);
              const isActive = levelProgress > 0 || level === 1;
              
              return (
                <div key={level} style={{
                  marginBottom: '30px',
                  opacity: isActive ? 1 : 0.5
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '15px'
                  }}>
                    <h4 style={{ color: '#1A237E' }}>
                      Level {level}: {LEVEL_NAMES[level]}
                      {levelProgress === 100 && (
                        <span style={{ 
                          color: '#4CAF50',
                          marginLeft: '10px'
                        }}>
                          ✓
                        </span>
                      )}
                    </h4>
                    <div style={{
                      backgroundColor: '#f8f9fa',
                      padding: '5px 15px',
                      borderRadius: '15px',
                      fontSize: '14px',
                      color: '#1A237E'
                    }}>
                      {formatProgress(levelProgress)}
                    </div>
                  </div>

                  {/* Module Progress Circles */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                    padding: '20px 0'
                  }}>
                    {/* Progress Line */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '10%',
                      right: '10%',
                      height: '2px',
                      backgroundColor: '#e0e0e0',
                      zIndex: 0
                    }}>
                      <div style={{
                        width: `${levelProgress}%`,
                        height: '100%',
                        backgroundColor: levelProgress === 100 ? '#4CAF50' : '#FFD740',
                        transition: 'width 0.3s ease'
                      }} />
                    </div>

                    {/* Module Circles */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {MODULE_ORDER.map((moduleStatus, index) => {
                        const module = levelData?.modules?.find(
                          m => m.status === moduleStatus
                        );
                        const previousModule = index > 0 ? levelData?.modules?.find(
                          m => m.status === MODULE_ORDER[index - 1]
                        ) : null;

                        return (
                          <ModuleProgressCircle
                            key={moduleStatus}
                            module={module}
                            previousModuleStatus={previousModule?.status}
                            size="small"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Level Progress Summary */}
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '20px',
              borderRadius: '10px',
              marginTop: '20px'
            }}>
              <h4 style={{ 
                color: '#1A237E',
                marginBottom: '15px'
              }}>
                Course Progress Summary
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px'
              }}>
                {Object.values(LEVELS).map((level) => {
                  const levelData = enrollment.levels?.find(l => l.level === level);
                  const levelProgress = calculateLevelProgress(levelData?.modules || []);
                  
                  return (
                    <div key={level} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: levelProgress === 100 ? '#4CAF50' : 
                                      levelProgress > 0 ? '#FFD740' : '#e0e0e0'
                      }} />
                      <div>
                        <div style={{ fontSize: '14px', color: '#1A237E' }}>
                          {LEVEL_NAMES[level]}
                        </div>
                        <div style={{ fontSize: '12px', color: '#666' }}>
                          {formatProgress(levelProgress)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCourseProgress;
