import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

import { MODULE_STATUS } from '../../constants/progressConstants';

/**
 * API handler to get user course progress
 * Expects user_id as a query parameter
 */
export default async function handler(req, res) {
  const { user_id } = req.query;

  if (!user_id) {
    return res.status(400).json({ error: 'Missing user_id parameter' });
  }

  try {
    // Fetch enrollments with course and course_progress details
    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        id,
        status,
        enrolled_at,
        completed_at,
        courses (
          id,
          title,
          description,
          category
        ),
        course_progress (
          id,
          module,
          status,
          component_progress,
          quiz_scores,
          last_accessed
        )
      `)
      .eq('user_id', user_id);

    if (error) {
      throw error;
    }

    // Process the progress data to calculate current status
    const processedData = data.map(enrollment => {
      const processedProgress = enrollment.course_progress?.map(progress => {
        const componentProgress = progress.component_progress;
        let currentStatus = '';

        // Determine the current status based on component progress
        if (componentProgress.final_quiz.completed) {
          currentStatus = MODULE_STATUS.FINAL_QUIZ_COMPLETED;
        } else if (componentProgress.final_quiz.started) {
          currentStatus = MODULE_STATUS.FINAL_QUIZ_STARTED;
        } else if (componentProgress.labs.third.completed) {
          currentStatus = MODULE_STATUS.THIRD_LAB_COMPLETED;
        } else if (componentProgress.labs.third.started) {
          currentStatus = MODULE_STATUS.THIRD_LAB_STARTED;
        } else if (componentProgress.labs.second.completed) {
          currentStatus = MODULE_STATUS.SECOND_LAB_COMPLETED;
        } else if (componentProgress.labs.second.started) {
          currentStatus = MODULE_STATUS.SECOND_LAB_STARTED;
        } else if (componentProgress.labs.first.completed) {
          currentStatus = MODULE_STATUS.FIRST_LAB_COMPLETED;
        } else if (componentProgress.labs.first.started) {
          currentStatus = MODULE_STATUS.FIRST_LAB_STARTED;
        } else if (componentProgress.initial_quiz.completed) {
          currentStatus = MODULE_STATUS.INITIAL_QUIZ_COMPLETED;
        } else if (componentProgress.initial_quiz.started) {
          currentStatus = MODULE_STATUS.INITIAL_QUIZ_STARTED;
        } else if (componentProgress.article.completed) {
          currentStatus = MODULE_STATUS.ARTICLE_COMPLETED;
        } else if (componentProgress.article.started) {
          currentStatus = MODULE_STATUS.ARTICLE_STARTED;
        }

        return {
          ...progress,
          status: currentStatus
        };
      });

      return {
        ...enrollment,
        course_progress: processedProgress
      };
    });

    res.status(200).json(processedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Helper function to update component progress
export const updateComponentProgress = async (enrollmentId, moduleId, component, action) => {
  try {
    const { data: currentProgress, error: fetchError } = await supabase
      .from('course_progress')
      .select('component_progress')
      .eq('enrollment_id', enrollmentId)
      .eq('module', moduleId)
      .single();

    if (fetchError) throw fetchError;

    // Deep clone the current progress
    const updatedProgress = JSON.parse(JSON.stringify(currentProgress.component_progress));

    // Update the specific component
    const [componentType, componentAction] = component.split('.');
    if (componentType === 'labs') {
      const [_, labNumber] = componentAction.split('_');
      updatedProgress.labs[labNumber][action] = true;
      updatedProgress.labs[labNumber][`${action}_at`] = new Date().toISOString();
    } else {
      updatedProgress[componentType][action] = true;
      updatedProgress[componentType][`${action}_at`] = new Date().toISOString();
    }

    // Update the database
    const { error: updateError } = await supabase
      .from('course_progress')
      .update({ component_progress: updatedProgress })
      .eq('enrollment_id', enrollmentId)
      .eq('module', moduleId);

    if (updateError) throw updateError;

    return { success: true, progress: updatedProgress };
  } catch (error) {
    console.error('Error updating component progress:', error);
    return { success: false, error: error.message };
  }
};
