import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import BookingContact from "../../components/BookingContact";
import BookingIframe from "../../components/BookingIframe";
import "./booking.css";

export const metadata: Metadata = {
  title: "Book Your Stay - Storica Stays Heritage Stay",
  description:
    "Book your room at Storica Stays heritage stay in Jodhpur and Udaipur. Authentic heritage accommodation with modern amenities.",
};

const benefits = [
  { icon: "fa-shield-alt", title: "Secure Booking", text: "Your payment and personal information are protected with industry-standard security." },
  { icon: "fa-clock", title: "Instant Confirmation", text: "Receive immediate booking confirmation via email and SMS after successful payment." },
  { icon: "fa-undo", title: "Flexible Cancellation", text: "Easy cancellation and modification options available subject to our cancellation policy." },
];

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reservation"
        title={
          <>
            Book your <em>room</em>
          </>
        }
        sub="Reserve your stay and experience the authentic heritage of Jodhpur and Udaipur. Our booking system is secure and easy to use."
        image="/img/hero-slider/CKC03841-HDR.jpg"
        crumb="Book"
      />

      <section className="ss-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="ss-booking-frame position-relative">
                <div
                  id="iframe-loader"
                  className="position-absolute top-50 start-50 translate-middle text-center"
                  style={{ zIndex: 10 }}
                >
                  <div
                    className="spinner-border text-primary"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="visually-hidden">Loading booking system...</span>
                  </div>
                  <p className="mt-3">Loading secure booking system...</p>
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
            </div>
          </div>

          <BookingContact />

          <div className="row mt-5">
            {benefits.map((b) => (
              <div className="col-lg-4 col-md-6 mb-4" key={b.title}>
                <div className="booking-benefit">
                  <div className="benefit-icon">
                    <i className={`fa ${b.icon}`} />
                  </div>
                  <h5>{b.title}</h5>
                  <p>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
