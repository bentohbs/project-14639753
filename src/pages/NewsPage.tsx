import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageShell from '../components/PageShell';
import QuoteForm from '../components/QuoteForm';
import { findCountry, getCountryText } from '../data/countries';
import { getNewsText, news } from '../data/news';

export default function NewsPage() {
  const { t, i18n } = useTranslation();
  const items = news
    .filter((n) => n.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <PageShell>
      <h1 className="text-3xl font-semibold leading-tight">{t('news.title')}</h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground-800">{t('news.intro')}</p>

      {items.length === 0 ? (
        <p className="mt-10 text-foreground-800">{t('news.empty')}</p>
      ) : (
        <ul className="mt-10 space-y-10">
          {items.map((n) => {
            const country = findCountry(n.country);
            const text = getNewsText(n, i18n.language);
            return (
              <li key={n.slug} id={n.slug}>
                <p className="text-sm text-foreground-800">
                  {n.date}
                  {country ? (
                    <>
                      {' '}
                      <Link to={`/countries/${country.slug}`} className="text-primary-500 underline">
                        {getCountryText(country, i18n.language).name}
                      </Link>
                    </>
                  ) : null}
                </p>
                <h2 className="mt-1 text-xl font-semibold">{text.title}</h2>
                <p className="mt-2 leading-relaxed text-foreground-800">{text.summary}</p>
                <p className="mt-2 leading-relaxed text-foreground-800">
                  <strong className="text-foreground-950">{t('news.whatToDo')}</strong> {text.whatToDo}
                </p>
                {n.sourceUrl ? (
                  <p className="mt-2 text-sm">
                    <a href={n.sourceUrl} className="text-primary-500 underline" rel="noopener noreferrer">
                      {t('news.source')}
                    </a>
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}

      <section className="mt-14 border-t border-background-300 pt-10">
        <QuoteForm title={t('news.formTitle')} intro={t('news.formIntro')} />
      </section>
    </PageShell>
  );
}
