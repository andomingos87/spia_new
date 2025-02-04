'use client'

import { useEffect, useState } from 'react'
import { Competitor } from '@/types/company'

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)

  // TODO: Implementar integração com Supabase
  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total de Concorrentes</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">24</p>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Menções nas Redes</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">1.2k</p>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Alertas Ativos</h3>
          <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">8</p>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Análises Realizadas</h3>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">156</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Atividade Recente</h3>
          {/* Lista de atividades recentes */}
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Distribuição por Segmento</h3>
          {/* Gráfico de distribuição */}
        </div>
      </div>
    </>
  )
} 