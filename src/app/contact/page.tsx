import type { Metadata } from 'next';
import PageHero from '../../components/PageHero';
import ContactSection from '../../components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Storica Stays in Jodhpur and Udaipur — booking enquiries, support and feedback.',
};

const jodhpurMap =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.877455430147!2d73.02044147618096!3d26.29807238623277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d00351ddf83%3A0xef89956f3c6c3ae5!2sStorica%20Stays!5e0!3m2!1sen!2sin!4v1741427350058!5m2!1sen!2sin';

const udaipurMap =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4606.18498613014!2d73.6798072!3d24.580343199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e55307487f89%3A0x5d7795af4a3bb20b!2shotel%20panorama%20haveli!5e1!3m2!1sen!2sin!4v1759651246065!5m2!1sen!2sin';

const cities = [
  {
    name: 'Jodhpur',
    tagline: 'The Blue City',
    map: jodhpurMap,
    location: "Near Joshiwara, Old City, Jodhpur, Rajasthan",
  },
  {
    name: 'Udaipur',
    tagline: 'City of Lakes',
    map: udaipurMap,
    location: "Old City, Udaipur, Rajasthan",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        eyebrow="Get in Touch"
        description="Questions, bookings or just planning your trip — we reply fast."
        image="/img/General/CKC03792-HDR.jpg"
      />

      <section className="section">
        <div className="container">
          {cities.map((city) => (
            <div key={city.name} className="row g-4 align-items-stretch mb-5">
              <div className="col-lg-7" data-reveal>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="section-eyebrow mb-0">
                    <i className="fa fa-map-marker-alt me-1"></i>
                  </span>
                  <div>
                    <h3 className="mb-0">{city.name}</h3>
                    <small className="text-muted letter-spaced">{city.tagline}</small>
                  </div>
                </div>
                <iframe
                  className="map-frame w-100"
                  src={city.map}
                  width="100%"
                  height="400"
                  style={{ border: 0, minHeight: '360px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Storica Stays ${city.name} map`}
                ></iframe>
              </div>
              <div className="col-lg-5" data-reveal style={{ transitionDelay: '0.1s' }}>
                <div className="d-flex flex-column justify-content-center h-100">
                  <p className="mb-3" style={{ color: 'var(--stone)' }}>
                    {city.location}
                  </p>
                  <p className="mb-2">
                    <a href="tel:+91 6378365775" className="btn-link-flat">
                      <i className="fa fa-phone-alt me-2"></i> +91 6378365775
                    </a>
                  </p>
                  <p className="mb-2">
                    <a href="https://wa.me/916378365775" target="_blank" rel="noopener noreferrer" className="btn-link-flat">
                      <i className="fab fa-whatsapp me-2"></i> WhatsApp Us
                    </a>
                  </p>
                  <p className="mb-2">
                    <a href="mailto:info@storicastays.com" className="btn-link-flat">
                      <i className="fa fa-envelope me-2"></i> info@storicastays.com
                    </a>
                  </p>
                  <div className="mt-4 d-flex gap-2">
                    <a href="/book" className="btn btn-brass">
                      Book {city.name}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection city="Jodhpur" />
    </>
  );
}