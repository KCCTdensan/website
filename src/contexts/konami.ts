import { createContextId } from "@builder.io/qwik";

export interface KonamiState {
  konami: boolean;
  z: boolean;
}

export const KonamiContext = createContextId<KonamiState>("layout.konami-context");
