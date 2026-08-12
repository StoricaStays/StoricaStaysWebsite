import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';
import ContactSection from '../../components/ContactSection';
import GalleryGrid from '../../components/GalleryGrid';
import { jodhpurRooms, udaipurRooms } from '@/data/rooms';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Explore Storica Stays through photos — heritage rooms, dorms, rooftops and the cities of Jodhpur and Udaipur.',
};

const items = [
  ...jodhpurRooms.slice(0, 2).flatMap((room) =>
    room.galleryImages.slice(0, 2).map((img) => ({
      src: img,
      label: room.title,
      city: 'Jodhpur',
    }))
  ),
  { src: '/img/hero-slider/CKC03841-HDR.jpg', label: 'Rooftop at Dusk', wide: true, tall: true },
  { src: '/img/storica/CKC03767.jpg', label: 'The Blue City' },
  { src: '/img/storica/CKC03792-HDR.jpg', label: 'Heritage Courtyard' },
  { src: '/img/storica/CKC03808-HDR.jpg', label: 'Traditional Detail' },
  { src: '/img/storica/CKC03844-HDR.jpg', label: 'Heritage Facade', wide: true },
  { src: '/img/storica/CKC03886-HDR.jpg', label: 'Interior' },
  { src: '/img/storica/CKC03904-HDR.jpg', label: 'Mehrangarh View' },
  { src: '/img/udaipur/property/rooftop.jpeg', label: 'Udaipur Rooftop', tall: true },
  ...udaipurRooms.slice(0, 3).flatMap((room) =>
    room.galleryImages.slice(0, 2).map((img) => ({
      src: img,
      label: room.title,
      city: 'Udaipur',
    }))
  ),
  { src: '/img/heritage_room_2/thumbnail.jpeg', label: 'Superior Heritage 2', wide: true },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        eyebrow="Visual Stories"
        description="A look inside our heritage stays — rooms, lounges, rooftops and the cities around them."
        image="/img/hero-slider/CKC04015-HDR.jpg"
      />

      <section className="section">
        <div className="container">
          <GalleryGrid items={items} />
          <p className="text-center mt-5 mb-0" style={{ color: 'var(--stone)' }}>
            Tap any image to view it in full screen.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}