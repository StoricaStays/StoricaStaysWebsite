'use client';

import { useEffect } from 'react';

export default function BookingIframeHandler() {
  useEffect(() => {
    const handleIframeLoad = () => {
      // Hide loading indicator when iframe loads
      const loading = document.querySelector('.booking-frame-container .position-absolute');
      if (loading) {
        loading.remove();
      }
    };

    const handleResize = () => {
      const iframe = document.querySelector('.booking-iframe') as HTMLIFrameElement;
      if (iframe && window.innerWidth <= 768) {
        // On mobile, adjust height based on viewport
        iframe.style.height = `${window.innerHeight - 100}px`;
      }
    };

    const handleFallbackBookingClick = () => {
      // GTM tracking for fallback booking link
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'external_booking_click', {
          event_category: 'booking',
          event_label: 'fallback_booking_link'
        });
      }
    };

    // Set up event listeners
    const iframe = document.querySelector('.booking-iframe');
    const fallbackLink = document.querySelector('.fallback-booking-link');
    
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }
    
    if (fallbackLink) {
      fallbackLink.addEventListener('click', handleFallbackBookingClick);
    }

    window.addEventListener('resize', handleResize);
    
    // Initial resize check
    handleResize();

    // Cleanup
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
      if (fallbackLink) {
        fallbackLink.removeEventListener('click', handleFallbackBookingClick);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
}
