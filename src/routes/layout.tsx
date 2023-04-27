import { Slot, component$, createContextId, useContextProvider, useStore, useVisibleTask$ } from "@builder.io/qwik";

import { RootLayout } from "~/components/RootLayout";
import { Container, konamiContainerStyle, rootLayoutStyles } from "~/components/RootLayout/style.css";

export interface KonamiState {
  konami: boolean;
  z: boolean;
}

export const KonamiContext = createContextId<KonamiState>("home.konami-context");

export default component$(() => {
  const konamiState = useStore<KonamiState>({
    konami: false,
    z: false,
  });

  useContextProvider(KonamiContext, konamiState);

  useVisibleTask$(() => {
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
        f: () => {
          konamiState.konami = true;

          console.log("nyan!");
        },
      },
      {
        cur: 0,
        cmd: [...Array(30)].map(_ => "ArrowLeft"),
        f: () => {
          konamiState.z = true;

          console.log("失なわれた30年でした");
        },
      },
      {
        cur: 0,
        cmd: [...Array(30)].map(_ => "ArrowRight"),
        f: () => {
          konamiState.z = false;
        },
      },
    ];

    addEventListener("keydown", (e: KeyboardEvent) => {
      cmds.forEach(c => {
        if (e.key === c.cmd[c.cur++]) {
          if (c.cur === c.cmd.length) c.f();
        } else {
          c.cur = 0;
        }
      });
    });
  });

  return (
    <>
      <RootLayout class={konamiState.z ? rootLayoutStyles.konami : rootLayoutStyles.normal}>
        <Container class={konamiState.z ? konamiContainerStyle : ""}>
          <Slot />
        </Container>
      </RootLayout>
    </>
  );
});
