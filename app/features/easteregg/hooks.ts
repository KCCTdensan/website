import { axisAtom } from "./atoms";
import { useAtomValue } from "jotai";
import { useEffect, useRef } from "react";

export const useKeySequence = (
  sequence: string[],
  callback: () => void,
  oneshot = false,
) => {
  const index = useRef(0);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === sequence[index.current++]) {
        if (index.current === sequence.length) {
          callback();

          if (!oneshot) {
            index.current = 0;
          }
        }
      } else {
        index.current = 0;
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [callback, oneshot, sequence]);
};

export function useAxisLabel() {
  const axis = useAtomValue(axisAtom);
  return axis < 0 ? "left" : axis > 0 ? "right" : "mid";
}
