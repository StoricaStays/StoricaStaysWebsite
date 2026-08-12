import type { Metadata } from 'next';
import HeroSlider from '../../components/HeroSlider';
import AboutSection from '../../components/AboutSection';
import RoomsSection from '../../components/RoomsSection';
import InstagramSection from '../../components/InstagramSection';
import ReviewsSection from '../../components/ReviewsSection';
import ContactSection from '../../components/ContactSection';
import AttractionsStrip from '../../components/AttractionsStrip';

export const metadata: Metadata = {
  title: 'Jodhpur Stay',
  description:
    'Heritage stays in Jodhpur, the Blue City. Rooms, dorms and a rooftop restaurant with Mehrangarh Fort views at Storica Stays.',
};

const jodhpurHero = [
  {
    image: '/img/hero-slider/CKC04015-HDR.jpg',
    alt: 'Storica Stays Jodhpur heritage hostel',
  },
  {
    image: '/img/hero-slider/CKC03767.jpg',
    alt: 'Jodhpur heritage architecture',
  },
  {
    image: '/img/hero-slider/CKC03841-HDR.jpg',
    alt: 'Rooftop restaurant in Jodhpur',
  },
];

export default function JodhpurPage() {
  return (
    <>
      <HeroSlider
        slides={jodhpurHero}
        eyebrow="Jodhpur · The Blue City"
        title="Sleep Inside History in Jodhpur"
        description="Wake up to the Blue City of India — heritage rooms beneath Mehrangarh Fort and rooftop dinners as the city lights come on."
        badge="Storica Stays · Jodhpur"
        primaryLabel="Book A Room"
        primaryHref="/book"
        secondaryLabel="Our Rooms"
        secondaryHref="#rooms"
      />

      <AboutSection
        cityName="Jodhpur"
        titleLine1="Welcome to"
        emphasis="Storica Stays Jodhpur"
        paragraphs={[
          'Nestled in Jodhpur’s timeless old town, our heritage property offers stunning fort views from its rooftop restaurant — a unique blend of comfort and adventure.',
          'Discover cosy dormitory rooms and private double bedrooms, designed as a peaceful oasis in the heart of the vibrant Blue City.',
        ]}
      />

      <RoomsSection
        title="Jodhpur Rooms"
        subtitle="Choose Your Stay"
        lead="Private heritage rooms to shared dorms — each with character and comfort."
      />

      <AttractionsStrip city="Jodhpur" />

      <InstagramSection />

      <ReviewsSection />

      <ContactSection />
    </>
  );
}