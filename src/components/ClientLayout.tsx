"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Marquee from "./Marquee";
import {
  trackPhoneClick,
  trackWhatsAppClick,
  trackEmailClick,
  trackSocialClick,
} from "../utils/gtm";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "The Story", href: "/about" },
  { label: "Jodhpur", href: "/jodhpur" },
  { label: "Udaipur", href: "/udaipur" },
  { label: "The Folio", href: "/#Rooms" },
  { label: "Contact", href: "/#Contact" },
];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    return pathname === href;
  };

  return (
    <>
      <div className="ss-nav">
        <Marquee
          items={[
            "Rooftop dining under the stars",
            "Heritage stays in Jodhpur & Udaipur",
            "Free breakfast on direct bookings",
            "Fort & lake views from every rooftop",
          ]}
        />

        <nav className={`ss-navbar ${scrolled ? "is-scrolled" : ""}`} aria-label="Primary">
          <div className="container ss-navbar-inner">
            <Link href="/" className="ss-brand" aria-label="Storica Stays home">
              <span className="ss-brand-mark" aria-hidden="true">
                S
              </span>
              <span>
                <span className="ss-brand-name">Storica</span>
                <span className="ss-brand-sub">Stays · Heritage</span>
              </span>
            </Link>

            <div className="ss-nav-links">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`ss-nav-link ${isActive(link.href) ? "is-active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="ss-nav-cta d-flex align-items-center gap-3">
              <Link
                href="/book"
                className="ss-btn ss-btn-primary ss-btn-sm"
                data-gtm-event="booking_click"
                data-gtm-source="navbar"
              >
                Book a Stay
              </Link>
              <button
                type="button"
                className={`ss-burger ${menuOpen ? "is-open" : ""}`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </nav>

        <div className={`ss-drawer ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true">
          <button
            type="button"
            className="ss-drawer-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="ss-drawer-link"
              style={{ transitionDelay: menuOpen ? `${120 + i * 60}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <small>0{i + 1}</small>
            </Link>
          ))}
          <div className="ss-drawer-foot">
            <a href="mailto:info@storicastays.com">info@storicastays.com</a>
            <span className="mx-2">·</span>
            <a href="tel:+916378365775">+91 63783 65775</a>
          </div>
        </div>
      </div>

      {children}

      <footer className="ss-footer">
        <div className="container ss-footer-inner">
          <div className="ss-footer-grid">
            <div className="ss-footer-about">
              <Link href="/" className="ss-brand">
                <span className="ss-brand-mark" aria-hidden="true">
                  S
                </span>
                <span>
                  <span className="ss-brand-name" style={{ color: "#fff" }}>
                    Storica
                  </span>
                  <span className="ss-brand-sub">Stays · Heritage</span>
                </span>
              </Link>
              <p>
                Heritage boutique stays in the Blue City of Jodhpur and the City of Lakes,
                Udaipur. Sleep inside history — with rooftop dining over forts and lakes.
              </p>
              <div className="ss-footer-socials">
                <a
                  href="https://www.instagram.com/storicastays"
                  title="Instagram"
                  aria-label="Instagram"
                  onClick={() => trackSocialClick("instagram", "footer")}
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  href="https://wa.me/916378365775"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  onClick={() => trackWhatsAppClick("9163xxxxx775", "footer")}
                >
                  <i className="fab fa-whatsapp" />
                </a>
              </div>
            </div>

            <div>
              <h6 className="ss-footer-h">Explore</h6>
              <Link className="ss-footer-link" href="/about">
                The Story
              </Link>
              <Link className="ss-footer-link" href="/jodhpur">
                Jodhpur
              </Link>
              <Link className="ss-footer-link" href="/udaipur">
                Udaipur
              </Link>
              <Link className="ss-footer-link" href="/#Rooms">
                The Folio
              </Link>
              <Link className="ss-footer-link" href="/book">
                Book a Stay
              </Link>
            </div>

            <div>
              <h6 className="ss-footer-h">Reach Us</h6>
              <ul className="ss-footer-contact list-unstyled">
                <li>
                  <i className="fa fa-map-marker-alt" />
                  <span>
                    Jodhpur &amp; Udaipur,
                    <br />
                    Rajasthan, India
                  </span>
                </li>
                <li>
                  <i className="fa fa-phone-alt" />
                  <a
                    href="tel:+916378365775"
                    onClick={() => trackPhoneClick("9163xxxxx775", "footer")}
                  >
                    +91 63783 65775
                  </a>
                </li>
                <li>
                  <i className="fa fa-envelope" />
                  <a
                    href="mailto:info@storicastays.com"
                    onClick={() => trackEmailClick("info@storicastays.com", "footer")}
                  >
                    info@storicastays.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="ss-footer-h">Two Cities</h6>
              <div className="ss-footer-city">
                <span className="city-pin">
                  <i className="fa fa-fort-awesome" />
                </span>
                <div>
                  <b>Jodhpur</b>
                  <small>26.298° N · 73.020° E</small>
                </div>
              </div>
              <div className="ss-footer-city">
                <span className="city-pin">
                  <i className="fa fa-water" />
                </span>
                <div>
                  <b>Udaipur</b>
                  <small>24.580° N · 73.679° E</small>
                </div>
              </div>
              <div className="ss-footer-city">
                <span className="city-pin">
                  <i className="fa fa-utensils" />
                </span>
                <div>
                  <b>Rooftop Dining</b>
                  <small>Fort &amp; lake views</small>
                </div>
              </div>
            </div>
          </div>

          <div className="ss-footer-bottom">
            <span>
              © {new Date().getFullYear()}{" "}
              <Link href="/">Storica Stays</Link>, All Rights Reserved.
            </span>
            <span>
              Crafted with <i className="fa fa-heart" style={{ color: "var(--terracotta)" }} /> in
              Rajasthan
            </span>
          </div>
        </div>
      </footer>

      <div className="ss-float">
        <a
          href="https://wa.me/916378365775"
          target="_blank"
          rel="noopener noreferrer"
          className="ss-float-btn ss-float-btn--whatsapp"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
          onClick={() => trackWhatsAppClick("9163xxxxx775", "floating")}
        >
          <i className="fab fa-whatsapp" />
        </a>
        <a
          href="tel:+916378365775"
          className="ss-float-btn ss-float-btn--call"
          title="Call Us"
          aria-label="Call Us"
          onClick={() => trackPhoneClick("+9163xxxxx775", "floating")}
        >
          <i className="fa fa-phone-alt" />
        </a>
      </div>
    </>
  );
}
