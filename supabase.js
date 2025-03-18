import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://drukeorjowtljzhzvvcy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRydWtlb3Jqb3d0bGp6aHp2dmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2Mjc3ODIsImV4cCI6MjA1MzIwMzc4Mn0.9urFQrrovnlNgR2jlqKoS1xR5ueKBQHAPufNrRHCEFI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);