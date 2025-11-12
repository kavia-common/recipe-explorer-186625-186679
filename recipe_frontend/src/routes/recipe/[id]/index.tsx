import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link, type DocumentHead, useLocation } from "@builder.io/qwik-city";
import Header from "~/components/ui/Header";
import Rating from "~/components/ui/Rating";
import TagPill from "~/components/ui/TagPill";
import EmptyState from "~/components/ui/EmptyState";
import { getRecipeById, type Recipe } from "~/services/recipe-service";

// PUBLIC_INTERFACE
export default component$(() => {
  const loc = useLocation();
  const id = loc.params["id"];
  const recipe = useSignal<Recipe | null>(null);
  const loading = useSignal(true);
  const error = useSignal<string | null>(null);
  const search = useSignal("");

  useTask$(async () => {
    loading.value = true;
    error.value = null;
    try {
      recipe.value = await getRecipeById(id);
    } catch (e: any) {
      error.value = e?.message ?? "Failed to load recipe";
    } finally {
      loading.value = false;
    }
  });

  return (
    <>
      <Header value={search.value} onInput$={(v) => (search.value = v)} />
      <main class="container" style={{ paddingBlock: "1rem 2rem" }}>
        <nav aria-label="Breadcrumb">
          <Link href="/" aria-label="Back to recipes" class="pill" style={{ textDecoration: "none" }}>
            ← Back
          </Link>
        </nav>

        {loading.value && (
          <section class="hero" aria-label="Loading recipe">
            <div class="hero-img">
              <div class="skeleton" style="width:100%;aspect-ratio:4/3;"></div>
            </div>
            <div class="panel">
              <div class="skeleton" style="width:60%;height:22px;margin-bottom:12px"></div>
              <div class="skeleton" style="width:90%;height:12px;margin-bottom:8px"></div>
              <div class="skeleton" style="width:80%;height:12px;"></div>
            </div>
          </section>
        )}

        {!loading.value && error.value && (
          <EmptyState title="Could not load this recipe" subtitle={error.value}>
            <Link href="/" class="btn">Go Home</Link>
          </EmptyState>
        )}

        {!loading.value && !error.value && recipe.value && (
          <>
            <section class="hero" aria-label="Recipe hero">
              <div class="hero-img" role="img" aria-label={`${recipe.value.title} hero image`}>
                <img src={recipe.value.image} alt={recipe.value.title} width={900} height={675} />
              </div>
              <div>
                <h1 style={{ marginTop: 0, marginBottom: "0.25rem" }}>
                  {recipe.value.title}
                </h1>
                <div class="meta" style={{ marginBottom: "0.5rem" }}>
                  <span class="pill">⏱ {recipe.value.cookTimeMins}m</span>
                  <span class="pill secondary">🍽 {recipe.value.servings} servings</span>
                  <Rating value={recipe.value.rating} />
                </div>
                <p style={{ color: "var(--color-muted)" }}>
                  {recipe.value.description}
                </p>
                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  {recipe.value.tags.map((t: string) => (
                    <TagPill key={t} text={t} />
                  ))}
                </div>
              </div>
            </section>

            <section style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
              <div class="panel" aria-labelledby="ingredients-title">
                <h3 id="ingredients-title">Ingredients</h3>
                <ul>
                  {recipe.value.ingredients.map((ing: { name: string; amount?: string }, idx: number) => (
                    <li key={idx}>
                      <span style={{ fontWeight: 600 }}>{ing.name}</span>
                      {ing.amount ? ` — ${ing.amount}` : ""}
                    </li>
                  ))}
                </ul>
              </div>

              <div class="panel" aria-labelledby="steps-title">
                <h3 id="steps-title">Instructions</h3>
                <ol>
                  {recipe.value.steps.map((s: string, idx: number) => (
                    <li key={idx} style={{ marginBottom: "0.35rem" }}>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Recipe Details - Recipe Explorer",
  meta: [
    {
      name: "description",
      content: "Detailed recipe view with ingredients and instructions.",
    },
  ],
};
