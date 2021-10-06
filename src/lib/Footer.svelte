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

      <nav>
        <ul class="flex">
          <li><a href="#void">Courses</a></li>
          <li><a href="#void">Hacks</a></li>
          <li><a href="#void">Free Stuff</a></li>
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

    <section class="footer-text">
      <span>Copyright stuffs 2021</span>
      <span>Challenge Author: b1mind</span>
    </section>
  </div>
</footer>

<style lang="scss">
</style>
