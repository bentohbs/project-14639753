import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import QuoteForm from '../components/QuoteForm';
import { countries } from '../data/countries';

export default function CountriesIndex() {
  return (
    <PageShell>
      <h1 className="text-3xl font-semibold leading-tight">Countries we cover</h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground-800">
        Radio, EMC and safety approvals, handled with local partners in each market.
        Select a country to see what is required there.
      </p>

      <ul className="mt-8 divide-y divide-background-200 border-y border-background-200">
        {countries.map((c) => (
          <li key={c.slug}>
            <Link
              to={`/countries/${c.slug}`}
              className="flex items-baseline justify-between gap-4 py-4 hover:bg-background-100"
            >
              <span className="font-medium">{c.name}</span>
              <span className="text-sm text-foreground-800">{c.region}</span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-foreground-800">
        Selling somewhere not listed? Tell us below and we will check.
      </p>

      <section className="mt-10 border-t border-background-300 pt-10">
        <QuoteForm />
      </section>
    </PageShell>
  );
}
