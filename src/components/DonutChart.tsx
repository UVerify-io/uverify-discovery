interface Segment {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  segments: Segment[];
  size?: number;
  thickness?: number;
}

function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angleDeg: number,
) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function DonutChart({
  segments,
  size = 220,
  thickness = 48,
}: DonutChartProps) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  if (total === 0) return null;

  const cx = size / 2;
  const cy = size / 2;
  const outerR = (size - 8) / 2;
  const innerR = outerR - thickness;
  const GAP = 1.5;

  let currentAngle = 0;

  const paths = segments.map((seg) => {
    const sweep = (seg.value / total) * 360;
    if (sweep < 0.5) return null;
    const startAngle = currentAngle + GAP / 2;
    const endAngle = currentAngle + sweep - GAP / 2;
    currentAngle += sweep;

    const outer1 = polarToCartesian(cx, cy, outerR, startAngle);
    const outer2 = polarToCartesian(cx, cy, outerR, endAngle);
    const inner1 = polarToCartesian(cx, cy, innerR, startAngle);
    const inner2 = polarToCartesian(cx, cy, innerR, endAngle);
    const largeArc = sweep > 180 ? 1 : 0;

    const d = [
      `M ${outer1.x.toFixed(2)} ${outer1.y.toFixed(2)}`,
      `A ${outerR} ${outerR} 0 ${largeArc} 1 ${outer2.x.toFixed(2)} ${outer2.y.toFixed(2)}`,
      `L ${inner2.x.toFixed(2)} ${inner2.y.toFixed(2)}`,
      `A ${innerR} ${innerR} 0 ${largeArc} 0 ${inner1.x.toFixed(2)} ${inner1.y.toFixed(2)}`,
      'Z',
    ].join(' ');

    return (
      <path
        key={seg.label}
        d={d}
        fill={seg.color}
        filter="url(#segment-glow)"
        className="opacity-90 hover:opacity-100 transition-opacity duration-200"
      />
    );
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className="overflow-visible"
    >
      <defs>
        <filter id="segment-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {paths}
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="34"
        fontWeight="bold"
        fontFamily="system-ui"
      >
        {total}
      </text>
    </svg>
  );
}
