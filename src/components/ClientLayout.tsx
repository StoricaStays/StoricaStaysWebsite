'use client';

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  trackPhoneClick,
  trackWhatsAppClick,
  trackEmailClick,
  trackSocialClick,
} from "../utils/gtm";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Navbar shrink on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 40) {
        navRef.current.classList.add("scrolled");
      } else {
        navRef.current.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal-on-scroll (replaces WOW.js) — re-runs on every route change + new DOM
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const observe = () => {
      const targets = document.querySelectorAll("[data-reveal]:not(.revealed)");
      if (targets.length === 0) return;

      if (!("IntersectionObserver" in window)) {
        targets.forEach((t) => t.classList.add("revealed"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add("revealed");
              observer?.unobserve(el);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      targets.forEach((t) => observer!.observe(t));
    };

    observe();

    // Watch for newly added [data-reveal] nodes (client-side page transitions)
    const mo = new MutationObserver(() => {
      // Only re-observe if there are non-revealed targets
      if (document.querySelectorAll("[data-reveal]:not(.revealed)").length > 0) {
        observe();
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Topbar */}
      <div className="site-topbar d-none d-md-block">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <div className="d-flex align-items-center gap-4">
            <span>
              <i className="fa fa-envelope text-brass me-2"></i>
              <a
                href="mailto:info@storicastays.com"
                onClick={() => trackEmailClick("info@storicastays.com", "topbar")}
              >
                info@storicastays.com
              </a>
            </span>
            <span>
              <i className="fa fa-phone-alt text-brass me-2"></i>
              <a
                href="tel:+91 6378365775"
                onClick={() => trackPhoneClick("9163xxxxx775", "topbar")}
              >
                +91 6378365775
              </a>
            </span>
          </div>
          <div className="social d-flex align-items-center gap-2">
            <span className="me-2 text-uppercase" style={{ fontSize: "0.68rem", letterSpacing: "0.2em" }}>
              Follow
            </span>
            <a
              href="https://www.instagram.com/storicastays"
              title="Instagram"
              aria-label="Instagram"
              onClick={() => trackSocialClick("instagram", "topbar")}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/916378365775"
              title="WhatsApp"
              aria-label="WhatsApp"
              onClick={() => trackWhatsAppClick("9163xxxxx775", "topbar")}
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav ref={navRef} className="site-nav navbar navbar-expand-lg navbar-dark sticky-top py-2">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold">
            Storica <span className="accent">Stays</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/jodhpur" className={`nav-link ${isActive("/jodhpur") ? "active" : ""}`}>
                  Jodhpur
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/udaipur" className={`nav-link ${isActive("/udaipur") ? "active" : ""}`}>
                  Udaipur
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/restaurant" className={`nav-link ${isActive("/restaurant") ? "active" : ""}`}>
                  Restaurant
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/gallery" className={`nav-link ${isActive("/gallery") ? "active" : ""}`}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#contact" className={`nav-link ${isActive("/#contact") ? "active" : ""}`}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/book" className="nav-link nav-book">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <Link href="/" className="brand">
                Storica <span className="accent">Stays</span>
              </Link>
              <p className="mt-3 mb-4">
                Modern luxury in the heart of Rajasthan&apos;s historic cities. Heritage
                rooms, cozy dorms and a rooftop to remember — in Jodhpur and Udaipur.
              </p>
              <div className="social d-flex">
                <a
                  href="https://www.instagram.com/storicastays"
                  title="Instagram"
                  aria-label="Instagram"
                  onClick={() => trackSocialClick("instagram", "footer")}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://wa.me/916378365775"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  onClick={() => trackWhatsAppClick("9163xxxxx775", "footer")}
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <h6>Explore</h6>
              <Link href="/about" className="f-link">About Us</Link>
              <Link href="/jodhpur" className="f-link">Jodhpur</Link>
              <Link href="/udaipur" className="f-link">Udaipur</Link>
              <Link href="/restaurant" className="f-link">Restaurant</Link>
              <Link href="/gallery" className="f-link">Gallery</Link>
              <Link href="/book" className="f-link">Book Now</Link>
            </div>

            <div className="col-lg-2 col-md-6">
              <h6>Contact</h6>
              <p className="mb-2">Jodhpur &amp; Udaipur</p>
              <p className="mb-2">
                <a
                  href="tel:+91 6378365775"
                  onClick={() => trackPhoneClick("9163xxxxx775", "footer")}
                >
                  +91 6378365775
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="mailto:info@storicastays.com"
                  onClick={() => trackEmailClick("info@storicastays.com", "footer")}
                >
                  info@storicastays.com
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="https://wa.me/916378365775"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("9163xxxxx775", "footer")}
                >
                  WhatsApp us
                </a>
              </p>
            </div>

            <div className="col-lg-4 col-md-6">
              <h6>Two Cities, One Story</h6>
              <p>
                Storica Stays is a collection of thoughtfully restored heritage
                properties. Each one pairs old-world architecture with the comforts of
                a modern boutique stay.
              </p>
              <div className="d-flex gap-2 flex-wrap">
                <Link href="/book" className="btn btn-brass">
                  Book a Room
                </Link>
                <Link href="/restaurant" className="btn btn-ghost-light">
                  Rooftop Dining
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center w-100">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Storica Stays. All rights reserved.</span>
            <span>Crafted with heritage &amp; hospitality.</span>
          </div>
        </div>
      </footer>

      {/* Floating action buttons */}
      <div className="fab-stack">
        <a
          href="https://wa.me/916378365775?text=Hi%20Storica%20Stays%2C%20I%27d%20like%20to%20make%20a%20booking."
          target="_blank"
          rel="noopener noreferrer"
          className="fab fab-whatsapp"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
          onClick={() => trackWhatsAppClick("9163xxxxx775", "floating")}
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          href="tel:+916378365775"
          className="fab fab-call"
          title="Call Us"
          aria-label="Call us"
          onClick={() => trackPhoneClick("+9163xxxxx775", "floating")}
        >
          <i className="fa fa-phone-alt"></i>
        </a>
      </div>
    </>
  );
}