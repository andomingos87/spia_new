'use client'

import { X } from 'lucide-react'
import { useEffect } from 'react'

interface DialogProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
}

export function Dialog({
  open,
  onClose,
  title,
  children,
  maxWidth = 'md',
}: DialogProps) {
  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.classList.remove('modal-open')
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={onClose} />

      {/* Dialog */}
      <div className="modal-content">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
          <div
            className={`
              relative w-full ${maxWidthClasses[maxWidth]}
              bg-white dark:bg-gray-800 
              shadow-xl rounded-2xl
              ring-1 ring-black/5 dark:ring-white/5
              transition-all duration-300 ease-out
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold leading-6 text-gray-900 dark:text-white">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="rounded-lg p-2.5 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              >
                <span className="sr-only">Fechar</span>
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6 sm:px-8 sm:py-7 overflow-y-auto max-h-[calc(100vh-16rem)]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 