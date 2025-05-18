import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

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
          quiz_scores,
          last_accessed
        )
      `)
      .eq('user_id', user_id);

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
