import { MapPin } from 'lucide-react';
import RoomsSection from '../../components/RoomsSection';
import ReviewsSection from '../../components/ReviewsSection';
import InstagramSection from '../../components/InstagramSection';
import PropertyGallery from '../../components/PropertyGallery';
import HeroCarousel from '../../components/HeroCarousel';
import ContactBand from '../../components/ContactBand';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import Head from 'next/head';
import { udaipurRooms } from '@/data/rooms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Storica Stays Udaipur - Heritage Boutique Comfort and Rooftop Restaurant",
  description: "Experience the charm of heritage at Storica Stays, your ideal Stay and rooftop restaurant.",
};

const UDAIPUR_HERO_SLIDES = [
  { image: "/img/udaipur/hero-slider/room.jpg", alt: "Storica Stays Udaipur room" },
  { image: "/img/udaipur/hero-slider/room (2).jpg", alt: "Storica Stays Udaipur heritage architecture" },
  { image: "/img/udaipur/hero-slider/room (3).jpg", alt: "Storica Stays Udaipur rooftop restaurant view" },
];

const UDAIPUR_MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4606.18498613014!2d73.6798072!3d24.580343199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e55307487f89%3A0x5d7795af4a3bb20b!2shotel%20panorama%20haveli!5e1!3m2!1sen!2sin!4v1759651246065!5m2!1sen!2sin";

export default function UdaipurPage() {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lightgallery.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-thumbnail.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-zoom.css" rel="stylesheet" />
      </Head>

      <PropertyGallery />

      <HeroCarousel
        slides={UDAIPUR_HERO_SLIDES}
        eyebrow="Udaipur, Rajasthan"
        heading="A heritage stay by the City of Lakes"
      />

      {/* About band */}
      <div className="py-20 sm:py-28" id="about">
        <Container className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-primary-600">
              <MapPin size={14} />
              Udaipur
            </span>
            <SectionHeading
              align="left"
              eyebrow="About This Property"
              title={<>Welcome to <span className="text-primary-600">Storica Stays</span></>}
              className="mt-3"
            />
            <p className="mt-6 font-sans text-sand-700 leading-relaxed">
              Nestled amidst the timeless beauty of Udaipur, Storica Stays invites you to
              experience an unforgettable journey. With stunning lake views from its rooftop
              restaurant, this heritage hotel promises a unique blend of comfort. Discover cosy
              rooms, designed to provide a peaceful oasis in the heart of the city&apos;s
              vibrant old town.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/img/udaipur/property/property (7).jpg"
              alt="Heritage building exterior"
              className="col-span-2 h-64 w-full rounded-2xl object-cover"
            />
            <img
              src="/img/udaipur/property/rooftop.jpeg"
              alt="Storica Stays Udaipur rooftop"
              className="h-40 w-full rounded-2xl object-cover"
            />
            <img
              src="/img/udaipur/property/property (3).jpg"
              alt="Traditional architecture details"
              className="h-40 w-full rounded-2xl object-cover"
            />
          </div>
        </Container>
      </div>

      <RoomsSection rooms={udaipurRooms} title="Udaipur Rooms" />

      <InstagramSection />

      <ReviewsSection />

      <ContactBand mapSrc={UDAIPUR_MAP_SRC} trackingSource="udaipur_contact_band" />
    </>
  );
}
