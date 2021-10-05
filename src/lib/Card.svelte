<script>
  export let title = 'this is a undefined title'
  export let body =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum quasi praesentium magni ullam amet ut officia laudantium! Enim voluptatum recusandae dolor ea aut modi possimus. Iste praesentium necessitatibus odio'
  export let id = 1
  export let img = `blog-${id}.jpg`

  function getSlug(title) {
    return title.split(' ').join('-')
  }
</script>

<article class="space">
  <!-- //todo find out which way you want to do post images... -->
  <div class="img">
    <img src="/img/{img}" alt={title} />
  </div>
  <h3>
    <a href="/blog/{getSlug(title)}?id={id}">{title.substring(0, 40)}</a>
  </h3>
  <p>{body.substring(0, 80)}...</p>

  <footer class="flex">
    <time class="title-sml" datetime="2021-10-08">Oct 8</time>
    <time class="title-sml" datetime="PT08M">8 min <span>read</span></time>
  </footer>
</article>

<style lang="scss">
  article {
    --spacer: 0.75rem;
    padding: 0.75rem;
    background-color: var(--clr-bg, var(--clr-neutral-100));
    border-radius: var(--br);

    &:hover {
      box-shadow: 0.5px 0.5px 30px rgba(0, 0, 0, 10%);
      transform: translate(0);
      z-index: 1;
      cursor: pointer;
    }
  }

  img {
    min-height: 175px;
    object-fit: cover;
  }

  p {
    font-size: var(--fs-400);
    line-height: 1.2;
  }

  footer.flex {
    justify-content: flex-start;

    & > * + * {
      margin-left: 2rem;
    }
  }
</style>
