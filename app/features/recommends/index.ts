export interface SingleRecommend {
  link: string;
  title: string;
}

export interface Recommend {
  link: string | string[];
  title: string;
}

const recommendCache = new Map<string, SingleRecommend>();

export const testRecommendUnchecked = async (
  baseUrl: string,
  recommend: SingleRecommend,
) =>
  await fetch(`${baseUrl}/${recommend.link}`)
    .then((response) => (response.ok ? recommend : Promise.reject(response)))
    .catch(() => null);

const getRecommend = async (baseUrl: string, recommend: SingleRecommend) => {
  const cacheKey = `recommend:${recommend.link}`;
  const cached = recommendCache.get(cacheKey);

  if (cached) return cached;

  const result = await testRecommendUnchecked(baseUrl, recommend);

  if (result) recommendCache.set(cacheKey, result);

  return result;
};

export const getRecommends = async (baseUrl: string, pathname: string) => {
  const pathnameWithoutSlash = pathname.replace(/\/$/, "");
  const recommends = [
    {
      link: [
        `/old/v0${pathnameWithoutSlash}.html`,
        `/old/v0${pathnameWithoutSlash}/index.html`,
      ],
      title: "旧版(2018年頃)へのリンク",
    },
    {
      link: `/old/v1${pathname}`,
      title: "旧版(2021年頃)へのリンク",
    },
  ];

  return Promise.all(
    recommends.map(async (recommend) => {
      if (Array.isArray(recommend.link)) {
        return Promise.all(
          recommend.link.map(async (link) => {
            const singleRecommend = { link, title: recommend.title };

            return getRecommend(baseUrl, singleRecommend);
          }),
        ).then((recommends) => recommends.find(Boolean) as SingleRecommend);
      }

      return getRecommend(baseUrl, recommend as SingleRecommend);
    }),
  ).then((recommends) => recommends.filter(Boolean) as SingleRecommend[]);
};
