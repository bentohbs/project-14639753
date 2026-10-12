import { countries } from '../data/countries';

export type RouteSeo = {
  title: string;
  description: string;
  keywords?: string;
  indexable: boolean;
  sitemapInclude: boolean;
  ogType?: string;
};

// One entry per country page, built from src/data/countries.ts.
// A country page is only indexed by Google once its status is 'verified'.
const countrySeo: Record<string, RouteSeo> = Object.fromEntries(
  countries.map((c) => [
    `/countries/${c.slug}`,
    {
      title: `${c.name} Type Approval & Certification | GaudiEnt`,
      description: c.metaDescription,
      keywords: `${c.name} type approval, ${c.name} certification, ${c.name} homologation`,
      indexable: c.status === 'verified',
      sitemapInclude: c.status === 'verified',
      ogType: 'website',
    } satisfies RouteSeo,
  ]),
);

export const ROUTE_SEO: Record<string, RouteSeo> = {
  '/': {
    title: 'GaudiEnt Global Type Approval & Regulatory Compliance',
    description:
      'GaudiEnt delivers global type approval, regulatory compliance and product certification services in 180+ countries for manufacturers, labs and agencies.',
    keywords: 'type approval, regulatory compliance, product certification, GMA, market access',
    indexable: true,
    sitemapInclude: true,
    ogType: 'website',
  },
  '/countries': {
    title: 'Countries We Cover | GaudiEnt Type Approval',
    description:
      'Radio, EMC and safety approvals with local partners in each market. See what is required in the countries we cover.',
    keywords: 'type approval countries, market access, homologation by country',
    indexable: true,
    sitemapInclude: true,
    ogType: 'website',
  },
  '/news': {
    title: 'Regulatory Updates | GaudiEnt',
    description:
      'Changes to type approval and certification rules in the markets we cover, and what they mean for your products.',
    keywords: 'regulatory updates, type approval news, certification changes',
    indexable: true,
    sitemapInclude: true,
    ogType: 'website',
  },
  ...countrySeo,
};

export function normalizePath(pathname: string): string {
  const cleaned = pathname.replace(/\/+$/, '');
  return cleaned || '/';
}

export function resolveSeo(pathname: string): RouteSeo | null {
  return ROUTE_SEO[normalizePath(pathname)] || null;
}
