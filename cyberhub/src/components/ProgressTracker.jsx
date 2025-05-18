import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { getUserProgress, createUserProgress, updateUserProgress } from '../supabase/progress'

const ProgressTracker = () => {
  const { user } = useContext(AuthContext)
  const [progress, setProgress] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProgress = async () => {
      if (!user) {
        setProgress(null)
        setLoading(false)
        return
      }
      setLoading(true)
      try {
        const data = await getUserProgress(user.id)
        if (data) {
          setProgress(data.progress)
        } else {
          setProgress(null)
        }
      } catch (err) {
        setError('Failed to load progress')
      } finally {
        setLoading(false)
      }
    }
    fetchProgress()
  }, [user])

  const handleUpdateProgress = async (newProgress) => {
    if (!user) return
    setLoading(true)
    setError(null)
    try {
      if (progress === null) {
        await createUserProgress(user.id, newProgress)
      } else {
        await updateUserProgress(user.id, newProgress)
      }
      setProgress(newProgress)
    } catch (err) {
      setError('Failed to update progress')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading progress...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="progress-tracker">
      <h3>Your Progress</h3>
      <p>{progress ? `Progress: ${progress}` : 'No progress recorded yet.'}</p>
      {/* Example button to update progress - in real app, this would be dynamic */}
      <button onClick={() => handleUpdateProgress((progress || 0) + 10)}>
        Increase Progress by 10
      </button>
    </div>
  )
}

export default ProgressTracker
