"use client";

import { useRef } from "react";
import RoomsSection from "../components/RoomsSection";
import ReviewsSection from "../components/ReviewsSection";
import InstagramSection from "../components/InstagramSection";
import SectionHeading from "../components/SectionHeading";
import ArchFrame from "../components/ArchFrame";
import JaaliPattern from "../components/JaaliPattern";
import Reveal from "../components/Reveal";
import PropertyGallery, { PropertyGalleryRef } from "../components/PropertyGallery";
import { primeUdaipurRooms } from "@/data/rooms";

const heroSlides = [
  { src: "/img/hero-slider/CKC04015-HDR.jpg", alt: "Storica Stays heritage facade" },
  { src: "/img/hero-slider/CKC03767.jpg", alt: "Heritage architecture under blue skies" },
  { src: "/img/hero-slider/CKC03841-HDR.jpg", alt: "Rooftop restaurant at dusk" },
];

const cities = [
  {
    name: "Jodhpur",
    coords: "26.298° N · 73.020° E",
    image: "/img/hero-slider/CKC03767.jpg",
    alt: "Jodhpur blue city and Mehrangarh fort",
    points: ["Mehrangarh Fort views", "Blue old town lanes", "Rooftop thali dining"],
    href: "/jodhpur",
  },
  {
    name: "Udaipur",
    coords: "24.580° N · 73.679° E",
    image: "/img/udaipur/property/rooftop.jpeg",
    alt: "Udaipur rooftop over Lake Pichola",
    points: ["Lake Pichola views", "City Palace nearby", "White-marble havelis"],
    href: "/udaipur",
  },
];

