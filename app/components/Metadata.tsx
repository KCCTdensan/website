import { formatDateYMD } from "@/lib/utils";
import { type UIMatch, useMatches } from "@remix-run/react";
import type { ReactNode } from "react";
import { Fragment } from "react";

const KEYS_DATE = ["post", "updated"];
const KEYS_ARRAY = ["authors"];

const transformMetadata = (key: string, value: string): ReactNode => {
  if (KEYS_DATE.includes(key)) {
    return (
      <>
        "<time>{formatDateYMD(new Date(value))}</time>"
      </>
    );
  }

  if (KEYS_ARRAY.includes(key)) {
    return (
      <>
        [
        {value.split(/, ?/).map((author, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static calculation
          <Fragment key={index}>
            <span>"{author}"</span>
            {index === value.split(/, ?/).length - 1 ? "" : ", "}
          </Fragment>
        ))}
        ]
      </>
    );
  }

  return value;
};

export const Metadata = () => {
  const matches = useMatches() as UIMatch<{
    meta?: {
      [key: string]: string;
    };
  }>[];

  const metaObj = matches[matches.length - 1].data?.meta;

  if (!metaObj) return null;

  const meta = Object.keys(metaObj).reduce(
    (acc, key) => {
      const value = metaObj[key];

      if (value) {
        switch (key) {
          case "date":
            acc.post = value;
            break;
          case "dateUpd":
            acc.updated = value;
            break;
          default:
            acc[key] = value;
            break;
        }
      }

      return acc;
    },
    {} as { [key: string]: string },
  );

  if (Object.keys(meta).length === 0) return null;

  return (
    <>
      <aside
        style={{
          fontSize: "1rem",
          fontFamily: "var(--fonts-mono)",
          margin: ".8rem 1rem",
        }}
      >
        <p>
          {"meta = { "}
          {Object.entries(meta)
            .sort(([keyA], [keyB]) => {
              // Sort by date keys first
              if (KEYS_DATE.includes(keyA) && !KEYS_DATE.includes(keyB)) {
                return -1;
              }

              if (!KEYS_DATE.includes(keyA) && KEYS_DATE.includes(keyB)) {
                return 1;
              }

              // Sort by array keys second
              if (KEYS_ARRAY.includes(keyA) && !KEYS_ARRAY.includes(keyB)) {
                return -1;
              }

              if (!KEYS_ARRAY.includes(keyA) && KEYS_ARRAY.includes(keyB)) {
                return 1;
              }

              // Sort by key name last
              return keyA.localeCompare(keyB);
            })
            .map(([key, value], index) => (
              <span key={key}>
                {key}: {transformMetadata(key, value)}
                {index === Object.keys(meta).length - 1 ? "" : ", "}
              </span>
            ))}
          {" };"}
        </p>
      </aside>
      <hr />
    </>
  );
};
