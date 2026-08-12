interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  revealDelay?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  revealDelay,
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div
      className={`${center ? "section-head-center" : "section-head-left"}`}
      data-reveal
      style={revealDelay ? { transitionDelay: revealDelay } : undefined}
    >
      <span className={`section-eyebrow ${center ? "center" : ""}`}>{eyebrow}</span>
      <h2 className={`section-title ${center ? "center" : ""}`}>{title}</h2>
      {lead && <p className={`section-lead ${center ? "center" : ""}`}>{lead}</p>}
    </div>
  );
}