export function TechnologyBadges({ technologies, centered = false, responsive = false, mobileCentered = false, centerUntilDesktop = false }) {
  const alignment = responsive
    ? "justify-center md:justify-start"
    : centerUntilDesktop
      ? "justify-center lg:justify-start"
    : mobileCentered
      ? "justify-center sm:justify-start"
    : centered
      ? "justify-center"
      : "justify-start";

  return (
    <div
      className={`mt-3 flex flex-wrap gap-2 ${alignment}`}
      aria-label="Technologies"
    >
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded border border-gray-300 px-2 py-1 text-[11px] font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300 sm:text-xs"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}
