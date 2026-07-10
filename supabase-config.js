// ============================================
// SUPABASE CONFIG
// Replace these with your project's values.
// Supabase dashboard -> Project Settings (gear icon) -> Data API
//   - Project URL  -> SUPABASE_URL  (format: https://xxxxx.supabase.co, NO trailing path)
//   - anon public key -> SUPABASE_ANON_KEY
// ============================================
const SUPABASE_URL = "https://afkuqtnfegohyqxokhdk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFma3VxdG5mZWdvaHlxeG9raGRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyNTI0OTMsImV4cCI6MjA5NjgyODQ5M30.J8Na5btH09CDklAlQ1SmfvZry4mcjPeLEC0wCuFKMOE";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
