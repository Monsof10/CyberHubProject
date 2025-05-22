import { supabase } from '../config';

/**
 * Submit user feedback to the feedback table.
 * @param {Object} feedbackData - The feedback data containing userId, message, and optional contact info.
 * @returns {Promise<Object>} - Result of the insert operation.
 */
export async function submitFeedback(feedbackData) {
  const { data, error } = await supabase
    .from('feedback')
    .insert([feedbackData]);

  if (error) {
    throw error;
  }
  return data;
}

/**
 * Fetch feedback entries (for admin or review purposes).
 * @returns {Promise<Object>} - List of feedback entries.
 */
export async function fetchFeedback() {
  const { data, error } = await supabase
    .from('feedback')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }
  return data;
}
