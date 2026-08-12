'use client';

import { MapPin } from 'lucide-react';
import RoomsSection from '../../components/RoomsSection';
import ReviewsSection from '../../components/ReviewsSection';
import InstagramSection from '../../components/InstagramSection';
import PropertyGallery, { PropertyGalleryRef } from '../../components/PropertyGallery';
import HeroCarousel from '../../components/HeroCarousel';
import ContactBand from '../../components/ContactBand';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import { useRef } from 'react';
import Head from 'next/head';

const JODHPUR_MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.877455430147!2d73.02044147618096!3d26.29807238623277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d00351ddf83%3A0xef89956f3c6c3ae5!2sStorica%20Stays!5e0!3m2!1sen!2sin!4v1741427350058!5m2!1sen!2sin";

export default function JodhpurPage() {
  const propertyGalleryRef = useRef<PropertyGalleryRef>(null);

  const openPropertyGallery = () => {
    if (propertyGalleryRef.current) {
      propertyGalleryRef.current.openGallery();
    }
  };

  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lightgallery.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-thumbnail.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-zoom.css" rel="stylesheet" />
      </Head>

      <PropertyGallery ref={propertyGalleryRef} />

      <HeroCarousel
        eyebrow="Jodhpur, Rajasthan"
        heading="A heritage hostel in the heart of the Blue City"
      />

      {/* About band */}
      <div className="py-20 sm:py-28" id="about">
        <Container className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-primary-600">
              <MapPin size={14} />
              Jodhpur
            </span>
            <SectionHeading
              align="left"
              eyebrow="About This Property"
              title={<>Welcome to <span className="text-primary-600">Storica Stays</span></>}
              className="mt-3"
            />
            <p className="mt-6 font-sans text-sand-700 leading-relaxed">
              Nestled amidst the timeless beauty of Jodhpur, Storica Stays invites you to
              experience an unforgettable journey. With stunning fort views from its rooftop
              restaurant, this heritage hotel promises a unique blend of comfort and adventure.
              Discover cosy dormitory rooms and a private double bedroom, designed to provide a
              peaceful oasis in the heart of the city&apos;s vibrant old town.
            </p>
            <Button variant="ghost" size="md" className="mt-8 pl-0!" onClick={openPropertyGallery}>
              View Property Images &rarr;
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={openPropertyGallery}
              aria-label="Open property gallery"
              className="col-span-2 overflow-hidden rounded-2xl"
            >
              <img
                src="/img/General/CKC03844-HDR.jpg"
                alt="Heritage building exterior"
                className="h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </button>
            <button
              type="button"
              onClick={openPropertyGallery}
              aria-label="Open property gallery"
              className="overflow-hidden rounded-2xl"
            >
              <img
                src="/img/General/CKC03886-HDR.jpg"
                alt="Storica Stays interior courtyard"
                className="h-40 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </button>
            <button
              type="button"
              onClick={openPropertyGallery}
              aria-label="Open property gallery"
              className="overflow-hidden rounded-2xl"
            >
              <img
                src="/img/General/CKC03907-HDR.jpg"
                alt="Heritage hostel ambiance"
                className="h-40 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </button>
          </div>
        </Container>
      </div>

      <RoomsSection />

      <InstagramSection />

      <ReviewsSection />

      <ContactBand mapSrc={JODHPUR_MAP_SRC} trackingSource="jodhpur_contact_band" />
    </>
  );
}
