import { useState } from 'react';

interface Segment {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  segments: Segment[];
  size?: number;
  thickness?: number;
  hoveredLabel?: string | null;
  onHoverChange?: (label: string | null) => void;
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
  hoveredLabel,
  onHoverChange,
}: DonutChartProps) {
  const [internalHovered, setInternalHovered] = useState<string | null>(null);
  const activeLabel = hoveredLabel !== undefined ? hoveredLabel : internalHovered;

  const handleEnter = (label: string) => {
    setInternalHovered(label);
    onHoverChange?.(label);
  };
  const handleLeave = () => {
    setInternalHovered(null);
    onHoverChange?.(null);
  };

  const total = segments.reduce((sum, s) => sum + s.value, 0);
  if (total === 0) return null;

  const cx = size / 2;
  const cy = size / 2;
  const outerR = (size - 12) / 2;
  const innerR = outerR - thickness;
  const GAP = 2;

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

    const isHovered = activeLabel === seg.label;

    return (
      <path
        key={seg.label}
        d={d}
        fill={seg.color}
        fillOpacity={isHovered ? 0.28 : 0.04}
        stroke={seg.color}
        strokeWidth={isHovered ? 1.5 : 0.8}
        strokeOpacity={isHovered ? 1 : 0.85}
        onMouseEnter={() => handleEnter(seg.label)}
        onMouseLeave={handleLeave}
        style={{
          filter: isHovered
            ? `drop-shadow(0 0 8px ${seg.color}) drop-shadow(0 0 18px ${seg.color}99)`
            : `drop-shadow(0 0 3px ${seg.color}88)`,
          transition:
            'filter 0.25s ease, fill-opacity 0.25s ease, stroke-width 0.2s ease',
          cursor: 'pointer',
        }}
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
      {/* Background plate */}
      <circle
        cx={cx}
        cy={cy}
        r={outerR + 1}
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1"
      />

      {paths}

      {/* Inner hole */}
      <circle
        cx={cx}
        cy={cy}
        r={innerR - 1}
        fill="transparent"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
      />

      {/* Center text */}
      <text
        x={cx}
        y={cy - 8}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="30"
        fontWeight="bold"
        fontFamily="system-ui"
        style={{ pointerEvents: 'none' }}
      >
        {total}
      </text>
      <text
        x={cx}
        y={cy + 16}
        textAnchor="middle"
        dominantBaseline="central"
        fill="rgba(255,255,255,0.35)"
        fontSize="10"
        fontFamily="system-ui"
        style={{ pointerEvents: 'none' }}
      >
        TOTAL
      </text>
    </svg>
  );
}
