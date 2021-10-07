<script>
  export let alt
  export let img = 'profile-pic.png'
</script>

<section class="container" class:alt>
  <div class="flex">
    <div class="text space">
      <slot />
      <button class="pill lrg">Get Started</button>
      {#if !alt}
        <button class="lrg">Learn More</button>
      {/if}
    </div>
    <div class="img">
      <img src="/img/{img}" alt={img} />
    </div>
  </div>
</section>

<style lang="scss">
  @use './scss/vars' as *;

  section {
    padding: 5rem 0;
    background-color: var(--bg, var(--clr-neutral-200));
  }

  .flex {
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;
    align-items: center;
    gap: 3rem;
  }

  .text {
    max-width: 40ch;
  }

  .img {
    max-width: 325px;
    height: 325px;
    border-radius: 2.25rem;
    box-shadow: var(--bs);
    overflow: hidden;
    img {
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  //todo alt cta
  .alt {
    --bg: transparent;

    .flex {
      justify-content: space-around;
      flex-direction: row-reverse;
    }

    .text {
      max-width: 31ch;
    }

    @media (min-width: $mediaMed) {
      .img {
        min-width: 45%;
        min-height: 600px;
      }
    }
  }
</style>
