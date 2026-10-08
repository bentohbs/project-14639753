import { onboardingSteps } from '@/mocks/home';
import SectionTitle from './SectionTitle';

export default function Onboarding() {
  return (
    <section id="onboarding" className="bg-secondary-50 py-16 md:py-24 px-4 md:px-10">
      <SectionTitle eyebrow="How it works" title="Client Onboarding in 4 Steps" id="onboarding" center />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {onboardingSteps.map((s, i) => (
          <div key={s.no} className="relative bg-background-50 rounded-lg p-6 md:p-7 border border-secondary-200">
            <span className={`font-heading text-3xl ${i === 0 ? 'text-accent-600' : 'text-secondary-500'}`}>{s.no}</span>
            <h3 className="font-heading text-lg text-foreground-950 mt-4">{s.title}</h3>
            <p className="text-sm text-foreground-600 mt-3 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="#contact" className="inline-block px-7 py-3 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 text-sm whitespace-nowrap cursor-pointer">Begin Your Onboarding</a>
      </div>
    </section>
  );
}