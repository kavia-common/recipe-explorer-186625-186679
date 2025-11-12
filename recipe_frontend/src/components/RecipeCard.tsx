import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { RecipeSummary } from "~/services/recipe-service";
import Rating from "./ui/Rating";
import TagPill from "./ui/TagPill";

export default component$<{ recipe: RecipeSummary }>(({ recipe }) => {
  return (
    <article class="card">
      <Link href={`/recipe/${recipe.id}`} aria-label={`View ${recipe.title}`}>
        <div class="card-media" role="img" aria-label={`${recipe.title} image`}>
          <img
            class="card-img"
            src={recipe.image}
            alt={`${recipe.title}`}
            loading="lazy"
            width={600}
            height={450}
          />
        </div>
      </Link>
      <div class="card-body">
        <h3 class="card-title">
          <Link href={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        </h3>
        <div class="card-sub" aria-label="Recipe meta">
          <span class="pill" title="Cook time">
            ⏱ {recipe.cookTimeMins}m
          </span>
          <span class="pill secondary" title="Servings">
            🍽 {recipe.servings}
          </span>
          <Rating value={recipe.rating} />
        </div>
        <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {recipe.tags.slice(0, 3).map((t) => (
            <TagPill key={t} text={t} />
          ))}
        </div>
      </div>
    </article>
  );
});
