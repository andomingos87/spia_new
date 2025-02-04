'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { User, LogOut } from 'lucide-react'
import { routes } from '@/config/routes'
import { signOut } from '@/lib/auth'

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push(routes.auth.signin)
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
          <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1">
          <button
            onClick={() => {
              router.push(routes.profile)
              setIsOpen(false)
            }}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <User className="w-4 h-4" />
            Meu Perfil
          </button>

          <hr className="my-1 border-gray-200 dark:border-gray-700" />

          <button
            onClick={() => {
              handleSignOut()
              setIsOpen(false)
            }}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      )}
    </div>
  )
} 