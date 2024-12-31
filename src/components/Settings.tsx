import React, { useState } from 'react';
import { 
  Settings, Bell, User, Lock, Palette, 
  ChevronRight, Save, RefreshCw 
} from 'lucide-react';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true
  });

  const [userProfile, setUserProfile] = useState({
    name: 'Dr. Emily Rodriguez',
    email: 'emily.rodriguez@healthconnect.ai',
    specialty: 'Pediatrics'
  });

  const [appSettings, setAppSettings] = useState({
    darkMode: false,
    compactView: false
  });

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleAppSettingToggle = (key) => {
    setAppSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const ToggleSwitch = ({ checked, onToggle }) => (
    <button 
      onClick={onToggle}
      className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
        checked ? 'bg-blue-600' : 'bg-gray-300'
      }`}
    >
      <span 
        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  const SettingsCard = ({ icon: Icon, title, children }) => (
    <div className="bg-white rounded-lg shadow-md border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center">
        <Icon className="h-5 w-5 mr-2 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center mb-6">
        <Settings className="h-8 w-8 mr-3 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Notification Settings */}
        <SettingsCard icon={Bell} title="Notification Preferences">
          <div className="space-y-4">
            {[
              { 
                key: 'emailAlerts', 
                label: 'Email Notifications', 
                description: 'Receive important updates via email' 
              },
              { 
                key: 'smsAlerts', 
                label: 'SMS Alerts', 
                description: 'Get critical alerts as text messages' 
              },
              { 
                key: 'pushNotifications', 
                label: 'Push Notifications', 
                description: 'Instant notifications on your device' 
              }
            ].map(({ key, label, description }) => (
              <div key={key} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{label}</p>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
                <ToggleSwitch
                  checked={notifications[key]}
                  onToggle={() => handleNotificationToggle(key)}
                />
              </div>
            ))}
          </div>
        </SettingsCard>

        {/* Profile Settings */}
        <SettingsCard icon={User} title="Profile Information">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input 
                type="text" 
                value={userProfile.name}
                onChange={(e) => setUserProfile(prev => ({
                  ...prev, 
                  name: e.target.value
                }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                value={userProfile.email}
                onChange={(e) => setUserProfile(prev => ({
                  ...prev, 
                  email: e.target.value
                }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        </SettingsCard>

        {/* App Preferences */}
        <SettingsCard icon={Palette} title="App Preferences">
          <div className="space-y-4">
            {[
              { 
                key: 'darkMode', 
                label: 'Dark Mode', 
                description: 'Switch between light and dark themes' 
              },
              { 
                key: 'compactView', 
                label: 'Compact View', 
                description: 'Optimize screen space' 
              }
            ].map(({ key, label, description }) => (
              <div key={key} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{label}</p>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
                <ToggleSwitch
                  checked={appSettings[key]}
                  onToggle={() => handleAppSettingToggle(key)}
                />
              </div>
            ))}
          </div>
        </SettingsCard>

        {/* Security Settings */}
        <SettingsCard icon={Lock} title="Security">
          <div className="space-y-4">
            <button className="w-full flex justify-between items-center bg-blue-50 hover:bg-blue-100 p-3 rounded-lg">
              <div>
                <p className="font-medium">Change Password</p>
                <p className="text-sm text-gray-500">Update your account password</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </button>
            <button className="w-full flex justify-between items-center bg-blue-50 hover:bg-blue-100 p-3 rounded-lg">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </SettingsCard>
      </div>

      {/* Save Changes Button */}
      <div className="mt-6 flex justify-end space-x-4">
        <button 
          className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-gray-800"
        >
          <RefreshCw className="h-4 w-4" /> Reset
        </button>
        <button 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <Save className="h-4 w-4" /> Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;