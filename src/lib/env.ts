export const API_BASE: string = `${process.env.API_BASE}`
export const DEV: boolean = process.env.NODE_ENV === "development"
export const SSR: boolean = process.env.SSR === "true"
export const PLATFORM: string =
  process.env.PLATFORM || (DEV ? "dev" : SSR ? "unknown-ssr" : "unknown")