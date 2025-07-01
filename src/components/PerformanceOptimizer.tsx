"use client";

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Lazy load images that are not critical
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      lazyImages.forEach((img) => {
        const image = img as HTMLImageElement;
        image.src = image.dataset.src || '';
      });
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero images if not already loaded
      const heroImages = [
        '/img/hero-slider/CKC04015-HDR.jpg',
        '/img/hero-slider/CKC03767.jpg',
        '/img/hero-slider/CKC03841-HDR.jpg'
      ];

      heroImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize third-party scripts loading
    const optimizeThirdPartyScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach((script) => {
        const scriptElement = script as HTMLScriptElement;
        if (scriptElement.dataset.defer) {
          const loadScript = () => {
            const newScript = document.createElement('script');
            newScript.src = scriptElement.dataset.defer!;
            newScript.async = true;
            document.head.appendChild(newScript);
          };
          setTimeout(loadScript, 2000);
        }
      });
    };

    // Prefetch DNS for external domains
    const prefetchDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdnjs.cloudflare.com',
      'cdn.jsdelivr.net'
    ];

    prefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Run optimizations
    setTimeout(preloadCriticalResources, 100);
    optimizeThirdPartyScripts();

  }, []);

  return null;
}
