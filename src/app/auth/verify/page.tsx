'use client'

import Link from 'next/link'
import { AuthLayout } from '@/components/auth/AuthLayout'

export default function VerifyEmail() {
  return (
    <AuthLayout
      title="Check Your Email"
      subtitle="We've sent you a verification link"
    >
      <div className="mt-8 space-y-6">
        <div className="rounded-lg bg-blue-50 p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <svg
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <h3 className="mt-3 text-sm font-medium text-blue-800">
            Verification Email Sent
          </h3>
          <p className="mt-2 text-sm text-blue-700">
            Please check your email inbox and click the verification link to complete your registration.
          </p>
        </div>

        <div className="text-center text-sm">
          <p className="text-gray-600">
            Didn't receive the email?{' '}
            <Link
              href="/auth/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Try again
            </Link>
          </p>
          <p className="mt-2 text-gray-600">
            Or{' '}
            <Link
              href="/auth/signin"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              return to sign in
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
} 