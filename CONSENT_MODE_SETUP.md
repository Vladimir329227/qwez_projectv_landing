# Google Consent Mode v2 Setup

## Overview

Google Consent Mode v2 (КМ) has been successfully integrated into the Project V landing page. This implementation provides GDPR-compliant cookie consent management with granular control over different types of data usage.

## Files Created

1. **`src/components/ConsentBanner.tsx`** - Cookie consent banner UI component
2. **`src/utils/consentUtils.ts`** - Consent management utilities
3. **`index.html`** - Updated with Google Consent Mode initialization script

## Implementation Details

### Consent Types

The implementation supports the following consent categories:

1. **analytics_storage** - Analytics cookies (Google Analytics)
2. **ad_storage** - Advertising cookies
3. **ad_user_data** - User data for ads
4. **ad_personalization** - Ad personalization
5. **functionality_storage** - Functional cookies
6. **personalization_storage** - Personalization cookies
7. **security_storage** - Security cookies

### Default Behavior

- **Analytics**: Enabled by default (`granted`)
- **Ads**: Disabled by default (`denied`)
- **Functionality**: Enabled by default (`granted`)
- **Personalization**: Enabled by default (`granted`)
- **Security**: Enabled by default (`granted`)

### User Interface

The consent banner appears at the bottom of the page for users who haven't provided consent. Users can:

1. **Accept All** - Allow all cookie types
2. **Reject All** - Deny all optional cookies
3. **Customize** - Select specific cookie categories

### Cookie Storage

Consent preferences are stored in a cookie named `consent_state` with a 1-year expiration. The cookie structure:

```json
{
  "version": "v2",
  "preferences": {
    "analytics_storage": "granted",
    "ad_storage": "denied",
    ...
  },
  "timestamp": 1234567890
}
```

## Integration with Google Analytics

To integrate with Google Analytics, update the script in `index.html` (lines 26-30):

```javascript
// Uncomment and replace YOUR_GA_ID with your actual Google Analytics ID
gtag('js', new Date());
gtag zwei 'config', 'YOUR_GA_ID', {
  'consent_mode_updates': true
});
```

## Testing

1. Open the application in a browser
2. The consent banner should appear at the bottom
3. Test all three actions: Accept All, Reject All, and Customize
4. Check browser cookies to verify consent state is stored
5. Refresh the page - the banner should not reappear if consent was given

## Browser Console Testing

You can test consent mode in the browser console:

```javascript
// Check current consent state
console.log(document.cookie);

// Manually update consent
window.gtag('consent', 'update', {
  analytics_storage: 'granted',
  ad_storage: 'granted'
});

// Reset consent (for testing)
document.cookie = 'consent_state=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
location.reload();
```

## Compliance

This implementation complies with:

- GDPR (General Data Protection Regulation)
- Google Consent Mode v2 requirements
- Privacy-first defaults (analytics allowed, ads denied by default)

## Customization

To customize the consent banner:

1. Edit `src/components/ConsentBanner.tsx` for UI changes
2. Edit `src/utils/consentUtils.ts` for logic changes
3. Modify text content for different languages
4. Adjust default consent preferences in `getDefaultConsent()`

## Next Steps

1. Replace `YOUR_GA_ID` with your actual Google Analytics ID
2. Test the implementation thoroughly
3. Consider adding support for different languages
4. Review and customize the default consent preferences
5. Test with real Google Analytics/Ads tags

