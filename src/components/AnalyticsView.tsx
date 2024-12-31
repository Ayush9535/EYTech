import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { 
  Bell, Calendar, Users, Activity, AlertCircle, Search, BarChart2, 
  Clock, Home, UserPlus, ClipboardList, Settings, LogOut, ChevronRight,
  Plus, FileText, TrendingUp, MessageCircle, Phone, Video
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AnalyticsView = () => {
    const patientData = [
      { month: 'Jan', patients: 150, checkups: 120, emergencies: 30 },
      { month: 'Feb', patients: 180, checkups: 140, emergencies: 40 },
      { month: 'Mar', patients: 200, checkups: 160, emergencies: 40 },
      { month: 'Apr', patients: 250, checkups: 200, emergencies: 50 },
      { month: 'May', patients: 280, checkups: 220, emergencies: 60 },
      { month: 'Jun', patients: 300, checkups: 250, emergencies: 50 }
    ];
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Patient Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <LineChart data={patientData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="patients" stroke="#2563eb" />
              <Line type="monotone" dataKey="checkups" stroke="#16a34a" />
              <Line type="monotone" dataKey="emergencies" stroke="#dc2626" />
            </LineChart>
          </div>
        </CardContent>
      </Card>
    );
  };

  export default AnalyticsView;