const env = import.meta.env as Record<string, string | undefined>;

export const SITE_URL = (env.VITE_SITE_URL || '').replace(/\/+$/, '');

export const SITE_NAME = 'GaudiEnt';

export const DEFAULT_OG_IMAGE =
  'https://public.readdy.ai/ai/img_res/63a81f82-341d-450e-9d49-5fb43b59d6a5.png';

export function absoluteUrl(path: string): string | undefined {
  if (!SITE_URL) return undefined;
  const normalized = path.replace(/\/+$/, '') || '/';
  return `${SITE_URL}${normalized.startsWith('/') ? normalized : `/${normalized}`}`;
}