import { useTranslation } from 'react-i18next';
import { certification } from '@/mocks/home';

export default function Certification() {
  const { t } = useTranslation();
  return (
    <section id="certification" className="bg-background-50 py-16 md:py-24 px-4 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-16 items-start">
        <div>
          <span className="text-xs tracking-widest uppercase text-secondary-600 font-label">{t('cert.eyebrow')}</span>
          <h2 className="font-heading text-2xl md:text-4xl text-foreground-950 mt-2">
            <a href="#certification" className="cursor-pointer">{t('cert.title')}</a>
          </h2>
          <div className="h-0.5 w-16 bg-primary-500 mt-4" />
          <p className="text-sm md:text-base text-foreground-800 leading-relaxed mt-6">{t('cert.intro')}</p>
        </div>

        <div>
          <h3 className="font-heading text-sm md:text-base text-foreground-950 uppercase tracking-wider">
            <a href="#certification" className="cursor-pointer">{t('cert.heading')}</a>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-6">
            {certification.pillars.map((p, pi) => (
              <article key={p.authority} className="flex flex-col bg-background-100 border border-background-200 border-t-2 border-t-primary-500 rounded-lg p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 flex items-center justify-center rounded-md bg-background-50 text-primary-500 shrink-0">
                    <i className={`${p.icon} text-2xl`} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading text-lg text-foreground-950 leading-none">{p.authority}</p>
                    <p className="text-[11px] text-foreground-500 mt-1 leading-snug">{p.authoritySub}</p>
                  </div>
                </div>
                <p className="text-xs font-label tracking-wide uppercase text-accent-700 mt-5">{t(`cert.pillar.${pi}.role`)}</p>
                <div className="h-px bg-background-300/70 my-4" />
                <ul className="space-y-3">
                  {p.points.map((pt, ti) => (
                    <li key={pt.text} className="flex items-start gap-3 text-xs text-foreground-700 leading-relaxed">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-700 shrink-0 mt-0.5">
                        <i className={`${pt.icon} text-xs`} />
                      </span>
                      <span>{t(`cert.pillar.${pi}.points.${ti}`)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}