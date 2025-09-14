// src/components/LeadCard.tsx
import React from 'react'
import { X } from 'lucide-react'
import { Lead } from '../lib/supabase'

type LeadCardProps = {
  lead: Lead
  onClose: () => void
}

export default function LeadCard({ lead, onClose }: LeadCardProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Lead Details</h2>

        <div className="space-y-2 text-gray-700">
          <div><strong>Name:</strong> {lead.first_name} {lead.last_name}</div>
          <div><strong>Email:</strong> {lead.email}</div>
          <div><strong>Phone:</strong> {lead.phone || '-'}</div>
          <div><strong>Company:</strong> {lead.company || '-'}</div>
          <div><strong>Status:</strong> {lead.status}</div>
          <div><strong>Created:</strong> {new Date(lead.created_at).toLocaleDateString()}</div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  )
}
