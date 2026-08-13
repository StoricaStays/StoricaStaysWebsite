"use client";

import { useEffect, useRef } from "react";
import { trackCallNowClick, trackGalleryOpen } from "../utils/gtm";

interface RoomCardProps {
  readonly title: string;
  readonly image: string;
  readonly alt: string;
  readonly bedCount: number;
  readonly bathCount: number;
  readonly galleryImages: string[];
  readonly delay: string;
  readonly phone?: string;
  readonly badge?: string;
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
  badge,
}: RoomCardProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const lgInstanceRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    const initLightGallery = async () => {
      if (typeof window !== "undefined" && galleryRef.current) {
        const { default: lightGallery } = await import("lightgallery");
        const { default: lgThumbnail } = await import("lightgallery/plugins/thumbnail");
        const { default: lgZoom } = await import("lightgallery/plugins/zoom");

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
      if (lgInstanceRef.current) {
        lgInstanceRef.current.destroy();
      }
    };
  }, []);

  const openGallery = () => {
    if (lgInstanceRef.current) {
      lgInstanceRef.current.openGallery(0);
    }
    trackGalleryOpen("room_gallery", title);
  };

  return (
    <>
      <div ref={galleryRef} className="d-none">
        {galleryImages.map((image) => (
          <a key={image} href={image} data-sub-html={`${title} - Gallery Image`}>
            <img src={image} alt={`${title} gallery`} />
          </a>
        ))}
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <article className="room-card ss-reveal is-visible" style={{ transitionDelay: delay }}>
          <button
            type="button"
            className="room-card-media arch arch-ratio-portrait"
            onClick={openGallery}
            aria-label={`View ${title} gallery`}
          >
            <img src={image} alt={alt} width={407} height={305} loading="lazy" />
            {badge ? <span className="room-card-chip">{badge}</span> : null}
          </button>
          <div className="room-card-body">
            <h3 className="room-card-title">{title}</h3>
            <div className="room-card-meta">
              <span className="room-chip">
                <i className="fa fa-bed" /> {bedCount} {bedCount === 1 ? "Bed" : "Beds"}
              </span>
              <span className="room-chip">
                <i className="fa fa-bath" /> {bathCount} Bath
              </span>
              <span className="room-chip">
                <i className="fa fa-wifi" /> WiFi
              </span>
            </div>
            <div className="room-card-actions">
              <button
                type="button"
                className="ss-btn ss-btn-ghost ss-btn-sm"
                onClick={openGallery}
              >
                <i className="fa fa-images" /> Room Images
              </button>
              {phone ? (
                <a
                  className="ss-btn ss-btn-primary ss-btn-sm"
                  href={`tel:${phone}`}
                  data-gtm-event="call_now_click"
                  data-gtm-room-type={title}
                  data-gtm-phone={phone}
                  onClick={() => {
                    trackCallNowClick(title, phone);
                  }}
                >
                  <i className="fa fa-phone-alt" /> Call to Book
                </a>
              ) : (
                <a
                  className="ss-btn ss-btn-primary ss-btn-sm"
                  href="/book"
                  data-gtm-event="booking_click"
                  data-gtm-room-type={title}
                  data-gtm-source="room_card"
                >
                  <i className="fa fa-book" /> Book Now
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
