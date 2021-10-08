<script>
  export let title = 'Default course title'
  export let author = 'Author name'
  export let summary =
    'default summary can be said that there is no content coming into this componet how sad for it ... check your self'
  export let level = 'beginner'
  export let rating = 4.4
  export let sale
  export let price = '23.99'
</script>

<article class="card">
  <header class="flex">
    <div class="pill">{level}</div>
    <div class="rating">{rating}</div>
  </header>
  <div class="content space">
    <h2>{title}</h2>
    <div class="author">{author}</div>
    <p>{summary}</p>
  </div>
  <footer class="flex">
    <div class="price" class:sale>
      ${price}
    </div>
    {#if sale}
      <div class="price">${sale}</div>
    {/if}
    <button class="pill lrg">Enroll</button>
  </footer>
</article>

<style lang="scss">
  @use './scss/vars' as *;

  .card {
    min-height: 420px;
    padding: 1rem;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 2rem;
    align-items: center;
    background-color: var(--clr-neutral-200);
    border-radius: var(--br);
    @media (max-width: $mediaSml) {
      max-width: 350px;
      place-self: center;
    }
  }

  .content {
    align-self: end;
  }

  .author {
    color: var(--clr-neutral-500);
    font-size: var(--fs-200);
  }

  p {
    font-size: var(--fs-400);
  }
</style>
