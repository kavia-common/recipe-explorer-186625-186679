/**
 * RecipeService abstracts recipe data access. It will use an API base if available via env vars:
 * - VITE_API_BASE or VITE_BACKEND_URL
 * If neither is set, it falls back to local mock data.
 */
import { mockRecipes, type Recipe } from "~/data/mock-recipes";
export type { Recipe } from "~/data/mock-recipes";

function getApiBase(): string | null {
  const base =
    (import.meta.env.VITE_API_BASE as string | undefined) ||
    (import.meta.env.VITE_BACKEND_URL as string | undefined) ||
    null;
  if (!base) return null;
  try {
    const url = new URL(base);
    return url.toString().replace(/\/+$/, "");
  } catch {
    // If invalid URL, treat as null
    return null;
  }
}

// Simulated network delay for UX skeletons in mock mode
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export type RecipeSummary = Pick<
  Recipe,
  "id" | "title" | "image" | "tags" | "rating" | "cookTimeMins" | "servings"
>;

/**
 * PUBLIC_INTERFACE
 * getRecipes: fetch list of recipes, with optional query filter applied client-side for mock.
 */
export async function getRecipes(query?: string): Promise<RecipeSummary[]> {
  const base = getApiBase();
  if (!base) {
    // mock mode
    await delay(150);
    const list = mockRecipes.map((r) => ({
      id: r.id,
      title: r.title,
      image: r.image,
      tags: r.tags,
      rating: r.rating,
      cookTimeMins: r.cookTimeMins,
      servings: r.servings,
    }));
    if (!query) return list;
    const q = query.toLowerCase();
    return list.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        mockRecipes
          .find((mr) => mr.id === r.id)!
          .ingredients.some((ing) => ing.name.toLowerCase().includes(q)),
    );
  }

  // API mode (not required now, but ready)
  const url = new URL("/recipes", base);
  if (query) url.searchParams.set("q", query);
  const resp = await fetch(url.toString());
  if (!resp.ok) throw new Error(`Failed to fetch recipes: ${resp.status}`);
  return (await resp.json()) as RecipeSummary[];
}

/**
 * PUBLIC_INTERFACE
 * getRecipeById: fetch single recipe details.
 */
export async function getRecipeById(id: string): Promise<Recipe> {
  const base = getApiBase();
  if (!base) {
    await delay(120);
    const r = mockRecipes.find((x) => x.id === id);
    if (!r) throw new Error("Recipe not found");
    return r;
  }
  const url = new URL(`/recipes/${encodeURIComponent(id)}`, base);
  const resp = await fetch(url.toString());
  if (!resp.ok) throw new Error(`Failed to fetch recipe: ${resp.status}`);
  return (await resp.json()) as Recipe;
}
