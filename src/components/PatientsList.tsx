import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { 
  Bell, Calendar, Users, Activity, AlertCircle, Search, BarChart2, 
  Clock, Home, UserPlus, ClipboardList, Settings, LogOut, ChevronRight,
  Plus, FileText, TrendingUp, MessageCircle, Phone, Video, ClipboardPlus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PatientList = () => {

    const navigate = useNavigate();

    return <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div key={i} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-200"></div>
            <div>
              <h3 className="font-medium">Patient Name {i + 1}</h3>
              <p className="text-sm text-gray-500">ID: P2024{i.toString().padStart(4, '0')}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MessageCircle className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ClipboardPlus className="h-5 w-5 text-gray-600" onClick={()=>navigate(`/addreport/Patient Name ${i + 1}`)} />
            </button>
            <ChevronRight className="h-5 w-5 text-gray-400" onClick={()=>navigate('/patientdetails')}/>
          </div>
        </div>
      ))}
    </div>
};

  export default PatientList;