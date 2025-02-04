'use client'

import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { UserMenu } from './UserMenu'

export function Header() {
  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="h-full px-4 flex items-center justify-end gap-4">
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  )
} 