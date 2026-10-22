import { absoluteUrl, SITE_NAME, DEFAULT_OG_IMAGE } from './site';

export type JsonLdNode = Record<string, unknown>;

export function getSchemaForPath(pathname: string): JsonLdNode[] {
  const home = absoluteUrl('/');

  if (pathname.replace(/\/+$/, '') === '') {
    const organization: JsonLdNode = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: home,
      logo: DEFAULT_OG_IMAGE,
      image: DEFAULT_OG_IMAGE,
      description:
        'GaudiEnt provides global type approval, homologation, regulatory compliance and product certification services for manufacturers, test labs and agencies.',
      areaServed: 'Worldwide',
    };

    const website: JsonLdNode = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: home,
    };

    return [organization, website];
  }

  return [];
}