import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Lead = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  company?: string
  source?: string
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed'
  notes?: string
  created_at: string
  updated_at: string
}

export type LeadInput = Omit<Lead, 'id' | 'created_at' | 'updated_at'>