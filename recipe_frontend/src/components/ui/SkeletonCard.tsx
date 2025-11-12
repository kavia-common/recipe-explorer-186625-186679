import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <article class="card" aria-hidden="true">
      <div class="card-media">
        <div class="skeleton" style="width:100%;height:100%"></div>
      </div>
      <div class="card-body">
        <div class="skeleton" style="width:70%;height:16px;margin-bottom:8px"></div>
        <div class="skeleton" style="width:40%;height:12px;"></div>
      </div>
    </article>
  );
});
