import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import {
  Users, Activity, AlertCircle,
  Clock, Settings
} from 'lucide-react';

import DashboardCard from './components/DashboardCard';
import PatientList from './components/PatientsList';
import AddPatientForm from './components/AddPatientForm';
import AppointmentsList from './components/AppointmentsList';
import PatientDetailsPage from './components/PatientDetails';
import { Routes, Route } from 'react-router-dom';
import AddPatientReportForm from './components/AddReportForm';
import ReportDetailsPage from './components/ReportDetailsPage';
import SettingsPage from './components/Settings';
import MessagesPage from './components/Messages';

// const [activePage, setActivePage] = useState('dashboard');

const HealthcarePlatform = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={(
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <DashboardCard
                icon={Users}
                title="Total Patients"
                content={<div className="text-2xl font-bold">1,234</div>}
              />
              <DashboardCard
                icon={AlertCircle}
                title="Critical Cases"
                content={<div className="text-2xl font-bold text-red-500">3</div>}
                urgent={true}
              />
              <DashboardCard
                icon={Activity}
                title="AI Insights"
                content={<div className="text-2xl font-bold">7</div>}
              />
              <DashboardCard
                icon={Clock}
                title="Pending Follow-ups"
                content={<div className="text-2xl font-bold">12</div>}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Patients</CardTitle>
                </CardHeader>
                <CardContent>
                  <PatientList />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-blue-50 p-3">
                      <div className="font-medium text-blue-700">Prediction Alert</div>
                      <p className="text-sm text-blue-600">3 patients show early signs of condition progression</p>
                    </div>
                    <div className="rounded-lg bg-yellow-50 p-3">
                      <div className="font-medium text-yellow-700">Follow-up Required</div>
                      <p className="text-sm text-yellow-600">5 patients need immediate follow-up</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )} />
        <Route path="/dashboard" element={(
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <DashboardCard
                icon={Users}
                title="Total Patients"
                content={<div className="text-2xl font-bold">1,234</div>}
              />
              <DashboardCard
                icon={AlertCircle}
                title="Critical Cases"
                content={<div className="text-2xl font-bold text-red-500">3</div>}
                urgent={true}
              />
              <DashboardCard
                icon={Activity}
                title="AI Insights"
                content={<div className="text-2xl font-bold">7</div>}
              />
              <DashboardCard
                icon={Clock}
                title="Pending Follow-ups"
                content={<div className="text-2xl font-bold">12</div>}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Patients</CardTitle>
                </CardHeader>
                <CardContent>
                  <PatientList />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-blue-50 p-3">
                      <div className="font-medium text-blue-700">Prediction Alert</div>
                      <p className="text-sm text-blue-600">3 patients show early signs of condition progression</p>
                    </div>
                    <div className="rounded-lg bg-yellow-50 p-3">
                      <div className="font-medium text-yellow-700">Follow-up Required</div>
                      <p className="text-sm text-yellow-600">5 patients need immediate follow-up</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )} />
        <Route path="/patients" element={(
          <Card>
            <CardHeader>
              <CardTitle>Patient Directory</CardTitle>
            </CardHeader>
            <CardContent>
              <PatientList />
            </CardContent>
          </Card>
        )} />
        <Route path="/add-patient" element={<AddPatientForm />} />
        <Route path="/appointments" element={<AppointmentsList />} />
        <Route path="/messages" element={<MessagesPage/>} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/patientdetails" element={<PatientDetailsPage />} />
        <Route path='/addreport/:name' element={<AddPatientReportForm/>} />
        <Route path='/reportdetails' element={<ReportDetailsPage />}/>
      </Routes>
    </>
  );
};

export default HealthcarePlatform;
