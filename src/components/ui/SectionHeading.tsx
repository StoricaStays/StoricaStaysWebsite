import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  readonly eyebrow: string;
  readonly title: React.ReactNode;
  readonly align?: "left" | "center";
  readonly className?: string;
  readonly light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <span
        className={cn(
          "inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase",
          light ? "text-primary-200" : "text-primary-600"
        )}
      >
        <span className="h-px w-6 bg-current" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight",
          light ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
