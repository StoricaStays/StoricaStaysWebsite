import JaaliPattern from "./JaaliPattern";
import Link from "next/link";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  image?: string;
  crumb: string;
}

export default function PageHeader({ eyebrow, title, sub, image, crumb }: PageHeaderProps) {
  return (
    <section className="ss-page-header">
      {image ? (
        <div className="ss-hero-media">
          <img src={image} alt="" aria-hidden="true" />
        </div>
      ) : null}
      <div className="ss-hero-overlay" />
      <JaaliPattern variant="light" absolute />
      <div className="container ss-page-header-inner">
        <p className="ss-hero-kicker">{eyebrow}</p>
        <h1>{title}</h1>
        {sub ? <p>{sub}</p> : null}
        <nav className="ss-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">✦</span>
          <span>{crumb}</span>
        </nav>
      </div>
    </section>
  );
}
