import React from 'react';
import { 
  Card, CardHeader, CardTitle, CardContent 
} from './ui/card';
import { 
  FileText, Calendar, Stethoscope, DownloadCloud, Eye
} from 'lucide-react';

const ReportDetailsPage = () => {
  // Mock report data (in a real app, this would come from a backend)
  const reportData = {
    // Based on the AddPatientReportForm state structure
    patientInfo: {
      patientId: 'P12345',
      patientName: 'Sarah Johnson',
      patientDOB: '1988-05-15'
    },
    reportDetails: {
      reportDate: '2024-11-20',
      reportType: 'check-up',
      symptomsComplaints: 'Routine annual health check-up, no specific complaints',
    },
    vitals: {
      bloodPressure: '120/80',
      heartRate: 72,
      bodyTemperature: 37.0,
      oxygenSaturation: 98,
      bloodSugarLevel: '95 mg/dL'
    },
    diagnosis: {
      provisionalDiagnosis: 'Healthy, no significant concerns',
      diagnosisSeverity: 'mild'
    },
    medications: [
      { 
        name: 'Vitamin D Supplement', 
        dosage: '1000 IU', 
        duration: 'Daily' 
      }
    ],
    followUp: {
      followUpDate: '2025-05-20',
      followUpInstructions: 'Annual check-up, continue current health regimen'
    },
    attachments: [
      { name: 'blood-test-results.pdf', size: '250 KB' },
      { name: 'vitals-chart.png', size: '100 KB' }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Report Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Medical Report</h1>
            <p className="text-gray-600">
              Report Date: {reportData.reportDetails.reportDate}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Eye className="h-6 w-6 text-blue-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <DownloadCloud className="h-6 w-6 text-green-600" />
          </button>
        </div>
      </div>

      {/* Patient and Report Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Patient ID</span>
                <span>{reportData.patientInfo.patientId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Patient Name</span>
                <span>{reportData.patientInfo.patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date of Birth</span>
                <span>{reportData.patientInfo.patientDOB}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Report Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Report Type</span>
                <span className="capitalize">{reportData.reportDetails.reportType.replace('-', ' ')}</span>
              </div>
              <div>
                <span className="text-gray-600 block mb-1">Symptoms/Complaints</span>
                <p>{reportData.reportDetails.symptomsComplaints}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vitals and Diagnosis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Vital Signs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Blood Pressure</span>
                <span>{reportData.vitals.bloodPressure}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Heart Rate</span>
                <span>{reportData.vitals.heartRate} bpm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Body Temperature</span>
                <span>{reportData.vitals.bodyTemperature}°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Oxygen Saturation</span>
                <span>{reportData.vitals.oxygenSaturation}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Blood Sugar Level</span>
                <span>{reportData.vitals.bloodSugarLevel}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Diagnosis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Provisional Diagnosis</span>
                <span>{reportData.diagnosis.provisionalDiagnosis}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Diagnosis Severity</span>
                <span className={`
                  capitalize px-2 py-1 rounded-full text-xs
                  ${reportData.diagnosis.diagnosisSeverity === 'mild' 
                    ? 'bg-green-100 text-green-800' 
                    : reportData.diagnosis.diagnosisSeverity === 'moderate' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-red-100 text-red-800'}
                `}>
                  {reportData.diagnosis.diagnosisSeverity}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Medications and Follow-up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Medications</CardTitle>
          </CardHeader>
          <CardContent>
            {reportData.medications.map((med, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center p-3 bg-blue-50 rounded-lg mb-2"
              >
                <div>
                  <div className="font-medium">{med.name}</div>
                  <div className="text-sm text-gray-600">{med.dosage}</div>
                </div>
                <div className="text-gray-600">{med.duration}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Follow-up Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Follow-up Date</span>
                <span className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  {reportData.followUp.followUpDate}
                </span>
              </div>
              <div>
                <span className="text-gray-600 block mb-1">Follow-up Instructions</span>
                <p>{reportData.followUp.followUpInstructions}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attachments */}
      <Card>
        <CardHeader>
          <CardTitle>Attachments</CardTitle>
        </CardHeader>
        <CardContent>
          {reportData.attachments.map((attachment, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center p-4 border-b last:border-b-0 hover:bg-gray-50"
            >
              <div>
                <div className="font-medium">{attachment.name}</div>
                <div className="text-sm text-gray-600">{attachment.size}</div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Eye className="h-5 w-5 text-blue-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <DownloadCloud className="h-5 w-5 text-green-600" />
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportDetailsPage;
