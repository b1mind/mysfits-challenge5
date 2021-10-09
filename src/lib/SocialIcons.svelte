<script>
  export let name = 'twitter'
  export let url = 'twitter.com'

  let icon = `/img/social-icons.svg#${name}`
</script>

<a href="https://{url}" class="{name} social link">
  <svg aria-hidden="true" width="24" height="24">
    <use href={icon} />
  </svg>
</a>

<style>
  svg {
    filter: contrast(0%);
  }

  svg:hover {
    filter: none;
  }
</style>
