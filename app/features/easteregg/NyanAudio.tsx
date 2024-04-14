import nyan from "@/assets/audio/nyan.ogg";
import { css } from "@styles/css";
import { useAtomValue } from "jotai";
import { konamiAtom } from "./atoms";

export const NyanAudio = () => {
  const konami = useAtomValue(konamiAtom);

  return (
    <>
      {konami && (
        // biome-ignore lint/a11y/useMediaCaption: This is a decorative audio element
        <audio
          className={css({
            w: "full",
          })}
          autoPlay
          controls
          src={nyan}
        />
      )}
    </>
  );
};
