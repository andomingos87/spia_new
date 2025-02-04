'use client'

import { useState } from 'react'
import Link from 'next/link'
import { routes } from '@/config/routes'
import { toast } from 'sonner'
import { AuthError } from '@supabase/supabase-js'

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Implementar recuperação de senha
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Email de recuperação enviado com sucesso!')
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      if (error instanceof AuthError) {
        toast.error(error.message)
      } else {
        toast.error('Erro ao enviar email de recuperação')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-sm">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Recuperar senha
        </h2>
        <p className="mt-2 text-base text-gray-700 dark:text-gray-300">
          Digite seu email para receber as instruções
        </p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            placeholder="seu@email.com"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Enviando...' : 'Enviar instruções'}
        </button>

        <div className="text-center text-sm">
          <Link
            href={routes.auth.signin}
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Voltar para o login
          </Link>
        </div>
      </form>
    </div>
  )
} 