import { stats } from '@/mocks/home';

export default function Hero() {
  return (
    <section id="top" className="relative h-[560px] md:h-[680px] w-full overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-blue-300">
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-6 fade-up">
        <span className="px-4 py-1.5 rounded-full bg-accent-500 text-foreground-950 text-xs font-label tracking-widest uppercase mb-6">Type Approval · Regulatory Compliance</span>
        <h1 className="font-heading text-3xl md:text-5xl text-foreground-950 max-w-3xl leading-tight">Your trusted partner for global market access</h1>
        <p className="mt-5 text-sm md:text-base text-foreground-700 max-w-2xl">Gaudi Enterprises helps manufacturers, test laboratories and third-party agencies certify products in 180+ countries — faster, trackable and worry-free.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#onboarding" className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 text-sm whitespace-nowrap cursor-pointer">
            Start Onboarding
            <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
          </a>
          <a href="#services" className="inline-flex items-center px-7 py-3 rounded-md border border-foreground-900/70 text-foreground-950 hover:bg-foreground-950/5 text-sm whitespace-nowrap cursor-pointer">Explore Our Services</a>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 z-10 hidden md:grid grid-cols-4 bg-background-50/95">
        {stats.map((s) => (
          <div key={s.label} className="py-6 text-center border-r border-background-200 last:border-r-0">
            <strong className="font-heading text-2xl text-primary-500">{s.value}</strong>
            <p className="text-xs text-foreground-600 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}