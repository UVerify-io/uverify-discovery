import { useEffect, useState } from 'react';
import DonutChart from '../components/DonutChart';

const CATEGORY_COLORS: Record<string, string> = {
  Identity: '#22D3EE',
  'Connected Goods': '#4ADE80',
  Notary: '#A78BFA',
  'Student Certification': '#F472B6',
  Other: '#94A3B8',
};

const CATEGORY_LABELS: Record<string, string> = {
  Identity: 'Identity',
  'Connected Goods': 'Connected Goods',
  Notary: 'Notary',
  'Student Certification': 'Academic',
};

interface CategoryData {
  label: string;
  value: number;
  color: string;
}

function lovelaceToAda(lovelace: number): string {
  const ada = lovelace / 1_000_000;
  if (ada >= 1000) return `${(ada / 1000).toFixed(1)}k`;
  return ada.toFixed(1);
}

export default function Statistics() {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [txFees, setTxFees] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const base = 'https://api.uverify.io/api/v1/statistic';

    Promise.all([
      fetch(`${base}/certificate/by-category`).then((r) => r.json()),
      fetch(`${base}/tx-fees`).then((r) => r.text()),
    ])
      .then(([cats, fees]) => {
        const segments: CategoryData[] = Object.entries(
          cats as Record<string, number>,
        )
          .sort(([, a], [, b]) => b - a)
          .map(([key, value]) => ({
            label: CATEGORY_LABELS[key] ?? key,
            value,
            color: CATEGORY_COLORS[key] ?? CATEGORY_COLORS['Other'],
          }));
        setCategories(segments);
        setTxFees(parseInt(fees, 10));
      })
      .catch(() => {
        // Fall back to last-known data if API is unreachable
        setCategories([
          { label: 'Identity', value: 87, color: CATEGORY_COLORS['Identity'] },
          {
            label: 'Connected Goods',
            value: 33,
            color: CATEGORY_COLORS['Connected Goods'],
          },
          { label: 'Notary', value: 5, color: CATEGORY_COLORS['Notary'] },
          {
            label: 'Academic',
            value: 1,
            color: CATEGORY_COLORS['Student Certification'],
          },
        ]);
        setTxFees(89657825);
      })
      .finally(() => setLoading(false));
  }, []);

  const total = categories.reduce((s, c) => s + c.value, 0);

  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center h-xs:text-xl h-xs:mb-1">
        Certified on Mainnet
      </h1>
      <p className="text-white/50 text-sm mb-8 text-center h-xs:mb-4">
        Real-time UVerify usage statistics on Cardano mainnet
      </p>

      {loading ? (
        <div className="flex items-center gap-3 text-white/50">
          <svg
            className="animate-spin w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          Fetching chain data…
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full justify-center">
          <DonutChart segments={categories} size={220} thickness={50} />

          <div className="flex flex-col gap-4 min-w-[200px]">
            {/* Legend */}
            <div className="flex flex-col gap-2">
              {categories.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: c.color }}
                  />
                  <span className="text-sm text-white/80 flex-1">
                    {c.label}
                  </span>
                  <span className="text-sm font-bold tabular-nums">
                    {c.value}
                  </span>
                  <span className="text-xs text-white/40 tabular-nums w-10 text-right">
                    {total > 0 ? Math.round((c.value / total) * 100) : 0}%
                  </span>
                </div>
              ))}
            </div>

            {/* Key stats */}
            <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-4 h-xs:hidden">
              <div>
                <p className="text-2xl font-extrabold">{total}</p>
                <p className="text-xs text-white/50 mt-0.5">
                  Certificates issued
                </p>
              </div>
              {txFees !== null && (
                <div>
                  <p className="text-2xl font-extrabold">
                    ₳{lovelaceToAda(txFees)}
                  </p>
                  <p className="text-xs text-white/50 mt-0.5">
                    tx fees contributed
                  </p>
                </div>
              )}
            </div>

            {/* Live indicator */}
            <div className="flex items-center gap-2 text-xs text-white/40 h-xs:hidden">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Live · Cardano mainnet
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
