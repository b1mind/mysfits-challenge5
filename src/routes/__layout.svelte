<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="scss">
  @use '../lib/scss/vars' as *;

  main {
    width: 100%;
    max-width: $mediaLg;
    margin: 0 auto;
  }
</style>
