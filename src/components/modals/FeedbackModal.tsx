'use client'

import { useState } from 'react'
import { MessageSquare, X, Smile, Meh, Frown, Star, ChevronRight } from 'lucide-react'

type Sentiment = 'positive' | 'neutral' | 'negative'
type Category = 'usability' | 'performance' | 'feature' | 'design' | 'other'

interface FeedbackModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const [sentiment, setSentiment] = useState<Sentiment | null>(null)
  const [category, setCategory] = useState<Category>('usability')
  const [rating, setRating] = useState<number>(0)
  const [feedback, setFeedback] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const categories = [
    { id: 'usability', label: 'Usabilidade', description: 'Facilidade de uso e navegação' },
    { id: 'performance', label: 'Performance', description: 'Velocidade e desempenho do sistema' },
    { id: 'feature', label: 'Funcionalidade', description: 'Recursos e ferramentas' },
    { id: 'design', label: 'Design', description: 'Interface e aparência visual' },
    { id: 'other', label: 'Outro', description: 'Outros aspectos não listados' },
  ] as const

  const handleSubmit = async () => {
    if (!sentiment || !feedback.trim()) return

    setIsSubmitting(true)
    
    try {
      // TODO: Implementar envio do feedback
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      onClose()
      // Mostrar toast de sucesso
    } catch (error) {
      console.error('Erro ao enviar feedback:', error)
      // Mostrar toast de erro
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNext = () => {
    if (sentiment) {
      setStep(2)
    }
  }

  const handleBack = () => {
    setStep(1)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Enviar Feedback
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
        <div className="p-4">
          {step === 1 ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Como você avalia sua experiência?
                </label>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => setSentiment('positive')}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-colors ${
                      sentiment === 'positive'
                        ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Smile className="w-8 h-8" />
                    <span className="text-sm font-medium">Positiva</span>
                  </button>
                  <button
                    onClick={() => setSentiment('neutral')}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-colors ${
                      sentiment === 'neutral'
                        ? 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Meh className="w-8 h-8" />
                    <span className="text-sm font-medium">Neutra</span>
                  </button>
                  <button
                    onClick={() => setSentiment('negative')}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-colors ${
                      sentiment === 'negative'
                        ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Frown className="w-8 h-8" />
                    <span className="text-sm font-medium">Negativa</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Que aspecto você está avaliando?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {categories.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCategory(item.id)}
                      className={`flex flex-col items-start p-3 rounded-lg border transition-colors ${
                        category === item.id
                          ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400'
                          : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Avalie de 1 a 5 estrelas
                </label>
                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => setRating(value)}
                      className={`p-1 rounded-lg transition-colors ${
                        value <= rating
                          ? 'text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600 hover:text-yellow-400'
                      }`}
                    >
                      <Star className="w-8 h-8" fill={value <= rating ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label 
                  htmlFor="feedback"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Conte-nos mais sobre sua experiência
                </label>
                <textarea
                  id="feedback"
                  rows={4}
                  value={feedback}
                  onChange={e => setFeedback(e.target.value)}
                  placeholder="Descreva sua experiência e sugestões de melhoria..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  Seu feedback nos ajuda a melhorar a plataforma. Agradecemos sua contribuição!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200 dark:border-gray-700">
          {step === 2 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              Voltar
            </button>
          )}
          
          {step === 1 ? (
            <button
              onClick={handleNext}
              disabled={!sentiment}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              Continuar
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <>
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                disabled={!feedback.trim() || isSubmitting}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Feedback'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
} 