import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSchemaForPath } from './schema';

const SCRIPT_ID = 'route-jsonld';

export default function JsonLd() {
  const { pathname } = useLocation();

  useEffect(() => {
    const existing = document.getElementById(SCRIPT_ID);
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);

    const nodes = getSchemaForPath(pathname);
    if (!nodes.length) return undefined;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = SCRIPT_ID;
    script.textContent = JSON.stringify(nodes.length === 1 ? nodes[0] : nodes);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(SCRIPT_ID);
      if (el && el.parentNode) el.parentNode.removeChild(el);
    };
  }, [pathname]);

  return null;
}