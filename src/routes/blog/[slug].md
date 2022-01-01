<script context="module" lang="ts">
  import { compile as mdc } from "mdsvex?server"
  import { API_BASE } from "$lib/_env"
  export async function load({ fetch, params }) {
    const url = `${API_BASE}/blog.json`
    const res = await fetch(url)
    if(!res.ok) return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    }
    const blogData = await res.json()

    const data = blogData.data.find(i => i.slug === params.slug)
    if(data === undefined) return {
      status: 404,
      error: new Error(`Could not find entry`),
    }
    data.body = (await mdc(data.body)).code

    return { props: { data } }
  }
</script>

<script lang="ts">
  import { compile as svc } from "svelte/compiler"
  import Meta from "$lib/Meta.svelte"
  import MDLayout from "../../MDLayout.svelte"

  export let data

  const { title, description, author, noRobots, date, dateUpd } = data
  const Body = svc(data.body)
</script>

<MDLayout { ...{ title, description, author, noRobots, date, dateUpd } }>
  <!-- <Body /> -->
</MDLayout>
