import { countries } from '../data/countries';

export type RouteSeo = {
  title: string;
  description: string;
  keywords?: string;
  indexable: boolean;
  sitemapInclude: boolean;
  ogType?: string;
  zh?: { title: string; description: string }; // Simplified Chinese version
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
      zh:
        c.zh?.name && c.zh?.metaDescription
          ? { title: `${c.zh.name}型式批准与认证 | GaudiEnt`, description: c.zh.metaDescription }
          : undefined,
    } satisfies RouteSeo,
  ]),
);

export const ROUTE_SEO: Record<string, RouteSeo> = {
  '/': {
    title: 'GaudiEnt Global Type Approval, Homologation & Regulatory Compliance',
    description:
      'GaudiEnt delivers global type approval, homologation, regulatory compliance and product certification services in 180+ countries for manufacturers, labs and agencies.',
    keywords: 'type approval, homologation, regulatory compliance, product certification, GMA, market access',
    indexable: true,
    sitemapInclude: true,
    ogType: 'website',
    zh: {
      title: 'GaudiEnt 全球型式批准、Homologation 与法规合规',
      description: 'GaudiEnt 为制造商、实验室和机构提供覆盖 180 多个国家的全球型式批准、Homologation、法规合规和产品认证服务。',
    },
  },
  '/countries': {
    title: 'Countries We Cover | GaudiEnt Type Approval',
    description:
      'Radio, EMC and safety approvals with local partners in each market. See what is required in the countries we cover.',
    keywords: 'type approval countries, market access, homologation by country',
    indexable: true,
    sitemapInclude: true,
    ogType: 'website',
    zh: {
      title: '我们覆盖的国家 | GaudiEnt 型式批准',
      description: '与各市场本地合作伙伴共同办理无线电、EMC 和安全认证。查看我们覆盖国家的具体要求。',
    },
  },
  '/news': {
    title: 'Regulatory Updates | GaudiEnt',
    description:
      'Changes to type approval and certification rules in the markets we cover, and what they mean for your products.',
    keywords: 'regulatory updates, type approval news, certification changes',
    indexable: true,
    sitemapInclude: true,
    ogType: 'website',
    zh: {
      title: '法规动态 | GaudiEnt',
      description: '我们所覆盖市场的型式批准和认证规则变化，及其对您产品的影响。',
    },
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
