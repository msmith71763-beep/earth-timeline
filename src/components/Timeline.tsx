import type { GeologicalEra } from '../data/eras';

interface TimelineProps {
  eras: GeologicalEra[];
  currentIndex: number;
  onChange: (index: number) => void;
}

export default function Timeline({ eras, currentIndex, onChange }: TimelineProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Era labels */}
        <div className="flex justify-between mb-3 px-1">
          {eras.map((era, i) => (
            <button
              key={era.name}
              onClick={() => onChange(i)}
              className={`text-[10px] font-medium transition-all cursor-pointer ${
                i === currentIndex
                  ? 'text-white scale-110'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              {era.name.slice(0, 4)}
            </button>
          ))}
        </div>

        {/* Slider */}
        <input
          type="range"
          min={0}
          max={eras.length - 1}
          value={currentIndex}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:bg-blue-400
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(96,165,250,0.5)]
            [&::-webkit-slider-thumb]:cursor-pointer"
        />

        {/* Time display */}
        <div className="flex justify-between mt-2 text-xs text-slate-600">
          <span style={{ fontFamily: '"JetBrains Mono", monospace' }}>323 MYA</span>
          <span
            className="text-blue-400 font-semibold"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {eras[currentIndex].startMya} — {eras[currentIndex].endMya} MYA
          </span>
          <span style={{ fontFamily: '"JetBrains Mono", monospace' }}>Present</span>
        </div>
      </div>
    </div>
  );
}
