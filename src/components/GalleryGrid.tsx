'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { trackGalleryOpen } from '../utils/gtm';

interface GalleryItem {
  src: string;
  label: string;
  wide?: boolean;
  tall?: boolean;
  city?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lgRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let cancelled = false;

    const init = async () => {
      if (!containerRef.current || cancelled) return;
      const { default: lightGallery } = await import('lightgallery');
      const { default: lgThumbnail } = await import('lightgallery/plugins/thumbnail');
      const { default: lgZoom } = await import('lightgallery/plugins/zoom');

      lgRef.current = lightGallery(containerRef.current, {
        plugins: [lgZoom, lgThumbnail],
        selector: '.tile a',
        speed: 500,
        controls: true,
        download: false,
        thumbnail: true,
        animateThumb: true,
        zoomFromOrigin: false,
        allowMediaOverlap: true,
        toggleThumb: true,
      });
    };

    init();

    return () => {
      cancelled = true;
      if (lgRef.current) {
        lgRef.current.destroy();
        lgRef.current = null;
      }
    };
  }, [mounted]);

  const openAt = (index: number, label: string) => {
    if (lgRef.current) {
      lgRef.current.openGallery(index);
    }
    trackGalleryOpen('gallery_page', label);
  };

  return (
    <div ref={containerRef} className="gallery-grid">
      {items.map((item, index) => (
        <div
          key={item.src + index}
          className={`tile ${item.wide ? 'wide' : ''} ${item.tall ? 'tall' : ''}`}
        >
          <a href={item.src} data-sub-html={`${item.label} — Storica Stays`}>
            <img src={item.src} alt={item.label} loading="lazy" title={item.label} />
          </a>
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ zIndex: 2, cursor: 'pointer' }}
            onClick={() => openAt(index, item.label)}
          ></div>
          <span className="label">
            {item.city ? `${item.city} · ` : ''}
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}