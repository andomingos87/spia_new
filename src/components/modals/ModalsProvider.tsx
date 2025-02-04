'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { FeedbackModal } from './FeedbackModal'
import { BugReportModal } from './BugReportModal'

interface ModalsContextData {
  openFeedbackModal: () => void
  openBugReportModal: () => void
}

const ModalsContext = createContext({} as ModalsContextData)

interface ModalsProviderProps {
  children: ReactNode
}

export function ModalsProvider({ children }: ModalsProviderProps) {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false)
  const [isBugReportModalOpen, setIsBugReportModalOpen] = useState(false)

  const openFeedbackModal = () => setIsFeedbackModalOpen(true)
  const openBugReportModal = () => setIsBugReportModalOpen(true)

  return (
    <ModalsContext.Provider
      value={{
        openFeedbackModal,
        openBugReportModal,
      }}
    >
      {children}

      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
      />

      <BugReportModal
        isOpen={isBugReportModalOpen}
        onClose={() => setIsBugReportModalOpen(false)}
      />
    </ModalsContext.Provider>
  )
}

export const useModals = () => useContext(ModalsContext) 