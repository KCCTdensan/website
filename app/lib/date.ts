export const formatDateYMD = (date: Date) =>
  date.toISOString().split("T")[0].replaceAll("-", "/")