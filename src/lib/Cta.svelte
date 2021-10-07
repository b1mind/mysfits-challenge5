<script>
  export let alt
  export let img = 'profile-pic.png'
</script>

<section>
  <div class="flex" class:alt>
    <div class="text">
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

  .flex {
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    & > * {
      max-width: 50%;
    }
  }

  .img {
    border-radius: 2.25rem;
    box-shadow: var(--bs);
    overflow: hidden;
  }

  //todo alt cta
  .alt {
    min-height: 900px;
    flex-wrap: wrap-reverse;
    flex-direction: row-reverse;
    .img {
      transform: scale(2.5);
    }
  }
</style>
