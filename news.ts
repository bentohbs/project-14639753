// One entry per news update. Newest items appear first automatically.
//
// To publish an update:
//   1. Copy an entry below and change the text.
//   2. Set published: true.
// Entries with published: false are hidden from the website.
//
// Write each update from the regulator's own announcement, and have a local
// partner confirm how it is being applied. Link the update to a country page
// by setting country to that page's slug (e.g. 'mexico').

export interface NewsItem {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  country?: string; // slug of a country page, optional
  summary: string; // one or two sentences
  whatToDo: string; // who is affected and what they should do
  sourceUrl?: string; // link to the regulator's own announcement
  published: boolean;
}

export const news: NewsItem[] = [
  {
    slug: 'example-update',
    title: 'Example: replace with a real update',
    date: '2026-01-01',
    country: 'mexico',
    summary: 'One or two plain sentences saying what the regulator changed.',
    whatToDo:
      'Say who is affected (for example, makers of Wi-Fi and Bluetooth products) and what they should do, in one or two sentences.',
    sourceUrl: '',
    published: false,
  },
];
