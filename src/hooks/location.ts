import { useLocation } from "@builder.io/qwik-city";

export const usePathnameList = () => {
  const loc = useLocation();
  const pathname = loc.url.pathname.split("/").filter(p => p !== "");

  if (pathname.length === 0) {
    return;
  }

  return pathname;
};
