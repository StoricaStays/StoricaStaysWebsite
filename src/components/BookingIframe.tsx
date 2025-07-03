'use client';

import { useEffect } from 'react';

interface BookingIframeProps {
  src: string;
  width: string;
  height: string;
  title: string;
  allow: string;
  loading: 'lazy' | 'eager';
  style?: React.CSSProperties;
}

export default function BookingIframe({
  src,
  width,
  height,
  title,
  allow,
  loading,
  style
}: BookingIframeProps) {
  useEffect(() => {
    const handleIframeLoad = () => {
      // Hide loader and show iframe when loaded
      const loader = document.getElementById('iframe-loader');
      const iframe = document.querySelector('.booking-iframe');
      if (loader) loader.style.display = 'none';
      if (iframe) (iframe as HTMLElement).style.opacity = '1';
    };

    const handleIframeError = () => {
      // Hide loader on error as well
      const loader = document.getElementById('iframe-loader');
      if (loader) loader.style.display = 'none';
    };

    // Set up event listeners
    const iframe = document.querySelector('.booking-iframe');
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
      iframe.addEventListener('error', handleIframeError);
    }

    // Fallback timer to hide loader after 15 seconds
    const fallbackTimer = setTimeout(() => {
      const loader = document.getElementById('iframe-loader');
      const iframe = document.querySelector('.booking-iframe');
      if (loader && loader.style.display !== 'none') {
        loader.style.display = 'none';
        if (iframe) (iframe as HTMLElement).style.opacity = '1';
      }
    }, 15000);

    // Cleanup
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
        iframe.removeEventListener('error', handleIframeError);
      }
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <iframe
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      title={title}
      className="booking-iframe"
      style={style}
      allow={allow}
      loading={loading}
    />
  );
}
