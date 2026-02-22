const TagIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
  </svg>
);

const LinkIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const ScrollIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
  </svg>
);

const BoxIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.29 7 12 12 20.71 7" />
    <line x1="12" y1="22" x2="12" y2="12" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const PlusCircleIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  tag?: string;
  description: string;
  href: string;
  highlight?: string;
}

function UseCaseCard({
  icon,
  title,
  tag,
  description,
  href,
  highlight,
}: UseCaseCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col p-5 rounded-2xl border border-white/15 bg-black/30 hover:bg-black/45 hover:border-white/25 backdrop-blur-sm transition-all duration-300 cursor-pointer h-xs:p-3"
    >
      <div className="flex items-start justify-between mb-3 h-xs:mb-1">
        <span className="text-white/60 group-hover:text-white/90 transition-colors duration-200">
          {icon}
        </span>
        {tag && (
          <span className="text-2xs font-bold uppercase tracking-wider bg-white/10 rounded-full px-2 py-0.5 text-white/55">
            {tag}
          </span>
        )}
      </div>
      <h3 className="font-bold text-base mb-1.5 h-xs:text-sm h-xs:mb-0.5">
        {title}
      </h3>
      <p className="text-sm text-white/55 leading-snug flex-1 h-xs:text-xs">
        {description}
      </p>
      {highlight && (
        <p className="text-xs text-cyan-400/70 mt-2 h-xs:hidden">{highlight}</p>
      )}
      <span className="text-xs text-white/25 group-hover:text-white/60 mt-3 transition-colors h-xs:hidden">
        Read the docs &rarr;
      </span>
    </a>
  );
}

export default function UseCases() {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 flex flex-col items-center py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center h-xs:text-xl h-xs:mb-1">
        Real-world use cases
      </h1>
      <p className="text-white/45 text-sm mb-8 text-center h-xs:mb-4 h-xs:text-xs">
        The same infrastructure, powering wildly different products.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
        <UseCaseCard
          icon={<TagIcon />}
          title="Pet Necklace"
          tag="GDPR use case"
          description="A lost-pet necklace reveals the owner's phone number only when the NFC chip and blockchain hash are combined. No database, no server, GDPR-safe."
          href="https://docs.uverify.io/use-cases/pet-necklace"
          highlight="Walkthrough on the Cardano community channel"
        />
        <UseCaseCard
          icon={<LinkIcon />}
          title="Connected Goods"
          tag="NFT + NFC"
          description="Physical products ship with a QR-gated certificate. Scan the item, claim ownership, mint your NFT, and build a tamper-proof link tree, all in the browser."
          href="https://docs.uverify.io/use-cases/connected-goods"
          highlight="33 certificates issued on mainnet"
        />
        <UseCaseCard
          icon={<ScrollIcon />}
          title="Academic Credentials"
          description="Universities notarize diplomas via API. Graduates share a permanent URL. Employers verify instantly, no phone call, no account, forever."
          href="https://docs.uverify.io/use-cases/academic-credentials"
          highlight="Batch 500 diplomas for ~4 ADA total"
        />
        <UseCaseCard
          icon={<BoxIcon />}
          title="Product Passports"
          description="Manufacturers record authenticity at the production line. A QR code on the packaging points to an immutable, permanent record, even if the brand disappears."
          href="https://docs.uverify.io/use-cases/product-passports"
        />
        <UseCaseCard
          icon={<ShieldIcon />}
          title="Private Chain Attestations"
          description="Anchor private or consortium blockchain states on Cardano. External auditors verify Merkle proofs without accessing the private chain."
          href="https://docs.uverify.io/use-cases/private-chain-attestations"
        />
        <a
          href="https://docs.uverify.io/use-cases"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center justify-center p-5 rounded-2xl border border-dashed border-white/20 hover:border-white/35 hover:bg-black/30 transition-all duration-300 h-xs:p-3"
        >
          <span className="mb-2 text-white/30 group-hover:text-white/60 transition-colors">
            <PlusCircleIcon />
          </span>
          <span className="text-sm text-white/35 group-hover:text-white/65 text-center transition-colors h-xs:text-xs">
            Explore more use cases in the docs
          </span>
        </a>
      </div>
    </div>
  );
}
