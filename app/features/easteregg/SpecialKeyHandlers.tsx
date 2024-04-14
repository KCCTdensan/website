import { useAtom, useSetAtom } from "jotai";
import {
  KEY_SEQUENCE_KONAMI,
  KEY_SEQUENCE_LEFTWARD,
  KEY_SEQUENCE_RIGHTWARD,
} from ".";
import { axisAtom, konamiAtom } from "./atoms";
import { useKeySequence } from "./hooks";

export const SpecialKeyHandlers = () => {
  const setKonami = useSetAtom(konamiAtom);
  const [axis, setAxis] = useAtom(axisAtom);

  useKeySequence(KEY_SEQUENCE_KONAMI, () => {
    setKonami(true);

    console.log("nyan!");
  });

  useKeySequence(KEY_SEQUENCE_LEFTWARD, () => {
    setAxis((v) => (v > 0 ? 0 : -1));

    console.log(
      axis ? "おかき屋さんは事業廃止しました" : "失なわれた30年でした",
    );
  });

  useKeySequence(KEY_SEQUENCE_RIGHTWARD, () => {
    setAxis((v) => (v < 0 ? 0 : 1));

    console.log(
      axis ? "30年が返ってきました" : "おかき屋さんがオープンしました",
    );
  });

  return null;
};
