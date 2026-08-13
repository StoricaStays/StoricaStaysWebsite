import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading";
import ArchFrame from "../../components/ArchFrame";
import JaaliPattern from "../../components/JaaliPattern";
import Reveal from "../../components/Reveal";

const features = [
  {
    icon: "fa-fort-awesome",
    title: "Heritage Property",
    text: "Experience authentic Rajasthani architecture and traditional design in our beautifully restored heritage buildings.",
  },
  {
    icon: "fa-utensils",
    title: "Rooftop Restaurant",
    text: "Enjoy local and international cuisine with stunning fort and lake views from our rooftop restaurants.",
  },
  {
    icon: "fa-map-marker-alt",
    title: "Prime Location",
    text: "In the heart of Jodhpur's and Udaipur's old towns — walking distance to the great monuments and bazaars.",
  },
  {
    icon: "fa-wifi",
    title: "Free WiFi",
    text: "Stay connected with complimentary high-speed internet throughout both properties.",
  },
  {
    icon: "fa-concierge-bell",
    title: "24/7 Reception",
    text: "Our desk is open around the clock to help with travel plans, chai recommendations and late-night arrivals.",
  },
  {
    icon: "fa-shield-alt",
    title: "Safe & Secure",
    text: "Secure lockers, CCTV and well-lit common areas — your comfort is our craft.",
  },
];

const stats = [
  { value: "2", label: "Heritage cities" },
  { value: "12+", label: "Room types" },
  { value: "4.8★", label: "Guest rating" },
  { value: "24/7", label: "Reception" },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="The Story"
        title={
          <>
            A haveli, <em>reimagined</em>
          </>
        }
        sub="Two restored heritage houses, one belief — that the past is best lived in, not just looked at."
        image="/img/hero-slider/CKC04015-HDR.jpg"
        crumb="About"
      />

      {/* Story split */}
      <section className="ss-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Reveal>
                <SectionHeading
                  eyebrow="About Us"
                  title={
                    <>
                      Welcome to <em>Storica Stays</em>
                    </>
                  }
                />
                <p>
                  Nestled amidst the timeless beauty of Jodhpur and Udaipur, Storica Stays
                  invites you to experience an unforgettable journey. With stunning fort views
                  from its rooftop restaurant, this heritage backpacker hostel promises a unique
                  blend of comfort and adventure.
                </p>
                <p>
                  Discover cosy dormitory rooms and private double bedrooms, designed to provide
                  a peaceful oasis in the heart of the city&apos;s vibrant old town. Our heritage
                  properties combine traditional Rajasthani architecture with modern amenities to
                  ensure your stay is both authentic and comfortable.
                </p>
                <div className="ss-stats ss-stats--light mt-4" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                  {stats.map((s) => (
                    <div className="ss-stat" key={s.label} style={{ background: "var(--indigo-100)", border: "none" }}>
                      <b style={{ color: "var(--indigo-600)" }}>{s.value}</b>
                      <span style={{ color: "var(--indigo-700)" }}>{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="d-flex gap-3 mt-4 flex-wrap">
                  <Link href="/#Contact" className="ss-btn ss-btn-primary">
                    Contact Us
                  </Link>
                  <Link href="/book" className="ss-btn ss-btn-ghost">
                    Book a Stay
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal delay={120}>
                <div className="ss-story-figure">
                  <div className="arch arch-ratio-portrait arch-main">
                    <img
                      src="/img/General/CKC03844-HDR.jpg"
                      alt="Storica Stays heritage building"
                      className="arch-media"
                      loading="lazy"
                    />
                    <span className="ss-story-caption">The haveli, Jodhpur</span>
                  </div>
                  <div className="arch-float arch-float--a">
                    <div className="arch arch-ratio-square">
                      <img
                        src="/img/General/CKC03983-HDR.jpg"
                        alt="Heritage architecture"
                        className="arch-media"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="arch-float arch-float--b">
                    <div className="arch arch-ratio-square">
                      <img
                        src="/img/General/CKC03907-HDR.jpg"
                        alt="Traditional decor details"
                        className="arch-media"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="ss-section ss-section--dark">
        <JaaliPattern variant="light" absolute />
        <div className="container position-relative">
          <SectionHeading
            center
            dark
            eyebrow="Our Features"
            title={
              <>
                Why choose <em>Storica Stays</em>
              </>
            }
            sub="The craft of a heritage house, the comfort of a modern stay."
          />
          <div className="row g-4">
            {features.map((f, i) => (
              <div className="col-lg-4 col-md-6" key={f.title}>
                <Reveal delay={(i % 3) * 90}>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className={`fa fa-3x ${f.icon}`} />
                    </div>
                    <h5>{f.title}</h5>
                    <p>{f.text}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenity strip */}
      <section className="ss-section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <Reveal>
                <ArchFrame
                  ratio="wide"
                  duotone
                  src="/img/General/CKC03886-HDR.jpg"
                  alt="Storica Stays interior courtyard"
                  caption="A courtyard that holds the evening light"
                />
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal delay={100}>
                <SectionHeading
                  eyebrow="Stays for every traveller"
                  title={
                    <>
                      Dorms to <em>deluxe</em> — all with the haveli&apos;s soul
                    </>
                  }
                  sub="From bunks that make friends to lake-view suites that make memories, every space carries the heritage story."
                />
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {["Cosy dorms", "Heritage doubles", "Lake-view rooms", "Family suites", "Rooftop café"].map(
                    (t) => (
                      <span className="room-chip" key={t}>
                        <i className="fa fa-check" /> {t}
                      </span>
                    )
                  )}
                </div>
                <div className="d-flex gap-3 mt-4 flex-wrap">
                  <Link href="/jodhpur" className="ss-btn ss-btn-primary">
                    Jodhpur rooms
                  </Link>
                  <Link href="/udaipur" className="ss-btn ss-btn-ghost">
                    Udaipur rooms
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
