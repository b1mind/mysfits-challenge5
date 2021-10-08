<script context="module">
  export async function load({ fetch, page }) {
    let slugTitle = page.params.slug
    return { props: { slugTitle, page } }
  }
</script>

<script>
  import Footer from '$lib/Footer.svelte'
  export let slugTitle
</script>

<section class="container">
  <!-- //Todo filter with slug -->
  <h1>{slugTitle}</h1>
  <p>This would be a course category</p>
</section>

<Footer />
