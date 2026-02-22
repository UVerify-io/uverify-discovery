// Roadmap data sourced from https://github.com/orgs/UVerify-io/projects/1
// Update as new items land on the board.

interface RoadmapItem {
  title: string;
  description?: string;
}

interface RoadmapColumnProps {
  status: 'done' | 'progress' | 'planned';
  label: string;
  color: string;
  items: RoadmapItem[];
}

const COLUMNS: RoadmapColumnProps[] = [
  {
    status: 'done',
    label: 'Shipped',
    color: 'bg-green-400/20 border-green-400/30 text-green-300',
    items: [
      { title: 'Open source dApp' },
      { title: 'Templating engine', description: 'Custom certificate UIs with full branding control' },
      { title: 'API documentation', description: 'Public REST API: no key, no limits' },
      { title: 'Library endpoints', description: 'Proxy contract upgrades and deployment management' },
      { title: 'Privacy Policy & Terms of Use' },
      { title: 'Cost calculation docs', description: 'Transparent fee breakdown and batch sizing guide' },
    ],
  },
  {
    status: 'progress',
    label: 'In Progress',
    color: 'bg-yellow-400/20 border-yellow-400/30 text-yellow-300',
    items: [
      {
        title: 'UI duplicate submission guard',
        description: 'Prevents accidental double-notarization of identical hashes',
      },
      {
        title: 'External template whitelisting',
        description: 'Download and serve community-built UI templates securely',
      },
    ],
  },
  {
    status: 'planned',
    label: 'Coming Next',
    color: 'bg-blue-400/20 border-blue-400/30 text-blue-300',
    items: [
      { title: 'Admin UI', description: 'Dashboard for bootstrap datum operators' },
      {
        title: 'Official SDKs v1',
        description: 'Stable, versioned SDK releases for Python, TypeScript, and Java',
      },
      {
        title: 'Advanced template examples',
        description: 'Data availability patterns, external data sources, and new UI designs',
      },
      { title: 'Multi-language support', description: 'Localised landing page and certificate templates' },
    ],
  },
];

function StatusDot({ status }: { status: RoadmapColumnProps['status'] }) {
  if (status === 'done')
    return (
      <svg className="w-4 h-4 text-green-400 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
        <circle cx="8" cy="8" r="8" opacity="0.2" />
        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (status === 'progress')
    return (
      <span className="relative flex h-2 w-2 flex-shrink-0 mt-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
      </span>
    );
  return (
    <span className="h-2 w-2 rounded-full border border-white/30 flex-shrink-0 mt-1" />
  );
}

function Column({ status, label, color, items }: RoadmapColumnProps) {
  return (
    <div className="flex flex-col min-w-0">
      <div
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border mb-4 self-start ${color}`}
      >
        {label}
      </div>
      <div className="flex flex-col gap-2.5">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-2.5 rounded-xl bg-black/30 border border-white/15 p-3 hover:bg-black/45 transition-colors duration-200"
          >
            <StatusDot status={status} />
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-snug">{item.title}</p>
              {item.description && (
                <p className="text-xs text-white/45 mt-0.5 leading-snug h-xs:hidden">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 flex flex-col items-center py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center h-xs:text-xl h-xs:mb-1">
        Roadmap
      </h1>
      <a
        href="https://github.com/orgs/UVerify-io/projects/1"
        target="_blank"
        rel="noreferrer"
        className="text-white/40 text-xs mb-8 hover:text-white/70 transition-colors h-xs:mb-4"
      >
        View public roadmap on GitHub &rarr;
      </a>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
        {COLUMNS.map((col) => (
          <Column key={col.status} {...col} />
        ))}
      </div>
    </div>
  );
}
