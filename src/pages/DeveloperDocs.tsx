const BoltIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const LayersIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const ServerIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const DiscordIcon = () => (
  <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.04.033.054a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
      clipRule="evenodd"
    />
  </svg>
);

interface DevCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  href: string;
  cta: string;
}

function DevCard({ icon, title, items, href, cta }: DevCardProps) {
  return (
    <div className="flex flex-col p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm h-xs:p-4">
      <span className="mb-4 h-xs:mb-2 text-white/60">{icon}</span>
      <h3 className="font-bold text-lg mb-3 h-xs:text-base h-xs:mb-2">
        {title}
      </h3>
      <ul className="flex-1 space-y-1.5 mb-5 h-xs:mb-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-white/60 h-xs:text-xs"
          >
            <span className="w-1 h-1 rounded-full bg-white/30 mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-xs font-semibold uppercase tracking-wider text-white/40 hover:text-white/80 transition-colors duration-200"
      >
        {cta} &rarr;
      </a>
    </div>
  );
}

export default function DeveloperDocs() {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 flex flex-col items-center py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center h-xs:text-xl h-xs:mb-1">
        Build on UVerify
      </h1>
      <p className="text-white/45 text-sm mb-8 text-center h-xs:mb-4 h-xs:text-xs">
        Open source. No API key. No rate limits. Start in minutes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-6">
        <DevCard
          icon={<BoltIcon />}
          title="REST API"
          items={[
            'No API key or account needed',
            'Build, sign, and submit transactions',
            'Verify any hash instantly',
            'Statistics and analytics endpoints',
          ]}
          href="https://docs.uverify.io/api-docs"
          cta="API reference"
        />
        <DevCard
          icon={<LayersIcon />}
          title="SDKs"
          items={[
            'TypeScript / JavaScript',
            'Python',
            'Java',
            'CLI: npx @uverify/cli init',
          ]}
          href="https://docs.uverify.io/sdk"
          cta="SDK docs"
        />
        <DevCard
          icon={<ServerIcon />}
          title="Self-Host"
          items={[
            'Backend: open-source NestJS',
            'Frontend: open-source React',
            'Docker + docker-compose setup',
            'Full environment variable guide',
          ]}
          href="https://docs.uverify.io/self-hosting"
          cta="Self-hosting guide"
        />
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="https://docs.uverify.io"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 text-sm font-semibold transition-all duration-200"
        >
          Read the docs
        </a>
        <a
          href="https://github.com/UVerify-io"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/12 text-sm font-semibold transition-all duration-200 text-white/75"
        >
          <GithubIcon />
          GitHub
        </a>
        <a
          href="https://discord.gg/Dvqkynn6xc"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-purple-400/25 bg-purple-500/10 hover:bg-purple-500/20 text-sm font-semibold transition-all duration-200 text-purple-300/90"
        >
          <DiscordIcon />
          Ask on Discord
        </a>
      </div>
    </div>
  );
}
