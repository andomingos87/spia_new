'use client'

import { useState } from 'react'
import { Building2, Facebook, Instagram, Twitter, Youtube, TrendingUp, Users, MessageCircle, BarChart2, Edit2, Save } from 'lucide-react'

interface CompanyData {
  name: string
  logo: string | null
  socialMedia: {
    facebook: string
    instagram: string
    twitter: string
    youtube: string
  }
}

export default function CompanyPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: 'Minha Empresa LTDA',
    logo: null,
    socialMedia: {
      facebook: 'minhaempresa',
      instagram: 'minhaempresa',
      twitter: 'minhaempresa',
      youtube: 'minhaempresa',
    }
  })

  const handleSave = async () => {
    // TODO: Implementar salvamento
    setIsEditing(false)
  }

  const insights = [
    {
      title: 'Engajamento',
      description: 'Aumento de 25% no engajamento do Instagram na última semana',
      icon: TrendingUp,
      color: 'blue'
    },
    {
      title: 'Alcance',
      description: 'Seus posts no Facebook alcançaram 15k pessoas nos últimos 7 dias',
      icon: Users,
      color: 'green'
    },
    {
      title: 'Sentimento',
      description: '92% dos comentários nas redes sociais são positivos',
      icon: MessageCircle,
      color: 'yellow'
    },
    {
      title: 'Performance',
      description: 'Suas publicações têm performance 30% acima da média do setor',
      icon: BarChart2,
      color: 'purple'
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Building2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Minha Empresa
          </h1>
        </div>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4" />
              Salvar
            </>
          ) : (
            <>
              <Edit2 className="w-4 h-4" />
              Editar
            </>
          )}
        </button>
      </div>

      {/* Company Info */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Nome da Empresa
            </label>
            {isEditing ? (
              <input
                type="text"
                value={companyData.name}
                onChange={e => setCompanyData({ ...companyData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{companyData.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Logo
            </label>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                {companyData.logo ? (
                  <img
                    src={companyData.logo}
                    alt="Logo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <Building2 className="w-8 h-8 text-gray-400" />
                )}
              </div>
              {isEditing && (
                <button className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                  Alterar Logo
                </button>
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Redes Sociais
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Facebook className="w-5 h-5 text-blue-600" />
                {isEditing ? (
                  <input
                    type="text"
                    value={companyData.socialMedia.facebook}
                    onChange={e => setCompanyData({
                      ...companyData,
                      socialMedia: { ...companyData.socialMedia, facebook: e.target.value }
                    })}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Username do Facebook"
                  />
                ) : (
                  <a
                    href={`https://facebook.com/${companyData.socialMedia.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    @{companyData.socialMedia.facebook}
                  </a>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-pink-600" />
                {isEditing ? (
                  <input
                    type="text"
                    value={companyData.socialMedia.instagram}
                    onChange={e => setCompanyData({
                      ...companyData,
                      socialMedia: { ...companyData.socialMedia, instagram: e.target.value }
                    })}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Username do Instagram"
                  />
                ) : (
                  <a
                    href={`https://instagram.com/${companyData.socialMedia.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 dark:text-pink-400 hover:underline"
                  >
                    @{companyData.socialMedia.instagram}
                  </a>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Twitter className="w-5 h-5 text-blue-400" />
                {isEditing ? (
                  <input
                    type="text"
                    value={companyData.socialMedia.twitter}
                    onChange={e => setCompanyData({
                      ...companyData,
                      socialMedia: { ...companyData.socialMedia, twitter: e.target.value }
                    })}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Username do Twitter"
                  />
                ) : (
                  <a
                    href={`https://twitter.com/${companyData.socialMedia.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    @{companyData.socialMedia.twitter}
                  </a>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Youtube className="w-5 h-5 text-red-600" />
                {isEditing ? (
                  <input
                    type="text"
                    value={companyData.socialMedia.youtube}
                    onChange={e => setCompanyData({
                      ...companyData,
                      socialMedia: { ...companyData.socialMedia, youtube: e.target.value }
                    })}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Username do Youtube"
                  />
                ) : (
                  <a
                    href={`https://youtube.com/${companyData.socialMedia.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 dark:text-red-400 hover:underline"
                  >
                    @{companyData.socialMedia.youtube}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Insights de IA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                insight.color === 'blue'
                  ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800'
                  : insight.color === 'green'
                  ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800'
                  : insight.color === 'yellow'
                  ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800'
                  : 'bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    insight.color === 'blue'
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                      : insight.color === 'green'
                      ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400'
                      : insight.color === 'yellow'
                      ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400'
                      : 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400'
                  }`}
                >
                  <insight.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-sm font-medium ${
                    insight.color === 'blue'
                      ? 'text-blue-900 dark:text-blue-100'
                      : insight.color === 'green'
                      ? 'text-green-900 dark:text-green-100'
                      : insight.color === 'yellow'
                      ? 'text-yellow-900 dark:text-yellow-100'
                      : 'text-purple-900 dark:text-purple-100'
                  }`}>
                    {insight.title}
                  </h3>
                  <p className={`text-sm ${
                    insight.color === 'blue'
                      ? 'text-blue-700 dark:text-blue-300'
                      : insight.color === 'green'
                      ? 'text-green-700 dark:text-green-300'
                      : insight.color === 'yellow'
                      ? 'text-yellow-700 dark:text-yellow-300'
                      : 'text-purple-700 dark:text-purple-300'
                  }`}>
                    {insight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 