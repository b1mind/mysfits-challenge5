import { readable } from 'svelte/store'

//todo posts Store resolve promise (stop is not a function)
export const postsData = readable([], async (set) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const results = await res.json()
  const posts = results.filter((index) => index.id <= 8)

  set(posts)
  return () => {}
})
