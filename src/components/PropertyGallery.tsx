'use client';

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { trackGalleryOpen } from '../utils/gtm';

interface PropertyGalleryProps {
  images?: string[];
}

export interface PropertyGalleryRef {
  openGallery: () => void;
}

const PropertyGallery = forwardRef<PropertyGalleryRef, PropertyGalleryProps>(
  ({ images }, ref) => {
    const propertyGalleryRef = useRef<HTMLDivElement>(null);
    const lgInstanceRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

    // Default property images array - all images from img/storica directory
    const defaultPropertyImages = [
      '/img/storica/CKC03767.jpg',
      '/img/storica/CKC03792-HDR.jpg',
      '/img/storica/CKC03808-HDR.jpg',
      '/img/storica/CKC03823-HDR-2.jpg',
      '/img/storica/CKC03841-HDR.jpg',
      '/img/storica/CKC03844-HDR.jpg',
      '/img/storica/CKC03859-HDR.jpg',
      '/img/storica/CKC03886-HDR.jpg',
      '/img/storica/CKC03904-HDR.jpg',
      '/img/storica/CKC03915-HDR.jpg',
      '/img/storica/CKC03933-HDR.jpg',
      '/img/storica/CKC03942-HDR.jpg',
      '/img/storica/CKC03954-HDR.jpg',
      '/img/storica/CKC03975-HDR.jpg',
      '/img/storica/CKC03983-HDR.jpg',
      '/img/storica/CKC04015-HDR.jpg'
    ];

    const propertyImages = images || defaultPropertyImages;

    useEffect(() => {
      const initLightGallery = async () => {
        if (typeof window !== 'undefined' && propertyGalleryRef.current) {
          const { default: lightGallery } = await import('lightgallery');
          const { default: lgThumbnail } = await import('lightgallery/plugins/thumbnail');
          const { default: lgZoom } = await import('lightgallery/plugins/zoom');

          lgInstanceRef.current = lightGallery(propertyGalleryRef.current, {
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

    const openPropertyGallery = () => {
      if (lgInstanceRef.current) {
        lgInstanceRef.current.openGallery(0);
      }
      // Track property gallery open event
      trackGalleryOpen('property_gallery');
    };

    // Expose the openGallery function to parent components
    useImperativeHandle(ref, () => ({
      openGallery: openPropertyGallery,
    }));

    return (
      <>
        {/* Hidden Property Gallery for LightGallery */}
        <div ref={propertyGalleryRef} className="d-none">
          {propertyImages.map((image) => (
            <a key={image} href={image} data-sub-html="Storica Stays - Property Gallery">
              <img src={image} alt="Storica Stays property" />
            </a>
          ))}
        </div>
      </>
    );
  }
);

PropertyGallery.displayName = 'PropertyGallery';

export default PropertyGallery;
