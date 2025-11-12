import { component$ } from "@builder.io/qwik";

export default component$<{ value: number }>(({ value }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = Array.from({ length: 5 }).map((_, i) => {
    const filled = i < full || (i === full && half);
    const fill =
      i < full
        ? "currentColor"
        : i === full && half
          ? "url(#half)"
          : "none";
    return (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{ color: "var(--color-secondary-600)" }}
      >
        {half && i === full && (
          <defs>
            <linearGradient id="half" x1="0" x2="1">
              <stop offset="50%" stop-color="currentColor" />
              <stop offset="50%" stop-color="transparent" />
            </linearGradient>
          </defs>
        )}
        <path
          d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          stroke="currentColor"
          fill={filled ? fill : "none"}
        />
      </svg>
    );
  });

  return (
    <span aria-label={`Rating ${value} out of 5`} title={`${value}/5`} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
      {stars} <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>{value.toFixed(1)}</span>
    </span>
  );
});
