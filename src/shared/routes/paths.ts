export interface PathsPostParams {
  postId: number;
}

export const paths = {
  home: "/",
  ssrArticles: "/ssr-articles",
  csrArticles: "/csr-articles",
  sitemap: "/sitemap.xml",
  articles: ({ postId }: PathsPostParams): string => `/posts/${postId}`,
} as const;

export type PathKeys = keyof typeof paths;
