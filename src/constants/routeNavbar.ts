export const logo = {
  title: "Articles Blog App",
};

export const ROUTES = {
  HOME: "/",
  SSR_ARTICLES: "/ssr-articles",
  CSR_ARTICLES: "/csr-articles",
} as const;

export type RouteKey = keyof typeof ROUTES;

interface RouteProps {
  href: (typeof ROUTES)[RouteKey];
  title: string;
  blank?: boolean;
}

export const routeList: RouteProps[] = [
  { href: ROUTES.SSR_ARTICLES, title: "SSR Articles" },
  { href: ROUTES.CSR_ARTICLES, title: "CSR Articles" },
];
