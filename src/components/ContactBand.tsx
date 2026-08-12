'use client';

import { Mail, Phone, MessageCircle } from 'lucide-react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import { trackPhoneClick, trackWhatsAppClick, trackEmailClick } from '../utils/gtm';

interface ContactBandProps {
  readonly mapSrc: string;
  readonly trackingSource: string;
}

export default function ContactBand({ mapSrc, trackingSource }: ContactBandProps) {
  return (
    <div className="py-20 sm:py-28 bg-sand-50" id="Contact">
      <Container>
        <SectionHeading
          eyebrow="Contact Us"
          title={<><span className="text-primary-600">Contact</span> For Any Query</>}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(27,27,30,0.08)]">
            <iframe
              src={mapSrc}
              className="w-full h-full min-h-[320px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Storica Stays Location Map"
            ></iframe>
          </div>

          <div className="grid gap-4 content-start">
            <a
              href="mailto:info@storicastays.com"
              onClick={() => trackEmailClick("info@storicastays.com", trackingSource)}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(27,27,30,0.06)] hover:shadow-[0_4px_24px_rgba(27,27,30,0.12)] transition-shadow"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <Mail size={18} />
              </span>
              <div>
                <p className="font-sans text-xs uppercase tracking-wide text-sand-500">Email us</p>
                <p className="font-sans text-sm font-semibold text-ink-900">info@storicastays.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/916378365775"
              onClick={() => trackWhatsAppClick("9163xxxxx775", trackingSource)}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(27,27,30,0.06)] hover:shadow-[0_4px_24px_rgba(27,27,30,0.12)] transition-shadow"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <MessageCircle size={18} />
              </span>
              <div>
                <p className="font-sans text-xs uppercase tracking-wide text-sand-500">WhatsApp</p>
                <p className="font-sans text-sm font-semibold text-ink-900">+91 6378365775</p>
              </div>
            </a>

            <a
              href="tel:+916378365775"
              onClick={() => trackPhoneClick("9163xxxxx775", trackingSource)}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(27,27,30,0.06)] hover:shadow-[0_4px_24px_rgba(27,27,30,0.12)] transition-shadow"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <Phone size={18} />
              </span>
              <div>
                <p className="font-sans text-xs uppercase tracking-wide text-sand-500">Call us</p>
                <p className="font-sans text-sm font-semibold text-ink-900">+91 6378365775</p>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
