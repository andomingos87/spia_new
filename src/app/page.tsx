'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/shared/Card'
import { marketMetrics, recentActivity as mockRecentActivity, segmentDistribution } from '@/data/mockup'
import { Activity } from '@/types/company'
import { RecentActivity } from '@/components/RecentActivity'
import { MetricsChart } from '@/components/MetricsChart'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setActivities(mockRecentActivity)
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card gradient="purple">
          <h3 className="text-sm font-medium text-white/80">Total de Concorrentes</h3>
          <p className="text-2xl font-bold text-white mt-2">{marketMetrics.totalCompetitors}</p>
        </Card>
        
        <Card gradient="blue">
          <h3 className="text-sm font-medium text-white/80">Menções</h3>
          <p className="text-2xl font-bold text-white mt-2">{marketMetrics.mentions}</p>
        </Card>
        
        <Card gradient="green">
          <h3 className="text-sm font-medium text-white/80">Alertas Ativos</h3>
          <p className="text-2xl font-bold text-white mt-2">{marketMetrics.activeAlerts}</p>
        </Card>
        
        <Card gradient="orange">
          <h3 className="text-sm font-medium text-white/80">Análises Realizadas</h3>
          <p className="text-2xl font-bold text-white mt-2">{marketMetrics.analysisPerformed}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Distribuição por Segmento</h3>
          <div className="h-[300px]">
            <MetricsChart 
              type="bar"
              data={segmentDistribution}
              index="name"
              categories={['value']}
              loading={loading}
            />
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Atividades Recentes</h3>
          <RecentActivity activities={activities} loading={loading} />
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Tendências de Engajamento</h3>
          <div className="h-[300px]">
            <MetricsChart 
              type="line"
              data={marketMetrics.engagementTrends}
              index="date"
              categories={['value']}
              loading={loading}
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Evolução do engajamento nos últimos 6 meses
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Crescimento de Seguidores</h3>
          <div className="h-[300px]">
            <MetricsChart 
              type="line"
              data={marketMetrics.followerGrowth}
              index="date"
              categories={['value']}
              loading={loading}
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Crescimento de seguidores nos últimos 6 meses
          </p>
        </Card>
      </div>
    </div>
  )
}
