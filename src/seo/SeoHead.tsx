import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { resolveSeo } from './config';
import { SITE_NAME, DEFAULT_OG_IMAGE, absoluteUrl } from './site';

type MetaAttr = 'name' | 'property';

function setMeta(attr: MetaAttr, key: string, content?: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!content) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  if (el.getAttribute('content') !== content) {
    el.setAttribute('content', content);
  }
}

function setCanonical(href?: string) {
  const selector = 'link[rel="canonical"]';
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!href) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  if (el.getAttribute('href') !== href) {
    el.setAttribute('href', href);
  }
}

export default function SeoHead() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const seo = resolveSeo(pathname);
    const canonical = absoluteUrl(pathname);

    if (!seo) {
      document.title = `${SITE_NAME} | Global Type Approval & Compliance`;
      setMeta('name', 'description');
      setMeta('name', 'keywords');
      setMeta('name', 'robots', 'noindex, nofollow');
      setMeta('property', 'og:title', SITE_NAME);
      setMeta('property', 'og:description');
      setMeta('property', 'og:type');
      setMeta('property', 'og:url');
      setMeta('property', 'og:image');
      setMeta('property', 'og:site_name', SITE_NAME);
      setMeta('name', 'twitter:card');
      setMeta('name', 'twitter:title', SITE_NAME);
      setMeta('name', 'twitter:description');
      setMeta('name', 'twitter:image');
      setCanonical(undefined);
      return;
    }

    const zh = lang && lang.startsWith('zh') ? seo.zh : undefined;
    const title = zh?.title ?? seo.title;
    const description = zh?.description ?? seo.description;

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', seo.keywords);
    setMeta('name', 'robots', seo.indexable ? 'index, follow' : 'noindex, nofollow');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', seo.ogType || 'website');
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', DEFAULT_OG_IMAGE);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', DEFAULT_OG_IMAGE);
    setCanonical(canonical);
  }, [pathname, lang]);

  return null;
}