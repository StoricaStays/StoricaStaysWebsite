import type { Metadata } from 'next';
import HeroSlider from '../../components/HeroSlider';
import AboutSection from '../../components/AboutSection';
import RoomsSection from '../../components/RoomsSection';
import InstagramSection from '../../components/InstagramSection';
import ReviewsSection from '../../components/ReviewsSection';
import ContactSection from '../../components/ContactSection';
import AttractionsStrip from '../../components/AttractionsStrip';
import { udaipurRooms } from '@/data/rooms';

export const metadata: Metadata = {
  title: 'Udaipur Stay',
  description:
    'Heritage stays in Udaipur, the City of Lakes. Lake-view rooms, heritage comfort and rooftop dining at Storica Stays.',
};

const udaipurHero = [
  {
    image: '/img/udaipur/hero-slider/room.jpg',
    alt: 'Storica Stays Udaipur heritage property',
  },
  {
    image: '/img/udaipur/hero-slider/room (2).jpg',
    alt: 'Udaipur lake-view room',
  },
  {
    image: '/img/udaipur/hero-slider/room (3).jpg',
    alt: 'Udaipur heritage architecture',
  },
];

const udaipurGalleryImages = [
  '/img/udaipur/property/property (1).jpg',
  '/img/udaipur/property/property (2).jpg',
  '/img/udaipur/property/property (3).jpg',
  '/img/udaipur/property/property (6).jpg',
  '/img/udaipur/property/property (7).jpg',
  '/img/udaipur/property/property (8).jpg',
  '/img/udaipur/property/rooftop.jpeg',
  '/img/udaipur/property/room (2).jpg',
];

export default function UdaipurPage() {
  return (
    <>
      <HeroSlider
        slides={udaipurHero}
        eyebrow="Udaipur · City of Lakes"
        title="Heritage Comfort by the Lakes"
        description="A peaceful, storied stay in Udaipur — lake-view rooms, cozy courtyards and rooftop dining over the old city."
        badge="Storica Stays · Udaipur"
        primaryLabel="Book A Room"
        primaryHref="/book"
        secondaryLabel="Our Rooms"
        secondaryHref="#rooms"
      />

      <AboutSection
        cityName="Udaipur"
        titleLine1="Welcome to"
        emphasis="Storica Stays Udaipur"
        paragraphs={[
          'By the gentle waters of Udaipur, our heritage property pairs old-world charm with understated comfort.',
          'Rooms with lake or fort views, a warm rooftop for slow evenings, and an old-town address — this is where Udaipur feels most like home.',
        ]}
        images={[
          '/img/udaipur/property/property (7).jpg',
          '/img/udaipur/property/rooftop.jpeg',
          '/img/udaipur/property/property (3).jpg',
          '/img/udaipur/property/room (2).jpg',
        ]}
        galleryImages={udaipurGalleryImages}
      />

      <RoomsSection
        rooms={udaipurRooms}
        title="Udaipur Rooms"
        subtitle="Choose Your Stay"
        lead="From standard doubles to the Maharaja suite — find your room by the lakes."
        showPhone={false}
      />

      <AttractionsStrip city="Udaipur" />

      <InstagramSection />

      <ReviewsSection />

      <ContactSection city="Udaipur" />
    </>
  );
}