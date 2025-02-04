'use client'

import Link from 'next/link'
import { routes } from '@/config/routes'

export default function VerifyEmail() {
  return (
    <div className="w-full max-w-sm">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Verifique seu email
        </h2>
        <p className="mt-2 text-base text-gray-700 dark:text-gray-300">
          Enviamos um link de confirmação para o seu email. Por favor, verifique sua caixa de entrada e spam.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/50 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Após confirmar seu email, você será redirecionado para a página de login.
              </p>
            </div>
          </div>
        </div>

        <Link
          href={routes.auth.signin}
          className="block w-full text-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
        >
          Voltar para o login
        </Link>
      </div>
    </div>
  )
} 