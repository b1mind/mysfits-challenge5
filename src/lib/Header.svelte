<script>
  import { page } from '$app/stores'
  $: isHome = $page.path === '/'
</script>

<header class="container" class:isHome>
  <div class="nav-top flex">
    <div class="logo">
      <img src="/img/logo-large.svg" alt="KnittingPro Logo" />
    </div>

    <div class="search pill flex">
      <label for="search">
        <input type="text" placeholder="What do you want to learn?" />
      </label>
      <img src="/img/search.svg" alt="search icon" />
    </div>

    <div class="user">
      <a href="#void">Sign In</a>
      <button class="pill">Get Started</button>
    </div>
  </div>

  {#if isHome}
    <div class="hero">
      <div class="img" />
      <h1>Become a knitting pro</h1>
    </div>
  {/if}

  <nav>
    <ul>
      <li><a href="#void">All courses</a></li>
      <li><a href="#void">Beginner</a></li>
      <li><a href="#void">Intermediate</a></li>
      <li><a href="#void">Expert</a></li>
      <li><a href="#void">Grandmother</a></li>
    </ul>
    <a href="#void">Subscribe</a>
  </nav>
</header>

<style lang="scss">
  .isHome {
    min-height: 100vh;
    display: grid;
    align-content: center;
  }

  .nav-top {
    padding: 1em 0;
  }

  .search {
    --clr-bg: var(--clr-neutral-200);
    min-width: 420px;
  }

  input {
    border: none;
    background-color: transparent;
  }

  .img {
    min-height: 500px;
    background: url('/img/yarn.png') no-repeat center;
    background-size: cover;
    border-radius: var(--br);
    overflow: hidden;
  }
</style>
