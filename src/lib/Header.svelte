<script>
  import { page } from '$app/stores'

  $: isPost = $page.query.has('id')
  $: slugTitle = $page.params.slug

  $: header = isPost
    ? `/img/blog-${$page.query.get('id')}.jpg`
    : $page.path === '/'
    ? '/img/hero.jpg'
    : `/img/${$page.path}.jpg`
</script>

<div class="hero" style="--header-img: url({header});" class:isPost>
  <header>
    <div class="logo flex">
      <div class="corner">
        <a href="#void">
          <img src="/logo.svg" alt="Acme" />
        </a>
      </div>

      {#if isPost}
        <button class="btn" on:click={() => window.history.back()}>
          <svg class="btn-icon" width="18" height="18" viewBox="0 0 24 24">
            <path
              d="M15.422 7.406l-4.594 4.594 4.594 4.594-1.406 1.406-6-6 6-6z"
            />
          </svg>
          Back
        </button>
      {/if}
    </div>

    <nav>
      <ul>
        <li class:active={$page.path === '/'}>
          <a sveltekit:prefetch href="/">Home</a>
        </li>
        <li class:active={$page.path === '/blog'}>
          <a sveltekit:prefetch href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  </header>

  {#if $page.path !== '/'}
    <div class="title">
      <h1>
        {isPost ? slugTitle.split('-').join(' ') : 'Making it svelte'}
      </h1>
    </div>
  {/if}
</div>

<style lang="scss">
  @use './scss/vars' as *;

  header {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 1rem 2em;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: $mediaSml) {
      padding: 0.5em 1em;
    }
  }

  .hero {
    position: relative;
    width: 100%;
    max-width: $mediaLg;
    min-height: 50vh;
    margin: 0 auto;
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 55ch) 2fr;
    background: var(--header-img, url('/img/hero.jpg')) no-repeat;
    background-color: var(--clr-primary-400);
    background-position: var(--header-pos, center);
    background-size: cover;
    border-radius: 2rem;
  }

  .title {
    grid-column: 2/3;
    align-self: center;
  }

  .isPost {
    background-position: 300px 50%;
    @media (max-width: $mediaSml) {
      background-size: auto;
      background-position: center bottom;

      h1 {
        margin: 3em 0 10em 0;
      }
    }
  }

  .logo {
    flex-basis: 23%;
    justify-content: space-between;
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 3rem;
    height: 2rem;
    object-fit: contain;
  }

  @media (max-width: $mediaSml) {
    nav {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      color: var(--clr-neutral-100);
      background-color: var(--clr-neutral-900);
      border-radius: var(--br) var(--br) 0 0;
      z-index: 420;

      ul {
        justify-content: space-evenly;
      }
    }
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--clr-neutral-100);
  }

  a:hover,
  button:hover {
    color: var(--clr-neutral-500);
  }

  .btn-icon {
    margin-right: 0.5em;
  }
</style>
