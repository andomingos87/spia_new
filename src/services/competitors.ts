import { Company } from '@/types/company'
import { competitors as mockCompetitors } from '@/data/mockup'

export async function getCompetitors() {
  // Simulando delay de rede
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockCompetitors
}

export async function getCompetitor(id: string) {
  await new Promise(resolve => setTimeout(resolve, 500))
  const competitor = mockCompetitors.find(c => c.id === id)
  if (!competitor) throw new Error('Competitor not found')
  return competitor
}

export async function createCompetitor(competitor: Partial<Company>) {
  await new Promise(resolve => setTimeout(resolve, 500))
  const newCompetitor: Company = {
    ...mockCompetitors[0], // Base template
    ...competitor,
    id: Math.random().toString(36).substr(2, 9),
  }
  mockCompetitors.push(newCompetitor)
  return newCompetitor
}

export async function updateCompetitor(id: string, updates: Partial<Company>) {
  await new Promise(resolve => setTimeout(resolve, 500))
  const index = mockCompetitors.findIndex(c => c.id === id)
  if (index === -1) throw new Error('Competitor not found')
  
  mockCompetitors[index] = {
    ...mockCompetitors[index],
    ...updates,
  }
  return mockCompetitors[index]
}

export async function deleteCompetitor(id: string) {
  await new Promise(resolve => setTimeout(resolve, 500))
  const index = mockCompetitors.findIndex(c => c.id === id)
  if (index === -1) throw new Error('Competitor not found')
  mockCompetitors.splice(index, 1)
} 