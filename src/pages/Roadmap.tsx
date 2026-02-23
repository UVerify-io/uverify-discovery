// Roadmap data is fetched from public/roadmap.json, which is updated twice daily
// by the GitHub Action at .github/workflows/update-roadmap.yml.

import { useEffect, useState } from 'react';

interface RoadmapItem {
  title: string;
  description?: string;
  issueUrl?: string;
}

interface RoadmapColumnProps {
  status: 'done' | 'progress' | 'planned';
  label: string;
  color: string;
  items: RoadmapItem[];
}

interface RoadmapData {
  updatedAt: string;
  columns: RoadmapColumnProps[];
}

const ROADMAP_JSON_URL = '/roadmap.json';

const PROPOSE_URL = 'https://github.com/UVerify-io/uverify-ui/issues/new/choose';

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

// Renders the subset of Markdown that GitHub issue templates produce:
// ### / #### headings, - bullet lists, and plain paragraphs.
// Clipped to a fixed height with a fade-out mask so long bodies don't
// dominate the card — no extra library needed.
function MarkdownClip({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  const pending: string[] = [];

  const flushList = () => {
    if (pending.length === 0) return;
    nodes.push(
      <ul key={nodes.length} className="space-y-0.5 pl-3">
        {pending.splice(0).map((t, i) => (
          <li key={i} className="text-xs text-white/40 leading-snug list-disc list-inside">
            {t}
          </li>
        ))}
      </ul>,
    );
  };

  for (const line of text.split('\n')) {
    const t = line.trim();
    if (!t) { flushList(); continue; }
    if (t.startsWith('#### ')) {
      flushList();
      nodes.push(<p key={nodes.length} className="text-2xs font-semibold text-white/50 uppercase tracking-wide mt-1">{t.slice(5)}</p>);
    } else if (t.startsWith('### ')) {
      flushList();
      nodes.push(<p key={nodes.length} className="text-xs font-semibold text-white/55 mt-1">{t.slice(4)}</p>);
    } else if (t.startsWith('- ')) {
      pending.push(t.slice(2));
    } else {
      flushList();
      nodes.push(<p key={nodes.length} className="text-xs text-white/45 leading-snug">{t}</p>);
    }
  }
  flushList();

  return (
    <div
      className="mt-1 max-h-16 overflow-hidden space-y-0.5"
      style={{
        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
      }}
    >
      {nodes}
    </div>
  );
}

function RoadmapCard({ item, status }: { item: RoadmapItem; status: RoadmapColumnProps['status'] }) {
  const inner = (
    <>
      <StatusDot status={status} />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold leading-snug">{item.title}</p>
        {item.description && (
          <div className="h-xs:hidden">
            <MarkdownClip text={item.description} />
          </div>
        )}
      </div>
      {item.issueUrl && (
        <svg
          className="w-3.5 h-3.5 text-white/20 flex-shrink-0 group-hover:text-white/50 transition-colors duration-200"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      )}
    </>
  );

  const cls =
    'group flex items-start gap-2.5 rounded-xl bg-black/30 border border-white/15 p-3 transition-colors duration-200';

  if (item.issueUrl) {
    return (
      <a
        href={item.issueUrl}
        target="_blank"
        rel="noreferrer"
        className={`${cls} hover:bg-black/50 hover:border-white/25`}
      >
        {inner}
      </a>
    );
  }

  return <div className={`${cls} hover:bg-black/45`}>{inner}</div>;
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
          <RoadmapCard key={item.title} item={item} status={status} />
        ))}
      </div>
    </div>
  );
}

function ColumnSkeleton() {
  return (
    <div className="flex flex-col min-w-0 animate-pulse">
      <div className="h-7 w-28 rounded-full bg-white/10 mb-4" />
      <div className="flex flex-col gap-2.5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-3 h-14" />
        ))}
      </div>
    </div>
  );
}

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

export default function Roadmap() {
  const [columns, setColumns] = useState<RoadmapColumnProps[] | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    fetch(ROADMAP_JSON_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<RoadmapData>;
      })
      .then((data) => {
        setColumns(data.columns);
        setUpdatedAt(data.updatedAt);
      })
      .catch(() => {
        setColumns([]);
      });
  }, []);

  const isLoading = columns === null;

  const formattedDate = updatedAt
    ? new Date(updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : null;

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 flex flex-col items-center py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center h-xs:text-xl h-xs:mb-1">
        Roadmap
      </h1>
      <a
        href="https://github.com/orgs/UVerify-io/projects/1"
        target="_blank"
        rel="noreferrer"
        className="text-white/40 text-xs mb-1 hover:text-white/70 transition-colors h-xs:mb-2"
      >
        View public roadmap on GitHub &rarr;
      </a>
      {formattedDate && (
        <p className="text-white/25 text-xs mb-8 h-xs:mb-4">Updated {formattedDate}</p>
      )}
      {!formattedDate && <div className="mb-8 h-xs:mb-4" />}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
        {isLoading
          ? [1, 2, 3].map((i) => <ColumnSkeleton key={i} />)
          : columns!.map((col) => <Column key={col.status} {...col} />)}
      </div>

      {/* Propose a feature */}
      <a
        href={PROPOSE_URL}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 mt-6 px-5 py-3 rounded-2xl border border-dashed border-white/20 hover:border-white/35 hover:bg-black/30 transition-all duration-300 h-xs:mt-4"
      >
        <span className="text-white/30 group-hover:text-white/60 transition-colors duration-200">
          <PlusCircleIcon />
        </span>
        <span className="text-sm text-white/35 group-hover:text-white/65 transition-colors duration-200 h-xs:text-xs">
          Propose a feature for our roadmap
        </span>
      </a>
    </div>
  );
}
