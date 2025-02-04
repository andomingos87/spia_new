'use client'

import { Link } from '@/components/shared/Link'
import { routes } from '@/config/routes'
import { Bell, User } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Configurações
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href={routes.settings.profile}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
              <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Perfil
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gerencie suas informações pessoais
              </p>
            </div>
          </div>
        </Link>

        <Link
          href={routes.settings.notifications}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800 transition-colors">
              <Bell className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Notificações
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Configure suas preferências de notificação
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
} 