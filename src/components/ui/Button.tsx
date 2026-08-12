import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly className?: string;
  readonly children: React.ReactNode;
}

interface ButtonAsLink extends BaseProps {
  readonly href: string;
  readonly onClick?: () => void;
  readonly target?: string;
}

interface ButtonAsButton extends BaseProps {
  readonly href?: undefined;
  readonly onClick?: () => void;
  readonly type?: "button" | "submit";
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 border border-primary-600 hover:border-primary-700",
  outline:
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-primary-700",
  ghost:
    "bg-transparent text-primary-600 border border-transparent hover:bg-primary-50",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-wide transition-colors duration-200 whitespace-nowrap";

export default function Button({ variant = "primary", size = "md", className, children, ...rest }: ButtonProps) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if ("href" in rest && rest.href) {
    const { href, onClick, target } = rest;
    return (
      <Link href={href} onClick={onClick} target={target} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button" } = rest as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
