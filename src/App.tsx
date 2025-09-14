import React, { useState } from 'react'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { LoginForm } from './components/LoginForm'
import { Header } from './components/Header'
import { LeadForm } from './components/LeadForm'
import { LeadsList } from './components/LeadsList'
import { Lead } from './lib/supabase'

function AppContent() {
  const { isAuthenticated } = useAuth()
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [editingLead, setEditingLead] = useState<Lead | undefined>(undefined)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleCreateLead = () => {
    setEditingLead(undefined)
    setShowLeadForm(true)
  }

  const handleEditLead = (lead: Lead) => {
    setEditingLead(lead)
    setShowLeadForm(true)
  }

  const handleFormClose = () => {
    setShowLeadForm(false)
    setEditingLead(undefined)
  }

  const handleFormSuccess = () => {
    setShowLeadForm(false)
    setEditingLead(undefined)
    setRefreshTrigger(prev => prev + 1)
  }

  if (!isAuthenticated) {
    return <LoginForm />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCreateLead={handleCreateLead} />
      <main>
        <LeadsList 
          onEditLead={handleEditLead} 
          refreshTrigger={refreshTrigger}
        />
      </main>

      {showLeadForm && (
        <LeadForm
          lead={editingLead}
          onClose={handleFormClose}
          onSuccess={handleFormSuccess}
        />
      )}
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App