import { 
  Card, CardHeader, CardTitle, CardContent 
} from './ui/card';
import { 
  Users, DownloadCloud, Eye,
  ChevronRight
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { useNavigate } from 'react-router-dom';

const PatientDetailsPage = () => {

    const navigate = useNavigate();

  const patientData = {
    personalInfo: {
      name: "Sarah Johnson",
      age: 35,
      gender: "Female",
      email: "sarah.johnson@email.com",
      phone: "(555) 123-4567",
      address: "123 Wellness Street, Healthville, HV 12345",
      emergencyContact: {
        name: "Michael Johnson",
        relationship: "Spouse",
        phone: "(555) 987-6543"
      }
    },
    medicalProfile: {
      bloodType: "O+",
      height: "5'7\"",
      weight: "135 lbs",
      allergies: ["Penicillin", "Latex"],
      chronicConditions: ["Mild Asthma"],
      medications: [
        { name: "Albuterol Inhaler", dosage: "2 puffs as needed" },
        { name: "Vitamin D Supplement", dosage: "1000 IU daily" }
      ]
    },
    recentHealthMetrics: {
      bloodPressure: [
        { date: "2024-11-15", systolic: 120, diastolic: 80 },
        { date: "2024-10-15", systolic: 122, diastolic: 82 },
        { date: "2024-09-15", systolic: 118, diastolic: 78 }
      ],
      heartRate: [
        { date: "2024-11-15", rate: 72 },
        { date: "2024-10-15", rate: 75 },
        { date: "2024-09-15", rate: 70 }
      ],
      oxygenLevel: [
        { date: "2024-11-15", level: 98 },
        { date: "2024-10-15", level: 97 },
        { date: "2024-09-15", level: 99 }
      ]
    },
    previousAppointments: [
      {
        id: 1,
        date: "2024-09-15",
        type: "Annual Checkup",
        doctor: "Dr. Emily Rodriguez",
        notes: "Regular health screening, all vitals normal",
        status: "Completed"
      },
      {
        id: 2,
        date: "2024-06-20",
        type: "Asthma Follow-up",
        doctor: "Dr. Michael Chang",
        notes: "Reviewed inhaler usage, adjusted medication",
        status: "Completed"
      },
      {
        id: 3,
        date: "2024-11-20",
        type: "Routine Checkup",
        doctor: "Dr. Sarah Kim",
        notes: "Scheduled routine health assessment",
        status: "Upcoming"
      }
    ],
    medicalReports: [
      {
        id: 1,
        date: "2024-09-15",
        type: "Annual Physical",
        doctor: "Dr. Emily Rodriguez",
        downloadLink: "/reports/annual-physical-2024.pdf"
      },
      {
        id: 2,
        date: "2024-06-20",
        type: "Pulmonology Consultation",
        doctor: "Dr. Michael Chang",
        downloadLink: "/reports/pulmonology-2024.pdf"
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Personal Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{patientData.personalInfo.name}</h2>
                  <p className="text-gray-600">
                    {patientData.personalInfo.age} years old, {patientData.personalInfo.gender}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Email</span>
                  <span>{patientData.personalInfo.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone</span>
                  <span>{patientData.personalInfo.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Address</span>
                  <span>{patientData.personalInfo.address}</span>
                </div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <h3 className="font-medium text-yellow-700">Emergency Contact</h3>
                <div className="flex justify-between">
                  <span className="text-gray-600">Name</span>
                  <span>{patientData.personalInfo.emergencyContact.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Relationship</span>
                  <span>{patientData.personalInfo.emergencyContact.relationship}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone</span>
                  <span>{patientData.personalInfo.emergencyContact.phone}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Profile Section */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Medical Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-4">Basic Health Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Blood Type</span>
                    <span>{patientData.medicalProfile.bloodType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Height</span>
                    <span>{patientData.medicalProfile.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight</span>
                    <span>{patientData.medicalProfile.weight}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Allergies & Conditions</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-600">Allergies:</span>
                    {patientData.medicalProfile.allergies.map((allergy, index) => (
                      <span key={index} className="ml-2 bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                        {allergy}
                      </span>
                    ))}
                  </div>
                  <div>
                    <span className="text-gray-600">Chronic Conditions:</span>
                    {patientData.medicalProfile.chronicConditions.map((condition, index) => (
                      <span key={index} className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium mb-4">Current Medications</h3>
              <div className="space-y-2">
                {patientData.medicalProfile.medications.map((med, index) => (
                  <div key={index} className="flex justify-between bg-blue-50 p-3 rounded-lg">
                    <div>
                      <span className="font-medium">{med.name}</span>
                    </div>
                    <div className="text-gray-600">{med.dosage}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Health Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Blood Pressure</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart width={300} height={200} data={patientData.recentHealthMetrics.bloodPressure}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="systolic" stroke="#8884d8" />
              <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" />
            </LineChart>
            <div className="flex justify-between mt-4">
              <div>
                <span className="text-gray-600">Latest</span>
                <div className="font-bold">
                  {patientData.recentHealthMetrics.bloodPressure[0].systolic}/
                  {patientData.recentHealthMetrics.bloodPressure[0].diastolic}
                </div>
              </div>
              <div className="text-green-600">Normal</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Heart Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart width={300} height={200} data={patientData.recentHealthMetrics.heartRate}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="rate" stroke="#8884d8" />
            </LineChart>
            <div className="flex justify-between mt-4">
              <div>
                <span className="text-gray-600">Latest</span>
                <div className="font-bold">
                  {patientData.recentHealthMetrics.heartRate[0].rate} BPM
                </div>
              </div>
              <div className="text-green-600">Healthy</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Oxygen Saturation</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart width={300} height={200} data={patientData.recentHealthMetrics.oxygenLevel}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="level" stroke="#8884d8" />
            </LineChart>
            <div className="flex justify-between mt-4">
              <div>
                <span className="text-gray-600">Latest</span>
                <div className="font-bold">
                  {patientData.recentHealthMetrics.oxygenLevel[0].level}%
                </div>
              </div>
              <div className="text-green-600">Normal</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Appointments and Reports Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Previous Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            {patientData.previousAppointments.map((appointment) => (
              <div 
                key={appointment.id} 
                className="flex justify-between items-center p-4 border-b last:border-b-0 hover:bg-gray-50"
              >
                <div>
                  <div className="font-medium">{appointment.type}</div>
                  <div className="text-sm text-gray-600">
                    {appointment.date} with {appointment.doctor}
                  </div>
                </div>
                <div>
                  <span className={`
                    px-2 py-1 rounded-full text-xs
                    ${appointment.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'}
                  `}>
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Medical Reports</CardTitle>
          </CardHeader>
          <CardContent>
            {patientData.medicalReports.map((report) => (
              <div 
                key={report.id} 
                className="flex justify-between items-center p-4 border-b last:border-b-0 hover:bg-gray-50"
              >
                <div>
                  <div className="font-medium">{report.type}</div>
                  <div className="text-sm text-gray-600">
                    {report.date} by {report.doctor}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Eye className="h-5 w-5 text-blue-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <DownloadCloud className="h-5 w-5 text-green-600" />
                  </button>
                  <button>
                    <ChevronRight className="h-5 w-5 text-gray-400" onClick={()=>navigate('/reportdetails')}/>
                  </button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientDetailsPage;
