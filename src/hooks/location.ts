import { useLocation } from "@builder.io/qwik-city";

export const usePathnameList = (): [string, string[]] => {
  const loc = useLocation();
  const { pathname } = loc.url;
  const pathnames = pathname.split("/").filter(p => p !== "");

  if (pathnames.length === 0) {
    return ["/", []];
  }

  return [pathname, pathnames];
};
