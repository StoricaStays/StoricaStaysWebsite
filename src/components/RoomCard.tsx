'use client';

import { useEffect, useRef } from 'react';
import { Bed, Bath, Wifi, Star } from 'lucide-react';
import { trackCallNowClick, trackGalleryOpen } from '../utils/gtm';
import Card from './ui/Card';
import Button from './ui/Button';

interface RoomCardProps {
  readonly title: string;
  readonly image: string;
  readonly alt: string;
  readonly bedCount: number;
  readonly bathCount: number;
  readonly galleryImages: string[];
  readonly phone?: string;
}

export default function RoomCard({
  title,
  image,
  alt,
  bedCount,
  bathCount,
  galleryImages,
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
    trackGalleryOpen('room_gallery', title);
  };

  return (
    <>
      {/* Hidden gallery for LightGallery */}
      <div ref={galleryRef} className="hidden">
        {galleryImages.map((img) => (
          <a key={img} href={img} data-sub-html={`${title} - Gallery Image`}>
            <img src={img} alt={`${title} gallery`} />
          </a>
        ))}
      </div>

      <Card className="flex flex-col h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={image} alt={alt} className="h-full w-full object-cover" />
        </div>
        <div className="p-5 flex flex-col flex-1 gap-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-xl text-ink-900">{title}</h3>
            <div className="flex shrink-0 gap-0.5 pt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={13} className="fill-primary-500 text-primary-500" />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm text-sand-600">
            <span className="flex items-center gap-1.5"><Bed size={15} className="text-primary-600" />{bedCount} Bed</span>
            <span className="flex items-center gap-1.5"><Bath size={15} className="text-primary-600" />{bathCount} Bath</span>
            <span className="flex items-center gap-1.5"><Wifi size={15} className="text-primary-600" />Wifi</span>
          </div>

          <div className="mt-auto flex items-center gap-3 pt-2">
            <Button variant="ghost" size="sm" onClick={openGallery} className="border-sand-200! border">

              Room Images
            </Button>
            {phone ? (
              <Button
                href={`tel:${phone}`}
                variant="primary"
                size="sm"
                onClick={() => trackCallNowClick(title, phone)}
              >
                Call Now
              </Button>
            ) : (
              <Button href="/book" variant="primary" size="sm">
                Book Now
              </Button>
            )}
          </div>
        </div>
      </Card>
    </>
  );
}
