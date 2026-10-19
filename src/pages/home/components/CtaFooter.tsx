import { useTranslation } from 'react-i18next';
import { contacts, registeredAddress } from '@/mocks/home';

export default function CtaFooter() {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative py-16 md:py-20 px-4 md:px-10 overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=Abstract%20soft%20flowing%20light%20grey%20wave%20lines%20on%20a%20pale%20off-white%20background%2C%20elegant%20minimal%20texture%2C%20subtle%20gradient%2C%20airy%20and%20clean%20corporate%20backdrop&width=1920&height=600&seq=cta-hands-01&orientation=landscape"
          alt={t('cta.imgAlt')}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="relative text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground-950">{t('cta.title')}</h2>
          <p className="text-sm text-foreground-700 mt-3 max-w-xl mx-auto">{t('cta.text')}</p>
          <a href="#contact" className="inline-block mt-7 px-7 py-3 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 text-sm whitespace-nowrap cursor-pointer">{t('cta.link')}</a>
        </div>
      </section>
      <footer id="contact" className="bg-primary-50 px-4 md:px-10 pt-14 pb-6">
        <h2 className="font-heading text-xl md:text-2xl text-foreground-950 text-center">{t('footer.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {contacts.map((c, i) =>
            c.href ? (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="group flex flex-col items-center text-center cursor-pointer rounded-lg p-4 transition-colors hover:bg-background-50">
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-background-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-background-50"><i className={`${c.icon} text-2xl`} /></span>
                <p className="text-xs text-foreground-600 mt-3">{t(`contact.${i}.label`)}</p>
                <p className="text-sm text-foreground-950 font-medium mt-1 group-hover:text-primary-600 transition-colors">{c.value}</p>
              </a>
            ) : (
              <div key={c.label} className="flex flex-col items-center text-center rounded-lg p-4">
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-background-50 text-primary-500"><i className={`${c.icon} text-2xl`} /></span>
                <p className="text-xs text-foreground-600 mt-3">{t(`contact.${i}.label`)}</p>
                <p className="text-sm text-foreground-950 font-medium mt-1">{c.value}</p>
              </div>
            ),
          )}
        </div>
        <div className="mt-10 flex justify-center">
          <a href={registeredAddress.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center text-center cursor-pointer rounded-lg p-4 transition-colors hover:bg-background-50">
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-background-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-background-50"><i className="ri-map-pin-2-line text-2xl" /></span>
            <p className="text-xs text-foreground-600 mt-3">{t('footer.address')}</p>
            <p className="text-sm text-foreground-950 font-medium mt-1 leading-relaxed">
              {registeredAddress.lines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
              <i className="ri-map-pin-line" /> {t('footer.directions')}
            </span>
          </a>
        </div>
        <div className="mt-12 pt-5 border-t border-primary-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-foreground-600">
          <span>{t('footer.copy')}</span>
          <span>{t('footer.tagline')}</span>
        </div>
      </footer>
    </>
  );
}