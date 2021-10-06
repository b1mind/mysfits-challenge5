<script context="module">
  //todo use import to get page
  export async function load({ fetch, page }) {
    let slugTitle = page.params.slug
    return { props: { slugTitle, page } }
  }
</script>

<script>
  export let slugTitle
</script>

{slugTitle}

This would be a course category
<!-- //Todo filter with slug -->
<p>data.filter(slugTitle)</p>
