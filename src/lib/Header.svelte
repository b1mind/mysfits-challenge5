<script>
  import Nav from '$lib/Nav.svelte'
  import { page } from '$app/stores'

  $: isHome = $page.path === '/'
  $: isCourse = !isHome
</script>

<header class="container" class:isHome>
  <div class="nav-top flex" class:isCourse>
    <div class="logo">
      <a href="/">
        <img src="/img/logo-large.svg" alt="KnittingPro Logo" />
      </a>
    </div>

    <div class="search pill flex">
      <label for="search">
        <input type="text" placeholder="What do you want to learn?" />
      </label>
      <img src="/img/search.svg" alt="search icon" />
    </div>

    <nav class="nav-user">
      <button class="sign-in">Sign In</button>
      <button class="pill">Get Started</button>
    </nav>
  </div>

  {#if isHome}
    <div class="hero">
      <div class="img" />
    </div>
    <h1>Become a knitting pro</h1>
  {/if}

  <Nav />
</header>

<style lang="scss">
  @use '../lib/scss/vars' as *;

  .nav-top {
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .isHome {
    min-height: 100vh;
    display: grid;
    align-content: center;
    @media (max-width: $mediaLrg) {
      grid-template-rows: auto 1fr auto auto;
    }
  }

  .isCourse {
    box-shadow: 0 30px 50px var(--clr-neutral-200);
  }

  .logo {
    @media (max-width: $mediaLrg) {
      flex-grow: 2;
    }
  }

  .search {
    --clr-bg: var(--clr-neutral-200);
    max-width: 420px;
    flex-grow: 1;
    @media (max-width: $mediaSml) {
      --clr-bg: transparent;
      flex-grow: 0;
    }
  }

  label,
  input {
    width: 100%;
    @media (max-width: $mediaSml) {
      display: none;
    }
  }

  input {
    border: none;
    background-color: transparent;
  }

  .sign-in {
    @media (max-width: $mediaSml) {
      display: none;
    }
  }

  .img {
    height: 100%;
    min-height: 420px;
    background: url('/img/yarn.png') no-repeat center;
    background-size: cover;
    border-radius: 2.25rem;
    box-shadow: var(--bs);
    overflow: hidden;
    @media (max-width: $mediaSml) {
      min-height: 300px;
    }
  }
</style>
