interface ArchFrameProps {
  src: string;
  alt: string;
  ratio?: "portrait" | "tall" | "square" | "wide" | "hero";
  duotone?: boolean;
  className?: string;
  caption?: string;
  children?: React.ReactNode;
}

export default function ArchFrame({
  src,
  alt,
  ratio = "portrait",
  duotone = false,
  className = "",
  caption,
  children,
}: ArchFrameProps) {
  return (
    <div
      className={`arch arch-ratio-${ratio} ${duotone ? "duotone" : ""} ${className}`}
    >
      <img src={src} alt={alt} className="arch-media" loading="lazy" />
      {caption ? <span className="ss-story-caption">{caption}</span> : null}
      {children}
    </div>
  );
}
