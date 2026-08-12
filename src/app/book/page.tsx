import type { Metadata } from "next";
import { ShieldCheck, Clock, RotateCcw } from "lucide-react";
import BookingContact from "../../components/BookingContact";
import BookingIframe from "../../components/BookingIframe";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import Card from "../../components/ui/Card";

export const metadata: Metadata = {
  title: "Book Your Stay - Storica Stays Heritage Hostel",
  description: "Book your room at Storica Stays heritage hostel in Jodhpur. Experience authentic heritage accommodation with modern amenities.",
};

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Secure Booking",
    description: "Your payment and personal information are protected with industry-standard security.",
  },
  {
    icon: Clock,
    title: "Instant Confirmation",
    description: "Receive immediate booking confirmation via email and SMS after successful payment.",
  },
  {
    icon: RotateCcw,
    title: "Flexible Cancellation",
    description: "Easy cancellation and modification options available subject to our cancellation policy.",
  },
];

export default function BookPage() {
  return (
    <div className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Reservation"
          title={<>Book Your <span className="text-primary-600">Room</span></>}
        />
        <p className="mt-4 mx-auto max-w-xl text-center font-sans text-sand-600">
          Reserve your stay at Storica Stays and experience the authentic heritage of Jodhpur
          and Udaipur. Our booking system is secure and easy to use.
        </p>

        <div className="mt-10 relative rounded-2xl overflow-hidden border border-sand-200 bg-sand-50 shadow-[0_4px_24px_rgba(27,27,30,0.06)]">
          <div
            id="iframe-loader"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-sand-50/95"
          >
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
            <p className="font-sans text-sm text-sand-600">Loading secure booking system...</p>
          </div>

          <BookingIframe
            src="https://bookings.asiatech.in/?page=8296&type=website"
            width="100%"
            height="1000"
            title="Storica Stays Booking System"
            style={{
              minHeight: '800px',
              border: 'none',
              opacity: 0,
              transition: 'opacity 0.3s ease',
            }}
            allow="payment; fullscreen"
            loading="lazy"
          />
        </div>

        <BookingContact />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="p-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 font-display text-lg text-ink-900">{title}</h3>
              <p className="mt-2 font-sans text-sm text-sand-600 leading-relaxed">{description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
