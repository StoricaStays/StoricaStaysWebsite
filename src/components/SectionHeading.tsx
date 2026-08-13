interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`ss-section-head ${center ? "is-center" : ""} ${dark ? "is-dark" : ""} ${className}`}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="ss-h2">{title}</h2>
      {sub ? <p className="ss-lead">{sub}</p> : null}
    </div>
  );
}
