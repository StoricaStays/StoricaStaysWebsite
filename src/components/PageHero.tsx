import Link from 'next/link';

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  description?: string;
  image?: string;
  crumbParent?: string;
  crumbParentHref?: string;
}

export default function PageHero({
  title,
  eyebrow,
  description,
  image,
  crumbParent = 'Home',
  crumbParentHref = '/',
}: PageHeroProps) {
  return (
    <section className="page-hero">
      {image && <img src={image} alt="" className="hero-bg" loading="lazy" aria-hidden="true" />}
      <div className="container">
        <div data-reveal>
          {eyebrow && <div className="hero-eyebrow">{eyebrow}</div>}
          <h1>{title}</h1>
          {description && <p style={{ maxWidth: '52ch' }}>{description}</p>}
          <div className="breadcrumb" aria-label="breadcrumb">
            <Link href={crumbParentHref}>{crumbParent}</Link>
            <span className="sep">/</span>
            <span className="current">{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}