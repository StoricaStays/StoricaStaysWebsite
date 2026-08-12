import SectionHeading from './SectionHeading';

interface Amenity {
  icon: string;
  title: string;
  description: string;
}

interface AmenitiesSectionProps {
  title?: string;
  lead?: string;
  amenities?: Amenity[];
}

const defaultAmenities: Amenity[] = [
  {
    icon: 'fa-fort-awesome',
    title: 'Heritage Property',
    description: 'Authentic Rajasthani architecture, restored with care and character.',
  },
  {
    icon: 'fa-utensils',
    title: 'Rooftop Restaurant',
    description: 'Local & international cuisine with fort or lake-facing views.',
  },
  {
    icon: 'fa-map-marker-alt',
    title: 'Prime Location',
    description: 'Steps from old town bazaars, forts, lakes and major attractions.',
  },
  {
    icon: 'fa-wifi',
    title: 'Free WiFi',
    description: 'High-speed internet throughout the property, always on.',
  },
  {
    icon: 'fa-concierge-bell',
    title: '24/7 Reception',
    description: 'Round-the-clock staff for travel help, check-ins and more.',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Safe & Secure',
    description: 'Secure lockers, CCTV and well-lit common spaces for peace of mind.',
  },
];

export default function AmenitiesSection({
  title = "Why Choose Storica Stays",
  lead = "The details that turn a stay into an experience.",
  amenities = defaultAmenities,
}: AmenitiesSectionProps) {
  return (
    <section className="section section-cream">
      <div className="container">
        <SectionHeading eyebrow="Our Amenities" title={title} lead={lead} align="center" />
        <div className="row g-4">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="col-lg-4 col-md-6"
              data-reveal
              style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
            >
              <div className="amenity-card">
                <div className="amenity-icon">
                  <i className={`fa ${amenity.icon}`}></i>
                </div>
                <h5>{amenity.title}</h5>
                <p>{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}