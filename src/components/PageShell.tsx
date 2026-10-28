import type { ReactNode } from 'react';
import Navbar from '../pages/home/components/Navbar';
import CtaFooter from '../pages/home/components/CtaFooter';

// Same top menu and footer as the home page, so new pages feel like part of the site.
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background-50 text-foreground-950 min-h-screen">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">{children}</div>
      </main>
      <CtaFooter />
    </div>
  );
}
