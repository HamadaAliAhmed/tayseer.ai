const FALLBACK_SITE_URL = "https://tayseer.me";

function normalizeSiteUrl(value?: string) {
  const candidate = value?.trim();
  if (!candidate) return FALLBACK_SITE_URL;

  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") return FALLBACK_SITE_URL;
    return url.origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const SITE_ORIGIN = new URL(SITE_URL);

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
