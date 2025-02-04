'use client'

import { useState } from 'react'
import { Bug, X, Upload, AlertTriangle } from 'lucide-react'

interface BugReportModalProps {
  isOpen: boolean
  onClose: () => void
}

type BugSeverity = 'low' | 'medium' | 'high'

export function BugReportModal({ isOpen, onClose }: BugReportModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [steps, setSteps] = useState('')
  const [severity, setSeverity] = useState<BugSeverity>('medium')
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      setScreenshot(file)
    }
  }

  const handleSubmit = async () => {
    if (!title.trim() || !description.trim() || !steps.trim()) return

    setIsSubmitting(true)
    
    try {
      // TODO: Implementar envio do bug report
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      onClose()
      // Mostrar toast de sucesso
    } catch (error) {
      console.error('Erro ao enviar bug report:', error)
      // Mostrar toast de erro
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl my-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Bug className="w-5 h-5 text-red-600 dark:text-red-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Reportar Bug
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 max-h-[calc(100vh-16rem)] overflow-y-auto">
          {/* Título */}
          <div>
            <label 
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Título do Problema
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Ex: Erro ao salvar configurações"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent"
            />
          </div>

          {/* Severidade */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Severidade
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => setSeverity('low')}
                className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
                  severity === 'low'
                    ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400'
                    : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                Baixa
              </button>
              <button
                onClick={() => setSeverity('medium')}
                className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
                  severity === 'medium'
                    ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-400'
                    : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                Média
              </button>
              <button
                onClick={() => setSeverity('high')}
                className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
                  severity === 'high'
                    ? 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400'
                    : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                Alta
              </button>
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label 
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Descrição do Problema
            </label>
            <textarea
              id="description"
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Descreva o problema em detalhes..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent"
            />
          </div>

          {/* Passos para Reproduzir */}
          <div>
            <label 
              htmlFor="steps"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Passos para Reproduzir
            </label>
            <textarea
              id="steps"
              rows={3}
              value={steps}
              onChange={e => setSteps(e.target.value)}
              placeholder="1. Acesse a página...&#10;2. Clique no botão...&#10;3. O erro acontece quando..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent"
            />
          </div>

          {/* Screenshot */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Screenshot (opcional)
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="screenshot"
                className={`flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                  screenshot
                    ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/30'
                    : 'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {screenshot ? (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <Upload className="w-6 h-6" />
                    <span className="text-sm font-medium">{screenshot.name}</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="w-8 h-8 text-gray-400" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Clique para fazer upload de uma imagem
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      PNG, JPG (max. 5MB)
                    </p>
                  </div>
                )}
                <input
                  id="screenshot"
                  type="file"
                  className="hidden"
                  accept="image/png,image/jpeg"
                  onChange={handleScreenshotChange}
                />
              </label>
            </div>
          </div>

          {/* Aviso */}
          <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-600 dark:text-yellow-400">
              Certifique-se de não incluir informações sensíveis nas capturas de tela ou na descrição do problema.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={!title.trim() || !description.trim() || !steps.trim() || isSubmitting}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Bug Report'}
          </button>
        </div>
      </div>
    </div>
  )
} 