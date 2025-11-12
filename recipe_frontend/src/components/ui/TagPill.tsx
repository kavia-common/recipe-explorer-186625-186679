import { component$ } from "@builder.io/qwik";

export default component$<{ text: string; variant?: "primary" | "secondary" }>(
  ({ text, variant = "primary" }) => {
    return (
      <span class={`pill ${variant === "secondary" ? "secondary" : ""}`}>
        {text}
      </span>
    );
  },
);
