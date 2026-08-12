import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CityPanelProps {
  readonly href: string;
  readonly image: string;
  readonly city: string;
  readonly tagline: string;
}

function CityPanel({ href, image, city, tagline }: CityPanelProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-[420px] sm:h-[480px] items-end overflow-hidden"
    >
      <img
        src={image}
        alt={`Storica Stays ${city}`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent" />
      <div className="relative p-8 sm:p-10 text-white">
        <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-primary-200">
          {tagline}
        </span>
        <h3 className="mt-2 font-display text-3xl sm:text-4xl font-medium">{city}</h3>
        <span className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-medium border-b border-white/40 group-hover:border-white pb-1 transition-colors">
          Explore {city}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function CitySwitcher() {
  return (
    <section className="grid sm:grid-cols-2">
      <CityPanel
        href="/jodhpur"
        image="/img/General/CKC03844-HDR.jpg"
        city="Jodhpur"
        tagline="The Blue City"
      />
      <CityPanel
        href="/udaipur"
        image="/img/udaipur/property/property (1).jpg"
        city="Udaipur"
        tagline="The City of Lakes"
      />
    </section>
  );
}
