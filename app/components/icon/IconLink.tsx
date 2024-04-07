import type { PropsWithClassName } from "@/types/frontend";
import { css, cx } from "@styles/css";
import type { ReactNode } from "react";

export type IconLinkProps = PropsWithClassName<{
  href: string;
  icon: ReactNode;
  label: string;
}>;

export const IconLink = ({ className, href, icon, label }: IconLinkProps) => (
  <a className={cx(className, css({
    m: "0.4rem",
    color: "text.dim",
  }))} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
    {icon}
  </a>
);