import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://andvopipehhlbzpxvqsk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuZHZvcGlwZWhobGJ6cHh2cXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNjg2NjgsImV4cCI6MjA2Mzg0NDY2OH0.hkXrHeQs2NXhQBKVGL-oUS2kDeDKgvdwTnCru3DyFiE'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)