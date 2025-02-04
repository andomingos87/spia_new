import { ReactNode } from 'react'
import { theme } from '@/config/theme'

export interface CardProps {
  gradient?: keyof typeof theme.colors.gradients
  children: ReactNode
}

export function Card({ gradient, children }: CardProps) {
  const gradientStyle = gradient
    ? {
        backgroundImage: `linear-gradient(135deg, ${theme.colors.gradients[gradient][0]}, ${theme.colors.gradients[gradient][1]})`,
      }
    : {}

  return (
    <div
      className={`p-6 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl ${
        gradient ? '' : 'bg-white dark:bg-gray-800'
      }`}
      style={{
        ...gradientStyle,
        borderRadius: theme.borderRadius.card,
      }}
    >
      {children}
    </div>
  )
} 