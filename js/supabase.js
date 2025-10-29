// Supabase 설정
const SUPABASE_URL = 'https://lqzniusaheyecobrdvdt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxem5pdXNhaGV5ZWNvYnJkdmR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjEzNzgsImV4cCI6MjA3NzI5NzM3OH0.hBhEG-VmjW6P6ZRL6S2h2-djX5eVcoj1RjD1D2c4n5I';

// Supabase 클라이언트 생성
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
