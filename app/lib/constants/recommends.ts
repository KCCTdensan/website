import type { Recommend } from "@/lib/recommends";

export const createAvailableRecommends: (pathname: string) => Recommend[] = (
  pathname,
) => {
  const pathnameWithoutSlash = pathname.replace(/\/$/, "");

  return [
    {
      link: [
        `/old/v0${pathnameWithoutSlash}.html`,
        `/old/v0${pathnameWithoutSlash}/index.html`,
      ],
      title: "旧版(2018年頃)へのリンク",
    },
    {
      link: `/old/v1${pathname}`,
      title: "旧版(2021年頃)へのリンク",
    },
  ] as const;
};
