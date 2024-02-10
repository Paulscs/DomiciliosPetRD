import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rwzythmqpqksobcwimcu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3enl0aG1xcHFrc29iY3dpbWN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1OTgwMDEsImV4cCI6MjAyMzE3NDAwMX0.NtPBCP6ITR6G-4dv4VL2v_egPJF1eyJY3GDAO_SZZow';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
