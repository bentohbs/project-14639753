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
    slug: 'south-africa-icasa-delays',
    title: 'South Africa: ICASA type approvals delayed after system problems',
    date: '2026-07-16',
    country: 'south-africa',
    summary:
      'ICASA reported technical problems with its Automated Spectrum Management System (ASMS) that delayed some type approval applications and built up a backlog, extending approval times.',
    whatToDo:
      'If you have a South Africa launch date, allow extra time for type approval and tell us your timeline. We check the current processing position before we quote.',
    sourceUrl: '',
    published: true,
  },
  {
    slug: 'south-africa-innovation-spectrum',
    title: 'South Africa: new rules for shared use of the 3.8 GHz and 6 GHz bands',
    date: '2026-05-22',
    country: 'south-africa',
    summary:
      'On 22 May 2026 ICASA published the Regulations on the Use of Innovation Spectrum, 2026, covering ranges that include 3800\u20134200 MHz and parts of the 6 GHz band. Devices used in these bands must be type approved, installed by registered professionals and carry a label with the ICASA-ID.',
    whatToDo:
      'If your product uses these bands, check with us whether it falls in scope before you plan a South Africa launch.',
    sourceUrl: '',
    published: true,
  },
  {
    slug: 'brazil-certifica-system',
    title: 'Brazil: Anatel moves certification to the new Certifica system',
    date: '2026-09-08',
    country: 'brazil',
    summary:
      'On 8 September 2026 Anatel moved certification and homologation of telecom products to a new platform called Certifica, replacing the old SCH system. The certification rules themselves did not change.',
    whatToDo:
      'If you have a Brazil approval in progress or due for renewal, check that your local representative is registered in Anatel\u2019s SEI system and has authorised the certification body to act for it. New filings also need a signed product warranty declaration and a digital signature from the local applicant.',
    sourceUrl: '',
    published: true,
  },
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
