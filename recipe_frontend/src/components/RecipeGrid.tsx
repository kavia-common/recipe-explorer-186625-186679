import { component$ } from "@builder.io/qwik";
import type { RecipeSummary } from "~/services/recipe-service";
import RecipeCard from "./RecipeCard";

export default component$<{ recipes: RecipeSummary[] }>(
  ({ recipes }) => {
    return (
      <section aria-label="Recipe results">
        <div class="grid" style={{ marginTop: "1rem" }}>
          {recipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </section>
    );
  },
);
