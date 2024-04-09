import { Link, type LinkProps, useLocation } from "@remix-run/react";

export const InternalLink = ({
  to,
  ...props
}: Omit<LinkProps, "to" | "relative" | "prefetch"> & {
  to: string;
}) => {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, "");

  const relativeTo = !to.startsWith("/") ? `${pathname}/${to}` : to;

  return (
    <Link to={relativeTo} relative="path" prefetch="viewport" {...props}>
      {props.children}
    </Link>
  );
};
