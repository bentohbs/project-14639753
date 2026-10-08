import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#categories', label: 'Categories' },
  { href: '#onboarding', label: 'Onboarding' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${solid ? 'bg-background-50 border-b border-background-200' : 'bg-transparent'}`}>
      <nav className="w-full px-4 md:px-10 h-20 md:h-24 flex items-center justify-between">
        <a href="#top" className="cursor-pointer flex items-center">
          <img
            src="https://public.readdy.ai/ai/img_res/63a81f82-341d-450e-9d49-5fb43b59d6a5.png"
            alt="GAUDI Type Approvals & Compliance Services"
            title="GAUDI Type Approvals and Compliance Services"
            className="h-[72px] md:h-[87px] w-auto"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm whitespace-nowrap cursor-pointer transition-colors hover:text-primary-500 text-foreground-800">{l.label}</a>
          ))}
          <a href="#contact" className="px-5 py-2.5 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 text-sm whitespace-nowrap cursor-pointer">Get Started</a>
        </div>
        <button type="button" onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer text-foreground-950" aria-label="Menu">
          <i className={`${open ? 'ri-close-line' : 'ri-menu-line'} text-2xl`} />
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background-50 border-t border-background-200 px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-foreground-800 py-1 cursor-pointer">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}