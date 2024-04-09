import { redirectDocument } from "@remix-run/node";

export const loader = () =>
  redirectDocument("/old/v1/tools/py/", { status: 302 });
