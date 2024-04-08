import type { MetaFunction } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/router";
import equal from "fast-deep-equal";

export const extendMeta =
  <
    Loader extends LoaderFunction,
    MatchLoaders extends Record<string, LoaderFunction | unknown> = Record<
      string,
      unknown
    >,
  >(
    fn: MetaFunction<Loader, MatchLoaders>,
  ): MetaFunction<Loader, MatchLoaders> =>
  (args) => {
    const parentMeta = args.matches
      .flatMap((match) => match.meta ?? [])
      .filter(
        (meta) =>
          !("title" in meta) ||
          ("property" in meta && meta.property !== "og:title") ||
          ("name" in meta && meta.name !== "description") ||
          ("property" in meta && meta.property !== "og:description"),
      );

    return [...parentMeta, ...(fn(args) ?? [])].filter(
      (value, index, self) => index === self.findIndex((t) => equal(t, value)),
    );
  };
