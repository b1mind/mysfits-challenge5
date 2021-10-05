<script context="module">
  //todo use import to get page
  export async function load({ fetch, page }) {
    let slugTitle = page.params.slug.split('-').join(' ')
    let slugId = page.query.get('id')
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${slugId}/`
    )
    let post = await res.json()

    return { props: { slugTitle, post } }
  }
</script>

<script>
  import Inbox from '$lib/Inbox.svelte'

  // import {page} from '$lib/stores'
  export let slugTitle
  export let post
</script>

<svelte:head>
  <title>
    {slugTitle}
  </title>
</svelte:head>

<section>
  <div class="container space">
    <div class="title">{post.body}</div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
      delectus suscipit. Sapiente amet blanditiis quaerat voluptatibus nam cum
      impedit debitis voluptatem est voluptates, odit libero magnam sint.
      Expedita, nemo tenetur?
    </p>
  </div>
</section>

<section>
  <div class="container space">
    <header>
      <h2>Part 1</h2>
      <div class="title">Letest thoughts, news and ideas</div>
    </header>
    <p>{post.body}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
      delectus suscipit. Sapiente amet blanditiis quaerat voluptatibus nam cum
      impedit debitis voluptatem est voluptates, odit libero magnam sint.
      Expedita, nemo tenetur?
    </p>

    <div class="img">
      <img src="/img/article-1.jpg" alt="use the right tools" />
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
      delectus suscipit. Sapiente amet blanditiis quaerat voluptatibus nam cum
      impedit debitis voluptatem est voluptates, odit libero magnam sint.
      Expedita, nemo tenetur?
    </p>
  </div>
</section>

<section>
  <div class="container space">
    <header>
      <h2>Part 2</h2>
      <div class="title">Getting to use the right tools</div>
    </header>
    <p>{post.body}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
      delectus suscipit. Sapiente amet blanditiis quaerat voluptatibus nam cum
      impedit debitis voluptatem est voluptates, odit libero magnam sint.
      Expedita, nemo tenetur?
    </p>

    <div class="img">
      <img src="/img/article-2.jpg" alt="use the right tools" />
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
      delectus suscipit. Sapiente amet blanditiis quaerat voluptatibus nam cum
      impedit debitis voluptatem est voluptates, odit libero magnam sint.
      Expedita, nemo tenetur?
    </p>
  </div>
</section>

<Inbox />

<style>
  .container {
    max-width: 55ch;
  }

  p {
    font-size: var(--fs-400);
    line-height: 1.5;
  }
</style>
