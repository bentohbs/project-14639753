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
  zh?: Partial<CountryText>; // Simplified Chinese version of the text fields
}
 
// The text fields that are translated. Anything missing in "zh" falls back to English.
export interface CountryText {
  name: string;
  region: string;
  regulator: string;
  headline: string;
  metaDescription: string;
  intro: string;
  keyPoints: KeyPoint[];
  process: string[];
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
        body: 'Electrical products need NOM safety certification from an accredited Mexican certification body, with sample testing in Mexico. The standard that applies depends on the product, for example NOM-001-SCFI or NOM-019-SCFI. NOM certificates are valid for a set period, from one to three years depending on the product category, and need renewing.',
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
    zh: {
      "name": "墨西哥",
      "region": "拉丁美洲",
      "regulator": "CRT（原 IFT 的继任机构）",
      "headline": "墨西哥无线电与安全认证",
      "metaDescription": "墨西哥型式批准：Wi-Fi 和蓝牙产品的 CRT 认证以及 NOM 安全认证，由我们与本地合作伙伴一站式办理。",
      "intro": "Wi-Fi、蓝牙及其他短距离无线电设备须先取得认证，方可在墨西哥销售；电气产品还须通过 NOM 安全认证。我们与本地合作伙伴共同办理，您只需对接一个团队。",
      "keyPoints": [
        {
          "title": "适用的无线电规定",
          "body": "2.4 GHz 频段的 Wi-Fi 和蓝牙产品，以及 902–928 MHz 频段的其他短距离设备，适用 NOM-208-SCFI-2016。5 GHz 和 6 GHz 频段的 Wi-Fi 设备适用较新的 IFT-017-2023，该规定自 2025 年 11 月 7 日起生效，并要求由认可实验室进行测试。"
        },
        {
          "title": "监管机构已变更",
          "body": "IFT 已于 2025 年 10 月 17 日解散，其认证职能移交给 CRT（Comisión Reguladora de Telecomunicaciones，电信监管委员会），现由 CRT 签发证书。IFT 证书在有效期内继续有效。CRT 成立初期审批处理较慢，因此我们会在报价前确认当前的办理时效。"
        },
        {
          "title": "本地代表与测试",
          "body": "申请须由墨西哥法律代表提交。测试在墨西哥的认可实验室进行，并由认证机构出具符合性证书，作为申报依据。"
        },
        {
          "title": "标识要求",
          "body": "获批产品须在产品标签上标注认证编号（目前仍沿用 IFT 格式），产品上的信息须使用西班牙语。Wi-Fi 和蓝牙产品的用户手册还须包含规定的合规声明。随着 CRT 发布自己的规则，标识要求可能会调整。"
        },
        {
          "title": "电气安全（NOM）",
          "body": "电气产品须通过墨西哥认可认证机构的 NOM 安全认证，并在墨西哥进行样品测试。适用的标准因产品而异，例如 NOM-001-SCFI 或 NOM-019-SCFI。NOM 证书有固定有效期，按产品类别为一至三年，到期须续期。"
        },
        {
          "title": "有效期与后续要求",
          "body": "无线电证书的有效期因证书类型而异，有的为固定期限，有的长期有效。部分证书需在两年后进行技术复审，部分认证方案还包括对生产的监督检查。"
        }
      ],
      "process": [
        "告诉我们您的产品以及计划销售的市场。",
        "我们确认适用的认证要求，并向您提供服务范围和报价。",
        "在墨西哥的认可实验室安排测试。",
        "认证机构出具符合性证书，适用时同时出具 NOM 证书。",
        "我们通过本地代表向 CRT 提交申请。",
        "您将收到证书及标识指引。"
      ]
    },
    status: 'verified',
    lastVerified: '2026-10-14',
    partnerName: 'SEATSA',
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
    zh: {
      "name": "巴西",
      "region": "拉丁美洲",
      "regulator": "Anatel（无线电与电信）和 INMETRO（安全）",
      "headline": "巴西无线电与安全认证",
      "metaDescription": "巴西型式批准：Wi-Fi、蓝牙等无线产品的 Anatel 认证，以及 INMETRO 安全认证，由我们与本地合作伙伴办理。",
      "intro": "任何通过无线电收发数据的产品（包括 Wi-Fi 和蓝牙）都必须取得 Anatel 认证，方可在巴西销售；部分电气产品还须通过 INMETRO 安全认证。我们与本地合作伙伴共同办理，您只需对接一个团队。",
      "keyPoints": [
        {
          "title": "Anatel 认证为强制要求",
          "body": "在巴西销售或使用的电信产品，须取得指定认证机构（OCD）出具的符合性证书，再由 Anatel 批准并签发认证。适用于使用 Wi-Fi、蓝牙、LTE、5G 等无线技术的产品。"
        },
        {
          "title": "须有本地代表",
          "body": "境外制造商不能直接申请。申请须通过持有 CNPJ（巴西企业税号）的巴西公司办理，该公司持有证书，并负责在巴西境内的供货与保修。申请资料须使用葡萄牙语。"
        },
        {
          "title": "须在巴西测试",
          "body": "测试须在巴西的认可实验室进行，境外测试报告通常不能单独作为依据。对于无线产品，Anatel 的测试涵盖射频性能和 EMC。具体需要哪些测试，由 OCD 根据您的产品给出建议。"
        },
        {
          "title": "新申报系统：Certifica",
          "body": "2026 年 9 月 8 日，Anatel 将认证流程迁移至名为 Certifica 的新平台，取代了原有的 SCH 系统。规则本身没有变化，但本地代表现在须在 Anatel 的 SEI 系统中完成注册，并授权认证机构代其办理。本地申请人还须提交签署的产品保修声明和数字签名。"
        },
        {
          "title": "Wi-Fi 频段规定",
          "body": "5 GHz 频段的 Wi-Fi 须满足动态频率选择（DFS）要求。2026 年 Anatel 还收窄了 Wi-Fi 设备可使用的 6 GHz 范围，因此 6 GHz 产品须对照现行规定核查。"
        },
        {
          "title": "有效期与续期",
          "body": "无线电证书有时效限制，通常为 24 个月，到期须续期。审批周期通常在约十周至十八个月之间，取决于产品和所涉测试。"
        },
        {
          "title": "安全认证（INMETRO）",
          "body": "列入巴西强制性安全清单的产品，须由 INMETRO 认可的机构认证，并标注 INMETRO 标志。此外，Anatel 对手机配套的锂电池和充电器另行规定了安全标志。具体适用哪些规则，取决于产品。"
        }
      ],
      "process": [
        "告诉我们您的产品以及计划销售的市场。",
        "我们确认适用的认证要求，并向您提供服务范围和报价。",
        "为您设立巴西本地代表，并在 Anatel 完成注册。",
        "在巴西的认可实验室安排测试。",
        "认证机构出具符合性证书，适用时同时办理 INMETRO 认证。",
        "Anatel 批准认证，您将收到证书及标识指引。"
      ]
    },
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
    zh: {
      "name": "南非",
      "region": "非洲",
      "regulator": "ICASA（无线电与电信）和 NRCS（电气安全）",
      "headline": "南非无线电与安全认证",
      "metaDescription": "南非型式批准：Wi-Fi、蓝牙等无线产品的 ICASA 认证，以及 NRCS 电气安全，由我们与本地合作伙伴办理。",
      "intro": "无线电和电信设备（包括 Wi-Fi 和蓝牙产品）须取得 ICASA 型式批准，方可进口或在南非销售；电气产品还须通过 NRCS 安全审批。我们与本地合作伙伴共同办理，您只需对接一个团队。",
      "keyPoints": [
        {
          "title": "ICASA 型式批准为强制要求",
          "body": "无线电和电信设备在进口、销售或使用前，须取得南非独立通信管理局（ICASA）的型式批准，Wi-Fi 和蓝牙设备也包括在内。"
        },
        {
          "title": "须有本地代表",
          "body": "申请须由南非境内的代表提交，证书以该本地代表或注册公司的名义签发。"
        },
        {
          "title": "测试报告与样品",
          "body": "ICASA 通常依据认可实验室出具的、符合相关 EN 标准的测试报告（涵盖射频性能、EMC 和安全）进行审批，因此一般无需在南非另行测试。ICASA 仍可能要求提供样品。"
        },
        {
          "title": "申请系统与时效",
          "body": "申请通过 ICASA 的自动化频谱管理系统（ASMS）提交。系统运行正常时，无线电审批通常需要约五至十周。2026 年年中的技术故障造成了积压和处理延误，因此我们会在报价前核实当前情况。"
        },
        {
          "title": "审批途径与有效期",
          "body": "已列入 ICASA 型式批准名录的设备可走简化流程。证书通常长期有效。产品或其文件须带有 ICASA 标签。"
        },
        {
          "title": "电气安全（NRCS）",
          "body": "电气产品须取得国家强制性规范监管局（NRCS）的授权函（LoA），须通过南非代理人申请，通常在清关前需要。通常需要提供有效期不超过三年的 CB 测试报告，以及安全测试报告。SABS 标志为自愿申请。"
        },
        {
          "title": "其他电子产品的 EMC",
          "body": "对无线电产品，ICASA 同时涵盖无线电和 EMC 要求。其他进入南非的电子电气产品，可能需要 SABS 的 EMC 符合性证书。"
        }
      ],
      "process": [
        "告诉我们您的产品以及计划销售的市场。",
        "我们确认适用的认证要求，并向您提供服务范围和报价。",
        "我们安排测试报告，并指定南非本地代表。",
        "代表向 ICASA 申请型式批准，适用时向 NRCS 申请授权函。",
        "ICASA 审核申请并签发型式批准证书。",
        "您将收到证书及 ICASA 标识指引。"
      ]
    },
    status: 'verified',
    lastVerified: '2026-10-14',
  },
 
  // To add another country, copy a block above and edit it.
];
 
export function getCountryText(country: Country, lang: string): CountryText {
  const zh = lang && lang.startsWith('zh') ? country.zh : undefined;
  return {
    name: zh?.name ?? country.name,
    region: zh?.region ?? country.region,
    regulator: zh?.regulator ?? country.regulator,
    headline: zh?.headline ?? country.headline,
    metaDescription: zh?.metaDescription ?? country.metaDescription,
    intro: zh?.intro ?? country.intro,
    keyPoints: zh?.keyPoints ?? country.keyPoints,
    process: zh?.process ?? country.process,
  };
}
 
export function findCountry(slug: string | undefined): Country | undefined {
  return countries.find((c) => c.slug === slug);
}
 

















Claude finished the response
