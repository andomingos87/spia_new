'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Competitor, CompetitorAnalysis } from '@/types/company'
import Image from 'next/image'
import {
  BarChart3,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  LineChart,
  RefreshCw,
  Users,
  Youtube
} from 'lucide-react'
import { TikTokIcon } from '@/components/icons/TikTokIcon'

export default function CompetitorDetails() {
  const params = useParams()
  const competitorId = params?.id as string
  const [loading, setLoading] = useState(true)
  const [competitor, setCompetitor] = useState<Competitor | null>(null)
  const [analysis, setAnalysis] = useState<CompetitorAnalysis | null>(null)

  useEffect(() => {
    // TODO: Implementar integração com Supabase
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [competitorId])

  const platformIcons = {
    youtube: Youtube,
    instagram: Instagram,
    facebook: Facebook,
    tiktok: TikTokIcon,
    linkedin: Linkedin
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 text-gray-400 animate-spin" />
      </div>
    )
  }

  if (!competitor) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium text-gray-900 mb-2">
          Concorrente não encontrado
        </h2>
        <p className="text-gray-500">
          O concorrente que você está procurando não existe ou foi removido.
        </p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-6 mb-8">
        <Image
          src={competitor.logo}
          alt={competitor.name}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{competitor.name}</h1>
          <p className="text-gray-500">{competitor.segment}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Estatísticas Gerais */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Estatísticas Gerais
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Users size={16} />
                  Total de Seguidores
                </div>
                <div className="text-2xl font-medium">245.8K</div>
                <div className="text-sm text-green-500">+12% este mês</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <BarChart3 size={16} />
                  Engajamento Médio
                </div>
                <div className="text-2xl font-medium">4.8%</div>
                <div className="text-sm text-green-500">+2.1% este mês</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <LineChart size={16} />
                  Posts por Semana
                </div>
                <div className="text-2xl font-medium">12</div>
                <div className="text-sm text-red-500">-2 este mês</div>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Redes Sociais
            </h2>
            <div className="space-y-4">
              {competitor.socialMedia.map(({ platform, username, url }) => {
                const Icon = platformIcons[platform]
                return (
                  <div
                    key={platform}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-6 h-6" />
                      <div>
                        <div className="font-medium">{username}</div>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#3366FF] hover:underline"
                        >
                          Ver perfil
                        </a>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Insights e Recomendações */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Insights da IA
            </h2>
            <div className="space-y-4">
              {analysis?.insights.map((insight, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm">{insight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Recomendações
            </h2>
            <div className="space-y-4">
              {analysis?.recommendations.map((recommendation, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm">{recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 