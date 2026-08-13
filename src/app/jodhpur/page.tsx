import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading";
import RoomsSection from "../../components/RoomsSection";
import InstagramSection from "../../components/InstagramSection";
import ReviewsSection from "../../components/ReviewsSection";
import FindUsSection from "../../components/FindUsSection";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Storica Stays Jodhpur — Heritage Stay in the Blue City",
  description:
    "Heritage hostel and rooftop restaurant in old-town Jodhpur, with Mehrangarh fort views. Cosy dorms and heritage doubles in the Blue City.",
};

const highlights = [
  { icon: "fa-fort-awesome", title: "Fort on your doorstep", text: "Mehrangarh Fort rises over the rooftop — sunrise and sunset come free." },
  { icon: "fa-map-marker-alt", title: "Old town heart", text: "Step out into Sardar Market, clock tower bazaars and blue-washed lanes." },
  { icon: "fa-utensils", title: "Rooftop restaurant", text: "Thalis under the stars, chai at dawn — the Blue City spread below." },
];

export default function JodhpurPage() {
  return (
    <>
      <PageHeader
        eyebrow="Jodhpur · The Blue City"
        title={
          <>
            A haveli in <em>blue</em>
          </>
        }
        sub="Walled in indigo, crowned by the fort — our Jodhpur home sits in the old town's most storied lanes."
        image="/img/hero-slider/CKC03767.jpg"
        crumb="Jodhpur"
      />

      <section className="ss-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Reveal>
                <SectionHeading
                  eyebrow="Welcome to Jodhpur"
                  title={
                    <>
                      Welcome to <em>Storica Stays</em>
                    </>
                  }
                  sub="Nestled amidst the timeless beauty of Jodhpur, Storica Stays invites you into an unforgettable journey. With stunning fort views from its rooftop restaurant, this heritage hotel blends comfort and adventure. Discover cosy dorms and private doubles — a peaceful oasis in the heart of the vibrant old town."
                />
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <span className="room-chip"><i className="fa fa-sun" /> 300+ sunny days</span>
                  <span className="room-chip"><i className="fa fa-fort-awesome" /> Fort views</span>
                  <span className="room-chip"><i className="fa fa-map-marker-alt" /> Old town</span>
                </div>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal delay={120}>
                <div className="ss-story-figure">
                  <div className="arch arch-ratio-portrait arch-main">
                    <img src="/img/General/CKC03844-HDR.jpg" alt="Storica Stays Jodhpur building" className="arch-media" loading="lazy" />
                    <span className="ss-story-caption">The Blue City haveli</span>
                  </div>
                  <div className="arch-float arch-float--a">
                    <div className="arch arch-ratio-square">
                      <img src="/img/General/CKC03886-HDR.jpg" alt="Courtyard at dusk" className="arch-media" loading="lazy" />
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

      <RoomsSection title="The Folio · Jodhpur" subtitle="Rooms of the Blue City" badge="Blue City" />

      <InstagramSection />

      <ReviewsSection />

      <FindUsSection
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.877455430147!2d73.02044147618096!3d26.29807238623277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d00351ddf83%3A0xef89956f3c6c3ae5!2sStorica%20Stays!5e0!3m2!1sen!2sin!4v1741427350058!5m2!1sen!2sin"
        image="/img/General/CKC03792-HDR.jpg"
        imageCaption="Jodhpur · 26.298° N, 73.020° E"
      />
    </>
  );
}
