"use client";

import { useEffect } from 'react';

export default function AsyncCSS() {
  useEffect(() => {
    const loadCSS = (href: string, media = 'all') => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = () => {
        link.media = media;
      };
      document.head.appendChild(link);

      setTimeout(() => {
        if (link.media === 'print') {
          link.media = media;
        }
      }, 100);
    };

    // Font Awesome — used for brand icons (WhatsApp, Instagram) not covered by lucide-react
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css');
  }, []);

  return null;
}
