import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading";
import RoomsSection from "../../components/RoomsSection";
import InstagramSection from "../../components/InstagramSection";
import ReviewsSection from "../../components/ReviewsSection";
import FindUsSection from "../../components/FindUsSection";
import Reveal from "../../components/Reveal";
import { udaipurRooms } from "@/data/rooms";

export const metadata = {
  title: "Storica Stays Udaipur — Heritage Stay on the Lake",
  description:
    "Heritage boutique stay and rooftop restaurant in old-town Udaipur, with Lake Pichola views. Lake-view suites, heritage doubles and more.",
};

const highlights = [
  { icon: "fa-water", title: "Lake Pichola views", text: "The City of Lakes glitters from our rooftop — sunrise over the water is a ritual." },
  { icon: "fa-landmark", title: "Palace city heart", text: "City Palace, ghats and white-marble havelis are a short walk from the door." },
  { icon: "fa-utensils", title: "Lakeside dining", text: "Evening thalis and sundowners with the lake breeze — a table with a view." },
];

export default function UdaipurPage() {
  return (
    <>
      <PageHeader
        eyebrow="Udaipur · The City of Lakes"
        title={
          <>
            A retreat by the <em>water</em>
          </>
        }
        sub="White marble, calm lakes and palace domes — our Udaipur home holds the old town's gentlest corner."
        image="/img/udaipur/hero-slider/room (2).jpg"
        crumb="Udaipur"
      />

      <section className="ss-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Reveal>
                <SectionHeading
                  eyebrow="Welcome to Udaipur"
                  title={
                    <>
                      Welcome to <em>Storica Stays</em>
                    </>
                  }
                  sub="Nestled amidst the timeless beauty of Udaipur, Storica Stays invites you into an unforgettable journey. With stunning lake views from its rooftop restaurant, this heritage hotel blends comfort and calm. Discover cosy rooms designed as a peaceful oasis in the heart of the vibrant old town."
                />
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <span className="room-chip"><i className="fa fa-water" /> Lake views</span>
                  <span className="room-chip"><i className="fa fa-landmark" /> City Palace nearby</span>
                  <span className="room-chip"><i className="fa fa-map-marker-alt" /> Old town</span>
                </div>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal delay={120}>
                <div className="ss-story-figure">
                  <div className="arch arch-ratio-portrait arch-main">
                    <img src="/img/udaipur/property/property (7).jpg" alt="Storica Stays Udaipur property" className="arch-media" loading="lazy" />
                    <span className="ss-story-caption">The lake-side haveli</span>
                  </div>
                  <div className="arch-float arch-float--a">
                    <div className="arch arch-ratio-square">
                      <img src="/img/udaipur/property/rooftop.jpeg" alt="Rooftop over Lake Pichola" className="arch-media" loading="lazy" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="row g-4 mt-5">
            {highlights.map((h, i) => (
              <div className="col-md-4" key={h.title}>
                <Reveal delay={i * 90}>
                  <div className="feature-card" style={{ textAlign: "center" }}>
                    <div className="feature-icon mx-auto">
                      <i className={`fa ${h.icon}`} />
                    </div>
                    <h5>{h.title}</h5>
                    <p>{h.text}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoomsSection rooms={udaipurRooms} title="The Folio · Udaipur" subtitle="Rooms of the Lake City" badge="Lake View" />

      <InstagramSection />

      <ReviewsSection />

      <FindUsSection
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4606.18498613014!2d73.6798072!3d24.580343199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e55307487f89%3A0x5d7795af4a3bb20b!2shotel%20panorama%20haveli!5e1!3m2!1sen!2sin!4v1759651246065!5m2!1sen!2sin"
        image="/img/udaipur/property/property (1).jpg"
        imageCaption="Udaipur · 24.580° N, 73.679° E"
      />
    </>
  );
}
