'use client'

import { useState } from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import {
  engagementByPlatform,
  contentPerformance,
  audienceGrowth,
  postTimingAnalysis,
  sentimentAnalysis,
} from '@/data/analysisData'

export default function SocialAnalyticsPage() {
  const [loading, setLoading] = useState(true)

  // Simular carregamento
  useState(() => {
    setTimeout(() => setLoading(false), 1000)
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Análise de Redes Sociais
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Engajamento por Plataforma */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Engajamento por Plataforma
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={engagementByPlatform}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="platform" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="engagementRate" name="Taxa de Engajamento (%)" radius={[4, 4, 0, 0]}>
                {engagementByPlatform.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Crescimento de Audiência */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Crescimento de Audiência
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={audienceGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="followers"
                name="Seguidores"
                stroke="#6366F1"
                fill="#6366F1"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Performance de Conteúdo */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Performance por Tipo de Conteúdo
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={contentPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="engagement" name="Engajamento" fill="#6366F1" />
              <Bar dataKey="reach" name="Alcance" fill="#22C55E" />
              <Bar dataKey="conversions" name="Conversões" fill="#F97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Análise de Sentimento */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Análise de Sentimento
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sentimentAnalysis}
                dataKey="value"
                nameKey="sentiment"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                label
              >
                {sentimentAnalysis.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Melhor Horário para Posts */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Melhor Horário para Posts
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={postTimingAnalysis.hours.map((hour, index) => ({
            hour: `${hour}h`,
            engagement: postTimingAnalysis.engagement[index],
          }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="engagement"
              name="Engajamento"
              stroke="#A855F7"
              fill="#A855F7"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 