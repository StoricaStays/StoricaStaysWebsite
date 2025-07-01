"use client";

import { useEffect } from 'react';

export default function AsyncCSS() {
  useEffect(() => {
    // Function to load CSS asynchronously
    const loadCSS = (href: string, media = 'all') => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = () => {
        link.media = media;
      };
      document.head.appendChild(link);

      // Fallback for browsers that don't support onload
      setTimeout(() => {
        if (link.media === 'print') {
          link.media = media;
        }
      }, 100);
    };

    // Load Google Fonts first (most critical)
    loadCSS('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');

    // Load icon fonts
    setTimeout(() => {
      loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css');
    }, 50);

    setTimeout(() => {
      loadCSS('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css');
    }, 100);

    // Load animation and component libraries
    setTimeout(() => {
      loadCSS('lib/animate/animate.min.css');
    }, 150);

    setTimeout(() => {
      loadCSS('lib/owlcarousel/assets/owl.carousel.min.css');
    }, 200);

    setTimeout(() => {
      loadCSS('lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css');
    }, 250);

  }, []);

  return null;
}
