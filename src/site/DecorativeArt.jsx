import { T } from "./theme";

// Hand-authored abstract line-art, matching the approved "Signal Grid" hero
// direction (hairline navy strokes, hollow node circles, sparing green dots,
// paper background) — no photography, no sourcing, category-1 decorative
// imagery only. Vector, not raster: exact palette, no external asset/host
// dependency, crisp at any size.

// Sparse data/metrics motif — ascending ticks + a connecting node line.
// Used behind "by the numbers" stat and KPI sections.
export const DataGridArt = ({ className = "", style = {} }) => (
  <svg
    viewBox="0 0 400 260"
    fill="none"
    aria-hidden="true"
    className={className}
    style={style}
  >
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const x = 40 + i * 56;
      const h = 30 + i * 24;
      return (
        <rect key={i} x={x} y={230 - h} width="10" height={h} fill={T.signal} opacity={0.07 + i * 0.02} />
      );
    })}
    <polyline
      points="45,205 101,175 157,150 213,118 269,90 325,52"
      stroke={T.signal}
      strokeWidth="1.5"
      opacity="0.5"
    />
    {[[45, 205], [101, 175], [157, 150], [213, 118], [269, 90]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="4" fill={T.bg} stroke={T.signal} strokeWidth="1.5" />
    ))}
    <circle cx="325" cy="52" r="5" fill={T.green} />
    <g opacity="0.35">
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <circle key={`${r}-${c}`} cx={20 + c * 14} cy={20 + r * 14} r="2" fill={T.signal} />
        ))
      )}
    </g>
  </svg>
);

// Very sparse arc + node accent — a quiet corner mark for contact/CTA
// sections, deliberately lighter than the hero art.
export const ContactAccentArt = ({ className = "", style = {} }) => (
  <svg
    viewBox="0 0 360 360"
    fill="none"
    aria-hidden="true"
    className={className}
    style={style}
  >
    <circle cx="380" cy="180" r="150" stroke={T.signal} strokeWidth="1.5" opacity="0.55" />
    <circle cx="380" cy="180" r="210" stroke={T.signal} strokeWidth="1.5" opacity="0.3" />
    <line x1="150" y1="60" x2="250" y2="150" stroke={T.signal} strokeWidth="1.5" opacity="0.5" />
    <circle cx="150" cy="60" r="5" fill={T.bg} stroke={T.signal} strokeWidth="1.5" />
    <circle cx="250" cy="150" r="5" fill={T.bg} stroke={T.signal} strokeWidth="1.5" />
    <circle cx="205" cy="255" r="4" fill={T.green} />
  </svg>
);
