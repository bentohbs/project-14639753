// One entry per country page. To add a country, copy the Mexico block,
// change the text, and save. The page at /countries/<slug> appears automatically.
//
// IMPORTANT: keep status as 'draft' until a local partner has confirmed the
// content is current. Set status to 'verified' and fill in lastVerified
// (format YYYY-MM-DD) and the page will show "Last verified on ...".

export type CountryStatus = 'draft' | 'verified';

export interface KeyPoint {
  title: string;
  body: string;
}

export interface Country {
  slug: string; // used in the web address, e.g. "mexico" -> /countries/mexico
  name: string;
  region: string;
  regulator: string;
  headline: string;
  metaDescription: string; // shown in Google results, keep under 160 characters
  intro: string;
  keyPoints: KeyPoint[];
  process: string[];
  status: CountryStatus;
  lastVerified?: string;
}

export const countries: Country[] = [
  {
    slug: 'mexico',
    name: 'Mexico',
    region: 'Latin America',
    regulator: 'CRT (formerly IFT)',
    headline: 'Radio and safety approval for Mexico',
    metaDescription:
      'Type approval for Mexico: Wi-Fi and Bluetooth homologation (CRT) and NOM safety, handled by one team with local partners.',
    intro:
      'Wi-Fi, Bluetooth and other short-range radio devices need homologation before they can enter the Mexican market. Electrical products also need to meet NOM requirements. We manage both with our local partners, so you deal with one team.',
    keyPoints: [
      {
        title: 'Which radio devices are covered',
        body: 'Short-range devices such as Wi-Fi and Bluetooth products operating in the 902–928 MHz, 2400–2483.5 MHz and 5725–5850 MHz bands fall under NOM-208-SCFI-2016.',
      },
      {
        title: 'The authority has changed',
        body: 'Mexico\u2019s telecom homologation authority has moved from the IFT to the CRT, and procedures have been in transition. Mexican labs and certification bodies have kept working throughout. We confirm the current process with our local partners before we quote.',
      },
      {
        title: 'Local representation is required',
        body: 'The application is filed on the authority\u2019s electronic portal with the help of a Mexican legal representative, together with a certificate of conformity from a certification body.',
      },
      {
        title: 'Labelling',
        body: 'Approved products carry the homologation number, and the user manual must show it too.',
      },
      {
        title: 'Electrical safety (NOM)',
        body: 'Electrical products imported into Mexico must meet the applicable NOM requirements. NOM certification involves testing a sample at an authorised Mexican laboratory.',
      },
      {
        title: 'Checks after approval',
        body: 'Homologation can include surveillance inspections to confirm that production still meets the requirements.',
      },
    ],
    process: [
      'Tell us about your product and the markets you plan to sell in.',
      'We confirm which approvals apply and send you a scope and quote.',
      'Testing is arranged at an accredited laboratory.',
      'A certification body issues the certificate of conformity.',
      'We file with the authority through a local representative.',
      'You receive the certificate and labelling guidance.',
    ],
    status: 'draft',
    // lastVerified: '2026-11-01',
  },

  // To add Brazil, South Africa and others, copy the block above and edit it.
];

export function findCountry(slug: string | undefined): Country | undefined {
  return countries.find((c) => c.slug === slug);
}
