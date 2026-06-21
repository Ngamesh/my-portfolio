export function ProjectMetrics({ metrics, centered = false, mobileCentered = false, centerUntilDesktop = false }) {
  const alignment = centerUntilDesktop
    ? "text-center lg:text-left"
    : mobileCentered
    ? "text-center sm:text-left"
    : centered
      ? "text-center"
      : "text-left";

  return (
    <div
      className={`mt-3 mb-1.5 text-[0.7875rem] font-semibold text-black/70 dark:text-white/70 sm:mb-0 sm:text-sm ${alignment}`}
      aria-label="Project scope"
    >
      {metrics.join(" • ")}
    </div>
  );
}
