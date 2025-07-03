import type { Metadata } from "next";
import BookingContact from "../../components/BookingContact";
import BookingIframeHandler from "../../components/BookingIframeHandler";
import "./booking.css";

export const metadata: Metadata = {
  title: "Book Your Stay - Storica Stays Heritage Hostel",
  description: "Book your room at Storica Stays heritage hostel in Jodhpur. Experience authentic heritage accommodation with modern amenities.",
};

export default function BookPage() {
  return (
    <div className="container-fluid p-0">
      {/* Booking Section */}
      <div className="container-xxl py-5 booking-section">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">
              Reservation
            </h6>
            <h1 className="mb-5">
              Book Your <span className="text-primary text-uppercase">Room</span>
            </h1>
            <p className="mb-4">
              Reserve your stay at Storica Stays and experience the authentic heritage 
              of Jodhpur. Our booking system is secure and easy to use.
            </p>
          </div>

          {/* Booking iframe */}
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="booking-frame-container position-relative" style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                background: '#f8f9fa'
              }}>
                {/* Loading indicator */}
                <div 
                  className="position-absolute top-50 start-50 translate-middle text-center"
                  style={{ zIndex: 1 }}
                >
                  <div className="spinner-border text-primary" aria-label="Loading booking system">
                    <span className="visually-hidden">Loading booking system...</span>
                  </div>
                  <p className="mt-2 text-muted">Loading secure booking system...</p>
                </div>
                
                <iframe
                  src="https://bookings.asiatech.in/?page=8296&type=website"
                  width="100%"
                  height="1000"
                  frameBorder="0"
                  title="Storica Stays Booking System"
                  className="booking-iframe"
                  style={{ 
                    minHeight: '800px',
                    border: 'none',
                    position: 'relative',
                    zIndex: 2
                  }}
                  allow="payment; fullscreen"
                  loading="lazy"
                ></iframe>
                <BookingIframeHandler />
              </div>
              
              {/* Mobile-specific notice */}
              <div className="d-md-none mt-3 p-3 mobile-tip rounded">
                <div className="d-flex align-items-start">
                  <i className="fa fa-mobile-alt text-primary me-2 mt-1"></i>
                  <div>
                    <h6 className="mb-1">Mobile Booking Tip</h6>
                    <small className="text-muted">
                      For the best mobile experience, you can rotate your device to landscape mode 
                      or contact us directly for assistance with your booking.
                    </small>
                  </div>
                </div>
              </div>

              {/* Fallback booking option */}
              <div className="mt-3 p-3 fallback-booking-section">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h6 className="mb-1">Having trouble with the booking form?</h6>
                    <small className="text-muted">
                      If the booking system doesn&apos;t load properly, you can book directly through our partner or contact us.
                    </small>
                  </div>
                  <div className="col-md-4 text-md-end mt-2 mt-md-0">
                    <a 
                      href="https://bookings.asiatech.in/?page=8296&type=website" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm me-2 fallback-booking-link"
                    >
                      <i className="fa fa-external-link-alt me-1" />{" "}
                      Open in New Tab
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <BookingContact />

          {/* Booking Benefits */}
          <div className="booking-benefits">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="text-center">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3 benefit-icon">
                    <i className="fa fa-shield-alt text-white"></i>
                  </div>
                  <h5>Secure Booking</h5>
                  <p>Your payment and personal information are protected with industry-standard security.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="text-center">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3 benefit-icon">
                    <i className="fa fa-clock text-white"></i>
                  </div>
                  <h5>Instant Confirmation</h5>
                  <p>Receive immediate booking confirmation via email and SMS after successful payment.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="text-center">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3 benefit-icon">
                    <i className="fa fa-undo text-white"></i>
                  </div>
                  <h5>Flexible Cancellation</h5>
                  <p>Easy cancellation and modification options available subject to our cancellation policy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
