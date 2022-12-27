import { writable } from "svelte/store"

export const pkgCtx = writable({
  name: "",
  version: "",
})

export const platformCtx = writable("")
