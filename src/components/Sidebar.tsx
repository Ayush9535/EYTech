import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { 
  Bell, Calendar, Users, Activity, AlertCircle, Search, BarChart2, 
  Clock, Home, UserPlus, ClipboardList, Settings, LogOut, ChevronRight,
  Plus, FileText, TrendingUp, MessageCircle, Phone, Video
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <div className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-blue-600">HealthConnect AI</h2>
      </div>
      
      <nav className="space-y-2">
        {[
          { icon: Home, label: 'Dashboard', id: '/dashboard' },
          { icon: Users, label: 'Patients', id: '/patients' },
          { icon: UserPlus, label: 'Add Patient', id: '/add-patient' },
          { icon: Calendar, label: 'Appointments', id: '/appointments' },
          { icon: MessageCircle, label: 'Messages', id: '/messages' },
          { icon: Settings, label: 'Settings', id: '/settings' }
        ].map(({ icon: Icon, label, id }) => (
            <button
            key={id}
            onClick={() => navigate(id)}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left
                `}
                >
            <Icon className="h-5 w-5" />
            {label}
          </button>
        ))}
      </nav>
      
      <button className="absolute bottom-4 left-4 flex items-center gap-3 text-gray-600 hover:text-red-600">
        <LogOut className="h-5 w-5" />
        Logout
      </button>
    </div>
    )
};

export default Sidebar;