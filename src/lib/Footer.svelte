<script>
  import SocialIcons from './SocialIcons.svelte'
  const icons = [
    {
      name: 'twitter',
      url: 'twitter.com/b1mind/'
    },
    {
      name: 'twitch',
      url: 'twitch.tv/b1mind/'
    },
    {
      name: 'github',
      url: 'github.com/b1mind/'
    },
    {
      name: 'codepen',
      url: 'codepen.io/b1mind/'
    }
  ]
</script>

<footer>
  <div class="container">
    <section class="footer-nav flex wrap">
      <img src="/img/logo-large.svg" alt="KnittingPro Logo" />

      <nav class="links">
        <ul class="flex">
          <li><a href="#void">Contact</a></li>
          <li><a href="#void">Legal Note</a></li>
          <li><a href="#void">Privacy Policy</a></li>
          <li><a href="#void">Accessibility</a></li>
        </ul>
      </nav>

      <nav class="social">
        <ul class="flex">
          {#each icons as icon}
            <li>
              <SocialIcons name={icon.name} url={icon.url} />
            </li>
          {/each}
        </ul>
      </nav>
    </section>

    <section class="footer-text flex">
      <span>Copyright stuffs 2021</span>
      <span>Challenge Author: b1mind</span>
    </section>
  </div>
</footer>

<style lang="scss">
  @use './scss/vars' as *;

  .flex {
    gap: 1em;
  }

  .footer-nav {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-top: 4px solid var(--clr-neutral-200);
  }

  .footer-nav,
  .links ul {
    @media (max-width: $mediaSml) {
      justify-content: flex-start;
      flex-direction: column;
    }
  }

  a {
    --clr: var(--clr-neutral-500);
    font-size: var(--fs-400);
  }

  .footer-text {
    padding-top: 1em;
    padding-bottom: 1em;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: var(--clr-neutral-200);
  }
</style>
