import SectionHeading from "./SectionHeading";
import ArchFrame from "./ArchFrame";
import Reveal from "./Reveal";

interface FindUsSectionProps {
  mapSrc: string;
  image?: string;
  imageCaption?: string;
}

export default function FindUsSection({
  mapSrc,
  image = "/img/General/CKC03792-HDR.jpg",
  imageCaption = "Jodhpur · 26.298° N, 73.020° E",
}: FindUsSectionProps) {
  return (
    <section className="ss-section ss-section--alt" id="Contact">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Find Us"
          title={
            <>
              Reach us, <em>any hour</em>
            </>
          }
          sub="Questions, last-minute plans, or a room for tonight — our desk is open around the clock."
        />
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="contact-card">
              <i className="fa fa-envelope-open" />
              <div>
                <h5>Booking</h5>
                <p>
                  <a href="mailto:info@storicastays.com">info@storicastays.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-card">
              <i className="fab fa-whatsapp" />
              <div>
                <h5>WhatsApp</h5>
                <p>
                  <a href="https://wa.me/916378365775">+91 63783 65775</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-card">
              <i className="fa fa-phone-alt" />
              <div>
                <h5>Call</h5>
                <p>
                  <a href="tel:+916378365775">+91 63783 65775</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ss-contact-grid">
          <Reveal>
            <div className="contact-map">
              <iframe
                src={mapSrc}
                width="600"
                height="380"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Storica Stays location map"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ArchFrame ratio="wide" duotone src={image} alt="Storica Stays heritage facade" caption={imageCaption} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
