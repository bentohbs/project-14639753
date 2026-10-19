import { Trans, useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';

const pointKeys = [0, 1, 2, 3, 4];

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="bg-background-50 py-16 md:py-24 px-4 md:px-10">
      <SectionTitle eyebrow={t('about.eyebrow')} title={t('about.title')} id="about" />
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-background-100 rounded-lg overflow-hidden">
        <div className="p-6 md:p-12">
          <p className="text-sm md:text-base text-foreground-800 leading-relaxed" style={{ transform: 'translateY(86.06px)' }}>
            <Trans i18nKey="about.p1" />
          </p>
          <p className="text-sm md:text-base text-foreground-800 leading-relaxed mt-4" style={{ transform: 'translateY(-129.12px)' }}>
            <Trans i18nKey="about.p2" />
          </p>
          <p className="text-sm md:text-base text-foreground-700 leading-relaxed mt-4">
            {t('about.p3')}
          </p>
          <ul className="mt-6 space-y-3">
            {pointKeys.map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground-800">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-700 shrink-0 mt-0.5"><i className="ri-check-line text-xs" /></span>
                {t(`about.points.${i}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-72 lg:h-auto min-h-[320px]">
          <img
            src="https://readdy.ai/api/search-image?query=Tablet%20showing%20a%20certification%20document%20icon%20on%20a%20clean%20white%20desk%20with%20notebook%2C%20coffee%20cup%20and%20pens%2C%20bright%20minimal%20flat%20lay%20photography%2C%20soft%20natural%20light%2C%20calm%20neutral%20tones&width=900&height=700&seq=about-cert-01&orientation=landscape"
            alt={t('about.imgAlt')}
            title={t('about.imgTitle')}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}