import pkg from "$lib/../../package.json"

export async function get() {
  const { name, version } = pkg
  const body = { name, version }
  return { body }
}
