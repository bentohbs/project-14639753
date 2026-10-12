import { Link, useParams } from 'react-router-dom';
import PageShell from '../components/PageShell';
import QuoteForm from '../components/QuoteForm';
import { findCountry } from '../data/countries';

// One page layout used for every country: /countries/mexico, /countries/brazil, ...
// The page title and description for Google come from src/seo/config.ts.

export default function CountryPage() {
  const { slug } = useParams();
  const country = findCountry(slug);

  if (!country) {
    return (
      <PageShell>
        <h1 className="text-2xl font-semibold">We could not find that country</h1>
        <p className="mt-2">
          <Link to="/countries" className="text-primary-500 underline">
            See the countries we cover
          </Link>
        </p>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <p className="text-sm text-foreground-800">
        <Link to="/countries" className="text-primary-500 underline">
          Countries
        </Link>{' '}
        / {country.name}
      </p>

      <h1 className="mt-3 text-3xl font-semibold leading-tight">{country.headline}</h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground-800">{country.intro}</p>
      <p className="mt-3 text-sm text-foreground-800">
        Authority: {country.regulator}
        {country.status === 'verified' && country.lastVerified
          ? `. Last verified on ${country.lastVerified}.`
          : ''}
      </p>

      <section className="mt-12" aria-labelledby="key-points">
        <h2 id="key-points" className="text-2xl font-semibold">
          What you need to know
        </h2>
        <dl className="mt-6 space-y-6">
          {country.keyPoints.map((p) => (
            <div key={p.title}>
              <dt className="font-semibold">{p.title}</dt>
              <dd className="mt-1 leading-relaxed text-foreground-800">{p.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12" aria-labelledby="how-it-works">
        <h2 id="how-it-works" className="text-2xl font-semibold">
          How we handle it
        </h2>
        <ol className="mt-6 list-decimal space-y-2 pl-6 leading-relaxed text-foreground-800">
          {country.process.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <section id="quote" className="mt-14 border-t border-background-300 pt-10">
        <QuoteForm
          defaultMarket={country.name}
          title={`Selling in ${country.name}? Get a quote`}
        />
      </section>
    </PageShell>
  );
}
