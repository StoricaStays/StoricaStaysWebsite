'use client';

import { trackPhoneClick, trackWhatsAppClick } from "../utils/gtm";

export default function BookingContact() {
  return (
    <div className="row mt-5">
      <div className="col-lg-12">
        <div className="bg-light rounded p-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h5 className="text-primary mb-2">Need Help with Your Booking?</h5>
              <p className="mb-0">
                Our team is available to assist you with any questions about your reservation.
                Call us directly or send us a message on WhatsApp.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex gap-3 justify-content-lg-end justify-content-center mt-3 mt-lg-0">
                <a
                  href="tel:+916378365775"
                  className="btn btn-primary btn-lg"
                  title="Call Us"
                  onClick={() => trackPhoneClick("+916378365775", "booking_page")}
                >
                  <i className="fa fa-phone-alt me-2"></i>
                  Call Now
                </a>
                <a
                  href="https://wa.me/916378365775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg"
                  title="WhatsApp"
                  onClick={() => trackWhatsAppClick("916378365775", "booking_page")}
                >
                  <i className="fab fa-whatsapp me-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
