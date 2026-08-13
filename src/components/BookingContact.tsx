"use client";

import { trackPhoneClick, trackWhatsAppClick } from "../utils/gtm";

export default function BookingContact() {
  return (
    <div className="row mt-5">
      <div className="col-12">
        <div className="ss-rating-band" style={{ borderRadius: "var(--radius-arch)" }}>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h4 className="text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Need help with your booking?
              </h4>
              <p className="text-white mb-0" style={{ opacity: 0.85 }}>
                Our team is available to assist you with any questions about your reservation.
                Call us directly or send us a message on WhatsApp.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex gap-3 justify-content-lg-end justify-content-center mt-3 mt-lg-0">
                <a
                  href="tel:+916378365775"
                  className="ss-btn ss-btn-saffron"
                  title="Call Us"
                  onClick={() => trackPhoneClick("+916378365775", "booking_page")}
                >
                  <i className="fa fa-phone-alt me-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/916378365775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-btn ss-btn-ghost-light"
                  title="WhatsApp"
                  onClick={() => trackWhatsAppClick("916378365775", "booking_page")}
                >
                  <i className="fab fa-whatsapp me-2" />
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
