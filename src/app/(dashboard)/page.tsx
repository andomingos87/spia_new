'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/shared/Card'
import { useNavigation } from '@/hooks/useNavigation'

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigation()

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total de Concorrentes"
          value="24"
          onClick={() => navigate.toCompetitors()}
          className="cursor-pointer hover:shadow-lg transition-shadow"
        />
        
        <Card
          title="Menções nas Redes"
          value="1.2k"
          onClick={() => navigate.toSocialAnalytics()}
          className="cursor-pointer hover:shadow-lg transition-shadow"
        />
        
        <Card
          title="Alertas Ativos"
          value="8"
          onClick={() => navigate.toNotifications()}
          className="cursor-pointer hover:shadow-lg transition-shadow"
        />
        
        <Card
          title="Análises Realizadas"
          value="156"
          onClick={() => navigate.toAnalytics()}
          className="cursor-pointer hover:shadow-lg transition-shadow"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Atividade Recente
          </h3>
          {/* Lista de atividades recentes */}
          <div className="space-y-4">
            {loading ? (
              <div className="animate-pulse space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 bg-gray-200 dark:bg-gray-700 rounded" />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                Nenhuma atividade recente
              </p>
            )}
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Distribuição por Segmento
          </h3>
          {/* Gráfico de distribuição */}
          <div className="h-64 flex items-center justify-center">
            {loading ? (
              <div className="animate-pulse w-full h-full bg-gray-200 dark:bg-gray-700 rounded" />
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                Nenhum dado disponível
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 