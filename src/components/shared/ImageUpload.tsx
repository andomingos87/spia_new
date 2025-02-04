'use client'

import { ChangeEvent, useCallback, useState } from 'react'
import { Upload, X } from 'lucide-react'
import Image from 'next/image'

interface ImageUploadProps {
  defaultImage?: string
  onChange: (file: File | null) => void
  onClear?: () => void
  className?: string
}

export function ImageUpload({
  defaultImage,
  onChange,
  onClear,
  className = '',
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string>(defaultImage || '')
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = useCallback(
    (file: File | null) => {
      if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreview(reader.result as string)
        }
        reader.readAsDataURL(file)
        onChange(file)
      } else {
        setPreview('')
        onChange(null)
      }
    },
    [onChange]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDragging(false)

      const file = e.dataTransfer.files[0]
      if (file && file.type.startsWith('image/')) {
        handleFileChange(file)
      }
    },
    [handleFileChange]
  )

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileChange(file)
    }
  }

  const handleClear = () => {
    setPreview('')
    onChange(null)
    onClear?.()
  }

  return (
    <div
      className={`relative group ${className}`}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        className="hidden"
        id="image-upload"
      />
      
      <label
        htmlFor="image-upload"
        className={`
          relative flex flex-col items-center justify-center w-full aspect-square
          rounded-xl cursor-pointer overflow-hidden
          ${
            isDragging
              ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500 dark:border-blue-400'
              : preview
              ? ''
              : 'bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700'
          }
          transition-all duration-200
        `}
      >
        {preview ? (
          <>
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-white">
                <Upload className="w-8 h-8" />
                <span className="text-sm font-medium">Trocar imagem</span>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                handleClear()
              }}
              className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            >
              <X className="w-4 h-4" />
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2 p-4 text-center">
            <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Arraste e solte uma imagem aqui
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                ou clique para selecionar
              </p>
            </div>
          </div>
        )}
      </label>
    </div>
  )
} 