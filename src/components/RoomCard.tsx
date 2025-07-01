'use client';

import { useEffect, useRef } from 'react';

interface RoomCardProps {
  readonly title: string;
  readonly image: string;
  readonly alt: string;
  readonly bedCount: number;
  readonly bathCount: number;
  readonly galleryImages: string[];
  readonly delay: string;
  readonly phone: string;
}

export default function RoomCard({
  title,
  image,
  alt,
  bedCount,
  bathCount,
  galleryImages,
  delay,
  phone
}: RoomCardProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const lgInstanceRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    const initLightGallery = async () => {
      if (typeof window !== 'undefined' && galleryRef.current) {
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
      if (lgInstanceRef.current) {
        lgInstanceRef.current.destroy();
      }
    };
  }, []);

  const openGallery = () => {
    if (lgInstanceRef.current) {
      lgInstanceRef.current.openGallery(0);
    }
  };
  return (
    <>
      {/* Hidden gallery for LightGallery */}
      <div ref={galleryRef} className="d-none">
        {galleryImages.map((image) => (
          <a key={image} href={image} data-sub-html={`${title} - Gallery Image`}>
            <img src={image} alt={`${title} gallery`} />
          </a>
        ))}
      </div>

      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={delay}>
        <div className="room-item shadow rounded overflow-hidden">
          <div className="position-relative">
            <img
            //   className="img-fluid"
              src={image}
              alt={alt}
              width={407}
              height={305}
            />
          </div>
          <div className="p-4 mt-2">
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">{title}</h5>
              <div className="ps-2">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
            </div>
            <div className="d-flex mb-3">
              <small className="border-end me-3 pe-3">
                <i className="fa fa-bed text-primary me-2"></i>{bedCount} Bed
              </small>
              <small className="border-end me-3 pe-3">
                <i className="fa fa-bath text-primary me-2"></i>{bathCount} Bath
              </small>
              <small>
                <i className="fa fa-wifi text-primary me-2"></i>Wifi
              </small>
            </div>

            <div className="d-flex justify-content-between">
              <button
                className="btn btn-sm btn-primary rounded py-2 px-4"
                type="button"
                onClick={openGallery}
              >
                View Gallery
              </button>
              <a
                className="btn btn-sm btn-dark rounded py-2 px-4"
                href={`tel:${phone}`}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
