import { cn } from "@/lib/utils";

export function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all cursor-pointer";

  const variants = {
    default: "bg-violet-600 hover:bg-violet-700 text-white",
    outline: "border border-white/20 text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/10",
  };

  const sizes = {
    default: "px-4 py-2",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={cn(
        base,
        variants[variant] || variants.default,
        sizes[size] || sizes.default,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}