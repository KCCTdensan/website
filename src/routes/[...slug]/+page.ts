import { error } from "@sveltejs/kit"
import type { PageLoad } from "@sveltejs/kit"

import articles from "$lib/articles"

export const load: PageLoad = async ({ fetch, params }) => {
  const [entrypoint, ...path] = params.slug.split("/").filter(a => a.length)
  const slug = path.join("/")

  const res = await articles(fetch, entrypoint)
  const article = res.data.find(i =>
       i.slug === slug
    || i.slug === `${slug}/index`
    || !slug && i.slug === "index")

  if(article === undefined)
    throw error(404, "Could not find entry")
  else
    return article
}
