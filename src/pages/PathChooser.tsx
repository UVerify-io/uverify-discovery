const TerminalIcon = () => (
  <svg
    className="w-8 h-8 h-xs:w-6 h-xs:h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const BuildingIcon = () => (
  <svg
    className="w-8 h-8 h-xs:w-6 h-xs:h-6"
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

const SearchIcon = () => (
  <svg
    className="w-8 h-8 h-xs:w-6 h-xs:h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

interface PathCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  cta: string;
  onClick: () => void;
}

function PathCard({ icon, title, subtitle, cta, onClick }: PathCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center text-center p-6 md:p-8 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/12 hover:border-white/30 backdrop-blur-sm transition-all duration-300 cursor-pointer w-full h-xs:p-4"
    >
      <span className="mb-4 h-xs:mb-2 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-200">
        {icon}
      </span>
      <h2 className="text-lg md:text-xl font-bold mb-2 h-xs:text-base h-xs:mb-1">
        {title}
      </h2>
      <p className="text-sm text-white/55 mb-4 h-xs:text-xs h-xs:mb-2 leading-snug">
        {subtitle}
      </p>
      <span className="text-xs font-semibold uppercase tracking-wider text-white/35 group-hover:text-white/80 transition-colors duration-200">
        {cta} &rarr;
      </span>
    </button>
  );
}

export default function PathChooser() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center h-xs:text-xl h-xs:mb-1">
        What brings you here?
      </h1>
      <p className="text-white/45 mb-8 text-center h-xs:mb-4 h-xs:text-sm">
        We will point you in the right direction.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <PathCard
          icon={<TerminalIcon />}
          title="I'm a developer"
          subtitle="Explore the REST API, TypeScript, Python, and Java SDKs, and the open-source codebase."
          cta="Go to developer docs"
          onClick={() => scrollToSection('developer')}
        />
        <PathCard
          icon={<BuildingIcon />}
          title="I have a product idea"
          subtitle="See how real businesses use UVerify for diplomas, product passports, and more."
          cta="See use cases"
          onClick={() => scrollToSection('use-cases')}
        />
        <PathCard
          icon={<SearchIcon />}
          title="I want to verify something"
          subtitle="Drag, drop, and instantly check if a file or document is authentic."
          cta="Open the app"
          onClick={() => window.open('https://app.uverify.io/verify', '_blank')}
        />
      </div>
    </div>
  );
}
