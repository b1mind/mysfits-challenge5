<script>
  export let reverse
</script>

<section>
  <div class="flex" class:reverse>
    <div class="text">
      <slot name="text" />
    </div>
    <div class="img">
      <slot name="img" />
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
  .reverse {
    flex-wrap: wrap-reverse;
    flex-direction: row-reverse;
  }
</style>
