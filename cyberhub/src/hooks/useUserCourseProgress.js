import { useState, useEffect } from 'react';

/**
 * Custom React hook to fetch user course progress
 * @param {string} userId - The ID of the user
 */
export function useUserCourseProgress(userId) {
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    setLoading(true);
    setError(null);

    fetch(`/api/getUserCourseProgress?user_id=${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch user course progress');
        }
        return res.json();
      })
      .then((data) => {
        setProgressData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  return { progressData, loading, error };
}
