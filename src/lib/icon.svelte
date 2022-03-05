<script lang="ts">
  import Icon from "svelte-awesome"
  import * as brands from "@fortawesome/free-brands-svg-icons"
  import * as regular from "@fortawesome/free-regular-svg-icons"
  import * as solid from "@fortawesome/free-solid-svg-icons"

  const faSvgs = { brands, regular, solid }
  const faName = (name: string) =>
    `fa-${name}`.replace(/-[a-z]/g, s => s.toUpperCase()[1])

  export let type: "brands" | "regular" | "solid"
  export let name: string
  export let scale: number
</script>

<Icon data={faSvgs[type][faName(name)]} {scale} />
