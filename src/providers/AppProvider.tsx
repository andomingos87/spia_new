'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
} 