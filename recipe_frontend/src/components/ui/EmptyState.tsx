import { component$, Slot } from "@builder.io/qwik";

export default component$<{ title: string; subtitle?: string }>(
  ({ title, subtitle }) => {
    return (
      <section
        class="panel"
        role="status"
        aria-live="polite"
        style={{
          textAlign: "center",
          background:
            "linear-gradient(180deg, rgba(37,99,235,0.06), rgba(255,255,255,0.9))",
        }}
      >
        <h3 style={{ marginBottom: "0.25rem" }}>{title}</h3>
        {subtitle && (
          <p style={{ marginTop: 0, color: "var(--color-muted)" }}>
            {subtitle}
          </p>
        )}
        <div style={{ marginTop: "0.5rem" }}>
          <Slot />
        </div>
      </section>
    );
  },
);
