import { NavLink } from "@remix-run/react";
import { css } from "@styles/css";

export interface HeaderNavLinkProps {
  to: string;
  label: string;
}

export const HeaderNavLink = ({ to, label }: HeaderNavLinkProps) => (
  <NavLink
    className={css({
      color: "header.nav.text",

      "&.active": {
        color: "header.nav.strong",
        textDecoration: "underline",
      },
    })}
    to={to}
  >
    {label}
  </NavLink>
);
