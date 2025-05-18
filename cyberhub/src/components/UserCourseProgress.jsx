import React from 'react';
import { useUserCourseProgress } from '../hooks/useUserCourseProgress';

const UserCourseProgress = ({ userId }) => {
  const { progressData, loading, error } = useUserCourseProgress(userId);

  if (loading) return <div>Loading user progress...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!progressData || progressData.length === 0) return <div>No course progress found.</div>;

  return (
    <div>
      <h2>My Courses and Progress</h2>
      <ul>
        {progressData.map((enrollment) => (
          <li key={enrollment.id}>
            <h3>{enrollment.courses.title}</h3>
            <p>Status: {enrollment.status}</p>
            <p>Enrolled At: {new Date(enrollment.enrolled_at).toLocaleDateString()}</p>
            <h4>Modules Progress:</h4>
            {enrollment.course_progress.length === 0 ? (
              <p>No progress recorded yet.</p>
            ) : (
              <ul>
                {enrollment.course_progress.map((progress) => (
                  <li key={progress.id}>
                    Module: {progress.module} - Status: {progress.status} - Last Accessed: {progress.last_accessed ? new Date(progress.last_accessed).toLocaleDateString() : 'N/A'}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

