"use client";

import { useEffect } from 'react';

export default function AsyncCSS() {
  useEffect(() => {
    // Non-blocking CSS loader with onload handler
    const loadCSS = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);

      // Fallback for browsers that don't support onload
      setTimeout(() => {
        if (link.media === 'print') {
          link.media = 'all';
        }
      }, 100);
    };

    // Font Awesome icons
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css');
  }, []);

  return null;
}