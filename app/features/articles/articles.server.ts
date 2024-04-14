import { API_BASE } from "@/lib/env.server";
import { type Result, err, ok } from "@/lib/result";

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
): Promise<Result<ArticlesResponse, Response>> => {
  const url = `${API_BASE}/api/${entrypoint}.json`;
  const response = await fetch(url);

  if (!response.ok) {
    return err(response);
  }

  const { data } = (await response.json()) as ArticlesResponse;

  return ok({
    data: data.map((article) => ({
      ...article,
      authors: article.author?.split(/, ?/) || [],
      body: article.body.replace(/\$assets\//g, "/api/assets/"),
    })),
  });
};
