'use client'

import { Link } from '@/components/shared/Link'
import { routes } from '@/config/routes'
import { BarChart3, LineChart } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Análises
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href={routes.analytics.social}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
              <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Análise de Redes Sociais
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Métricas e insights das redes sociais
              </p>
            </div>
          </div>
        </Link>

        <Link
          href={routes.analytics.market}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
              <LineChart className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Análise de Mercado
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tendências e análise competitiva
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
} 