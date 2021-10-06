<script>
  import { page } from '$app/stores'
</script>

<header class="container">
  <div class="nav-top flex">
    <div class="logo">
      <img src="/img/logo-large.svg" alt="KnittingPro Logo" />
    </div>

    <div class="search">
      <label for="search">
        <input type="text" placeholder="What do you want to learn?" />
      </label>
    </div>

    <div class="user">
      <a href="#void">Sign In</a>
      <button class="pill">Get Started</button>
    </div>
  </div>

  {#if $page.path === '/'}
    <div class="hero">
      <div class="img">
        <img src="/img/yarn.png" alt="Yarn for nitting" />
      </div>
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
</style>
