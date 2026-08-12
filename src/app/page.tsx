'use client';

import RoomsSection from '../components/RoomsSection';
import ReviewsSection from '../components/ReviewsSection';
import InstagramSection from '../components/InstagramSection';
import PropertyGallery, { PropertyGalleryRef } from '../components/PropertyGallery';
import HeroCarousel from '../components/HeroCarousel';
import CitySwitcher from '../components/CitySwitcher';
import ContactBand from '../components/ContactBand';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { useRef } from 'react';
import Head from 'next/head';
import { primeUdaipurRooms } from '@/data/rooms';

const JODHPUR_MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.877455430147!2d73.02044147618096!3d26.29807238623277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d00351ddf83%3A0xef89956f3c6c3ae5!2sStorica%20Stays!5e0!3m2!1sen!2sin!4v1741427350058!5m2!1sen!2sin";

export default function Home() {
  const propertyGalleryRef = useRef<PropertyGalleryRef>(null);

  const openPropertyGallery = () => {
    if (propertyGalleryRef.current) {
      propertyGalleryRef.current.openGallery();
    }
  };

  return (
    <>
      <Head>
        {/* LightGallery CSS */}
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lightgallery.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-thumbnail.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-zoom.css" rel="stylesheet" />
      </Head>

      <PropertyGallery ref={propertyGalleryRef} />

      <HeroCarousel />

      {/* About / intro band */}
      <div className="py-20 sm:py-28" id="about">
        <Container className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title={<>Welcome to <span className="text-primary-600">Storica Stays</span></>}
            />
            <p className="mt-6 font-sans text-sand-700 leading-relaxed">
              Nestled amidst the timeless beauty of Jodhpur and Udaipur, Storica Stays invites
              you to experience an unforgettable journey. With stunning fort views from its
              rooftop restaurant, this heritage hotel promises a unique blend of comfort and
              adventure &mdash; cosy dormitory rooms and private rooms designed as a peaceful oasis
              in the heart of each city&apos;s vibrant old town.
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
                src="/img/General/CKC03983-HDR.jpg"
                alt="Traditional architecture details"
                className="h-40 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </button>
          </div>
        </Container>
      </div>

      {/* City switcher */}
      <CitySwitcher />

      <RoomsSection title='Jodhpur Rooms' />

      <RoomsSection rooms={primeUdaipurRooms} title="Udaipur Rooms" roomsLink="/udaipur" />

      <InstagramSection />

      <ReviewsSection />

      <ContactBand mapSrc={JODHPUR_MAP_SRC} trackingSource="home_contact_band" />
    </>
  );
}
