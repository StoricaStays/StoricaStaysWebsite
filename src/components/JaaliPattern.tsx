interface JaaliPatternProps {
  variant?: "default" | "light" | "soft";
  className?: string;
  /** Fills the nearest positioned ancestor */
  absolute?: boolean;
}

export default function JaaliPattern({
  variant = "default",
  className = "",
  absolute = false,
}: JaaliPatternProps) {
  const variantClass =
    variant === "light" ? "jaali-bg--light" : variant === "soft" ? "jaali-bg--soft" : "";
  return (
    <div
      aria-hidden="true"
      className={`jaali-bg ${variantClass} ${className}${absolute ? " position-absolute top-0 start-0 w-100 h-100" : ""}`}
    />
  );
}
