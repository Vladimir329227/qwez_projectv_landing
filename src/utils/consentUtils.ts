// Google Consent Mode v2 utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export interface ConsentPreferences {
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
  functionality_storage: 'granted' | 'denied';
  personalization_storage: 'granted' | 'denied';
  security_storage: 'granted' | 'denied';
}

export const COOKIE_NAME = 'consent_state';
export const CONSENT_VERSION = 'v2';

/**
 * Initialize Google Consent Mode with default settings
 */
export function initializeGoogleConsentMode(defaultState: ConsentPreferences) {
  // Initialize dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || [];
  
  // Define gtag function if it doesn't exist
  window.gtag = window.gtag || function() {
    window.dataLayer?.push(arguments);
  };
  
  // Set default consent state
  window.gtag('consent', 'default', {
    ...defaultState,
    wait_for_update: 500, // Wait 500ms before applying consent
  });
}

/**
 * Update Google Consent Mode with new preferences
 */
export function updateGoogleConsentMode(preferences: ConsentPreferences) {
  if (window.gtag) {
    window.gtag('consent', 'update', {
      ...preferences
    });
  }
}

/**
 * Get consent state from cookie
 */
export function getConsentFromCookie(): ConsentPreferences | null {
  try {
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${COOKIE_NAME}=`));
    
    if (!value) return null;
    
    const cookieValue = value.split('=')[1];
    const decoded = decodeURIComponent(cookieValue);
    const consent = JSON.parse(decoded);
    
    // Validate consent structure
    if (consent && consent.version === CONSENT_VERSION && consent.preferences) {
      return consent.preferences;
    }
    
    return null;
  } catch (error) {
    console.warn('Error reading consent cookie:', error);
    return null;
  }
}

/**
 * Save consent state to cookie
 */
export function saveConsentToCookie(preferences: ConsentPreferences) {
  const consent = {
    version: CONSENT_VERSION,
    preferences,
    timestamp: Date.now()
  };
  
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(consent))}; expires=${expires.toUTCString()}; path=/; SameSite=Lax; Secure`;
}

/**
 * Get default consent state (privacy-friendly defaults)
 */
export function getDefaultConsent(): ConsentPreferences {
  return {
    analytics_storage: 'granted',      // Allow analytics by default
    ad_storage: 'denied',              // Deny ads by default
    ad_user_data: 'denied',            // Deny ad user data by default
    ad_personalization: 'denied',      // Deny ad personalization by default
    functionality_storage: 'granted',  // Allow functionality by default
    personalization_storage: 'granted', // Allow personalization by default
    security_storage: 'granted'        // Allow security by default
  };
}

/**
 * Initialize consent on app load
 */
export function initializeConsent() {
  const existingConsent = getConsentFromCookie();
  const consentState = existingConsent || getDefaultConsent();
  
  // Initialize Google Consent Mode
  initializeGoogleConsentMode(consentState);
  
  // If consent exists, apply it
  if (existingConsent) {
    updateGoogleConsentMode(existingConsent);
  }
  
  return consentState;
}

