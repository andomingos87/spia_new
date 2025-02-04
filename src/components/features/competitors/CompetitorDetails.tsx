'use client'

import { Competitor } from '@/types/company'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Youtube, Edit } from 'lucide-react'

interface CompetitorDetailsProps {
  competitor: Competitor
  onEdit: () => void
}

export function CompetitorDetails({
  competitor,
  onEdit,
}: CompetitorDetailsProps) {
  const socialIcons = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: competitor.socialMedia?.instagram,
      color: 'text-pink-500',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      hoverBgColor: 'hover:bg-pink-100 dark:hover:bg-pink-900/30',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: competitor.socialMedia?.youtube,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      hoverBgColor: 'hover:bg-red-100 dark:hover:bg-red-900/30',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: competitor.socialMedia?.facebook,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      hoverBgColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: competitor.socialMedia?.linkedin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      hoverBgColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24">
            <Image
              src={competitor.logo}
              alt={competitor.name}
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {competitor.name}
            </h3>
          </div>
        </div>

        <button
          onClick={onEdit}
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Edit className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Redes Sociais
        </h4>

        <div className="grid gap-3 sm:grid-cols-2">
          {socialIcons.map(
            (social) =>
              social.url && (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center gap-4 p-4 rounded-xl
                    ${social.bgColor}
                    ${social.hoverBgColor}
                    transition-colors group
                  `}
                >
                  <div className={`p-3 rounded-lg bg-white/50 dark:bg-black/10 ${social.color}`}>
                    <social.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      {social.name}
                    </h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                      Ver perfil
                    </p>
                  </div>
                </a>
              )
          )}
        </div>
      </div>
    </div>
  )
} 