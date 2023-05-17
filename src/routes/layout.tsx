import { $, Slot, component$, useContextProvider, useOnDocument, useStore } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import type { KonamiState } from "~/contexts/konami";

import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import {
  AppWrapper,
  appStyles,
  konamiContainerStyle,
  FullWidthAudio,
  Container,
  Main,
} from "~/components/layout/style.css";
import { KonamiContext } from "~/contexts/konami";

export const usePlatformData = routeLoader$(async e => {
  return e.env.get("VITE_PLATFORM_NAME") ?? "unknown-deployment-none-none";
});

export default component$(() => {
  const konamiState = useStore<KonamiState>({
    konami: false,
    z: false,
  });

  useContextProvider(KonamiContext, konamiState);

  const cmds = [
    {
      cur: 0,
      cmd: [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
      ],
      f: $(() => {
        konamiState.konami = true;

        // eslint-disable-next-line no-console
        console.log("nyan!");
      }),
    },
    {
      cur: 0,
      cmd: [...Array(30)].map(_ => "ArrowLeft"),
      f: $(() => {
        konamiState.z = true;

        // eslint-disable-next-line no-console
        console.log("失なわれた30年でした");
      }),
    },
    {
      cur: 0,
      cmd: [...Array(30)].map(_ => "ArrowRight"),
      f: $(() => {
        konamiState.z = false;
      }),
    },
  ];

  useOnDocument(
    "keydown",
    $(_e => {
      const e = _e as KeyboardEvent;

      cmds.forEach(c => {
        if (e.key === c.cmd[c.cur++]) {
          if (c.cur === c.cmd.length) c.f();
        } else {
          c.cur = 0;
        }
      });
    }),
  );

  return (
    <AppWrapper class={konamiState.z ? appStyles.konami : appStyles.normal}>
      <Container class={{ [konamiContainerStyle]: konamiState.z }}>
        <Header />

        {konamiState.konami ? <FullWidthAudio autoPlay={true} controls={true} src="/nyan.ogg" class="play" /> : ""}

        <Main>
          <Slot />
        </Main>

        <Footer />
      </Container>
    </AppWrapper>
  );
});
