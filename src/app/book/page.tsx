import type { Metadata } from "next";
import BookingContact from "../../components/BookingContact";

export const metadata: Metadata = {
  title: "Book Your Stay - Storica Stays Heritage Hostel",
  description: "Book your room at Storica Stays heritage hostel in Jodhpur. Experience authentic heritage accommodation with modern amenities.",
};

export default function BookPage() {
  return (
    <div className="container-fluid p-0">
      {/* Booking Section */}
      <div className="container-xxl py-5">
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
            <div className="col-lg-12">
              <div className="booking-frame-container" style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <iframe
                  src="https://bookings.asiatech.in/?page=8296&type=website"
                  width="100%"
                  height="1000"
                  frameBorder="0"
                  title="Storica Stays Booking System"
                  style={{ 
                    minHeight: '800px',
                    border: 'none'
                  }}
                  allow="payment; fullscreen"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <BookingContact />

          {/* Booking Benefits */}
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="fa fa-shield-alt text-white"></i>
                </div>
                <h5>Secure Booking</h5>
                <p>Your payment and personal information are protected with industry-standard security.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="fa fa-clock text-white"></i>
                </div>
                <h5>Instant Confirmation</h5>
                <p>Receive immediate booking confirmation via email and SMS after successful payment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
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
  );
}
