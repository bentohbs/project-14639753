export type RouteSeo = {
  title: string;
  description: string;
  keywords?: string;
  indexable: boolean;
  sitemapInclude: boolean;
  ogType?: string;
};

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
};

export function normalizePath(pathname: string): string {
  const cleaned = pathname.replace(/\/+$/, '');
  return cleaned || '/';
}

export function resolveSeo(pathname: string): RouteSeo | null {
  return ROUTE_SEO[normalizePath(pathname)] || null;
}