'use client'

import { useState, useEffect } from 'react'
import { Competitor } from '@/types/company'
import { Dialog } from '@/components/shared/Dialog'
import { CompetitorForm } from '@/components/features/competitors/CompetitorForm'
import { CompetitorDetails } from '@/components/features/competitors/CompetitorDetails'
import { MoreVertical, PlusCircle, Eye, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { getCompetitors, createCompetitor, updateCompetitor, deleteCompetitor } from '@/services/competitors'
import { toast } from 'sonner'

export default function CompetitorsPage() {
  const [competitors, setCompetitors] = useState<Competitor[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [openMenuId, setOpenMenuId] = useState<string | null>(null)

  useEffect(() => {
    loadCompetitors()
  }, [])

  const loadCompetitors = async () => {
    try {
      const data = await getCompetitors()
      setCompetitors(data)
    } catch (error) {
      console.error('Erro ao carregar concorrentes:', error)
      toast.error('Erro ao carregar concorrentes')
    } finally {
      setLoading(false)
    }
  }

  const handleOpenModal = () => {
    setIsFormOpen(true)
    setIsEditing(false)
    setSelectedCompetitor(null)
  }

  const handleCloseModal = () => {
    setIsFormOpen(false)
    setIsEditing(false)
    setSelectedCompetitor(null)
  }

  const handleAddCompetitor = async (data: Partial<Competitor>) => {
    try {
      const newCompetitor = await createCompetitor(data)
      setCompetitors((prev) => [...prev, newCompetitor])
      setIsFormOpen(false)
      toast.success('Concorrente adicionado com sucesso')
    } catch (error) {
      console.error('Erro ao adicionar concorrente:', error)
      toast.error('Erro ao adicionar concorrente')
    }
  }

  const handleEditCompetitor = async (data: Partial<Competitor>) => {
    if (!selectedCompetitor) return

    try {
      const updatedCompetitor = await updateCompetitor(selectedCompetitor.id, data)
      setCompetitors((prev) =>
        prev.map((comp) =>
          comp.id === selectedCompetitor.id ? updatedCompetitor : comp
        )
      )
      setIsFormOpen(false)
      setIsDetailsOpen(false)
      setSelectedCompetitor(null)
      setIsEditing(false)
      toast.success('Concorrente atualizado com sucesso')
    } catch (error) {
      console.error('Erro ao atualizar concorrente:', error)
      toast.error('Erro ao atualizar concorrente')
    }
  }

  const handleDeleteCompetitor = async (id: string) => {
    try {
      await deleteCompetitor(id)
      setCompetitors((prev) => prev.filter((comp) => comp.id !== id))
      setOpenMenuId(null)
      toast.success('Concorrente excluído com sucesso')
    } catch (error) {
      console.error('Erro ao excluir concorrente:', error)
      toast.error('Erro ao excluir concorrente')
    }
  }

  const handleViewDetails = (competitor: Competitor) => {
    setSelectedCompetitor(competitor)
    setIsDetailsOpen(true)
    setOpenMenuId(null)
  }

  const handleStartEdit = () => {
    setIsEditing(true)
    setIsDetailsOpen(false)
    setIsFormOpen(true)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Concorrentes
        </h1>
        
        <button
          onClick={handleOpenModal}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <PlusCircle size={20} />
          Adicionar Concorrente
        </button>
      </div>

      {loading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-48 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"
            />
          ))}
        </div>
      ) : competitors.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400">
            Nenhum concorrente cadastrado
          </p>
        </div>
      ) : (
        <div className="overflow-hidden bg-white dark:bg-gray-800 shadow rounded-lg">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {competitors.map((competitor) => (
              <li
                key={competitor.id}
                className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={competitor.logo}
                      alt={competitor.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {competitor.name}
                    </h3>
                  </div>
                </div>

                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenMenuId(
                        openMenuId === competitor.id ? null : competitor.id
                      )
                    }
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>

                  {openMenuId === competitor.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                      <button
                        onClick={() => handleViewDetails(competitor)}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Eye className="w-4 h-4" />
                        Ver detalhes
                      </button>
                      <button
                        onClick={() => handleDeleteCompetitor(competitor.id)}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30"
                      >
                        <Trash2 className="w-4 h-4" />
                        Excluir
                      </button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Dialog
        open={isFormOpen}
        onClose={handleCloseModal}
        title={isEditing ? 'Editar Concorrente' : 'Adicionar Concorrente'}
        maxWidth="4xl"
      >
        <CompetitorForm
          competitor={selectedCompetitor || undefined}
          onSubmit={isEditing ? handleEditCompetitor : handleAddCompetitor}
          onCancel={handleCloseModal}
        />
      </Dialog>

      <Dialog
        open={isDetailsOpen}
        onClose={() => {
          setIsDetailsOpen(false)
          setSelectedCompetitor(null)
        }}
        title="Detalhes do Concorrente"
        maxWidth="lg"
      >
        {selectedCompetitor && (
          <CompetitorDetails
            competitor={selectedCompetitor}
            onEdit={handleStartEdit}
          />
        )}
      </Dialog>
    </div>
  )
} 