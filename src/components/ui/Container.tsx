import { cn } from "@/lib/cn";

interface ContainerProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
