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

{slugTitle}

This would be a course category
<!-- //Todo filter with slug -->
<p>data.filter(slugTitle)</p>
<Footer />
