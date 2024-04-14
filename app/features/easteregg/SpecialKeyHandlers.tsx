import {
  KEY_SEQUENCE_KONAMI,
  KEY_SEQUENCE_LEFTWARD,
  KEY_SEQUENCE_RIGHTWARD,
} from ".";
import { konamiAtom, axisAtom } from "./atoms";
import { useKeySequence } from "./hooks";
import { useSetAtom } from "jotai";

export const SpecialKeyHandlers = () => {
  const setKonami = useSetAtom(konamiAtom);
  const setAxis = useSetAtom(axisAtom);

  useKeySequence(KEY_SEQUENCE_KONAMI, () => {
    setKonami(true);

    console.log("nyan!");
  });

  useKeySequence(KEY_SEQUENCE_LEFTWARD, () => {
    setAxis((v) => (v > 0 ? 0 : -1));

    console.log("失なわれた30年でした");
  });

  useKeySequence(KEY_SEQUENCE_RIGHTWARD, () => {
    setAxis((v) => (v < 0 ? 0 : 1));

    console.log("30年が返ってきました");
  });

  return null;
};
