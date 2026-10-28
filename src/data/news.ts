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
  zh?: { title?: string; summary?: string; whatToDo?: string }; // Simplified Chinese text
}

export function getNewsText(item: NewsItem, lang: string) {
  const zh = lang && lang.startsWith('zh') ? item.zh : undefined;
  return {
    title: zh?.title ?? item.title,
    summary: zh?.summary ?? item.summary,
    whatToDo: zh?.whatToDo ?? item.whatToDo,
  };
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
    zh: {
      "title": "南非：系统故障导致 ICASA 型式批准延误",
      "summary": "ICASA 报告其自动化频谱管理系统（ASMS）出现技术故障，部分型式批准申请被延误并形成积压，审批时间随之延长。",
      "whatToDo": "如果您在南非有上市日期，请为型式批准预留更多时间，并告知我们您的时间安排。报价前，我们会核实当前的处理情况。"
    },
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
    zh: {
      "title": "南非：3.8 GHz 和 6 GHz 频段共享使用的新规则",
      "summary": "2026 年 5 月 22 日，ICASA 发布了《2026 年创新频谱使用规定》，涵盖 3800–4200 MHz 及部分 6 GHz 频段。在这些频段使用的设备须通过型式批准，由注册专业人员安装，并标注带有 ICASA-ID 的标签。",
      "whatToDo": "如果您的产品使用这些频段，请在规划南非上市前向我们确认是否在适用范围内。"
    },
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
    zh: {
      "title": "巴西：Anatel 将认证迁移至新的 Certifica 系统",
      "summary": "2026 年 9 月 8 日，Anatel 将电信产品的认证和批准流程迁移至名为 Certifica 的新平台，取代原有的 SCH 系统。认证规则本身没有变化。",
      "whatToDo": "如果您在巴西有正在办理或即将到期续期的认证，请确认您的本地代表已在 Anatel 的 SEI 系统中完成注册，并已授权认证机构代为办理。新的申请还须由本地申请人提供签署的产品保修声明和数字签名。"
    },
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
