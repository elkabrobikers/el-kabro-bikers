import { createClient } from '@supabase/supabase-js';

// Esto le dice a tu app: "Busca en el archivo .env.local los valores"
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);