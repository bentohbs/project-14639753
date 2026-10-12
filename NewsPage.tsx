import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import QuoteForm from '../components/QuoteForm';
import { findCountry } from '../data/countries';
import { news } from '../data/news';

export default function NewsPage() {
  const items = news
    .filter((n) => n.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <PageShell>
      <h1 className="text-3xl font-semibold leading-tight">Regulatory updates</h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground-800">
        Changes to approval rules in the markets we cover, with what they mean for your
        products.
      </p>

      {items.length === 0 ? (
        <p className="mt-10 text-foreground-800">
          No updates yet. Use the form below and we will tell you when something changes in
          your markets.
        </p>
      ) : (
        <ul className="mt-10 space-y-10">
          {items.map((n) => {
            const country = findCountry(n.country);
            return (
              <li key={n.slug} id={n.slug}>
                <p className="text-sm text-foreground-800">
                  {n.date}
                  {country ? (
                    <>
                      {' '}
                      <Link to={`/countries/${country.slug}`} className="text-primary-500 underline">
                        {country.name}
                      </Link>
                    </>
                  ) : null}
                </p>
                <h2 className="mt-1 text-xl font-semibold">{n.title}</h2>
                <p className="mt-2 leading-relaxed text-foreground-800">{n.summary}</p>
                <p className="mt-2 leading-relaxed text-foreground-800">
                  <strong className="text-foreground-950">What to do:</strong> {n.whatToDo}
                </p>
                {n.sourceUrl ? (
                  <p className="mt-2 text-sm">
                    <a href={n.sourceUrl} className="text-primary-500 underline" rel="noopener noreferrer">
                      Read the regulator&rsquo;s announcement
                    </a>
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}

      <section className="mt-14 border-t border-background-300 pt-10">
        <QuoteForm
          title="Does an update affect your product?"
          intro="Send us the model and the countries. We will tell you what applies, free of charge."
        />
      </section>
    </PageShell>
  );
}
