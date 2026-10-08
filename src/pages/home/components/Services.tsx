import { services } from '@/mocks/home';
import SectionTitle from './SectionTitle';

export default function Services() {
  return (
    <section id="services" className="bg-background-100 py-16 md:py-24 px-4 md:px-10">
      <SectionTitle eyebrow="What we do" title="Comprehensive Compliance Services" id="services" center />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((s) => (
          <article key={s.title} className="group bg-background-50 border border-background-200 rounded-lg p-6 md:p-8 hover:border-primary-300 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-background-50 transition-colors">
              <i className={`${s.icon} text-2xl`} />
            </div>
            <h3 className="font-heading text-lg text-foreground-950 mt-5">{s.title}</h3>
            <p className="text-sm text-foreground-600 mt-3 leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}