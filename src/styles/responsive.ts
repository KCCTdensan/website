export const bp = {
  min: "0",
  xs: "384px",
  sm: "512px",
  md: "768px",
  lg: "896px",
  xl: "1280px",
};

export type Breakpoints = keyof typeof bp;

/**
 * Media query string for breakpoint and below
 * Use with @media prefix!
 * @param bpKey Breakpoint key
 * @returns Media query string for breakpoint and below
 */

export const mqUpto = (bpKey: Breakpoints) => `(max-width: ${bp[bpKey]})`;

export const mqDownto = (bpKey: Breakpoints) => `(min-width: ${bp[bpKey]})`;
