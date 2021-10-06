<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import '../app.scss'
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
    max-width: $mediaLrg;
    margin: 0 auto;
  }
</style>
