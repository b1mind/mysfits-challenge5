<script context="module">
  import Card from '$lib/Card.svelte'
  import Inbox from '$lib/Inbox.svelte'

  //todo update with import?
  export async function load({ fetch }) {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    let posts = await res.json()
    posts = posts.filter((index) => index.id <= 3)

    return {
      props: {
        posts
      }
    }
  }
  export const prerender = true
</script>

<script>
  export let posts
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <div class="intro container space">
    <h1>Final project: Kevin Powells CSS Demystified Module 3</h1>
    <p class="title-med">
      Took this project a bit further and made it using SvelteKit for the first
      time. Challenging my self to make reusable components as well as CSS
      classes.
    </p>
    <button class="btn"
      >Connect
      <svg class="btn-icon" width="18" height="18" viewBox="0 0 24 24">
        <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z" />
      </svg>
    </button>
  </div>
</section>

<section>
  <div class="container">
    <h2>About</h2>
    <div class="space">
      <p class="title-med">
        Tenetur eos! Expedita, quasi. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit.
      </p>

      <p class="title-med">
        Officiis tenetur voluptate odit sequi eum ex? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Distinctio, adipisci.
      </p>
    </div>
  </div>
</section>

<section class="accent">
  <div class="container">
    <h2>Blog</h2>
    <div class="title">Latest news, and opinions</div>
    <div class="grid space-lg">
      {#each posts as { id, title, body }}
        <Card {id} {title} img={`blog-${id}.jpg`} {body} />
      {/each}
    </div>
  </div>
</section>

<Inbox />

<style lang="scss">
  .accent {
    --clr-bg: var(--clr-primary-300);
  }

  .intro {
    --spacer: 2em;
  }
</style>
