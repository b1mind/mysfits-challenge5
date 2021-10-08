<script>
  import Rating from '$lib/Rating.svelte'

  export let title
  export let author
  export let summary
  export let level
  export let rating
  export let sale
  export let price

  let stars = ~~rating
  let half = isInt(rating)

  function isInt(n) {
    return n % 1 === 0
  }
</script>

<article class="card">
  <header class="flex">
    <div class="pill">{level}</div>
    <div class="rating">
      {rating}
      <Rating {stars} {half} />
    </div>
  </header>

  <div class="content space">
    <h2>{title}</h2>
    <div class="author">{author}</div>
    <p>{summary}</p>
  </div>

  <footer class="flex">
    <div class="price">
      <div class:sale>
        ${price}
      </div>
      {#if sale}
        <div>${sale}</div>
      {/if}
    </div>
    <button class="pill lrg">Enroll</button>
  </footer>
</article>

<style lang="scss">
  @use './scss/vars' as *;

  .card {
    --spacer: 1em;
    min-height: 420px;
    padding: 1.5rem 1rem;
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

  button.lrg {
    --clr-bg: var(--clr-neutral-900);
    &:hover,
    &:active {
      --clr-bg: revert;
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

  .price {
    position: relative;
    font-size: var(--fs-600);
  }

  .sale {
    color: var(--clr-primary-400);
    font-size: var(--fs-200);
    text-decoration: line-through;

    &::after {
      content: 'SALE';
      position: absolute;
      right: -1em;
    }
  }
</style>
