import React from 'react'
import { Users, LogOut, Plus } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

type HeaderProps = {
  onCreateLead: () => void
}

export function Header({ onCreateLead }: HeaderProps) {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Lead Manager</h1>
            <p className="text-sm text-gray-500">Welcome back, {user?.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onCreateLead}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Lead
          </button>
          <button
            onClick={logout}
            className="inline-flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}