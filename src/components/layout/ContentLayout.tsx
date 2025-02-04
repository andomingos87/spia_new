'use client'

import { Filter } from 'lucide-react'
import { useState } from 'react'
import { MainLayout } from './MainLayout'

interface ContentLayoutProps {
  children: React.ReactNode
}

export function ContentLayout({ children }: ContentLayoutProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Painel de Filtros */}
        <div
          className={`lg:w-64 bg-white p-4 rounded-lg shadow-sm transform transition-transform duration-200 ease-in-out ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static left-0 top-0 h-full z-40`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filtros</h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="lg:hidden"
            >
              <Filter className="h-5 w-5" />
            </button>
          </div>
          {/* Conteúdo do Filtro */}
        </div>

        {/* Botão de Filtro Mobile */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="lg:hidden fixed right-4 bottom-4 bg-[#3366FF] text-white p-3 rounded-full shadow-lg"
        >
          <Filter className="h-6 w-6" />
        </button>

        {/* Conteúdo Principal */}
        <div className="flex-1">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            {children}
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 