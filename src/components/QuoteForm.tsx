import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

// One form, reused on every page.
// It sends enquiries to a form service (e.g. Formspree). Set the address in
// the VITE_FORM_ENDPOINT setting (see WIRING.md). If it is not set, the form
// falls back to opening an email to VITE_CONTACT_EMAIL.

const ENDPOINT =
  (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ||
  'https://formspree.io/f/xyekparb';
const CONTACT_EMAIL =
  (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ||
  'info@gaudient.com';

// The value is always sent in English so enquiries read the same in your inbox;
// the label shown on the page is translated.
const PRODUCT_OPTIONS = [
  'Radio / wireless (Wi-Fi, Bluetooth, etc.)',
  'EMC',
  'Safety mark',
  'More than one of these',
  'Not sure yet',
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

interface Props {
  /** Pre-fills the "markets" box, e.g. "Mexico" on the Mexico page. */
  defaultMarket?: string;
  title?: string;
  intro?: string;
}

const fieldClass =
  'mt-1 block w-full rounded-md border border-background-300 bg-background-50 text-foreground-950 px-3 py-2 text-base focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500';

export default function QuoteForm({ defaultMarket = '', title, intro }: Props) {
  const { t, i18n } = useTranslation();
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Hidden trap field: real people leave it empty, spam bots fill it in.
    if (data.get('website')) return;

    data.append('page', window.location.pathname);
    data.append('language', i18n.language && i18n.language.startsWith('zh') ? 'Chinese' : 'English');

    // Formspree uses a field named _subject as the email subject line.
    const subject = `Quote request: ${data.get('markets') || 'new enquiry'} (${data.get('company') || 'no company given'})`;
    data.append('_subject', subject);

    if (!ENDPOINT) {
      if (CONTACT_EMAIL) {
        const body = [...data.entries()]
          .filter(([k]) => k !== 'website')
          .map(([k, v]) => `${k}: ${v}`)
          .join('\n');
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
          'Quote request',
        )}&body=${encodeURIComponent(body)}`;
        return;
      }
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-md border border-background-300 p-6">
        <h2 className="text-xl font-semibold">{t('form.thanksTitle')}</h2>
        <p className="mt-2">{t('form.thanksText')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby="quote-title">
      <div>
        <h2 id="quote-title" className="text-xl font-semibold">
          {title ?? t('form.title')}
        </h2>
        <p className="mt-1 text-foreground-800">{intro ?? t('form.intro')}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">{t('form.name')}</span>
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block">
          <span className="text-sm font-medium">{t('form.company')}</span>
          <input name="company" required autoComplete="organization" className={fieldClass} />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium">{t('form.email')}</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">{t('form.service')}</span>
        <select name="service" className={fieldClass} defaultValue={PRODUCT_OPTIONS[0]}>
          {PRODUCT_OPTIONS.map((o, i) => (
            <option key={o} value={o}>
              {t(`form.opt.${i}`)}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-medium">{t('form.markets')}</span>
        <input
          name="markets"
          required
          defaultValue={defaultMarket}
          placeholder={t('form.marketsPlaceholder')}
          className={fieldClass}
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">{t('form.product')}</span>
        <textarea
          name="product"
          rows={3}
          placeholder={t('form.productPlaceholder')}
          className={fieldClass}
        />
      </label>

      {/* Hidden spam trap */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Leave this empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === 'error' && (
        <p role="alert" className="text-red-700">
          {t('form.error')}
          {CONTACT_EMAIL ? t('form.errorAt', { email: CONTACT_EMAIL }) : ''}
          {t('form.errorEnd')}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-md bg-primary-500 px-5 py-2.5 font-medium text-background-50 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-60 cursor-pointer"
      >
        {status === 'sending' ? t('form.sending') : t('form.send')}
      </button>
    </form>
  );
}
