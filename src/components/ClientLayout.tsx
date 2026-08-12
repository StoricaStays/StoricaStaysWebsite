'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick, trackEmailClick, trackSocialClick } from "../utils/gtm";
import Container from "./ui/Container";
import Button from "./ui/Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/jodhpur", label: "Jodhpur" },
  { href: "/udaipur", label: "Udaipur" },
  { href: "/#Contact", label: "Contact" },
];

const PHONE_DISPLAY = "+91 6378365775";
const PHONE_TEL = "+916378365775";
const PHONE_TRACKING_ID = "9163xxxxx775";
const WHATSAPP_URL = "https://wa.me/916378365775";
const EMAIL = "info@storicastays.com";
const INSTAGRAM_URL = "https://www.instagram.com/storicastays";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-sand-200">
        <Container className="flex items-center justify-between h-20">
          <Link href="/" className="font-display text-2xl font-medium text-ink-900 shrink-0">
            Storica <span className="text-primary-600">Stays</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-sans text-sm font-medium text-ink-900">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackPhoneClick(PHONE_TRACKING_ID, "header")}
              title="Call us"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 text-ink-900 hover:border-primary-600 hover:text-primary-600 transition-colors"
            >
              <Phone size={16} strokeWidth={2} />
            </a>
            <a
              href={WHATSAPP_URL}
              onClick={() => trackWhatsAppClick(PHONE_TRACKING_ID, "header")}
              title="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 text-ink-900 hover:border-primary-600 hover:text-primary-600 transition-colors"
            >
              <i className="fab fa-whatsapp" aria-hidden="true" />
            </a>
            <Button href="/book" size="md">Book Now</Button>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-ink-900"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>

        {menuOpen && (
          <div className="lg:hidden border-t border-sand-200 bg-white">
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-base font-medium text-ink-900 py-3 border-b border-sand-100 last:border-none"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/book" size="md" className="mt-4 w-full" onClick={() => setMenuOpen(false)}>
                Book Now
              </Button>
            </Container>
          </div>
        )}
      </header>

      {children}

      {/* Footer */}
      <footer className="bg-ink-900 text-sand-200">
        <Container className="py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl text-white">
              Storica <span className="text-primary-300">Stays</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-300">
              Heritage boutique stays and rooftop restaurants in Jodhpur, the Blue City,
              and Udaipur, the City of Lakes. Your gateway to Rajasthan&apos;s rich culture and history.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={INSTAGRAM_URL}
                onClick={() => trackSocialClick("instagram", "footer")}
                title="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:border-primary-400 hover:text-primary-300 transition-colors"
              >
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_URL}
                onClick={() => trackWhatsAppClick(PHONE_TRACKING_ID, "footer")}
                title="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:border-primary-400 hover:text-primary-300 transition-colors"
              >
                <i className="fab fa-whatsapp" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h6 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-primary-300 mb-4">
              Contact
            </h6>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary-300" />
                <a href={`tel:${PHONE_TEL}`} onClick={() => trackPhoneClick(PHONE_TRACKING_ID, "footer")}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary-300" />
                <a href={`mailto:${EMAIL}`} onClick={() => trackEmailClick(EMAIL, "footer")}>
                  {EMAIL}
                </a>
              </li>
              <li className="text-sand-300">Jodhpur & Udaipur, Rajasthan</li>
            </ul>
          </div>

          <div>
            <h6 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-primary-300 mb-4">
              Explore
            </h6>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/jodhpur" className="hover:text-white">Jodhpur Property</Link></li>
              <li><Link href="/udaipur" className="hover:text-white">Udaipur Property</Link></li>
              <li><Link href="/book" className="hover:text-white">Book Now</Link></li>
            </ul>
          </div>
        </Container>

        <div className="border-t border-white/10">
          <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-sand-400">
            <p>&copy; Storica Stays. All rights reserved.</p>
            <p>Jodhpur &middot; Udaipur, Rajasthan</p>
          </Container>
        </div>
      </footer>

      {/* Mobile sticky contact bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-sand-200 shadow-[0_-4px_16px_rgba(27,27,30,0.08)]">
        <div className="grid grid-cols-3 divide-x divide-sand-200 pb-[env(safe-area-inset-bottom)]">
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => trackPhoneClick(PHONE_TRACKING_ID, "mobile_sticky_bar")}
            className="flex flex-col items-center justify-center gap-1 py-3 text-ink-900"
          >
            <Phone size={18} />
            <span className="text-xs font-medium">Call</span>
          </a>
          <a
            href={WHATSAPP_URL}
            onClick={() => trackWhatsAppClick(PHONE_TRACKING_ID, "mobile_sticky_bar")}
            className="flex flex-col items-center justify-center gap-1 py-3 text-ink-900"
          >
            <i className="fab fa-whatsapp text-lg" aria-hidden="true" />
            <span className="text-xs font-medium">WhatsApp</span>
          </a>
          <Link
            href="/book"
            className="flex flex-col items-center justify-center gap-1 py-3 bg-primary-600 text-white"
          >
            <span className="text-xs font-semibold uppercase tracking-wide">Book Now</span>
          </Link>
        </div>
      </div>

      {/* Spacer so mobile sticky bar never overlaps page content */}
      <div className="lg:hidden h-16" aria-hidden="true" />
    </>
  );
}
