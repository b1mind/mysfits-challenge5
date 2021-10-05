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
    <section class="footer-nav boarder">
      <img src="/logo.svg" alt="Acme" />
      <nav class="space">
        <h2>Map</h2>
        <ul class="space">
          <li>
            <a href="#void">Blog</a>
          </li>
          <li><a href="#void">Privacy</a></li>
        </ul>
      </nav>

      <nav class="space">
        <h2>Resources</h2>
        <ul class="space">
          <li><a href="#void">Courses</a></li>
          <li><a href="#void">Hacks</a></li>
          <li><a href="#void">Free Stuff</a></li>
        </ul>
      </nav>
    </section>

    <section class="footer-text flex">
      <p>Copyright stuffs 2021</p>
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
  </div>
</footer>

<style lang="scss">
  @use 'scss/vars' as *;

  .footer-nav {
    width: 100%;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: var(--fw-700);

    h2 {
      font-family: var(--ff-sans);
      font-size: var(--fs-400);
    }
  }

  .footer-text {
    padding: 2.5rem 0;
    color: var(--clr-neutral-400);
    font-family: var(--ff-serif);

    @media (max-width: $mediaSml) {
      flex-direction: column-reverse;
      margin-bottom: 2rem;
    }
  }

  .social {
    ul > * + * {
      margin-left: 1.5em;
    }

    @media (max-width: $mediaSml) {
      margin-bottom: 2rem;
    }
  }
</style>
