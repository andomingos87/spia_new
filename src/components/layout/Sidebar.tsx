'use client'

import { Link } from '@/components/shared/Link'
import { routes } from '@/config/routes'
import { BarChart3, LayoutDashboard, Settings, Users } from 'lucide-react'

const navigation = [
  {
    name: 'Dashboard',
    href: routes.dashboard,
    icon: LayoutDashboard,
  },
  {
    name: 'Concorrentes',
    href: routes.competitors.root,
    icon: Users,
  },
  {
    name: 'Análises',
    href: routes.analytics.root,
    icon: BarChart3,
  },
  {
    name: 'Configurações',
    href: routes.settings.root,
    icon: Settings,
  },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <div className="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            SPIA
          </span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
} 