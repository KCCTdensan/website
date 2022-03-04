<script context="module" lang="ts">
  export async function load({ fetch, params }) {
    const { data } = await fetch("/api/articles/news.json").then(r => r.json())
    const article = data.find(i => i.slug === params.slug)
    if(article === undefined) {
      return {
        status: 404,
        error: new Error(`Could not find entry`),
      }
    }
    return { props: { data: article } }
  }
</script>

<script lang="ts">
  import MDLayout from "../../md_layout.svelte"

  export let data

  const { title, description, author, noRobots, date, dateUpd } = data
  const bodyHtml = data.body
</script>

<MDLayout { ...{ title, description, author, noRobots, date, dateUpd } }>
  {@html bodyHtml}
</MDLayout>
