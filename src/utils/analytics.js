/**
 * Lightweight Analytics Tracking Utility
 */
export const trackEvent = (eventName, data = {}) => {
  // In a real application, this would pipe to Plausible, GA, or custom backend
  console.log(`[Analytics Event]: ${eventName}`, data);
  
  if (window.gtag) {
    window.gtag('event', eventName, data);
  }
};

export const trackOutboundLink = (url, label) => {
  trackEvent('outbound_click', { url, label });
};

export const trackInteraction = (component, action) => {
  trackEvent('interaction', { component, action });
};
