import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageShell from '../components/PageShell';
import QuoteForm from '../components/QuoteForm';
import { findCountry, getCountryText } from '../data/countries';

// One page layout used for every country: /countries/mexico, /countries/brazil, ...
// The page title and description for Google come from src/seo/config.ts.

export default function CountryPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const country = findCountry(slug);

  if (!country) {
    return (
      <PageShell>
        <h1 className="text-2xl font-semibold">{t('country.notFound')}</h1>
        <p className="mt-2">
          <Link to="/countries" className="text-primary-500 underline">
            {t('country.seeAll')}
          </Link>
        </p>
      </PageShell>
    );
  }

  const text = getCountryText(country, i18n.language);

  return (
    <PageShell>
      <p className="text-sm text-foreground-800">
        <Link to="/countries" className="text-primary-500 underline">
          {t('country.breadcrumb')}
        </Link>{' '}
        / {text.name}
      </p>

      <h1 className="mt-3 text-3xl font-semibold leading-tight">{text.headline}</h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground-800">{text.intro}</p>
      <p className="mt-3 text-sm text-foreground-800">
        {t('country.authority')} {text.regulator}
        {country.status === 'verified' && country.lastVerified
          ? ` ${t('country.verified', { date: country.lastVerified })}`
          : ''}
      </p>
      {country.partnerName ? (
        <p className="mt-1 text-sm text-foreground-800">
          {t('country.partner')}{' '}
          {country.partnerUrl ? (
            <a
              href={country.partnerUrl}
              className="text-primary-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {country.partnerName}
            </a>
          ) : (
            country.partnerName
          )}
          .
        </p>
      ) : null}

      <section className="mt-12" aria-labelledby="key-points">
        <h2 id="key-points" className="text-2xl font-semibold">
          {t('country.keyPoints')}
        </h2>
        <dl className="mt-6 space-y-6">
          {text.keyPoints.map((p) => (
            <div key={p.title}>
              <dt className="font-semibold">{p.title}</dt>
              <dd className="mt-1 leading-relaxed text-foreground-800">{p.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-8 text-sm text-foreground-800">{t('country.note')}</p>

      <section className="mt-12" aria-labelledby="how-it-works">
        <h2 id="how-it-works" className="text-2xl font-semibold">
          {t('country.process')}
        </h2>
        <ol className="mt-6 list-decimal space-y-2 pl-6 leading-relaxed text-foreground-800">
          {text.process.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <section id="quote" className="mt-14 border-t border-background-300 pt-10">
        <QuoteForm
          defaultMarket={text.name}
          title={t('country.quoteTitle', { name: text.name })}
        />
      </section>
    </PageShell>
  );
}
