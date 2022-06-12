export type _ExtArticleApi = {
  data: {
    slug: string
    title?: string
    description?: string
    author?: string
    noRobots?: boolean
    date?: string
    dateUpd?: string
    body: string
  }[]
}

export type Article = _ExtArticleApi["data"][number] & {
  authors: string[]
}

export type ArticleApi = _ExtArticleApi & {
  data: Article[]
}

export type PackageJson = {
  name: string
  version: string
}
