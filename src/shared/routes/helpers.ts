export function getCurrentUrl(pathname: string): string {
  return pathname.split(/[?#]/)[0];
}

export function checkIsActive(pathname: string, url: string): boolean {
  const currentUrl = getCurrentUrl(pathname);
  return currentUrl ? currentUrl.includes(url) : false;
}

export function checkIsEqual(pathname: string, url: string): boolean {
  return pathname === url;
}
