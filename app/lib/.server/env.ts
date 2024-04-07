export const API_BASE: string = `${process.env.API_BASE}`;
export const PLATFORM: string =
  process.env.PLATFORM || (import.meta.env.DEV ? "dev" : "unknown-ssr");
