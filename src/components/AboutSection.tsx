'use client';

import { useRef } from 'react';
import PropertyGallery, { PropertyGalleryRef } from './PropertyGallery';

interface AboutSectionProps {
  eyebrow?: string;
  titleLine1?: string;
  emphasis?: string;
  paragraphs?: string[];
  images?: string[];
  galleryImages?: string[];
  buttonLabel?: string;
  cityName?: string;
}

const defaultImages = [
  '/img/General/CKC03844-HDR.jpg',
  '/img/General/CKC03886-HDR.jpg',
  '/img/General/CKC03983-HDR.jpg',
  '/img/General/CKC03907-HDR.jpg',
];

export default function AboutSection({
  eyebrow = 'About Us',
  titleLine1 = 'Welcome to',
  emphasis = 'Storica Stays',
  paragraphs = [
    'Nestled amidst the timeless beauty of Jodhpur and Udaipur, Storica Stays invites you into a world where heritage meets modern comfort. From heritage rooms and cozy dorms to a rooftop restaurant with fort and lake views — every corner promises an unforgettable stay.',
  ],
  images = defaultImages,
  galleryImages,
  buttonLabel = 'View Property Gallery',
  cityName,
}: AboutSectionProps) {
  const galleryRef = useRef<PropertyGalleryRef>(null);

  const openGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.openGallery();
    }
  };

  return (
    <>
      <PropertyGallery ref={galleryRef} images={galleryImages} />
      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-reveal>
              <span className="section-eyebrow">
                {cityName ? <i className="fa fa-map-marker-alt text-brass me-2"></i> : null}
                {cityName ? `${cityName} — ${eyebrow}` : eyebrow}
              </span>
              <h2 className="mb-3">
                {titleLine1} <span className="d-block text-brass" style={{ fontStyle: 'italic' }}>{emphasis}</span>
              </h2>
              {paragraphs.map((para, index) => (
                <p key={index} className="mb-3">
                  {para}
                </p>
              ))}
              <button type="button" className="btn btn-brass mt-2" onClick={openGallery}>
                <i className="fa fa-images me-2"></i>
                {buttonLabel}
              </button>
            </div>

            <div className="col-lg-6" data-reveal style={{ transitionDelay: '0.15s' }}>
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    src={images[0]}
                    alt="Storica Stays heritage building"
                    className="img-fluid rounded-3 shadow"
                    style={{ maxWidth: '82%', marginTop: '18%', borderRadius: '14px' }}
                    loading="lazy"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    src={images[1]}
                    alt="Storica Stays interior"
                    className="img-fluid rounded-3 shadow"
                    style={{ borderRadius: '14px' }}
                    loading="lazy"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    src={images[2]}
                    alt="Heritage architecture"
                    className="img-fluid rounded-3 shadow"
                    style={{ borderRadius: '14px' }}
                    loading="lazy"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    src={images[3]}
                    alt="Storica Stays ambiance"
                    className="img-fluid rounded-3 shadow"
                    style={{ maxWidth: '82%', borderRadius: '14px' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}