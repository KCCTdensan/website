import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HeaderNav } from "@/components/HeaderNav";
import { HeaderNavLink } from "@/components/HeaderNavLink";
import { konamiAtom } from "@/features/easteregg/atoms";
import { useAxisLabel } from "@/features/easteregg/hooks";
import type { RootLoaderData } from "@/root";
import { Link } from "@remix-run/react";
import { css, cx } from "@styles/css";
import { flex } from "@styles/patterns";
import { token } from "@styles/tokens";
import { useAtomValue } from "jotai";
import { useRouteLoaderData } from "react-router";

const navLinks = [
  { path: "/", name: "Top" },
  { path: "/about/", name: "About" },
  { path: "/blog/", name: "Blog" },
  { path: "/works/", name: "Works" },
  { path: "/dev/", name: "Dev" },
  { path: "/inner/", name: "Inner" },
  { path: "/joinus/", name: "JoinUs" },
];

const navLinksExt = [
  { url: "http://www.kobe-kosen.ac.jp", name: "KCCT" },
  { url: "https://20s.d3bu.net", name: "20s" },
];

export const Header = () => {
  const data = useRouteLoaderData("root") as RootLoaderData;
  const konami = useAtomValue(konamiAtom);
  const axis = useAxisLabel();

  return (
    <header
      className={flex({
        direction: "column",
        bg: "header.bg",
        color: "header.text",
        animation: "bgSlide 4s linear infinite",

        md: {
          rounded: "md",
        },
      })}
      style={{
        ...(konami && {
          background:
            "linear-gradient(to right, cyan, yellow, magenta, cyan) center/200%",
        }),
        ...(axis == "left" && { background: token("colors.header.bg.z") }),
        ...(axis == "right" && { background: token("colors.header.bg.soul") }),
      }}
    >
      <section
        className={flex({
          justify: "space-between",
          h: { base: "full", md: "3.5rem", xl: "4rem" },
          my: "0.5rem",
          userSelect: "none",
        })}
      >
        <Link
          className={flex({
            align: "center",
            h: "full",
            pos: "relative",

            md: {
              ml: ".25rem",
            },
          })}
          to="/"
        >
          <img
            className={css({
              h: "3.5rem",
              w: "3.5rem",
              mx: ".5rem",
            })}
            src="/icon.png"
            alt="Logo"
          />
          <p
            className={css({
              color: "logoText",
              fontSize: "2rem",
              fontWeight: "extrabold",
              lineHeight: 1.1,
              cursor: "pointer",
            })}
          >
            <span
              className={cx(
                css({ display: "inline-block" }),
                axis == "left" && css({ color: "logoStar" }),
                axis == "right" && css({ color: "logoYamato" }),
              )}
            >
              神戸
            </span>
            <span className={css({ display: "inline-block" })}>高専</span>
            <span className={css({ display: "inline-block" })}>電算部</span>
          </p>
        </Link>
        <p
          className={flex({
            display: { base: "none", md: "flex" },
            direction: "column",
            align: "flex-end",
            justify: "flex-end",
            h: "full",
            mx: ".5rem",
            color: "header.text.dim",
            fontWeight: "bolder",
            cursor: "default",
          })}
        >
          <span>/api/package.json</span>
          <span>{JSON.stringify(data.pkg)}</span>
        </p>
      </section>
      <HeaderNav axis={axis} gaming={konami}>
        <p>&gt; ls /</p>
        <ul
          className={flex({
            gap: "1rem",
          })}
        >
          {navLinks.map(({ path, name }) => (
            <li key={path}>
              <HeaderNavLink to={path} label={name} />
            </li>
          ))}
          {navLinksExt.map(({ url, name }) => (
            <li key={url}>
              <a
                className={css({ color: "header.nav.text" })}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        <p>&gt; pwd</p>
        <Breadcrumbs />
        <p>&gt; echo $PLATFORM</p>
        <p>{data.platform}</p>
        <p>&gt; _</p>
      </HeaderNav>
    </header>
  );
};
