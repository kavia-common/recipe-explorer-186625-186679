import { component$, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/ui/Header";
import RecipeGrid from "~/components/RecipeGrid";
import SkeletonCard from "~/components/ui/SkeletonCard";
import EmptyState from "~/components/ui/EmptyState";
import { getRecipes, type RecipeSummary } from "~/services/recipe-service";

// PUBLIC_INTERFACE
export default component$(() => {
  const query = useSignal("");
  const loading = useSignal(true);
  const error = useSignal<string | null>(null);
  const recipes = useSignal<RecipeSummary[]>([]);

  useTask$(async ({ track }) => {
    track(() => query.value);
    loading.value = true;
    error.value = null;
    try {
      const data = await getRecipes(query.value.trim() || undefined);
      recipes.value = data;
    } catch (e: any) {
      error.value = e?.message ?? "Failed to load recipes";
    } finally {
      loading.value = false;
    }
  });

  // Keyboard shortcut: focus search on "/"
  // Use useVisibleTask$ so it only runs in the browser (avoids SSR window/document access)
  useVisibleTask$(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/") {
        const el = document.getElementById("search");
        if (el) {
          e.preventDefault();
          (el as HTMLInputElement).focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <>
      <Header value={query.value} onInput$={(v) => (query.value = v)} />
      <main class="container" style={{ paddingBlock: "1rem 2rem" }}>
        <section aria-label="Intro" style={{ marginTop: "0.75rem" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", letterSpacing: "-0.02em" }}>
            Explore delicious recipes
          </h1>
          <p style={{ color: "var(--color-muted)", marginTop: "0.25rem" }}>
            Use the search to find recipes by title or ingredient. Tip: press
            <span class="kbd" style={{ marginInline: "0.25rem" }}>/</span> to focus search.
          </p>
        </section>

        {loading.value && (
          <section aria-label="Loading recipes" class="grid" style={{ marginTop: "1rem" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </section>
        )}

        {!loading.value && error.value && (
          <EmptyState title="Something went wrong" subtitle={error.value}>
            <button
              class="btn"
              type="button"
              onClick$={() => {
                // Trigger re-fetch by toggling a small change
                query.value = query.value + " ";
                query.value = query.value.trim();
              }}
            >
              Retry
            </button>
          </EmptyState>
        )}

        {!loading.value && !error.value && recipes.value.length === 0 && (
          <EmptyState
            title="No recipes found"
            subtitle="Try adjusting your search terms or clearing the search."
          >
            <button class="btn" type="button" onClick$={() => (query.value = "")}>
              Clear Search
            </button>
          </EmptyState>
        )}

        {!loading.value && !error.value && recipes.value.length > 0 && (
          <RecipeGrid recipes={recipes.value} />
        )}
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Recipe Explorer",
  meta: [
    {
      name: "description",
      content:
        "Browse, search, and view detailed recipes in a modern, responsive app.",
    },
  ],
};
