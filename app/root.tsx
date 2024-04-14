import { AppWrapper } from "@/components/AppWrapper";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Metadata } from "@/components/Metadata";
import { Header } from "@/components/Header";
import { zAtom } from "@/features/easteregg/atoms";
import { NyanAudio } from "@/features/easteregg/NyanAudio";
import { SpecialKeyHandlers } from "@/features/easteregg/SpecialKeyHandlers";
import { PLATFORM } from "@/lib/env.server";
import {
  Links,
  Meta,
  type MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import { css } from "@styles/css";
import { useAtomValue } from "jotai";
import katex from "katex/dist/katex.min.css?url";
import { name, version } from "../package.json";
import fonts from "./styles/fonts.css?url";
import initPanda from "./styles/panda.css?url";

import type { LinksFunction } from "@remix-run/node";
import type { PropsWithChildren } from "react";

import "@/styles/init-sanitize.css";

export const loader = () => ({
  pkg: { name, version },
  platform: PLATFORM,
});

export type RootLoaderData = ReturnType<typeof loader>;

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico" },
  { rel: "stylesheet", href: fonts },
  { rel: "stylesheet", href: initPanda },
  { rel: "stylesheet", href: katex },
];

export const meta: MetaFunction = () => [
  {
    name: "keywords",
    content: "電算部,電子計算機部,神戸高専,KCCT,高専",
  },
  {
    name: "author",
    content: "KCCTdensan",
  },
  {
    name: "twitter:card",
    content: "summary",
  },
  {
    name: "twitter:site",
    content: "@kcct_densan",
  },
  {
    name: "twitter:creator",
    content: "@kcct_densan",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:locale",
    content: "ja_JP",
  },
  {
    property: "og:site_name",
    content: "神戸高専 電算部",
  },
  {
    property: "og:image",
    content: "https://d3bu.net/icon.png",
  },
];

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const routeError = isRouteErrorResponse(error) ? error : null;

  return (
    <main
      className={css({
        m: "4",
      })}
    >
      {routeError === null ? (
        <div>
          <h1>エラー</h1>
          <p>よくわからないエラーが発生しました。</p>
        </div>
      ) : (
        <div>
          <h1>
            {routeError.status} {routeError.statusText}
          </h1>
          <p>サーバーエラーが発生しました。</p>
        </div>
      )}
    </main>
  );
}

export default function App() {
  const z = useAtomValue(zAtom);

  return (
    <>
      <AppWrapper z={z}>
        <Container z={z}>
          <Header />
          <NyanAudio />
          <Metadata />
          <main
            style={{
              marginInline:
                "1.5rem" /* Panda CSS won't work properly here??? */,
            }}
          >
            <Outlet />
          </main>
          <Footer />
        </Container>
      </AppWrapper>
      <SpecialKeyHandlers />
    </>
  );
}
