
import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ...props
}) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-lg",
        "border border-white/10 bg-white/[0.04]",
        "px-3 text-sm text-white",
        "placeholder:text-gray-500",
        "outline-none",
        "transition-all duration-150",
        "hover:border-white/20",
        "focus:border-violet-500/60",
        "focus:ring-2 focus:ring-violet-500/10",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "file:border-0 file:bg-transparent",
        "file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  );
}

export { Input };

