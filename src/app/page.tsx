'use client';

import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import RoomsSection from '../components/RoomsSection';
import InstagramSection from '../components/InstagramSection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';
import AmenitiesSection from '../components/AmenitiesSection';
import RestaurantPromo from '../components/RestaurantPromo';
import { primeUdaipurRooms } from '@/data/rooms';

const heroSlides = [
  {
    image: '/img/hero-slider/CKC04015-HDR.jpg',
    alt: 'Storica Stays heritage hostel at golden hour',
  },
  {
    image: '/img/hero-slider/CKC03841-HDR.jpg',
    alt: 'Rooftop restaurant view at Storica Stays',
  },
  {
    image: '/img/hero-slider/CKC03767.jpg',
    alt: 'Heritage architecture of Storica Stays',
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider
        slides={heroSlides}
        eyebrow="Jodhpur · Udaipur"
        title="Where Heritage Meets Modern Comfort"
        description="Heritage rooms, cozy dorms and a rooftop restaurant with fort and lake views — right in the heart of Rajasthan's most storied cities."
        badge="Rated 4.8 · 300+ Reviews"
        primaryLabel="Book A Room"
        primaryHref="/book"
        secondaryLabel="Explore Rooms"
        secondaryHref="#rooms"
      />

      <AboutSection />

      <AmenitiesSection />

      <RoomsSection
        title="Jodhpur Rooms"
        subtitle="Rooms in the Blue City"
        lead="Heritage stays in Jodhpur — from private doubles to social dorms, steps from Mehrangarh Fort."
        roomsLink="/jodhpur"
      />

      <RestaurantPromo />

      <RoomsSection
        rooms={primeUdaipurRooms}
        title="Udaipur Rooms"
        subtitle="Rooms by the Lake"
        lead="A curated preview of our Udaipur stays — heritage comfort with lake-view options."
        showPhone={false}
        sectionId="udaipur-rooms"
        sectionClass="section-cream"
      />

      <InstagramSection />

      <ReviewsSection />

      <ContactSection />
    </>
  );
}