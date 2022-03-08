export const API_BASE: string = process.env.API_BASE
export const SSR: boolean = process.env.SSR === "true"
export const PLATFORM: string =
  process.env.PLATFORM ?? SSR ? "unknown" : "unknown-ssr"
