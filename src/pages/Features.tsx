const BuildingIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <line x1="10" y1="6" x2="14" y2="6" />
    <line x1="10" y1="10" x2="14" y2="10" />
    <line x1="10" y1="14" x2="14" y2="14" />
    <line x1="10" y1="18" x2="14" y2="18" />
  </svg>
);

const CodeIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  accent: string;
  items: string[];
}

function FeatureCard({ icon, title, accent, items }: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col p-6 rounded-2xl border bg-black/25 backdrop-blur-sm h-xs:p-4 ${accent}`}
    >
      <span className="mb-4 h-xs:mb-2 text-white/60">{icon}</span>
      <h3 className="font-bold text-lg mb-4 h-xs:text-base h-xs:mb-2">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-white/65 h-xs:text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white/35 mt-1.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Features() {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 flex flex-col items-center py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center h-xs:text-xl h-xs:mb-1">
        Why UVerify?
      </h1>
      <p className="text-white/45 text-sm mb-8 text-center h-xs:mb-4 h-xs:text-xs">
        A platform anyone can build on, and deploy from.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <FeatureCard
          icon={<BuildingIcon />}
          title="Enterprise-Ready"
          accent="border-purple-400/20"
          items={[
            'White-label your own certificate UI with full branding control',
            'Build on UVerify as a platform and earn fees when others use your templates',
            'Fee sponsorship available for eligible organizations',
            'Batch issuance: 500 diplomas for ~4 ADA total',
            'Built on Cardano: open, auditable, and permanent',
          ]}
        />
        <FeatureCard
          icon={<CodeIcon />}
          title="Developer-Friendly"
          accent="border-cyan-400/20"
          items={[
            'Public REST API: no key, no rate limits',
            'SDKs for TypeScript, Python, and Java',
            'Custom UI templating engine for any certificate design',
            'Fully open source: self-host the entire stack',
          ]}
        />
      </div>

      <a
        href="https://docs.uverify.io"
        target="_blank"
        rel="noreferrer"
        className="mt-6 text-sm text-white/40 hover:text-white/80 transition-colors duration-200 underline underline-offset-4 h-xs:mt-3"
      >
        Full documentation at docs.uverify.io &rarr;
      </a>
    </div>
  );
}
