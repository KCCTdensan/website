import { API_BASE } from "@/lib/.server/env";

export type ArticleData = {
  data: {
    slug: string;
    title?: string;
    description?: string;
    author?: string;
    noRobots?: boolean;
    date?: string;
    dateUpd?: string;
    body: string;
  }[];
};

export type Article = ArticleData["data"][number] & {
  authors: string[];
};

export type ArticlesResponse = ArticleData & {
  data: Article[];
};

export const getArticle = async (
  entrypoint: string,
): Promise<ArticlesResponse> => {
  const url = `${API_BASE}/api/${entrypoint}.json`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.statusText}`);
  }

  const { data } = (await response.json()) as ArticlesResponse;

  return {
    data: data.map((article) => ({
      ...article,
      authors: article.author?.split(/, ?/) || [],
      body: article.body.replace(/\$assets\//g, "/api/assets/"),
    })),
  };
};
