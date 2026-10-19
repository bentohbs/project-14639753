import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageShell from '../components/PageShell';
import QuoteForm from '../components/QuoteForm';
import { countries, getCountryText } from '../data/countries';

export default function CountriesIndex() {
  const { t, i18n } = useTranslation();

  return (
    <PageShell>
      <h1 className="text-3xl font-semibold leading-tight">{t('countries.title')}</h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground-800">{t('countries.intro')}</p>

      <ul className="mt-8 divide-y divide-background-200 border-y border-background-200">
        {countries.map((c) => {
          const text = getCountryText(c, i18n.language);
          return (
            <li key={c.slug}>
              <Link
                to={`/countries/${c.slug}`}
                className="flex items-baseline justify-between gap-4 py-4 hover:bg-background-100"
              >
                <span className="font-medium">{text.name}</span>
                <span className="text-sm text-foreground-800">{text.region}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-foreground-800">{t('countries.notListed')}</p>

      <section className="mt-10 border-t border-background-300 pt-10">
        <QuoteForm />
      </section>
    </PageShell>
  );
}
