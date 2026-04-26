import { Globe } from 'lucide-react';

interface LoadingScreenProps {
  progress: number;
}

function StarField() {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: 0.2 + Math.random() * 0.5,
    delay: `${Math.random() * 2}s`,
    duration: `${2 + Math.random() * 3}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      data-testid="loading-screen"
      style={{ backgroundColor: '#030014' }}
    >
      <StarField />

      <div className="relative text-center">
        {/* Spinning rings */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div
            className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin"
            style={{ animationDuration: '3s' }}
          />
          <div
            className="absolute inset-2 rounded-full border-2 border-blue-400/40 animate-spin"
            style={{ animationDuration: '4s', animationDirection: 'reverse' }}
          />
          <div
            className="absolute inset-4 rounded-full border-2 border-blue-300/50 animate-spin"
            style={{ animationDuration: '5s' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe className="w-16 h-16 text-blue-400 animate-pulse" />
          </div>
        </div>

        <h1
          className="text-4xl font-bold text-white mb-4"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Earth Timeline
        </h1>

        <p className="text-slate-400 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          300 Million Years of History
        </p>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400 animate-loading-bar"
          />
        </div>

        <p
          className="text-sm text-slate-500 mt-4"
          style={{ fontFamily: '"JetBrains Mono", monospace' }}
        >
          Loading geological data...
        </p>
      </div>
    </div>
  );
}
