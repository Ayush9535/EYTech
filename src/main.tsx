import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar.tsx'
import { Bell } from 'lucide-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Sidebar />
        <div className="ml-64 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                Dashboard
              </h1>
              <p className="text-gray-600">Thursday, 20 Nov 2024</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                  3
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <App />
        </div>
      </div>
    </ BrowserRouter>
  </StrictMode>,
)
