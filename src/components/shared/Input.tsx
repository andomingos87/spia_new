'use client'

import { ComponentProps, forwardRef } from 'react'
import { LucideIcon } from 'lucide-react'

interface InputProps extends Omit<ComponentProps<'input'>, 'prefix'> {
  label?: string
  error?: string
  icon?: LucideIcon
  prefix?: string | React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon: Icon, prefix, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            {label}
          </label>
        )}
        
        <div className="relative rounded-lg shadow-sm">
          {prefix && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                {prefix}
              </span>
            </div>
          )}
          
          {Icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
          )}
          
          <input
            ref={ref}
            {...props}
            className={`
              block w-full rounded-lg border-0 px-3 py-2
              bg-white dark:bg-gray-800
              text-gray-900 dark:text-white
              ring-1 ring-inset ring-gray-300 dark:ring-gray-700
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-blue-500
              ${Icon || prefix ? 'pl-10' : ''}
              ${error ? 'ring-red-300 dark:ring-red-700 focus:ring-red-500' : ''}
              ${className}
            `}
          />
        </div>
        
        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input' 