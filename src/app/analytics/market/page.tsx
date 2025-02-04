'use client'

import { useState } from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import {
  marketShareTrend,
  competitorComparison,
  hashtagPerformance,
} from '@/data/analysisData'
import { segmentDistribution } from '@/data/mockup'
import { SegmentData } from '@/types/company'

export default function MarketAnalyticsPage() {
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
        Análise de Mercado
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tendência de Market Share */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Tendência de Market Share
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketShareTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="competitor1" stroke="#6366F1" name="Sua Empresa" />
              <Line type="monotone" dataKey="competitor2" stroke="#22C55E" name="TechVision" />
              <Line type="monotone" dataKey="competitor3" stroke="#F97316" name="DataFlow" />
              <Line type="monotone" dataKey="competitor4" stroke="#A855F7" name="SmartMetrics" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Comparação de Performance */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Comparação de Performance
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={competitorComparison.categories.map((category, index) => ({
              category,
              ...competitorComparison.series.reduce((acc, serie) => ({
                ...acc,
                [serie.name]: serie.data[index],
              }), {}),
            }))}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis />
              {competitorComparison.series.map((serie) => (
                <Radar
                  key={serie.name}
                  name={serie.name}
                  dataKey={serie.name}
                  stroke={serie.color}
                  fill={serie.color}
                  fillOpacity={0.6}
                />
              ))}
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Distribuição por Segmento */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Distribuição por Segmento
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={segmentDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                label
              >
                {segmentDistribution.map((entry: SegmentData, index: number) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Performance de Hashtags */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Performance de Hashtags
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={hashtagPerformance} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="tag" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="posts" name="Posts" fill="#6366F1" />
              <Bar dataKey="engagement" name="Engajamento (%)" fill="#22C55E" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
} 