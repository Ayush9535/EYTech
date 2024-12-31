import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { useParams } from 'react-router-dom';

const AddPatientReportForm = () => {
    const { name } = useParams();

  const [formData, setFormData] = useState({
    // Patient Identification
    patientName: name,
    patientDOB: '',

    // Report Details
    reportDate: '',
    reportType: '',
    symptomsComplaints: '',

    // Vitals
    bloodPressure: '',
    heartRate: '',
    bodyTemperature: '',
    oxygenSaturation: '',
    bloodSugarLevel: '',

    // Diagnosis
    provisionalDiagnosis: '',
    diagnosisSeverity: '',

    // Prescriptions
    medications: [{ name: '', dosage: '', duration: '' }],

    // Follow-Up
    followUpDate: '',
    followUpInstructions: '',

    // Attachments
    attachmentFiles: []
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleAddMedication = () => {
    setFormData(prev => ({
      ...prev, 
      medications: [...prev.medications, { name: '', dosage: '', duration: '' }]
    }));
  };

  const handleMedicationChange = (index, field, value) => {
    const updatedMedications = [...formData.medications];
    updatedMedications[index][field] = value;
    setFormData(prev => ({...prev, medications: updatedMedications}));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({...prev, attachmentFiles: files}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Report submitted:', formData);
    // Implement report submission logic
  };

  return (
    <Card className="max-w-full mx-auto">
      <CardHeader>
        <CardTitle>Patient Medical Report</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Identification Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Patient Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                value={formData.patientName}
                onChange={(e) => handleInputChange('patientName', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Patient DOB</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg"
                value={formData.patientDOB}
                onChange={(e) => handleInputChange('patientDOB', e.target.value)}
                required
              />
            </div>
          </div>

          {/* Report Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Report Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg"
                value={formData.reportDate}
                onChange={(e) => handleInputChange('reportDate', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Report Type</label>
              <select
                className="w-full p-2 border rounded-lg"
                value={formData.reportType}
                onChange={(e) => handleInputChange('reportType', e.target.value)}
                required
              >
                <option value="">Select Report Type</option>
                <option value="lab-test">Lab Test Report</option>
                <option value="imaging">Diagnostic Imaging</option>
                <option value="check-up">Regular Check-up</option>
              </select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Symptoms/Complaints</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                value={formData.symptomsComplaints}
                onChange={(e) => handleInputChange('symptomsComplaints', e.target.value)}
              />
            </div>
          </div>

          {/* Vitals Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Blood Pressure</label>
              <input
                type="text"
                placeholder="e.g., 120/80"
                className="w-full p-2 border rounded-lg"
                value={formData.bloodPressure}
                onChange={(e) => handleInputChange('bloodPressure', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Heart Rate (bpm)</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg"
                value={formData.heartRate}
                onChange={(e) => handleInputChange('heartRate', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Body Temperature (°C)</label>
              <input
                type="number"
                step="0.1"
                className="w-full p-2 border rounded-lg"
                value={formData.bodyTemperature}
                onChange={(e) => handleInputChange('bodyTemperature', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Oxygen Saturation (%)</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg"
                value={formData.oxygenSaturation}
                onChange={(e) => handleInputChange('oxygenSaturation', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Blood Sugar Level</label>
              <input
                type="text"
                placeholder="e.g., 95 mg/dL"
                className="w-full p-2 border rounded-lg"
                value={formData.bloodSugarLevel}
                onChange={(e) => handleInputChange('bloodSugarLevel', e.target.value)}
              />
            </div>
          </div>

          {/* Diagnosis Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Provisional Diagnosis</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                value={formData.provisionalDiagnosis}
                onChange={(e) => handleInputChange('provisionalDiagnosis', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Diagnosis Severity</label>
              <select
                className="w-full p-2 border rounded-lg"
                value={formData.diagnosisSeverity}
                onChange={(e) => handleInputChange('diagnosisSeverity', e.target.value)}
              >
                <option value="">Select Severity</option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </div>
          </div>

          {/* Prescriptions Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Medications</label>
              <button
                type="button"
                onClick={handleAddMedication}
                className="text-blue-600 hover:text-blue-800"
              >
                + Add Medication
              </button>
            </div>
            {formData.medications.map((med, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm">Medication Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    value={med.name}
                    onChange={(e) => handleMedicationChange(index, 'name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Dosage</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    value={med.dosage}
                    onChange={(e) => handleMedicationChange(index, 'dosage', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Duration</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    value={med.duration}
                    onChange={(e) => handleMedicationChange(index, 'duration', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Follow-Up Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Follow-Up Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg"
                value={formData.followUpDate}
                onChange={(e) => handleInputChange('followUpDate', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Follow-Up Instructions</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                value={formData.followUpInstructions}
                onChange={(e) => handleInputChange('followUpInstructions', e.target.value)}
              />
            </div>
          </div>

          {/* Attachments Section */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Upload Attachments</label>
            <input
              type="file"
              multiple
              className="w-full p-2 border rounded-lg"
              onChange={handleFileUpload}
            />
            {formData.attachmentFiles.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                {formData.attachmentFiles.map((file, index) => (
                  <div key={index}>{file.name}</div>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Medical Report
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddPatientReportForm;
