'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Sidebar Mobile */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden fixed left-4 top-4 z-50 p-2 bg-white rounded-lg shadow-sm"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4 lg:hidden">
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        <Header />
        <main className="max-w-[1200px] mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </div>
  )
} 