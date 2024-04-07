import { IconLink } from "@/components/icon/IconLink";
import { SiGithub, SiTwitter } from "@icons-pack/react-simple-icons";
import { Flex, GridItem } from "@styles/jsx";
import { flex, grid } from "@styles/patterns";
import { token } from "@styles/tokens";

export const Footer = () => {
  const copyrightYear = new Date().getFullYear(); // !?

  return (
    <footer
      className={grid({
        gridTemplateColumns: "auto 1fr auto",
        justifyContent: "space-between",
        pos: "relative",
        m: "1.5rem",
        mt: { base: "auto" },
      })}
    >
      {/* Left */}
      <GridItem />
      <section>
        {/* Upstream type error (https://github.com/icons-pack/react-simple-icons/issues/219) */}
        <Flex justify="center">
          <IconLink
            href="https://github.com/KCCTdensan"
            icon={<SiGithub />}
            label="GitHub: KCCTdensan"
          />
          <IconLink
            href="https://twitter.com/intent/user?user_id=444436310"
            icon={<SiTwitter />}
            label="Twitter: kcct_densan"
          />
        </Flex>
        <small
          className={flex({
            flexWrap: "wrap",
            align: "center",
            justify: "center",
            mx: "auto",
            color: "text.dim",
            fontSize: "0.9rem",
            fontWeight: "bold",

            gap: "0.5rem",
          })}
        >
          <span>&copy; 1974-{copyrightYear}</span>
          <span>KCCTdensan</span>
          <span>神戸高専電算部</span>
        </small>
      </section>
      <GridItem />
    </footer>
  );
};
