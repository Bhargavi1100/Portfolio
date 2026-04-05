import { cn } from "@/lib/cn";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  from?: string;
  to?: string;
}

function GradientText({
  className,
  from = "from-blue-600",
  to = "to-violet-600",
  children,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        from,
        to,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { GradientText };
