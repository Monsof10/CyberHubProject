import { createClient } from '@supabase/supabase-js'

// Replace these values with your Supabase project credentials
// You can find these in your Supabase project settings > API
const supabaseUrl = 'https://cfusjgvgmobbiuynkjym.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmdXNqZ3ZnbW9iYml1eW5ranltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2Njc1ODEsImV4cCI6MjA1ODI0MzU4MX0.bDGdHzS6nBI1efsIl8KGs3C_zoLUf4h1llGOr0J4grY'

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Example usage:
// import { supabase } from './supabase/config'
// 
// // Sign up
// const { data, error } = await supabase.auth.signUp({
//   email: 'user@example.com',
//   password: 'password123'
// })
//
// // Sign in
// const { data, error } = await supabase.auth.signInWithPassword({
//   email: 'user@example.com',
//   password: 'password123'
// })
//
// // Sign out
// const { error } = await supabase.auth.signOut()
//
// // Get user
// const { data: { user } } = await supabase.auth.getUser()
