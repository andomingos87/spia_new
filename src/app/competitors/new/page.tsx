'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SocialMediaPlatform } from '@/types/company'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import Image from 'next/image'

// Ícone personalizado do TikTok
const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

export default function NewCompetitor() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [logo, setLogo] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    segment: '',
    socialMedia: [] as Array<{
      platform: SocialMediaPlatform
      username: string
      url: string
    }>
  })

  const platforms: { id: SocialMediaPlatform; icon: any; label: string }[] = [
    { id: 'youtube', icon: Youtube, label: 'YouTube' },
    { id: 'instagram', icon: Instagram, label: 'Instagram' },
    { id: 'facebook', icon: Facebook, label: 'Facebook' },
    { id: 'tiktok', icon: TikTokIcon, label: 'TikTok' },
    { id: 'linkedin', icon: Linkedin, label: 'LinkedIn' }
  ]

  const handleAddSocialMedia = (platform: SocialMediaPlatform) => {
    if (!formData.socialMedia.find(sm => sm.platform === platform)) {
      setFormData(prev => ({
        ...prev,
        socialMedia: [...prev.socialMedia, { platform, username: '', url: '' }]
      }))
    }
  }

  const handleRemoveSocialMedia = (platform: SocialMediaPlatform) => {
    setFormData(prev => ({
      ...prev,
      socialMedia: prev.socialMedia.filter(sm => sm.platform !== platform)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Implementar integração com Supabase
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push('/dashboard')
    } catch (error) {
      console.error('Erro ao adicionar concorrente:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Adicionar Concorrente
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Logo
          </label>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
              {logo ? (
                <Image
                  src={logo}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              ) : (
                <span className="text-gray-400">Logo</span>
              )}
            </div>
            <button
              type="button"
              className="px-4 py-2 text-sm text-[#3366FF] border border-[#3366FF] rounded-lg hover:bg-blue-50"
            >
              Fazer upload
            </button>
          </div>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nome da Empresa
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#3366FF] focus:border-[#3366FF]"
            required
          />
        </div>

        <div>
          <label
            htmlFor="segment"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Segmento
          </label>
          <input
            type="text"
            id="segment"
            value={formData.segment}
            onChange={e =>
              setFormData(prev => ({ ...prev, segment: e.target.value }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#3366FF] focus:border-[#3366FF]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Redes Sociais
          </label>
          <div className="grid grid-cols-5 gap-4 mb-4">
            {platforms.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleAddSocialMedia(id)}
                disabled={formData.socialMedia.some(sm => sm.platform === id)}
                className={`flex flex-col items-center p-3 rounded-lg border ${
                  formData.socialMedia.some(sm => sm.platform === id)
                    ? 'bg-blue-50 border-[#3366FF]'
                    : 'border-gray-300 hover:border-[#3366FF]'
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs">{label}</span>
              </button>
            ))}
          </div>

          {formData.socialMedia.map(({ platform, username, url }) => (
            <div key={platform} className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">{platform}</h4>
                <button
                  type="button"
                  onClick={() => handleRemoveSocialMedia(platform)}
                  className="text-sm text-red-500 hover:text-red-600"
                >
                  Remover
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={e => {
                      const newSocialMedia = formData.socialMedia.map(sm =>
                        sm.platform === platform
                          ? { ...sm, username: e.target.value }
                          : sm
                      )
                      setFormData(prev => ({
                        ...prev,
                        socialMedia: newSocialMedia
                      }))
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#3366FF] focus:border-[#3366FF]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">URL</label>
                  <input
                    type="url"
                    value={url}
                    onChange={e => {
                      const newSocialMedia = formData.socialMedia.map(sm =>
                        sm.platform === platform
                          ? { ...sm, url: e.target.value }
                          : sm
                      )
                      setFormData(prev => ({
                        ...prev,
                        socialMedia: newSocialMedia
                      }))
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#3366FF] focus:border-[#3366FF]"
                    required
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-[#3366FF] text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Adicionando...' : 'Adicionar Concorrente'}
          </button>
        </div>
      </form>
    </div>
  )
} 