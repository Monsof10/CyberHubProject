import { supabase } from './config'

// User Progress Functions
export async function getUserProgress(userId) {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single()
    if (error && error.code !== 'PGRST116') throw error // PGRST116 is "no rows returned"
    return data
  } catch (error) {
    console.error('Error fetching user progress:', error)
    throw error
  }
}

export async function createUserProgress(userId, progress) {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .insert([{
        user_id: userId,
        progress
      }])
      .single()
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error creating user progress:', error)
    throw error
  }
}

export async function updateUserProgress(userId, progress) {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .update({ progress })
      .eq('user_id', userId)
      .single()
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating user progress:', error)
    throw error
  }
}

// Course Functions
export async function getCourses() {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching courses:', error)
    throw error
  }
}

export async function getCourseById(courseId) {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', courseId)
      .single()
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching course:', error)
    throw error
  }
}

// Enrollment Functions
export async function enrollInCourse(userId, courseId) {
  try {
    const { data, error } = await supabase
      .from('enrollments')
      .insert([{
        user_id: userId,
        course_id: courseId,
        status: 'active'
      }])
      .single()
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error enrolling in course:', error)
    throw error
  }
}

export async function getUserEnrollments(userId) {
  try {
    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        *,
        courses (*)
      `)
      .eq('user_id', userId)
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching user enrollments:', error)
    throw error
  }
}

export async function updateEnrollmentStatus(enrollmentId, status) {
  try {
    const { data, error } = await supabase
      .from('enrollments')
      .update({ 
        status,
        completed_at: status === 'completed' ? new Date().toISOString() : null 
      })
      .eq('id', enrollmentId)
      .single()
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating enrollment status:', error)
    throw error
  }
}

// Course Progress Functions
export async function createCourseProgress(enrollmentId, module) {
  try {
    const { data, error } = await supabase
      .from('course_progress')
      .insert([{
        enrollment_id: enrollmentId,
        module,
        status: 'in_progress',
        quiz_scores: {},
        last_accessed: new Date().toISOString()
      }])
      .single()
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error creating course progress:', error)
    throw error
  }
}

export async function updateCourseProgress(progressId, updates) {
  try {
    const { data, error } = await supabase
      .from('course_progress')
      .update({
        ...updates,
        last_accessed: new Date().toISOString()
      })
      .eq('id', progressId)
      .single()
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating course progress:', error)
    throw error
  }
}

export async function getCourseProgress(enrollmentId) {
  try {
    const { data, error } = await supabase
      .from('course_progress')
      .select('*')
      .eq('enrollment_id', enrollmentId)
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching course progress:', error)
    throw error
  }
}

export async function updateQuizScore(progressId, quizName, score) {
  try {
    const { data: currentProgress } = await supabase
      .from('course_progress')
      .select('quiz_scores')
      .eq('id', progressId)
      .single()

    const updatedScores = {
      ...currentProgress.quiz_scores,
      [quizName]: score
    }

    const { data, error } = await supabase
      .from('course_progress')
      .update({
        quiz_scores: updatedScores,
        last_accessed: new Date().toISOString()
      })
      .eq('id', progressId)
      .single()
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating quiz score:', error)
    throw error
  }
}
