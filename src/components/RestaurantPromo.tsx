import SectionHeading from './SectionHeading';

interface RestaurantPromoProps {
  image?: string;
  badge?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function RestaurantPromo({
  image = '/img/General/CKC03841-HDR.jpg',
  badge = 'Rooftop Dining',
  title = 'Dine Above the City',
  description =
    'Catch the golden hour from our rooftop restaurant — traditional Rajasthani thalis, wood-fired specialties and drinks with a view of the fort or lake.',
  buttonLabel = 'Explore Restaurant',
  buttonHref = '/restaurant',
}: RestaurantPromoProps) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Restaurant"
          title="A Table with a View"
          align="center"
        />
        <div className="restaurant-promo" data-reveal>
          <img src={image} alt="Storica Stays rooftop restaurant" loading="lazy" />
          <div className="shade"></div>
          <div className="promo-body">
            <span className="hero-badge">{badge}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={buttonHref} className="btn btn-brass">
              {buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}