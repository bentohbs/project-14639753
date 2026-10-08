import SectionTitle from './SectionTitle';

const points = [
  'Consulting and proposals on GMA strategy pre-approvals',
  'Efficient, smooth project execution during approvals',
  'Certificate validity tracking and renewal alerts',
  'Monitoring global regulatory updates and product impact',
  'Investigating acceptability of emerging technologies',
];

export default function About() {
  return (
    <section id="about" className="bg-background-50 py-16 md:py-24 px-4 md:px-10">
      <SectionTitle eyebrow="Who we are" title="About Gaudi Enterprises Global Compliance" id="about" />
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-background-100 rounded-lg overflow-hidden">
        <div className="p-6 md:p-12">
          <p className="text-sm md:text-base text-foreground-800 leading-relaxed" style={{ transform: 'translateY(86.06px)' }}>
            In Brazil, Bracert Certifcacoes is an authorized commercial agent for Bracert Certificate — a <strong>Designated Certification Body (OCD)</strong> authorized by ANATEL and a <strong>Product Certification Body (OCP)</strong> accredited by INMETRO.
          </p>
          <p className="text-sm md:text-base text-foreground-800 leading-relaxed mt-4" style={{ transform: 'translateY(-129.12px)' }}>
            Gaudi Enterprises offers global <strong>type approval</strong> and <strong>regulatory compliance</strong> services to manufacturers, test laboratories, and third-party agencies across the world. We are also the commercial agent for Mexico NOM OCP via SEATSA and Brazil OCD Anatel and Inmetro via Bracert Certificaçãos.
          </p>
          <p className="text-sm md:text-base text-foreground-700 leading-relaxed mt-4">
            Our team of regulatory experts brings more than 20 years of experience in international certification of communication products — across consumer electronics, household appliances, enterprise terminals, industrial logistics, automotive, IoT and marine.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground-800">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-700 shrink-0 mt-0.5"><i className="ri-check-line text-xs" /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-72 lg:h-auto min-h-[320px]">
          <img
            src="https://readdy.ai/api/search-image?query=Tablet%20showing%20a%20certification%20document%20icon%20on%20a%20clean%20white%20desk%20with%20notebook%2C%20coffee%20cup%20and%20pens%2C%20bright%20minimal%20flat%20lay%20photography%2C%20soft%20natural%20light%2C%20calm%20neutral%20tones&width=900&height=700&seq=about-cert-01&orientation=landscape"
            alt="Certification documentation workspace"
            title="GaudiEnt certification services"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}