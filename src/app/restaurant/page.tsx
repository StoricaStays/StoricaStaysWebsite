import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';
import ContactSection from '../../components/ContactSection';

export const metadata: Metadata = {
  title: 'Rooftop Restaurant',
  description:
    'Dine above the Blue City — rooftop restaurant at Storica Stays with fort and lake views, traditional Rajasthani cuisine.',
};

const dishes = [
  {
    icon: 'fa-utensils',
    title: 'Traditional Thali',
    description: 'A full Rajasthani platter — dal baati churma and local favourites.',
  },
  {
    icon: 'fa-pepper-hot',
    title: 'Wood-Fired Specials',
    description: 'Slow-fired breads, grills and seasonal regional specialities.',
  },
  {
    icon: 'fa-cocktail',
    title: 'Sunset Cocktails',
    description: 'Handcrafted drinks to pair with golden-hour fort or lake views.',
  },
];

const diningImages = [
  { src: '/img/hero-slider/CKC03841-HDR.jpg', label: 'Rooftop View', wide: true },
  { src: '/img/udaipur/property/rooftop.jpeg', label: 'Udaipur Rooftop', tall: true },
  { src: '/img/General/CKC03844-HDR.jpg', label: 'Heritage Setting' },
  { src: '/img/General/CKC03907-HDR.jpg', label: 'Evening Ambiance' },
  { src: '/img/General/CKC03983-HDR.jpg', label: 'Architecture Detail', wide: true },
];

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        title="Rooftop Restaurant"
        eyebrow="Dining"
        description="A table with the best seat in the city — over rooftops, forts and lakes."
        image="/img/hero-slider/CKC03841-HDR.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-reveal>
              <span className="section-eyebrow">The Experience</span>
              <h2 className="mb-3">Dine Above the City</h2>
              <p className="mb-4">
                Our rooftop restaurant is where the day slows down. Watch Jodhpur&apos;s
                fort glow gold or the lakes of Udaipur shimmer below, while our kitchen
                serves up authentic Rajasthani flavours beside familiar comfort food.
              </p>
              <blockquote
                className="border-start ps-4 my-4"
                style={{ borderColor: 'var(--brass)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--ink)', fontSize: '1.15rem' }}
              >
                &ldquo;The best view of the city is from our table.&rdquo;
              </blockquote>
              <a href="/book" className="btn btn-brass">
                Reserve a Table
              </a>
            </div>
            <div className="col-lg-6" data-reveal style={{ transitionDelay: '0.15s' }}>
              <div className="position-relative rounded-3 overflow-hidden" style={{ borderRadius: '20px' }}>
                <img
                  src="/img/hero-slider/CKC03767.jpg"
                  alt="Rooftop dining at Storica Stays"
                  className="w-100"
                  style={{ objectFit: 'cover', aspectRatio: '4/3' }}
                  loading="lazy"
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(180deg, transparent, rgba(26,20,16,0.8))' }}>
                  <h5 className="text-ivory mb-0">Sunset service daily from 5 PM</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="text-center mb-5" data-reveal>
            <span className="section-eyebrow center">From the Kitchen</span>
            <h2 className="mt-3">Taste of Rajasthan</h2>
          </div>
          <div className="row g-4">
            {dishes.map((dish, index) => (
              <div className="col-lg-4 col-md-6" key={dish.title} data-reveal style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="amenity-card">
                  <div className="amenity-icon">
                    <i className={`fa ${dish.icon}`}></i>
                  </div>
                  <h5>{dish.title}</h5>
                  <p>{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining gallery */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5" data-reveal>
            <span className="section-eyebrow center">Gallery</span>
            <h2 className="mt-3">Scenes from the Rooftop</h2>
          </div>
          <div className="gallery-grid">
            {diningImages.map((img) => (
              <div key={img.label + img.src} className={`tile ${img.wide ? 'wide' : ''} ${img.tall ? 'tall' : ''}`} data-reveal>
                <img src={img.src} alt={img.label} loading="lazy" />
                <span className="label">{img.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection city="Jodhpur" />
    </>
  );
}