<script context="module">
  //todo update with import?
  export async function load({ fetch }) {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    let posts = await res.json()
    posts = posts.filter((index) => index.id <= 8)

    return {
      props: {
        posts
      }
    }
  }
</script>

<script>
  import Card from '$lib/Card.svelte'
  import Inbox from '$lib/Inbox.svelte'

  export let posts
</script>

<svelte:head>
  <title>Blog - acme</title>
</svelte:head>

<section class="top">
  <div class="container">
    <header class="flex">
      <div class="blog-nav">
        <ul>
          <li><button href="#void">Design</button></li>
          <li><button href="#void">Front-End</button></li>
          <li><button href="#void">Back-End</button></li>
          <li><button href="#void">Web</button></li>
          <li><button href="#void">Apps</button></li>
        </ul>
      </div>
      <button class="btn"
        >Subscribe

        <svg class="btn-icon" width="18" height="18" viewBox="0 0 24 24">
          <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z" />
        </svg>
      </button>
    </header>
  </div>

  <div class="container">
    <div class="grid">
      {#each posts as { id, title, body }}
        <div class="card">
          <Card {id} {title} img={`blog-${id}.jpg`} {body} />
        </div>
      {/each}
    </div>
  </div>
</section>

<div class="container">
  <section class="boarder">
    <a href="#void"> More Articles </a>
  </section>
</div>

<Inbox />

<style lang="scss">
  @use '../../lib/scss/vars' as *;
  header {
    padding: 1rem 0;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: $mediaMed) {
      display: none;
      visibility: hidden;
    }
  }

  .blog-nav {
    button {
      width: max-content;
      font-size: var(--fs-200);
      font-weight: var(--fw-400);
      text-transform: uppercase;
      background: transparent;
      border: none;
    }

    li {
      position: relative;
      width: 100%;
      height: 100%;
    }

    li:hover::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 3px solid var(--clr-primary-400);
    }
  }

  section.top {
    @media (min-width: $mediaMed) {
      padding-top: 0;
    }
  }

  .boarder {
    text-align: center;
  }

  a {
    font-weight: var(--fw-700);
  }

  @media (min-width: $mediaMed) {
    .grid {
      grid-template-columns: repeat(6, 1fr);
    }

    .grid > * {
      grid-column: span 2;
    }

    .grid > *:first-child {
      grid-column: 1 / -1;
    }

    .grid > *:nth-child(5n + 3) {
      grid-column: 4 / 7;
    }

    .card:nth-child(5n + 2) {
      grid-column: 1 / 4;
    }
  }
</style>
