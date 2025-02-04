import { Competitor } from '@/types/company'
import { supabase } from '@/lib/supabase'

export async function getCompetitors() {
  const { data, error } = await supabase
    .from('competitors')
    .select('*')
    .order('name')

  if (error) throw error
  return data as Competitor[]
}

export async function getCompetitor(id: string) {
  const { data, error } = await supabase
    .from('competitors')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data as Competitor
}

export async function createCompetitor(competitor: Partial<Competitor>) {
  const { data, error } = await supabase
    .from('competitors')
    .insert([competitor])
    .select()
    .single()

  if (error) throw error
  return data as Competitor
}

export async function updateCompetitor(id: string, competitor: Partial<Competitor>) {
  const { data, error } = await supabase
    .from('competitors')
    .update(competitor)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as Competitor
}

export async function deleteCompetitor(id: string) {
  const { error } = await supabase
    .from('competitors')
    .delete()
    .eq('id', id)

  if (error) throw error
} 