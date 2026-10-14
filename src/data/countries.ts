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
    regulator: 'CRT (successor to the IFT)',
    headline: 'Radio and safety approval for Mexico',
    metaDescription:
      'Type approval for Mexico: Wi-Fi and Bluetooth homologation (CRT) and NOM safety certification, handled by one team with local partners.',
    intro:
      'Wi-Fi, Bluetooth and other short-range radio devices need homologation before they can be sold in Mexico, and electrical products also need NOM safety certification. We manage both with our local partners, so you deal with one team.',
    keyPoints: [
      {
        title: 'Which radio rules apply',
        body: 'Wi-Fi and Bluetooth products in the 2.4 GHz band, and other short-range devices in the 902\u2013928 MHz band, fall under NOM-208-SCFI-2016. Wi-Fi in the 5 GHz and 6 GHz bands is covered by the newer provision IFT-017-2023, which took effect on 7 November 2025 and requires testing by an accredited laboratory.',
      },
      {
        title: 'The regulator has changed',
        body: 'The IFT was dissolved on 17 October 2025. Its homologation role passed to the CRT (Comisi\u00f3n Reguladora de Telecomunicaciones), which now issues the certificates. IFT certificates stay valid until they expire. Processing was slow while the CRT got started, so we confirm current timing before we quote.',
      },
      {
        title: 'Local representation and testing',
        body: 'The application is filed by a Mexican legal representative. Testing is done at an accredited laboratory in Mexico, and a certification body issues a certificate of conformity that supports the filing.',
      },
      {
        title: 'Labelling',
        body: 'Approved products carry the homologation number on the product label, still in the IFT format for now, and information on the product must be in Spanish. Wi-Fi and Bluetooth user manuals also need a required compliance statement. Labelling rules may change as the CRT issues its own.',
      },
      {
        title: 'Electrical safety (NOM)',
        body: 'Electrical products need NOM safety certification from an accredited Mexican certification body, with sample testing in Mexico. The standard that applies depends on the product, for example NOM-001-SCFI or NOM-019-SCFI. NOM certificates generally need renewing after 12 months.',
      },
      {
        title: 'Validity and follow-up',
        body: 'Radio certificates run for a fixed period or indefinitely, depending on the certificate type. Some require a technical review after two years, and some schemes include surveillance of production.',
      },
    ],
    process: [
      'Tell us about your product and the markets you plan to sell in.',
      'We confirm which approvals apply and send you a scope and quote.',
      'Testing is arranged at an accredited laboratory in Mexico.',
      'A certification body issues the certificate of conformity, and the NOM certificate where it applies.',
      'We file with the CRT through a local representative.',
      'You receive the certificates and labelling guidance.',
    ],
    status: 'verified',
    lastVerified: '2026-10-14',
  },

  // To add Brazil, South Africa and others, copy the block above and edit it.
];

export function findCountry(slug: string | undefined): Country | undefined {
  return countries.find((c) => c.slug === slug);
}
