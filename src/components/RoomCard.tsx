'use client';

import { useEffect, useRef } from 'react';
import { trackCallNowClick, trackGalleryOpen, trackBookingInteraction } from '../utils/gtm';

interface RoomCardProps {
  readonly title: string;
  readonly image: string;
  readonly alt: string;
  readonly bedCount: number;
  readonly bathCount: number;
  readonly galleryImages: string[];
  readonly delay?: string;
  readonly phone?: string;
  readonly tag?: string;
}

export default function RoomCard({
  title,
  image,
  alt,
  bedCount,
  bathCount,
  galleryImages,
  delay,
  phone,
  tag = "Heritage Stay",
}: RoomCardProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const lgInstanceRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    let cancelled = false;
    const initLightGallery = async () => {
      if (typeof window !== 'undefined' && galleryRef.current && !cancelled) {
        const { default: lightGallery } = await import('lightgallery');
        const { default: lgThumbnail } = await import('lightgallery/plugins/thumbnail');
        const { default: lgZoom } = await import('lightgallery/plugins/zoom');

        lgInstanceRef.current = lightGallery(galleryRef.current, {
          plugins: [lgThumbnail, lgZoom],
          speed: 500,
          controls: true,
          download: false,
          thumbnail: true,
          animateThumb: true,
          zoomFromOrigin: false,
          allowMediaOverlap: true,
          toggleThumb: true,
        });
      }
    };

    initLightGallery();

    return () => {
      cancelled = true;
      if (lgInstanceRef.current) {
        lgInstanceRef.current.destroy();
        lgInstanceRef.current = null;
      }
    };
  }, []);

  const openGallery = () => {
    if (lgInstanceRef.current) {
      lgInstanceRef.current.openGallery(0);
    }
    trackGalleryOpen('room_gallery', title);
  };

  return (
    <>
      {/* Hidden gallery for LightGallery */}
      <div ref={galleryRef} className="d-none">
        {galleryImages.map((image) => (
          <a key={image} href={image} data-sub-html={`${title} — Storica Stays`}>
            <img src={image} alt={`${title} gallery`} />
          </a>
        ))}
      </div>

      <div className="col-lg-4 col-md-6 mb-g" data-reveal style={delay ? { transitionDelay: delay } : undefined}>
        <div className="room-card">
          <div className="room-card-media">
            <span className="room-card-tag">{tag}</span>
            <img src={image} alt={alt} loading="lazy" />
            <button
              type="button"
              className="btn-gallery-glimpse"
              onClick={openGallery}
              aria-label={`View ${title} gallery`}
            >
              <i className="fa fa-expand"></i>
            </button>
          </div>
          <div className="room-card-body">
            <h3 className="room-card-title">{title}</h3>
            <p className="room-card-subtitle">Lake/Fort &amp; City Views</p>
            <div className="room-card-meta">
              <span>
                <i className="fa fa-bed"></i>
                {bedCount} {bedCount === 1 ? "Bed" : "Beds"}
              </span>
              <span>
                <i className="fa fa-bath"></i>
                {bathCount} Bath
              </span>
              <span>
                <i className="fa fa-wifi"></i>WiFi
              </span>
              <span>
                <i className="fa fa-snowflake"></i>AC
              </span>
            </div>
            <div className="room-card-actions">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={openGallery}
              >
                <i className="fa fa-images me-1"></i> Photos
              </button>
              {phone ? (
                <a
                  className="btn btn-dark-skin"
                  href={`tel:${phone}`}
                  onClick={() => trackCallNowClick(title, phone)}
                >
                  <i className="fa fa-phone-alt me-1"></i> Call Now
                </a>
              ) : (
                <a
                  className="btn btn-brass"
                  href="/book"
                  onClick={() => trackBookingInteraction("start", "room_card")}
                >
                  <i className="fa fa-calendar-check me-1"></i> Book Now
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}