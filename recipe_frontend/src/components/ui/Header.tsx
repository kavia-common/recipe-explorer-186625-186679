import { component$, $, type QRL } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type Props = {
  value: string;
  onInput$: QRL<(v: string) => void>;
};

export default component$<Props>(({ value, onInput$ }) => {
  const onInputHandler = $((e: Event) => {
    const target = e.target as HTMLInputElement;
    onInput$(target.value);
  });

  return (
    <header class="header" role="banner">
      <div class="container header-inner">
        <Link href="/" class="brand" aria-label="Recipe Explorer Home">
          <div class="brand-logo" aria-hidden="true"></div>
          <span class="brand-text">Recipe Explorer</span>
        </Link>
        <form
          class="searchbar"
          role="search"
          aria-label="Search recipes"
          preventdefault:submit
          onSubmit$={(e) => e.preventDefault()}
          style={{ marginLeft: "auto" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M21 21l-4.2-4.2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            />
          </svg>
          <label class="visually-hidden" for="search">Search</label>
          <input
            id="search"
            class="search-input"
            placeholder="Search by recipe or ingredient"
            value={value}
            onInput$={onInputHandler}
            aria-describedby="search-help"
          />
          <span id="search-help" class="visually-hidden">
            Type a recipe title or ingredient to filter the list.
          </span>
          <button class="btn" type="button" aria-label="Clear search"
            onClick$={$(() => onInput$(""))}
            disabled={!value}
            style={{ opacity: value ? "1" : "0.6" }}
          >
            Clear
          </button>
        </form>
      </div>
    </header>
  );
});
