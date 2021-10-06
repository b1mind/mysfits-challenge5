<script>
  import { page } from '$app/stores'
</script>

<div class="scroll">
  <nav class="flex">
    <ul class="nav-main">
      <li class:active={$page.path === '/courses'}>
        <a href="/courses">All courses</a>
      </li>
      <li class:active={$page.params.slug === 'beginner'}>
        <a href="/courses/beginner">Beginner</a>
      </li>
      <li class:active={$page.params.slug === 'intermediate'}>
        <a href="/courses/intermediate">Intermediate</a>
      </li>
      <li class:active={$page.params.slug === 'expert'}>
        <a href="/courses/expert">Expert</a>
      </li>
      <li class:active={$page.params.slug === 'grandmother'}>
        <a href="/courses/grandmother">Grandmother</a>
      </li>
    </ul>
    <a href="#void">Subscribe</a>
  </nav>
</div>

<style lang="scss">
  @use './scss/vars' as *;

  .scroll {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  nav {
    padding: 1em 0;
    border-bottom: 4px solid var(--clr-neutral-200);
  }

  ul.nav-main {
    display: flex;
    gap: 0.5em;

    .active {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: -20px;
        right: 0;
        width: 100%;
        height: 4px;
        background-color: var(--clr-neutral-900);
        border-radius: 2px;
        z-index: 1;
      }
    }
  }
</style>
