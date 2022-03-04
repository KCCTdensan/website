<script lang="ts">
  import Fa from "svelte-fa"
  import * as brands from "@fortawesome/free-brands-svg-icons"
  import * as regular from "@fortawesome/free-regular-svg-icons"
  import * as solid from "@fortawesome/free-solid-svg-icons"

  const faSvgs = { brands, regular, solid }
  const faName = (name: string) =>
    `fa-${name}`.replace(/-[a-z]/g, s => s.toUpperCase()[1])

  export let type: "brands" | "regular" | "solid"
  export let name: string
  export let size: string
</script>

<Fa class="fa" icon={faSvgs[type][faName(name)]} size={size} />

<style lang="scss">
  .fa {
    width: 100%;
    height: 100%;
  }
</style>
