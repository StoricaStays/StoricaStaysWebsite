import { cn } from "@/lib/cn";

interface CardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white shadow-[0_4px_24px_rgba(27,27,30,0.08)] overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
