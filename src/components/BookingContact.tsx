'use client';

import { Phone } from 'lucide-react';
import { trackPhoneClick, trackWhatsAppClick } from "../utils/gtm";
import Button from "./ui/Button";

export default function BookingContact() {
  return (
    <div className="mt-10 rounded-2xl bg-sand-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="text-center sm:text-left">
        <h3 className="font-display text-xl text-ink-900">Need Help with Your Booking?</h3>
        <p className="mt-1 font-sans text-sm text-sand-600">
          Our team is available to assist you with any questions about your reservation.
          Call us directly or send us a message on WhatsApp.
        </p>
      </div>
      <div className="flex gap-3 shrink-0">
        <Button
          href="tel:+916378365775"
          size="md"
          onClick={() => trackPhoneClick("+916378365775", "booking_page")}
        >
          <Phone size={16} /> Call Now
        </Button>
        <Button
          href="https://wa.me/916378365775"
          target="_blank"
          variant="ghost"
          size="md"
          className="border border-primary-200"
          onClick={() => trackWhatsAppClick("916378365775", "booking_page")}
        >
          <i className="fab fa-whatsapp" aria-hidden="true" /> WhatsApp
        </Button>
      </div>
    </div>
  );
}
