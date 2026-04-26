import type { GeologicalEra } from '../data/eras';

interface InfoPanelProps {
  era: GeologicalEra;
}

export default function InfoPanel({ era }: InfoPanelProps) {
  return (
    <div className="absolute top-6 left-6 max-w-md z-10">
      {/* Era badge */}
      <div
        className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
        style={{
          backgroundColor: `${era.color}33`,
          color: era.color,
          border: `1px solid ${era.color}55`,
          fontFamily: '"JetBrains Mono", monospace',
        }}
      >
        {era.period} • {era.startMya}–{era.endMya} MYA
      </div>

      {/* Era name */}
      <h1
        className="text-5xl font-bold text-white mb-3"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        {era.name}
      </h1>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
        {era.description}
      </p>

      {/* Climate */}
      <div className="mb-4">
        <h3
          className="text-xs text-slate-500 uppercase tracking-widest mb-1"
          style={{ fontFamily: '"JetBrains Mono", monospace' }}
        >
          Climate
        </h3>
        <p className="text-sm text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>
          {era.climate}
        </p>
      </div>

      {/* Key Events */}
      <div>
        <h3
          className="text-xs text-slate-500 uppercase tracking-widest mb-2"
          style={{ fontFamily: '"JetBrains Mono", monospace' }}
        >
          Key Events
        </h3>
        <ul className="space-y-1">
          {era.keyEvents.map((event, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: era.color }} />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>{event}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
