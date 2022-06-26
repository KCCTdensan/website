export function dateFmt(d: Date): string {
  return `${
    d.getFullYear()
  }/${
    `0${d.getMonth()+1}`.slice(-2)
  }/${
    `0${d.getDate()}`.slice(-2)
  }`
}

export function validUrl(s: string): boolean {
  try {
    new URL(s)
    return true
  } catch {
    return false
  }
}
