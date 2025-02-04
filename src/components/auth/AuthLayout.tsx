'use client'

import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left side with gradient background */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-8">Get Everything You Want</h1>
          <blockquote className="text-xl font-light italic">
            "Success is not final, failure is not fatal: it is the courage to continue that counts.
            Trust the process, embrace the journey, and keep pushing forward."
          </blockquote>
        </div>
      </div>

      {/* Right side with form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-20">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-sm text-gray-600">
                {subtitle}
              </p>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  )
} 