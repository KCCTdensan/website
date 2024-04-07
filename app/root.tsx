import { zAtom } from "@/atoms/special";
import { AppWrapper } from "@/components/layout/AppWrapper";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/header/Header";
import { NyanAudio } from "@/components/special/NyanAudio";
import { SpecialKeyHandlers } from "@/components/special/SpecialKeyHandlers";
import { PLATFORM } from "@/lib/.server/env";
import {
  Links,
  Meta,
  type MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useAtomValue } from "jotai";
import katex from "katex/dist/katex.min.css?url";
import { name, version } from "../package.json";
import fonts from "./styles/fonts.css?url";
import initPanda from "./styles/panda.css?url";

import type { LinksFunction } from "@remix-run/node";
import type { PropsWithChildren } from "react";

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
    content: "@KCCTdensan",
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

export default function App() {
  const z = useAtomValue(zAtom);

  return (
    <>
      <AppWrapper z={z}>
        <Container z={z}>
          <Header />
          <NyanAudio />
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
