/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import compress from 'vite-plugin-compress'

export default {
  kit: {
    adapter: vercel(),
    vite: () => ({
      plugins: [compress]
    })
  },
  preprocess: preprocess({})
}
