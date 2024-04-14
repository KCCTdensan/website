// 標準ライブラリっぽいやつはここに置く

export type PropsWithClassName<T> = T & { className?: string };

export const formatDateYMD = (date: Date) =>
  date.toISOString().split("T")[0].replaceAll("-", "/");
