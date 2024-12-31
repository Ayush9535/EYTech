import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { 
  Bell, Calendar, Users, Activity, AlertCircle, Search, BarChart2, 
  Clock, Home, UserPlus, ClipboardList, Settings, LogOut, ChevronRight,
  Plus, FileText, TrendingUp, MessageCircle, Phone, Video
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const AppointmentsList = () => {
    const appointments = [
      {
        id: 1,
        patientName: "Sarah Johnson",
        date: "2024-11-20",
        time: "09:00 AM",
        type: "Regular Checkup",
        status: "Confirmed"
      },
      {
        id: 2,
        patientName: "Michael Chen",
        date: "2024-11-20",
        time: "10:30 AM",
        type: "Follow-up",
        status: "Pending"
      },
      {
        id: 3,
        patientName: "Emily Watson",
        date: "2024-11-20",
        time: "02:00 PM",
        type: "Consultation",
        status: "Confirmed"
      }
    ];
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div>
                  <h3 className="font-medium">{appointment.patientName}</h3>
                  <p className="text-sm text-gray-500">
                    {appointment.date} at {appointment.time}
                  </p>
                  <p className="text-sm text-gray-500">{appointment.type}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    appointment.status === 'Confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status}
                  </span>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Video className="h-5 w-5 text-gray-600" />
                  </button>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  export default AppointmentsList;