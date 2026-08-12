'use client';

import { trackPhoneClick, trackWhatsAppClick, trackEmailClick } from '../utils/gtm';
import SectionHeading from './SectionHeading';

interface ContactSectionProps {
  mapEmbed?: string;
  city?: string;
  sideImage?: string;
}

const defaultMap =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.877455430147!2d73.02044147618096!3d26.29807238623277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d00351ddf83%3A0xef89956f3c6c3ae5!2sStorica%20Stays!5e0!3m2!1sen!2sin!4v1741427350058!5m2!1sen!2sin';

const udaipurMap =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4606.18498613014!2d73.6798072!3d24.580343199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e55307487f89%3A0x5d7795af4a3bb20b!2shotel%20panorama%20haveli!5e1!3m2!1sen!2sin!4v1759651246065!5m2!1sen!2sin';

export default function ContactSection({
  mapEmbed,
  city = 'Jodhpur',
  sideImage = '/img/General/CKC03792-HDR.jpg',
}: ContactSectionProps) {
  const embed = mapEmbed || (city === 'Udaipur' ? udaipurMap : defaultMap);

  return (
    <section className="section bg-ivory" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact Us"
          title="We’re Here for You"
          lead="Reserve a room, plan your stay, or just say hello — reach us any way you like."
          align="center"
        />

        <div className="row g-4 mb-5">
          <div className="col-md-4" data-reveal>
            <div className="contact-card">
              <div className="icon">
                <i className="fa fa-envelope-open"></i>
              </div>
              <h6>Booking &amp; Enquiries</h6>
              <a
                href="mailto:info@storicastays.com"
                onClick={() => trackEmailClick('info@storicastays.com', 'contact_section')}
              >
                info@storicastays.com
              </a>
            </div>
          </div>
          <div className="col-md-4" data-reveal style={{ transitionDelay: '0.1s' }}>
            <div className="contact-card">
              <div className="icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h6>WhatsApp</h6>
              <a
                href="https://wa.me/916378365775"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('9163xxxxx775', 'contact_section')}
              >
                +91 6378365775
              </a>
            </div>
          </div>
          <div className="col-md-4" data-reveal style={{ transitionDelay: '0.2s' }}>
            <div className="contact-card">
              <div className="icon">
                <i className="fa fa-phone-alt"></i>
              </div>
              <h6>Call Us</h6>
              <a
                href="tel:+91 6378365775"
                onClick={() => trackPhoneClick('9163xxxxx775', 'contact_section')}
              >
                +91 6378365775
              </a>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-7" data-reveal>
            <iframe
              className="map-frame w-100"
              src={embed}
              width="100%"
              height="420"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Storica Stays ${city} location map`}
            ></iframe>
          </div>
          <div className="col-lg-5" data-reveal style={{ transitionDelay: '0.1s' }}>
            <div className="position-relative h-100 overflow-hidden rounded-3" style={{ minHeight: '360px', borderRadius: '14px' }}>
              <img
                src={sideImage}
                alt="Storica Stays heritage building"
                className="w-100 position-absolute top-0 start-0 h-100"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(180deg, transparent, rgba(26,20,16,0.85))' }}>
                <h5 className="text-ivory mb-1">Storica Stays — {city}</h5>
                <p className="mb-0" style={{ color: 'rgba(250,246,239,0.75)' }}>
                  Heritage accommodations &amp; rooftop dining in the heart of the old city.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}