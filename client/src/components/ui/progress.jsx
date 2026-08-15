import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "@/lib/utils";

function Progress({
  className,
  value = 0,
  ...props
}) {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      className={cn("w-full", className)}
      {...props}
    >
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  );
}

function ProgressTrack({
  className,
  ...props
}) {
  return (
    <ProgressPrimitive.Track
      data-slot="progress-track"
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full",
        "bg-white/10",
        className
      )}
      {...props}
    />
  );
}

function ProgressIndicator({
  className,
  ...props
}) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(
        "h-full rounded-full",
        "bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500",
        "transition-all duration-500 ease-out",
        className
      )}
      {...props}
    />
  );
}

function ProgressLabel({
  className,
  ...props
}) {
  return (
    <ProgressPrimitive.Label
      data-slot="progress-label"
      className={cn(
        "text-sm font-medium text-white",
        className
      )}
      {...props}
    />
  );
}

function ProgressValue({
  className,
  ...props
}) {
  return (
    <ProgressPrimitive.Value
      data-slot="progress-value"
      className={cn(
        "ml-auto text-sm font-semibold",
        "text-violet-400 tabular-nums",
        className
      )}
      {...props}
    />
  );
}

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
};