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
  partnerName?: string; // optional: shown as "In partnership with ..."
  partnerUrl?: string; // optional: link for the partner name
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

  {
    slug: 'brazil',
    name: 'Brazil',
    region: 'Latin America',
    regulator: 'Anatel (radio and telecom) and INMETRO (safety)',
    headline: 'Radio and safety approval for Brazil',
    metaDescription:
      'Type approval for Brazil: Anatel homologation for Wi-Fi, Bluetooth and other radio products, plus INMETRO safety certification, handled with local partners.',
    intro:
      'Any product that sends or receives data by radio, including Wi-Fi and Bluetooth, needs Anatel homologation before it can be sold in Brazil. Some electrical products also need INMETRO safety certification. We manage both with our local partners, so you deal with one team.',
    keyPoints: [
      {
        title: 'Anatel homologation is mandatory',
        body: 'Telecommunications products sold or used in Brazil need a Certificate of Conformity from a Designated Certification Body (OCD). Anatel then approves it and issues the homologation. This covers products using Wi-Fi, Bluetooth, LTE, 5G and other radio technologies.',
      },
      {
        title: 'A local representative is required',
        body: 'Foreign manufacturers cannot apply directly. The application must go through a Brazilian company with a CNPJ, which holds the certificate and is responsible for supply and warranty in Brazil. Applications are made in Portuguese.',
      },
      {
        title: 'Testing is done in Brazil',
        body: 'Testing is carried out at an accredited Brazilian laboratory, and foreign test reports are generally not enough on their own. For wireless products, Anatel testing covers radio performance and EMC. The OCD advises which tests apply to your product.',
      },
      {
        title: 'New filing system: Certifica',
        body: 'On 8 September 2026 Anatel moved certification and homologation to a new platform called Certifica, which replaced the old SCH system. The rules themselves did not change, but the local representative now has to be registered in Anatel\u2019s SEI system and authorise the certification body to act for it. A signed product warranty declaration and a digital signature from the local applicant are also being required.',
      },
      {
        title: 'Wi-Fi band rules',
        body: 'Wi-Fi in the 5 GHz band has to meet dynamic frequency selection (DFS) requirements. In 2026 Anatel also narrowed the 6 GHz range allowed for Wi-Fi devices, so 6 GHz products need checking against the current rules.',
      },
      {
        title: 'Validity and renewal',
        body: 'Radio certificates are time-limited, commonly 24 months, and need renewing. Approval typically takes from about ten weeks to eighteen months, depending on the product and the testing involved.',
      },
      {
        title: 'Safety certification (INMETRO)',
        body: 'Products on Brazil\u2019s compulsory safety lists need certification from an INMETRO-accredited body and carry the INMETRO mark. Anatel also applies its own safety seal to lithium batteries and chargers used with mobile phones. Which rules apply depends on the product.',
      },
    ],
    process: [
      'Tell us about your product and the markets you plan to sell in.',
      'We confirm which approvals apply and send you a scope and quote.',
      'Your Brazilian local representative is set up and registered with Anatel.',
      'Testing is arranged at an accredited laboratory in Brazil.',
      'The certification body issues the Certificate of Conformity, and INMETRO certification where it applies.',
      'Anatel approves the homologation, and you receive the certificates and labelling guidance.',
    ],
    status: 'verified',
    lastVerified: '2026-10-14',
    partnerName: 'Bracert',
    partnerUrl: 'https://www.bracert.com.br/',
  },

  {
    slug: 'south-africa',
    name: 'South Africa',
    region: 'Africa',
    regulator: 'ICASA (radio and telecom) and NRCS (electrical safety)',
    headline: 'Radio and safety approval for South Africa',
    metaDescription:
      'Type approval for South Africa: ICASA approval for Wi-Fi, Bluetooth and other radio products, plus NRCS electrical safety, handled with local partners.',
    intro:
      'Radio and telecom equipment, including Wi-Fi and Bluetooth products, needs ICASA type approval before it can be imported or sold in South Africa. Electrical products also need NRCS safety approval. We manage both with our local partners, so you deal with one team.',
    keyPoints: [
      {
        title: 'ICASA type approval is mandatory',
        body: 'Radio and telecom equipment needs type approval from the Independent Communications Authority of South Africa (ICASA) before it is imported, sold or used. Wi-Fi and Bluetooth devices are included.',
      },
      {
        title: 'A local representative is required',
        body: 'Applications are submitted by a representative in South Africa, and the certificate is issued in the name of that local representative or registered company.',
      },
      {
        title: 'Test reports and samples',
        body: 'ICASA generally bases approval on test reports against the relevant EN standards from an accredited laboratory, covering radio performance, EMC and safety, so separate testing in South Africa is generally not needed. A sample may still be requested.',
      },
      {
        title: 'Application system and timing',
        body: 'Applications go through ICASA\u2019s Automated Spectrum Management System (ASMS). When it runs normally, radio approval typically takes about five to ten weeks. Technical problems in mid-2026 caused a backlog and longer processing times, so we check the current position before we quote.',
      },
      {
        title: 'Approval routes and validity',
        body: 'Equipment already on ICASA\u2019s type-approved register can use a simplified process. Certificates are generally valid indefinitely. The product or its documentation carries the ICASA label.',
      },
      {
        title: 'Electrical safety (NRCS)',
        body: 'Electrical products need a Letter of Authority (LoA) from the National Regulator for Compulsory Specifications (NRCS). It is applied for through a South African agent and is usually needed before customs clearance. A CB test report less than three years old, together with safety test reports, is typically required. The SABS mark is optional.',
      },
      {
        title: 'EMC for other electronics',
        body: 'For radio products, ICASA covers radio and EMC requirements. Other electronic and electrical products entering South Africa may need a SABS EMC certificate of conformity.',
      },
    ],
    process: [
      'Tell us about your product and the markets you plan to sell in.',
      'We confirm which approvals apply and send you a scope and quote.',
      'We arrange the test reports, and a local representative is appointed.',
      'The representative applies to ICASA for type approval, and to the NRCS for the Letter of Authority where it applies.',
      'ICASA reviews the application and issues the type approval certificate.',
      'You receive the certificates and ICASA labelling guidance.',
    ],
    status: 'verified',
    lastVerified: '2026-10-14',
  },

  // To add another country, copy a block above and edit it.
];

export function findCountry(slug: string | undefined): Country | undefined {
  return countries.find((c) => c.slug === slug);
}
