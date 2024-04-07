import { konamiAtom, zAtom } from "@/atoms/special";
import {
  KEY_SEQUENCE_KONAMI, KEY_SEQUENCE_Z_DISABLE,
  KEY_SEQUENCE_Z_ENABLE
} from "@/lib/constants/keys";
import { useKeySequence } from "@/lib/hooks/key-sequence";
import { useSetAtom } from "jotai";

export const SpecialKeyHandlers = () => {
  const setKonami = useSetAtom(konamiAtom);
  const setZ = useSetAtom(zAtom);

  useKeySequence(KEY_SEQUENCE_KONAMI, () => {
    setKonami(true);

    console.log("nyan!");
  });

  useKeySequence(KEY_SEQUENCE_Z_ENABLE, () => {
    setZ(true);

    console.log("失なわれた30年でした");
  })

  useKeySequence(KEY_SEQUENCE_Z_DISABLE, () => {
    setZ(false);

    console.log("30年が返ってきました");
  });

  return null;
}