import React, { useState, useEffect } from 'react';
import {
  getConsentFromCookie,
  saveConsentToCookie,
  updateGoogleConsentMode,
  getDefaultConsent,
  ConsentPreferences
} from '../utils/consentUtils';

const ConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(getDefaultConsent());

  useEffect(() => {
    const consent = getConsentFromCookie();
    if (!consent) {
      setIsVisible(true);
    } else {
      setPreferences(consent);
      updateGoogleConsentMode(consent);
    }
  }, []);

  const handleAcceptAll = () => {
    const acceptedPreferences: ConsentPreferences = {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted'
    };
    
    setPreferences(acceptedPreferences);
    saveConsentToCookie(acceptedPreferences);
    updateGoogleConsentMode(acceptedPreferences);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const deniedPreferences: ConsentPreferences = {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'denied'
    };
    
    setPreferences(deniedPreferences);
    saveConsentToCookie(deniedPreferences);
    updateGoogleConsentMode(deniedPreferences);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsentToCookie(preferences);
    updateGoogleConsentMode(preferences);
    setIsVisible(false);
  };

  const togglePreference = (key: keyof ConsentPreferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: prev[key] === 'granted' ? 'denied' : 'granted'
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cookie Settings
              </h3>
              <p className="text-sm text-gray-600">
                We use cookies and similar technologies to enhance your experience, 
                analyze site usage, and personalize content. By clicking "Accept All", 
                you consent to the use of all cookies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleRejectAll}
                className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={() => setShowDetails(true)}
                className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Customize
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cookie Settings
              </h3>
              <p className="text-sm text-gray-600">
                You can customize the use of cookies for different purposes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1 mr-4">
                  <h4 className="font-medium text-gray-900 mb-1">
                    Essential Cookies (Required)
                  </h4>
                  <p className="text-sm text-gray-600">
                    Necessary for site operation and cannot be disabled.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Includes: functionality_storage, security_storage
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  Enabled
                </div>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1 mr-4">
                  <h4 className="font-medium text-gray-900 mb-1">
                    Analytics Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Help track visitor counts and analyze site effectiveness.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Includes: analytics_storage, personalization_storage
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics_storage === 'granted'}
                    onChange={() => {
                      togglePreference('analytics_storage');
                      togglePreference('personalization_storage');
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1 mr-4">
                  <h4 className="font-medium text-gray-900 mb-1">
                    Advertising Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Used to show relevant ads and track campaign effectiveness.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Includes: ad_storage, ad_user_data, ad_personalization
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.ad_storage === 'granted'}
                    onChange={() => {
                      togglePreference('ad_storage');
                      togglePreference('ad_user_data');
                      togglePreference('ad_personalization');
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowDetails(false)}
                className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsentBanner;
