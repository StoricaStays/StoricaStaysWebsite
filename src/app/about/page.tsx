import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';
import AboutSection from '../../components/AboutSection';
import AmenitiesSection from '../../components/AmenitiesSection';
import ReviewsSection from '../../components/ReviewsSection';
import ContactSection from '../../components/ContactSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Storica Stays — heritage boutique stays in Jodhpur and Udaipur combining Rajasthani architecture with modern comfort.',
};

const stats = [
  { value: '5+', label: 'Room Types' },
  { value: '24/7', label: 'Guest Support' },
  { value: '4.8', label: 'Guest Rating' },
  { value: '2', label: 'Cities' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        eyebrow="About Storica Stays"
        description="Two cities, one promise — heritage charm and modern comfort, delivered with warm Rajasthani hospitality."
        image="/img/General/CKC03844-HDR.jpg"
      />

      <AboutSection
        eyebrow="Who We Are"
        titleLine1="A Heritage Boutique Stay"
        emphasis="With a Rooftop to Remember"
        paragraphs={[
          'Storica Stays began with a simple idea: to let travellers experience the living heritage of Rajasthan — not as a museum piece, but as a home.',
          'Our restored properties in Jodhpur and Udaipur blend traditional Rajasthani architecture with modern amenities. Cosy dorms, private heritage doubles and lake-view rooms sit under rooftops where the city glows at dusk.',
          'Whether you are a backpacker chasing stories or a traveller seeking calm, we offer a peaceful oasis in the heart of the old town.',
        ]}
      />

      {/* Stats band */}
      <section className="section section-dark py-5">
        <div className="container">
          <div className="row gy-4 text-center">
            {stats.map((stat, index) => (
              <div className="col-6 col-lg-3" key={stat.label} data-reveal style={{ transitionDelay: `${index * 0.08}s` }}>
                <div className="fw-bold text-brass" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
                  {stat.value}
                </div>
                <div className="letter-spaced text-ivory mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AmenitiesSection
        title="The Storica Difference"
        lead="Everything you need for a memorable stay."
      />

      <ReviewsSection title="Loved by Our Guests" />

      <ContactSection />
    </>
  );
}