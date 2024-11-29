import { createClient } from "@supabase/supabase-js";

// Claves directamente incluidas (No recomendado para producción)
const supabaseUrl = "https://bxlluzvttxbjlnymyjcl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4bGx1enZ0dHhiamxueW15amNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4NDgwMTcsImV4cCI6MjA0ODQyNDAxN30.YWmWg85xls7qClEu5oBbRhYdcmrJuALFgWywjOifZHc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
