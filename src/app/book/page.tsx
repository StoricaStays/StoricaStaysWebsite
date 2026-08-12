import type { Metadata } from "next";
import BookingContact from "../../components/BookingContact";
import BookingIframe from "../../components/BookingIframe";
import PageHero from "../../components/PageHero";
import "./booking.css";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description:
    "Book your room at Storica Stays heritage hostel in Jodhpur. Secure, instant confirmation with flexible options.",
};

const benefits = [
  {
    icon: "fa-shield-alt",
    title: "Secure Booking",
    description:
      "Your payment and personal information are protected with industry-standard security.",
  },
  {
    icon: "fa-clock",
    title: "Instant Confirmation",
    description:
      "Receive immediate booking confirmation via email and SMS after successful payment.",
  },
  {
    icon: "fa-undo",
    title: "Flexible Cancellation",
    description:
      "Easy cancellation and modification options, subject to our cancellation policy.",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        title="Book Your Stay"
        eyebrow="Reservation"
        description="Reserve your room at Storica Stays and start your heritage journey. Our booking system is secure and easy to use."
        image="/img/hero-slider/CKC03841-HDR.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="booking-frame-outer position-relative">
            {/* Loading indicator */}
            <div
              id="iframe-loader"
              className="position-absolute top-50 start-50 translate-middle text-center"
              style={{ zIndex: 10 }}
            >
              <div
                className="spinner-border"
                style={{ width: "3rem", height: "3rem", color: "var(--brass)" }}
                aria-hidden="true"
              ></div>
              <p className="mt-3" style={{ color: "var(--stone)" }}>
                Loading secure booking system...
              </p>
            </div>

            <BookingIframe
              src="https://bookings.asiatech.in/?page=8296&type=website"
              width="100%"
              height="1000"
              title="Storica Stays Booking System"
              style={{
                minHeight: "800px",
                border: "none",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
              allow="payment; fullscreen"
              loading="lazy"
            />
          </div>

          <BookingContact />

          {/* Trust signals */}
          <div className="row mt-5 g-4">
            {benefits.map((benefit, index) => (
              <div className="col-lg-4 col-md-6" key={benefit.title} data-reveal style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="trust-card">
                  <div className="icon">
                    <i className={`fa ${benefit.icon}`}></i>
                  </div>
                  <h5>{benefit.title}</h5>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}