'use client'

import { useState } from 'react'
import { Competitor } from '@/types/company'
import { Input } from '@/components/shared/Input'
import { ImageUpload } from '@/components/shared/ImageUpload'
import { Building2 } from 'lucide-react'

interface CompetitorFormProps {
  competitor?: Competitor
  onSubmit: (data: Partial<Competitor>) => void
  onCancel: () => void
}

const socialMediaFields = [
  {
    key: 'instagram' as const,
    label: 'Instagram',
    placeholder: 'https://instagram.com/empresa',
    color: 'text-pink-500',
  },
  {
    key: 'youtube' as const,
    label: 'YouTube',
    placeholder: 'https://youtube.com/@empresa',
    color: 'text-red-500',
  },
  {
    key: 'facebook' as const,
    label: 'Facebook',
    placeholder: 'https://facebook.com/empresa',
    color: 'text-blue-500',
  },
  {
    key: 'linkedin' as const,
    label: 'LinkedIn',
    placeholder: 'https://linkedin.com/company/empresa',
    color: 'text-blue-600',
  },
]

export function CompetitorForm({
  competitor,
  onSubmit,
  onCancel,
}: CompetitorFormProps) {
  const [formData, setFormData] = useState<Partial<Competitor>>(
    competitor || {
      name: '',
      logo: '',
      socialMedia: {
        instagram: '',
        youtube: '',
        facebook: '',
        linkedin: '',
        tiktok: '',
      },
    }
  )

  const [logoFile, setLogoFile] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: Implementar upload da imagem para um serviço de storage
    // Por enquanto vamos usar o preview como URL
    if (logoFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const logoUrl = reader.result as string
        onSubmit({ ...formData, logo: logoUrl })
      }
      reader.readAsDataURL(logoFile)
    } else {
      onSubmit(formData)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    social?: keyof Competitor['socialMedia']
  ) => {
    const { name, value } = e.target

    if (social) {
      setFormData((prev) => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [social]: value,
        },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid gap-10 lg:grid-cols-[1fr,320px]">
        <div className="space-y-8">
          {/* Informações Básicas */}
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                Informações Básicas
              </h3>
              <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Preencha as informações principais do concorrente.
              </p>
            </div>

            <Input
              label="Nome da Empresa"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              icon={Building2}
              placeholder="Digite o nome da empresa"
              required
            />
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Redes Sociais
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                · opcional
              </span>
            </div>

            <div className="space-y-4">
              {socialMediaFields.map((field) => (
                <div key={field.key} className="space-y-2">
                  <label 
                    htmlFor={field.key}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.key}
                    value={formData.socialMedia?.[field.key]}
                    onChange={(e) => handleChange(e, field.key)}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Upload */}
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              Logo da Empresa
            </h3>
            <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Faça upload do logo do concorrente. Use uma imagem quadrada com pelo
              menos 400x400 pixels para melhor resultado.
            </p>
          </div>

          <div className="mt-4">
            <ImageUpload
              defaultImage={formData.logo}
              onChange={setLogoFile}
              className="w-full aspect-square"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          {competitor ? 'Salvar Alterações' : 'Adicionar Concorrente'}
        </button>
      </div>
    </form>
  )
} 