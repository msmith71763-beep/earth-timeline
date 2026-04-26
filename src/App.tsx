import { useState, useEffect, useMemo, Suspense } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Globe from './components/Globe';
import Timeline from './components/Timeline';
import InfoPanel from './components/InfoPanel';
import { GEOLOGICAL_ERAS } from './data/eras';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentEraIndex, setCurrentEraIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentEra = useMemo(() => GEOLOGICAL_ERAS[currentEraIndex], [currentEraIndex]);

  useEffect(() => {
    // Simulate loading geological data
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return p + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: '#030014' }}>
      {/* 3D Globe */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <Globe era={currentEra} />
        </Suspense>
      </div>

      {/* Info Panel */}
      <InfoPanel era={currentEra} />

      {/* Timeline Slider */}
      <Timeline
        eras={GEOLOGICAL_ERAS}
        currentIndex={currentEraIndex}
        onChange={setCurrentEraIndex}
      />
    </div>
  );
}
