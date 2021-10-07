<script>
  import Footer from '$lib/Footer.svelte'
  import Cta from '$lib/Cta.svelte'
</script>

<section class="container">
  <h1>Courses Home page test</h1>
</section>

<Footer />

<Cta>
  <div slot="text">Some text</div>
  <img class="small" slot="img" src="/img/yarn.png" alt="yarn" />
</Cta>

<Cta reverse="true">
  <div slot="text">Some text</div>
  <img class="big" slot="img" src="/img/profile-pic.png" alt="yarn" />
</Cta>

<style lang="scss">
</style>
