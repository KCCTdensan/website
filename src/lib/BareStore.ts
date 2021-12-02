import { writable } from "svelte/store"

export const create = () => ({
  subscribe: writable(),
})
