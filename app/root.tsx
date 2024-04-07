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
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { css } from "@styles/css";
import { useAtomValue } from "jotai";
import fonts from "./styles/fonts.css?url";
import initPanda from "./styles/panda.css?url";
import { name, version } from "../package.json";

import type { LinksFunction } from "@remix-run/node";
import type { PropsWithChildren } from "react";

export const loader = () => ({
  pkg: { name, version },
  platform: PLATFORM,
})

export type RootLoaderData = ReturnType<typeof loader>;

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico" },
  { rel: "stylesheet", href: fonts },
  { rel: "stylesheet", href: initPanda },
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
          <Header/>
          <NyanAudio/>
          <main className={css({
            m: "1.5rem"
          })}>
            <article>
              <Outlet/>
            </article>
          </main>
          <Footer/>
        </Container>
      </AppWrapper>
      <SpecialKeyHandlers/>
    </>
  );
}
