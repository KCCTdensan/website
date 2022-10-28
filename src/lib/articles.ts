export default async function articles(fetch, entrypoint) {
  const api = await fetch(`/api/articles/${entrypoint}.json`)
  return api.ok ? await api.json() : { data: [] }
}
