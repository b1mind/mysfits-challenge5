<script>
  import Card from '$lib/Card.svelte'
  import Cta from '$lib/Cta.svelte'
  import Footer from '$lib/Footer.svelte'
  import { courses } from '$lib/data/posts.js'

  console.log(courses)
</script>

<section class="container">
  <div class="grid">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</section>

<Cta img="yarn.png">
  <div class="title-med">Welcome to the largest knitting community.</div>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    reprehenderit quidem quis veritatis repellendus, blanditiis dolor eum quas
    aliquid minima. Architecto quasi eos ducimus ratione et in sunt aliquam eum!
  </p>
</Cta>

<Cta alt="true">
  <div class="title-lrg">Become an instructor</div>
  <p>
    Odio molestiae maxim, porro vitae iusto eaque amet reiciendis error veniam
    asperiores omnis eligendi enim a delectus ipsum.
  </p>
</Cta>

<Footer />

<style lang="scss">
</style>
