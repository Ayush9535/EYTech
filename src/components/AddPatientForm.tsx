import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const AddPatientForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    dateOfBirth: '',
    gender: '',
    
    // Contact Information
    phoneNumber: '',
    email: '',
    address: '',
    
    // Emergency Contact
    emergencyContactName: '',
    emergencyContactPhone: '',
    
    // Medical History
    allergies: '',
    chronicConditions: '',
    pastSurgeries: '',
    familyMedicalHistory: '',
    
    // Lifestyle Information
    smokingHabit: '',
    alcoholConsumption: '',
    dietaryPreference: '',
    activityLevel: '',
    
    // Initial Health Metrics
    height: '',
    weight: '',
    bloodPressure: '',
    heartRate: '',
    bloodSugarLevel: '',
    oxygenSaturation: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Implement patient registration logic
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  return (
    <Card className="max-w-full mx-auto">
      <CardHeader>
        <CardTitle>Comprehensive Patient Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Gender</label>
              <select
                className="w-full p-2 border rounded-lg"
                value={formData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer Not to Say</option>
              </select>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                className="w-full p-2 border rounded-lg"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Address</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              />
            </div>
          </div>

          {/* Emergency Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Emergency Contact Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                value={formData.emergencyContactName}
                onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Emergency Contact Phone</label>
              <input
                type="tel"
                className="w-full p-2 border rounded-lg"
                value={formData.emergencyContactPhone}
                onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                required
              />
            </div>
          </div>

          {/* Medical History Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Known Allergies</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                value={formData.allergies}
                onChange={(e) => handleInputChange('allergies', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Chronic Conditions</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                value={formData.chronicConditions}
                onChange={(e) => handleInputChange('chronicConditions', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Past Surgeries</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                value={formData.pastSurgeries}
                onChange={(e) => handleInputChange('pastSurgeries', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Family Medical History</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                value={formData.familyMedicalHistory}
                onChange={(e) => handleInputChange('familyMedicalHistory', e.target.value)}
              />
            </div>
          </div>

          {/* Lifestyle Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Smoking Habit</label>
              <select
                className="w-full p-2 border rounded-lg"
                value={formData.smokingHabit}
                onChange={(e) => handleInputChange('smokingHabit', e.target.value)}
              >
                <option value="">Select</option>
                <option value="non-smoker">Non-Smoker</option>
                <option value="occasional">Occasional</option>
                <option value="regular">Regular</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Alcohol Consumption</label>
              <select
                className="w-full p-2 border rounded-lg"
                value={formData.alcoholConsumption}
                onChange={(e) => handleInputChange('alcoholConsumption', e.target.value)}
              >
                <option value="">Select</option>
                <option value="non-drinker">Non-Drinker</option>
                <option value="occasional">Occasional</option>
                <option value="regular">Regular</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Dietary Preference</label>
              <select
                className="w-full p-2 border rounded-lg"
                value={formData.dietaryPreference}
                onChange={(e) => handleInputChange('dietaryPreference', e.target.value)}
              >
                <option value="">Select</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="non-vegetarian">Non-Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Activity Level</label>
              <select
                className="w-full p-2 border rounded-lg"
                value={formData.activityLevel}
                onChange={(e) => handleInputChange('activityLevel', e.target.value)}
              >
                <option value="">Select</option>
                <option value="sedentary">Sedentary</option>
                <option value="moderate">Moderately Active</option>
                <option value="active">Active</option>
                <option value="very-active">Very Active</option>
              </select>
            </div>
          </div>

          {/* Initial Health Metrics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Height (cm)</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg"
                value={formData.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Weight (kg)</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg"
                value={formData.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
              />
            </div>
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
              <label className="text-sm font-medium">Blood Sugar Level</label>
              <input
                type="text"
                placeholder="e.g., 95 mg/dL"
                className="w-full p-2 border rounded-lg"
                value={formData.bloodSugarLevel}
                onChange={(e) => handleInputChange('bloodSugarLevel', e.target.value)}
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
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register Patient
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddPatientForm;