export default function Home() {
  const propertyGalleryRef = useRef<PropertyGalleryRef>(null);

  const openPropertyGallery = () => {
    if (propertyGalleryRef.current) {
      propertyGalleryRef.current.openGallery();
    }
  };

  return (
    <>
      <PropertyGallery ref={propertyGalleryRef} />

      {/* ===== Hero ===== */}
      <section className="ss-hero" id="home">
        <div className="ss-hero-media">
          {heroSlides.map((slide) => (
            <div className="ss-hero-slide" key={slide.src}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
        <div className="ss-hero-overlay" />
        <div className="ss-hero-jaali" />

        <div className="container ss-hero-content">
          <Reveal className="w-100 d-flex justify-content-center">
            <div className="ss-hero-panel">
              <p className="ss-hero-kicker">Jodhpur ✦ Udaipur · Heritage Stays</p>
              <h1 className="ss-hero-title">
                Sleep inside the <em>Blue City&apos;s</em> story.
              </h1>
              <p className="ss-hero-sub">
                A restored heritage haveli with rooftop dining over forts and lakes — where
                Rajasthan&apos;s craft, colour and chai meet the comfort of a modern stay.
              </p>
              <div className="ss-hero-cta">
                <a
                  href="/book"
                  className="ss-btn ss-btn-saffron ss-btn-lg"
                  data-gtm-event="booking_click"
                  data-gtm-source="hero"
                >
                  Book a Stay <i className="fa fa-arrow-right" />
                </a>
                <a href="#Rooms" className="ss-btn ss-btn-ghost-light ss-btn-lg">
                  Explore the Folio
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="ss-hero-meta">
          <span>
            <i>✦</i> Rooftop dining
          </span>
          <span>
            <i>✦</i> Fort &amp; lake views
          </span>
          <span>
            <i>✦</i> Free breakfast
          </span>
        </div>
        <a className="ss-scroll-cue" href="#about" aria-label="Scroll to story" />
      </section>

      {/* ===== Story ===== */}
      <section className="ss-section" id="about">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Reveal>
                <SectionHeading
                  eyebrow="The Story"
                  title={
                    <>
                      Welcome to <em>Storica Stays</em>
                    </>
                  }
                  sub="Nestled in the timeless lanes of Jodhpur and Udaipur, Storica Stays invites you into a journey through history. Fort views from the rooftop restaurant, dorms and double rooms that whisper the old haveli's secrets — a peaceful oasis in the heart of the old town."
                />
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <span className="room-chip">
                    <i className="fa fa-fort-awesome" /> Heritage architecture
                  </span>
                  <span className="room-chip">
                    <i className="fa fa-utensils" /> Rooftop restaurant
                  </span>
                  <span className="room-chip">
                    <i className="fa fa-map-marker-alt" /> Old town heart
                  </span>
                </div>
                <div className="d-flex gap-3 mt-4">
                  <button
                    type="button"
                    className="ss-btn ss-btn-primary"
                    onClick={openPropertyGallery}
                  >
                    <i className="fa fa-images" /> Property Images
                  </button>
                  <a href="/about" className="ss-btn ss-btn-ghost">
                    Read our story
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal delay={120}>
                <div className="ss-story-figure">
                  <div className="arch arch-ratio-portrait arch-main">
                    <img
                      src="/img/General/CKC03844-HDR.jpg"
                      alt="Storica Stays heritage building exterior"
                      className="arch-media"
                      loading="lazy"
                    />
                    <span className="ss-story-caption">The haveli, Jodhpur</span>
                  </div>
                  <div className="arch-float arch-float--a">
                    <div className="arch arch-ratio-square">
                      <img
                        src="/img/General/CKC03886-HDR.jpg"
                        alt="Interior courtyard"
                        className="arch-media"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="arch-float arch-float--b">
                    <div className="arch arch-ratio-square">
                      <img
                        src="/img/General/CKC03983-HDR.jpg"
                        alt="Traditional architecture details"
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

      {/* ===== Folio: Jodhpur ===== */}
      <RoomsSection
        title="The Folio · Jodhpur"
        subtitle="Rooms of the Blue City"
        badge="Blue City"
      />

      {/* ===== Two Cities ===== */}
      <section className="ss-section ss-section--dark">
        <JaaliPattern variant="light" absolute />
        <div className="container position-relative">
          <SectionHeading
            center
            dark
            eyebrow="Two Cities"
            title={
              <>
                One story, <em>two cities</em>
              </>
            }
            sub="A heritage haveli in the Blue City, and a lakeside retreat in the City of Lakes."
          />
          <div className="ss-cities-grid">
            {cities.map((city, i) => (
              <Reveal key={city.name} delay={i * 120}>
                <article className="city-card">
                  <img src={city.image} alt={city.alt} loading="lazy" />
                  <div className="city-card-body">
                    <h3 className="city-card-name">{city.name}</h3>
                    <p className="city-card-coords">{city.coords}</p>
                    <div className="city-card-points">
                      {city.points.map((p) => (
                        <span key={p}>{p}</span>
                      ))}
                    </div>
                    <a className="city-link" href={city.href}>
                      Explore {city.name} <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Rooftop parallax ===== */}
      <section className="ss-rooftop">
        <div className="ss-rooftop-bg" />
        <div className="container ss-rooftop-inner">
          <Reveal>
            <p className="section-eyebrow" style={{ color: "var(--saffron)" }}>
              The Rooftop
            </p>
            <h2>
              Dinner with a <em>fort</em> in your glass.
            </h2>
            <p>
              Our rooftop restaurant sits above the old town — sunsets turned to gold over
              Mehrangarh, lanterns waking over the lake, and Rajasthani spice on the breeze.
            </p>
            <div className="ss-rooftop-chips">
              <span>
                <i className="fa fa-sun" /> Sunrise chai
              </span>
              <span>
                <i className="fa fa-utensils" /> Evening thali
              </span>
              <span>
                <i className="fa fa-cocktail" /> Sundowners
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Folio: Udaipur ===== */}
      <RoomsSection
        rooms={primeUdaipurRooms}
        title="The Folio · Udaipur"
        subtitle="Rooms of the Lake City"
        badge="Lake View"
        roomsLink="/udaipur"
      />

      <InstagramSection />

      <ReviewsSection />

      {/* ===== Find us ===== */}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.877455430147!2d73.02044147618096!3d26.29807238623277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d00351ddf83%3A0xef89956f3c6c3ae5!2sStorica%20Stays!5e0!3m2!1sen!2sin!4v1741427350058!5m2!1sen!2sin"
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
              <ArchFrame
                ratio="wide"
                duotone
                src="/img/General/CKC03792-HDR.jpg"
                alt="Storica Stays heritage facade at dusk"
                caption="Jodhpur · 26.298° N, 73.020° E"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Seal ===== */}
      <section className="ss-section ss-section--dark text-center">
        <JaaliPattern variant="light" absolute />
        <div className="container position-relative">
          <Reveal>
            <p className="section-eyebrow justify-content-center" style={{ color: "var(--saffron)" }}>
              A Rajasthani Welcome
            </p>
            <h2
              className="mt-4"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#fff",
                fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              }}
            >
              Atithi Devo Bhava
            </h2>
            <p className="ss-lead mx-auto" style={{ maxWidth: "46ch", color: "var(--indigo-400)" }}>
              The guest is god. Your room in the Blue City awaits — wherever the sunset finds
              you.
            </p>
            <div className="mt-4">
              <a href="/book" className="ss-btn ss-btn-saffron ss-btn-lg">
                Book a Stay <i className="fa fa-arrow-right" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
