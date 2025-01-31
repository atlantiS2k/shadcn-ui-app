export const logo = {
  title: "Articles",
};

export const ROUTES = {
  HOME: "/",
  SSR_ARTICLES: "/ssr-articles",
  CSR_ARTICLES: "/csr-articles",
  SITEMAP: "/sitemap.xml",
} as const;

export type RouteKey = keyof typeof ROUTES;

interface RouteProps {
  href: (typeof ROUTES)[RouteKey];
  title: string;
  blank?: boolean;
}

export const routeList: RouteProps[] = [
  { href: ROUTES.SSR_ARTICLES, title: "SSR Articles with Pagination" },
  { href: ROUTES.CSR_ARTICLES, title: "CSR Articles with Load More" },
  { href: ROUTES.SITEMAP, title: "Sitemap.xml", blank: true },
];
