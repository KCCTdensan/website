import type { LoaderFunctionArgs } from "@remix-run/router";
import { serverOnly$ } from "vite-env-only";

export const loader = serverOnly$(async ({ params }: LoaderFunctionArgs) => {
  const { API_BASE } = await import("@/lib/.server/env");
  const path = params["*"] || "/";
  const url = `${API_BASE}/api/assets${path}`;
  const response = await fetch(url);
  const body = new Uint8Array(await response.arrayBuffer());

  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
  });
});
